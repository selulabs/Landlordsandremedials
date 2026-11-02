import { ArrowRight, Check, Phone } from 'lucide-react';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Link } from '@/components/Link';
import { PageHero } from '@/components/PageHero';
import { ServiceIcon } from '@/components/ServiceCard';
import { SERVICE_CATEGORIES, findService } from '@/data/services';
import { SITE } from '@/lib/site';
import { NotFoundPage } from '@/pages/NotFoundPage';

const LISTING_IMAGE = 'https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Compliance certificates for every London rental"
        intro="From electrical and gas checks to fire safety and legionella, we deliver the paperwork landlords need, with clear pricing and fast turnaround."
        image={LISTING_IMAGE}
      />
      <section className="bg-mist py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.slug} className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <ServiceIcon name={category.icon} className="h-6 w-6" />
              </span>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                {category.services.length === 1 ? 'Service' : `${category.services.length} subservices`}
              </p>
              <h2 className="text-xl text-ink">{category.name}</h2>
              <p className="mt-3 font-body text-sm leading-[1.6] text-ink/70">{category.summary}</p>
              <div className="mt-5 space-y-2">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 font-body text-sm text-ink transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    <span>{service.shortName}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = findService(slug);
  if (!service) return <NotFoundPage />;

  return (
    <>
      <PageHero eyebrow={service.shortName} title={service.name} intro={service.summary} image={service.image}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={`/contact?service=${service.slug}`} className="btn-accent">
            Book this certificate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={SITE.phoneHref} className="btn-ghost">
            <Phone className="h-4 w-4" />
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div className="space-y-12">
            <div>
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="mb-4 text-2xl text-ink sm:text-3xl">What this involves</h2>
              <p className="font-body text-base leading-[1.6] text-ink/75">{service.description}</p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl text-ink">What is included</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-line p-5 font-body text-sm leading-[1.6] text-ink">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-2xl text-ink">Pricing</h2>
              <div className="space-y-6">
                {service.pricing.map((section, sectionIndex) => (
                  <div key={`${section.title ?? 'pricing'}-${sectionIndex}`} className="overflow-hidden rounded-3xl border border-line">
                    {section.title && (
                      <div className="bg-mist px-5 py-4 sm:px-6">
                        <h3 className="font-heading text-base font-bold text-ink">{section.title}</h3>
                        {section.note && <p className="mt-1 font-body text-xs leading-[1.5] text-ink/60">{section.note}</p>}
                      </div>
                    )}
                    {section.rows.map((row, index) => (
                      <div
                        key={row.label}
                        className={`grid gap-3 px-5 py-4 font-body text-sm sm:grid-cols-[1fr_auto_auto] sm:items-center sm:px-6 ${section.title || index > 0 ? 'border-t border-line' : ''}`}
                      >
                        <span className="text-ink/75">{row.label}</span>
                        <span className="font-heading font-bold text-brand-700">{row.price}</span>
                        <Link
                          to={`/contact?service=${service.slug}&price=${encodeURIComponent(row.label + ' — ' + row.price)}`}
                          className="inline-flex items-center justify-center rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800 sm:text-sm"
                        >
                          Book this service
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-4 font-body text-xs leading-[1.6] text-ink/60">{service.priceNote}</p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl text-ink">Common questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details key={faq.q} className="group rounded-2xl border border-line bg-white p-6 open:shadow-card">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold text-ink">
                      {faq.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 font-body text-sm leading-[1.6] text-ink/70">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-white p-8 shadow-lift">
              <span className="font-heading text-sm font-bold text-brand-700">{service.price}</span>
              <p className="mt-2 font-body text-sm leading-[1.6] text-ink/65">{service.priceNote}</p>
              <div className="mt-8">
                <EnquiryForm defaultService={service.name} stacked />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
