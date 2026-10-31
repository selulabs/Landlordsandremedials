import { ArrowRight, CalendarCheck, CheckCircle2, ClipboardCheck, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';
import { Link } from '@/components/Link';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/data/services';
import { SITE } from '@/lib/site';

const HERO_IMAGE = 'https://images.pexels.com/photos/26898875/pexels-photo-26898875.jpeg?auto=compress&cs=tinysrgb&w=1920';
const CONSULTANT_IMAGE = 'https://images.pexels.com/photos/8730898/pexels-photo-8730898.jpeg?auto=compress&cs=tinysrgb&w=1200';
const KEYS_IMAGE = 'https://images.pexels.com/photos/31651009/pexels-photo-31651009.jpeg?auto=compress&cs=tinysrgb&w=1920';

const STATS = [
  { value: '24h', label: 'Certificates issued within a day' },
  { value: '100%', label: 'Registered and insured engineers' },
  { value: '7 days', label: 'Appointments across London' },
];

const STEPS = [
  { icon: CalendarCheck, title: 'Book online', text: 'Choose your service and a time that suits your tenancy.' },
  { icon: ClipboardCheck, title: 'We inspect', text: 'A qualified engineer visits, tests and records everything on site.' },
  { icon: ShieldCheck, title: 'Certificate issued', text: 'Receive your compliance certificate and any remedial advice.' },
];

const REASONS = [
  'Fully qualified and registered engineers',
  'Clear pricing with no hidden call-out fees',
  'Certificates shared digitally with you and your agent',
  'Remedial work handled by the same team',
];

export function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink text-white">
        <img src={HERO_IMAGE} alt="Terraced houses on a London street" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/95 via-brand-900/75 to-brand-900/30" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-body text-xs font-medium text-white backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-brand-400 text-brand-400" />
              Trusted by landlords across Central and East London
            </span>
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl">Landlord compliance, done properly.</h1>
            <p className="mt-6 max-w-xl font-body text-base leading-[1.6] text-white/85 sm:text-lg">
              EICR, gas safety, EPC, fire risk and more. Certified by qualified engineers, delivered on time, so you can let with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-accent">
                Book an inspection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost">
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading text-3xl font-bold text-brand-700">{stat.value}</span>
              <span className="font-body text-sm text-ink/65">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Our services</span>
              <h2 className="text-3xl text-ink sm:text-4xl">Every certificate your rental needs</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-brand-700 transition hover:gap-3">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img
              src={CONSULTANT_IMAGE}
              alt="Compliance consultant reviewing paperwork"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl bg-white p-5 shadow-lift sm:block">
              <p className="font-heading text-2xl font-bold text-brand-700">Certified</p>
              <p className="mt-1 font-body text-sm text-ink/70">Every report checked before it leaves our office.</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why landlords choose us</span>
            <h2 className="text-3xl text-ink sm:text-4xl">Fast, transparent and fully compliant</h2>
            <p className="mt-5 font-body text-base leading-[1.6] text-ink/70">
              We know the pressure of a void period and a tenant waiting for keys. We keep appointments tight, explain every finding, and fix what we find.
            </p>
            <ul className="mt-8 space-y-4">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-3 font-body text-base text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="text-3xl text-ink sm:text-4xl">Three steps to a compliant rental</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <div key={step.title} className="group relative rounded-3xl border border-line p-8 transition duration-300 hover:border-brand-200 hover:shadow-card">
                <span className="absolute right-8 top-8 font-heading text-5xl font-bold text-brand-100 transition group-hover:text-brand-200">
                  0{index + 1}
                </span>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="mb-3 text-xl text-ink">{step.title}</h3>
                <p className="font-body text-sm leading-[1.6] text-ink/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 text-white">
        <img src={KEYS_IMAGE} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-brand-900/90" />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-white sm:text-4xl">Ready for keys to change hands?</h2>
            <p className="mt-4 font-body text-base leading-[1.6] text-white/80">
              Book your inspection in minutes. We will confirm your appointment and get your certificates to you quickly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-accent">
              Book online
            </Link>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
