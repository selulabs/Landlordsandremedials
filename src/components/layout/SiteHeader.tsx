import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS, SITE } from '@/lib/site';
import { useLocation } from '@/lib/router';

export function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

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
          {NAV_LINKS.map((item) => (
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
          {NAV_LINKS.map((item) => (
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
