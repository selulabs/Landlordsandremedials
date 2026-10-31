import { SITE } from '@/lib/site';

export type LegalSection = { heading: string; body: string[] };
export type LegalDocument = { slug: 'privacy' | 'cookies' | 'terms'; title: string; updated: string; sections: LegalSection[] };

export const LEGAL_DOCUMENTS: Record<LegalDocument['slug'], LegalDocument> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy policy',
    updated: 'Last updated: January 2025',
    sections: [
      {
        heading: 'Who we are',
        body: [
          `${SITE.name} provides landlord compliance inspections and certificates across ${SITE.coverage}. This policy explains how we collect and use the personal information you give us through this website.`,
        ],
      },
      {
        heading: 'What we collect',
        body: [
          'When you send an enquiry we collect your name, email address, phone number, property postcode, preferred appointment date and any message you add.',
          'We do not sell your details or use them for unrelated marketing.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'We use your details to respond to your enquiry, arrange appointments, issue certificates and keep the records that compliance law requires.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          `You can ask us to access, correct or delete your personal information at any time. Email ${SITE.email} and we will respond within one month.`,
        ],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie policy',
    updated: 'Last updated: January 2025',
    sections: [
      {
        heading: 'What cookies are',
        body: ['Cookies are small files stored on your device that help websites work properly and understand how they are used.'],
      },
      {
        heading: 'How we use cookies',
        body: [
          'This website only uses the storage required to load pages and display forms. We do not use advertising cookies or third-party tracking.',
          'If we add analytics in future, we will update this page and ask for your consent first.',
        ],
      },
      {
        heading: 'Managing cookies',
        body: ['You can clear or block cookies at any time through your browser settings. Blocking essential storage may affect how the website works.'],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms of use',
    updated: 'Last updated: January 2025',
    sections: [
      {
        heading: 'About these terms',
        body: [
          `By using ${SITE.domain} you agree to these terms. Please read them before submitting an enquiry or booking an appointment.`,
        ],
      },
      {
        heading: 'Bookings',
        body: [
          'Enquiries and booking requests are confirmed by our team by phone or email. A booking is only final once we have confirmed it with you.',
          'Prices are shown as a guide and may vary based on property size, access and the number of items to test. We will always confirm the final price before any work starts.',
        ],
      },
      {
        heading: 'Accuracy of information',
        body: [
          'You must give accurate property and contact details so that we can attend the correct address and produce valid certificates.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'Our certificates reflect the condition of the property at the time of inspection. We are not responsible for issues arising after the visit or for faults we were not asked to assess.',
        ],
      },
    ],
  },
};
