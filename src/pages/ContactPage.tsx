import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageHero } from '@/components/PageHero';
import { findService } from '@/data/services';
import { SITE } from '@/lib/site';
import { useLocation } from '@/lib/router';

const CONTACT_IMAGE = 'https://images.pexels.com/photos/7359566/pexels-photo-7359566.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function ContactPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const requested = params.get('service') ?? '';
  const selectedPrice = params.get('price') ?? '';
  const selectedService = findService(requested);
  const defaultService = selectedService?.name ?? '';
  const defaultMessage = selectedPrice ? `I would like to book: ${selectedPrice}.` : '';

  const channels = [
    { icon: Phone, label: 'Call us', value: SITE.phoneDisplay, href: SITE.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Message us', href: SITE.whatsappHref },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Book and contact"
        title="Book your compliance inspection"
        intro="Send us your details and the service you need. We will confirm an appointment that suits your tenancy."
        image={CONTACT_IMAGE}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-ink">Speak to our team</h2>
              <p className="mt-3 font-body text-sm leading-[1.6] text-ink/70">Prefer to talk it through? Reach us on any channel below.</p>
            </div>

            <ul className="space-y-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-body text-xs font-medium uppercase tracking-[0.12em] text-ink/50">{channel.label}</span>
                      <span className="break-all font-heading text-sm font-bold text-ink">{channel.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-4 rounded-2xl bg-mist p-6 font-body text-sm text-ink/75">
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                {SITE.hours}
              </p>
              <a
                href={SITE.addressHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-brand-700"
                aria-label="Open our address in Google Maps"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                <span className="flex flex-col">
                  {SITE.addressLines.map((line) => <span key={line}>{line}</span>)}
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-8 shadow-lift sm:p-10">
            <h2 className="mb-2 text-2xl text-ink">Request a booking</h2>
            <p className="mb-8 font-body text-sm leading-[1.6] text-ink/70">Fill in the details below and we will confirm your appointment.</p>
            <EnquiryForm key={`${defaultService}-${selectedPrice}`} defaultService={defaultService} defaultMessage={defaultMessage} />
          </div>
        </div>
      </section>
    </>
  );
}
