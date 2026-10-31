import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS, SITE } from '@/lib/site';
import { SERVICES } from '@/data/services';

const LEGAL_LINKS = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Cookie policy', href: '/cookies' },
  { label: 'Terms of use', href: '/terms' },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo tone="light" />
          <p className="max-w-xs font-body text-sm leading-[1.6] text-white/70">{SITE.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {SITE.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-full border border-white/15 px-3 py-1.5 font-body text-xs font-medium text-white/80 transition hover:border-brand-400 hover:text-brand-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Services</h3>
          <ul className="space-y-3 font-body text-sm text-white/75">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="transition hover:text-white">
                  {service.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-medium text-brand-300 transition hover:text-white">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Company</h3>
          <ul className="space-y-3 font-body text-sm text-white/75">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-300">Get in touch</h3>
          <ul className="space-y-4 font-body text-sm text-white/75">
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-brand-400" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 break-all transition hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
              {SITE.coverage}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 font-body text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
