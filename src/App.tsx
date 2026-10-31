import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { useLocation } from '@/lib/router';
import { AboutPage } from '@/pages/AboutPage';
import { AreasPage } from '@/pages/AreasPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { LegalPage } from '@/pages/LegalPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceDetailPage, ServicesPage } from '@/pages/ServicesPage';

function renderRoute(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const serviceMatch = path.match(/^\/services\/([^/]+)$/);

  if (serviceMatch) return <ServiceDetailPage slug={serviceMatch[1]} />;

  switch (path) {
    case '/':
      return <HomePage />;
    case '/services':
      return <ServicesPage />;
    case '/areas':
      return <AreasPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/privacy':
      return <LegalPage slug="privacy" />;
    case '/cookies':
      return <LegalPage slug="cookies" />;
    case '/terms':
      return <LegalPage slug="terms" />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">{renderRoute(pathname)}</main>
      <SiteFooter />
    </div>
  );
}
