import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  postcode: string;
  preferredDate: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;

function validate(form: FormState): string | null {
  if (!form.name.trim()) return 'Please enter your name.';
  if (!EMAIL_PATTERN.test(form.email.trim())) return 'Please enter a valid email address.';
  if (!PHONE_PATTERN.test(form.phone.trim())) return 'Please enter a valid phone number.';
  if (!form.service) return 'Please choose the service you need.';
  return null;
}

export function EnquiryForm({
  defaultService = '',
  defaultMessage = '',
  stacked = false,
}: {
  defaultService?: string;
  defaultMessage?: string;
  stacked?: boolean;
}) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    postcode: '',
    preferredDate: '',
    message: defaultMessage,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setError(null);

    const { error: insertError } = await supabase.from('enquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service,
      postcode: form.postcode.trim().toUpperCase() || null,
      preferred_date: form.preferredDate || null,
      message: form.message.trim() || null,
    });

    if (insertError) {
      setError('We could not send your request just now. Please try again or call us directly.');
      setStatus('error');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', service: '', postcode: '', preferredDate: '', message: '' });
  };

  const span = stacked ? '' : 'sm:col-span-2';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-brand-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-xl text-brand-800">Thank you, your request is in</h3>
        <p className="max-w-md font-body text-sm leading-[1.6] text-ink/75">
          We will confirm your appointment by phone or email within one working day.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-primary mt-2">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`grid gap-5 ${stacked ? '' : 'sm:grid-cols-2'}`}>
      <label className="flex flex-col gap-2 font-body text-sm font-medium text-ink">
        Full name
        <input className="field" value={form.name} onChange={update('name')} autoComplete="name" required />
      </label>
      <label className="flex flex-col gap-2 font-body text-sm font-medium text-ink">
        Email address
        <input className="field" type="email" value={form.email} onChange={update('email')} autoComplete="email" required />
      </label>
      <label className="flex flex-col gap-2 font-body text-sm font-medium text-ink">
        Phone number
        <input className="field" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" required />
      </label>
      <label className="flex flex-col gap-2 font-body text-sm font-medium text-ink">
        Property postcode
        <input className="field uppercase" value={form.postcode} onChange={update('postcode')} placeholder="E1 6AN" />
      </label>
      <label className={`flex flex-col gap-2 font-body text-sm font-medium text-ink ${span}`}>
        Service required
        <select className="field" value={form.service} onChange={update('service')} required>
          <option value="">Choose a service</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 font-body text-sm font-medium text-ink">
        Preferred date (optional)
        <input className="field" type="date" value={form.preferredDate} onChange={update('preferredDate')} min={new Date().toISOString().slice(0, 10)} />
      </label>
      <label className={`flex flex-col gap-2 font-body text-sm font-medium text-ink ${span}`}>
        Anything we should know? (optional)
        <textarea className="field min-h-[120px] resize-y" value={form.message} onChange={update('message')} maxLength={2000} placeholder="Number of bedrooms, access arrangements, tenancy start date..." />
      </label>

      {status === 'error' && error && (
        <div role="alert" className={`flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 font-body text-sm text-red-800 ${span}`}>
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className={`flex flex-col gap-3 ${span} sm:flex-row sm:items-center sm:justify-between`}>
        <p className="font-body text-xs leading-[1.6] text-ink/55">We only use your details to respond to this enquiry.</p>
        <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            'Request my booking'
          )}
        </button>
      </div>
    </form>
  );
}
