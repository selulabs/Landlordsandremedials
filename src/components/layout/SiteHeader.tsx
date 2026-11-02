import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS, SITE } from '@/lib/site';
import { SERVICE_CATEGORIES } from '@/data/services';
import { useLocation } from '@/lib/router';

export function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setServicesOpen(false);
    setExpandedCategory(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label={`${SITE.name} home`} className="shrink-0">
          <span className={scrolled || open || pathname !== '/' ? 'hidden' : 'block'}>
            <Logo tone="light" />
          </span>
          <span className={scrolled || open || pathname !== '/' ? 'block' : 'hidden'}>
            <Logo tone="dark" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMegaOpen((value) => !value)}
              aria-expanded={megaOpen}
              className={`flex items-center gap-1 rounded-full px-4 py-2 font-body text-sm font-medium transition hover:bg-brand-50 hover:text-brand-700 ${
                pathname.startsWith('/services') ? 'text-brand-700' : scrolled || pathname !== '/' ? 'text-ink' : 'text-white'
              }`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </button>
            {megaOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 pt-3">
                <div className="grid max-h-[70vh] grid-cols-2 gap-x-4 overflow-y-auto rounded-3xl border border-line bg-white p-5 shadow-lift">
                  {SERVICE_CATEGORIES.map((category) => (
                    <div key={category.slug} className="rounded-2xl p-3">
                      <p className="mb-2 flex items-center gap-2 font-heading text-sm font-bold text-brand-700">
                        {category.name}
                      </p>
                      <div className="space-y-1">
                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="block rounded-xl px-3 py-2 font-body text-sm text-ink/75 transition hover:bg-brand-50 hover:text-brand-700"
                          >
                            {service.shortName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link to="/services" className="col-span-2 mt-2 rounded-2xl bg-brand-50 px-4 py-3 text-center font-body text-sm font-bold text-brand-700 transition hover:bg-brand-100">
                    View all services
                  </Link>
                </div>
              </div>
            )}
          </div>
          {NAV_LINKS.filter((item) => item.href !== '/services').map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-4 py-2 font-body text-sm font-medium transition hover:bg-brand-50 hover:text-brand-700 ${
                isActive(item.href)
                  ? 'text-brand-700'
                  : scrolled || pathname !== '/'
                    ? 'text-ink'
                    : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className={`hidden items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-medium transition xl:flex ${
              scrolled || pathname !== '/' ? 'text-ink hover:text-brand-700' : 'text-white hover:text-brand-100'
            }`}
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="btn-accent hidden !py-2.5 sm:inline-flex">
            Book now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              scrolled || open || pathname !== '/' ? 'text-ink hover:bg-brand-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          <div>
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-body text-base font-medium text-ink hover:bg-brand-50"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="mb-2 ml-3 space-y-2 border-l border-line pl-3">
                {SERVICE_CATEGORIES.map((category) => (
                  <div key={category.slug}>
                    <button
                      type="button"
                      onClick={() => setExpandedCategory(expandedCategory === category.slug ? null : category.slug)}
                      aria-expanded={expandedCategory === category.slug}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left font-heading text-sm font-bold text-brand-700"
                    >
                      {category.shortName}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expandedCategory === category.slug ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedCategory === category.slug && (
                      <div className="space-y-1 pb-2">
                        {category.services.map((service) => (
                          <Link key={service.slug} to={`/services/${service.slug}`} className="block rounded-lg px-3 py-2 font-body text-sm text-ink/75 hover:bg-brand-50">
                            {service.shortName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/services" className="block rounded-lg px-3 py-2 font-body text-sm font-bold text-brand-700 hover:bg-brand-50">
                  View all services
                </Link>
              </div>
            )}
          </div>
          {NAV_LINKS.filter((item) => item.href !== '/services').map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-xl px-4 py-3 font-body text-base font-medium hover:bg-brand-50 ${
                isActive(item.href) ? 'text-brand-700' : 'text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 pb-2">
            <a href={SITE.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-accent">
              Book an inspection
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
