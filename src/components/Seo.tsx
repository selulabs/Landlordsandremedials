import { useEffect } from 'react';
import { findService } from '@/data/services';
import { SITE } from '@/lib/site';

type SeoProps = {
  pathname: string;
};

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Landlord Certificates & Remedials | London Compliance Services',
    description: 'EICR, gas safety certificates, EPCs, fire safety, asbestos surveys and Legionella assessments across London.',
  },
  '/services': {
    title: 'Compliance Services & Prices | Landlord Certificates & Remedials',
    description: 'View landlord compliance services, transparent prices and booking options across electrical, gas, fire, asbestos, EPC and Legionella services.',
  },
  '/areas': {
    title: 'London Service Areas | Landlord Certificates & Remedials',
    description: 'Landlord compliance certificates and remedial services for properties across Central and East London.',
  },
  '/about': {
    title: 'About Us | Landlord Certificates & Remedials',
    description: 'Learn about our landlord compliance services, qualified assessors and commitment to clear, reliable certificates.',
  },
  '/contact': {
    title: 'Book a Compliance Service | Contact Us',
    description: 'Contact Landlord Certificates & Remedials or request a booking for certificates, inspections and remedial services.',
  },
  '/privacy': {
    title: 'Privacy Policy | Landlord Certificates & Remedials',
    description: 'Read how Landlord Certificates & Remedials collects, uses and protects personal information.',
  },
  '/cookies': {
    title: 'Cookie Policy | Landlord Certificates & Remedials',
    description: 'Learn about the cookies and similar technologies used on the Landlord Certificates & Remedials website.',
  },
  '/terms': {
    title: 'Terms of Use | Landlord Certificates & Remedials',
    description: 'Review the terms and conditions for using the Landlord Certificates & Remedials website.',
  },
};

function setMeta(name: string, content: string) {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setOpenGraph(property: string, content: string) {
  let element = document.head.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setJsonLd(id: string, data: Record<string, unknown> | null) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    script?.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function Seo({ pathname }: SeoProps) {
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const serviceMatch = path.match(/^\/services\/([^/]+)$/);
    const service = serviceMatch ? findService(serviceMatch[1]) : undefined;
    const isNotFound = !service && !PAGE_METADATA[path];
    const metadata = service
      ? {
          title: `${service.name} | Landlord Certificates & Remedials`,
          description: `${service.summary} View pricing and book this service with Landlord Certificates & Remedials in London.`,
        }
      : PAGE_METADATA[path] ?? {
          title: 'Page Not Found | Landlord Certificates & Remedials',
          description: 'The requested page could not be found.',
        };

    const origin = `https://${SITE.domain}`;
    const canonical = `${origin}${path}`;

    document.title = metadata.title;
    setMeta('description', metadata.description);
    setMeta('robots', isNotFound ? 'noindex, follow' : 'index, follow');
    setMeta('twitter:card', 'summary_large_image');
    setOpenGraph('og:title', metadata.title);
    setOpenGraph('og:description', metadata.description);
    setOpenGraph('og:type', 'website');
    setOpenGraph('og:url', canonical);
    setOpenGraph('og:site_name', SITE.name);
    setCanonical(canonical);

    setJsonLd('local-business-schema', {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: SITE.name,
      url: origin,
      email: SITE.email,
      telephone: SITE.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'FRA Studio Flat 89, 4th Floor, The Featherstone Building, 66 City Road',
        addressLocality: 'London',
        postalCode: 'EC1Y 2AL',
        addressCountry: 'GB',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Central and East London',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
    });

    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
    ];

    if (path !== '/') {
      breadcrumbItems.push(
        { '@type': 'ListItem', position: 2, name: service ? 'Services' : 'Page', item: service ? `${origin}/services` : canonical },
      );
    }
    if (service) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: service.shortName,
        item: canonical,
      });
    } else if (path !== '/' && PAGE_METADATA[path]) {
      const pageName = document.title.replace(/ \| .*$/, '');
      breadcrumbItems[1].name = pageName;
    }

    setJsonLd('breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    });
  }, [pathname]);

  return null;
}
