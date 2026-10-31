export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  price: string;
  priceNote: string;
  icon: 'Zap' | 'Flame' | 'FileText' | 'ShieldCheck' | 'DoorClosed' | 'Lightbulb' | 'Plug' | 'Droplets' | 'HardHat' | 'Bell' | 'Wrench';
  image: string;
  includes: string[];
  pricing: { label: string; price: string }[];
  faqs: { q: string; a: string }[];
};

const photo = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const SERVICES: Service[] = [
  {
    slug: 'eicr',
    name: 'Electrical Installation Condition Report (EICR)',
    shortName: 'EICR',
    summary: 'A five-yearly inspection of the wiring, consumer unit and fixed electrics in your rental.',
    description:
      'An EICR is the legal inspection that proves your rental’s fixed electrics are safe. Our registered electricians test every circuit, check the consumer unit and issue a graded report you can give to your letting agent, tenants and local council.',
    price: 'From £67.99',
    priceNote: 'Studio flats. Pricing rises with property size, see the table below.',
    icon: 'Zap',
    image: photo(32497160),
    includes: [
      'Full inspection of fixed wiring and sockets',
      'Consumer unit and RCD testing',
      'Graded report (C1, C2, C3, FI) with remedial advice',
      'Certificate delivered within 24 hours',
    ],
    pricing: [
      { label: 'Studio', price: '£67.99' },
      { label: '1 to 3 bedrooms', price: '£94.99' },
      { label: '4 bedrooms', price: '£104.99' },
      { label: '5 bedrooms', price: '£139.99' },
    ],
    faqs: [
      { q: 'How often do I need an EICR?', a: 'Every five years for rentals, or at the start of each new tenancy if the last report is older than five years.' },
      { q: 'What if the report shows issues?', a: 'We can carry out the remedial work ourselves and issue a clean report once everything is corrected.' },
    ],
  },
  {
    slug: 'gas-safety',
    name: 'Gas Safety Certificate (CP12)',
    shortName: 'Gas Safety',
    summary: 'The annual gas safety check on every gas appliance and flue, issued by a Gas Safe engineer.',
    description:
      'Landlords must have every gas appliance checked each year and provide a copy of the CP12 certificate to tenants within 28 days. Our Gas Safe registered engineers inspect boilers, hobs, fires and flues and give you a certificate you can rely on.',
    price: 'From £50',
    priceNote: 'Meter and one appliance. Additional appliances are charged per unit.',
    icon: 'Flame',
    image: photo(34938442),
    includes: [
      'Safety check on all gas appliances',
      'Flue and ventilation inspection',
      'Gas tightness test',
      'CP12 certificate issued on the day',
    ],
    pricing: [
      { label: 'Meter and 1 appliance', price: '£50' },
      { label: '2 appliances', price: '£60' },
      { label: '3 appliances', price: '£70' },
      { label: '4 appliances', price: '£85' },
    ],
    faqs: [
      { q: 'How quickly must I give the certificate to tenants?', a: 'Within 28 days of the check, and before any new tenant moves in.' },
      { q: 'Do you handle emergency gas faults?', a: 'Our engineers can attend urgent safety concerns. Call us straight away if you smell gas.' },
    ],
  },
  {
    slug: 'epc',
    name: 'Energy Performance Certificate (EPC)',
    shortName: 'EPC',
    summary: 'A rating for your property’s energy efficiency, required before you let or sell.',
    description:
      'An EPC rates how energy efficient a property is from A to G and recommends improvements. It must be valid and available to prospective tenants, and properties rated below E generally cannot be let. We produce accurate, government-registered EPCs quickly.',
    price: 'From £89.99',
    priceNote: 'Studio flats. Larger homes are priced by bedroom count.',
    icon: 'FileText',
    image: photo(12504321),
    includes: [
      'Site visit and full energy assessment',
      'Rating from A to G with current and potential scores',
      'Recommendations to improve your rating',
      'Lodged on the official register',
    ],
    pricing: [
      { label: 'Studio', price: '£89.99' },
      { label: 'Up to 3 bedrooms', price: '£109.99' },
      { label: '4 bedrooms', price: '£129.99' },
      { label: '5 bedrooms', price: '£149.99' },
    ],
    faqs: [
      { q: 'How long is an EPC valid?', a: 'Ten years from the date of issue.' },
      { q: 'Can I let a property rated F or G?', a: 'Not usually. We can advise on upgrades that could lift the rating to an E or above.' },
    ],
  },
  {
    slug: 'fire-risk-assessment',
    name: 'Fire Risk Assessment',
    shortName: 'Fire Risk',
    summary: 'A written fire safety assessment for HMOs, communal areas and multi-let buildings.',
    description:
      'Under the Regulatory Reform (Fire Safety) Order, the responsible person must assess fire risks. Our assessors review escape routes, detection, emergency lighting and fire doors, then deliver a clear action plan so you can demonstrate compliance.',
    price: 'From £74',
    priceNote: 'Studio flats and small communal areas. Larger blocks are quoted individually.',
    icon: 'ShieldCheck',
    image: photo(3108524),
    includes: [
      'Review of escape routes and signage',
      'Fire detection and alarm check',
      'Written risk assessment with prioritised actions',
      'Review date set against your building’s risk level',
    ],
    pricing: [
      { label: 'Studio', price: '£74' },
      { label: 'Communal area', price: '£129.99' },
      { label: '1 to 3 bedrooms', price: '£139.99' },
      { label: '4 bedrooms', price: '£179.99' },
    ],
    faqs: [
      { q: 'Do I need one for a single let?', a: 'Usually not, but shared houses and HMOs always require a written assessment.' },
      { q: 'How often should it be reviewed?', a: 'At least annually, and after any significant change to the building or its use.' },
    ],
  },
  {
    slug: 'fire-door-certificate',
    name: 'Fire Door Inspection',
    shortName: 'Fire Doors',
    summary: 'Inspection and certification of fire doors, seals, closers and hinges in shared buildings.',
    description:
      'Fire doors only work if every component is intact. We inspect the door leaf, frame, intumescent seals, gaps, hinges and self-closing devices, then provide a certificate and a list of any works needed to bring doors back into compliance.',
    price: 'From £120',
    priceNote: 'Price per building, based on the number of doors.',
    icon: 'DoorClosed',
    image: photo(30445560),
    includes: [
      'Door leaf, frame and gap inspection',
      'Seal, hinge and closer checks',
      'Fire door certificate or remedial schedule',
      'Labelling guidance for each door',
    ],
    pricing: [
      { label: 'Up to 5 doors', price: '£120' },
      { label: '6 to 15 doors', price: '£220' },
      { label: '16 to 30 doors', price: '£340' },
    ],
    faqs: [
      { q: 'Why do fire doors fail?', a: 'Commonly damaged seals, excess gaps, missing closers and doors painted over their certification labels.' },
    ],
  },
  {
    slug: 'emergency-lighting',
    name: 'Emergency Lighting Certificate',
    shortName: 'Emergency Lighting',
    summary: 'Full-duration testing and certification of emergency lights and exit signs.',
    description:
      'Emergency lighting must work when the power fails. We run full-duration tests on every luminaire and exit sign, log the results and issue a certificate, so your building stays compliant and people can find their way out safely.',
    price: 'From £55',
    priceNote: 'Up to three lights. Price increases with the number of units.',
    icon: 'Lightbulb',
    image: photo(11606737),
    includes: [
      'Full-duration discharge test',
      'Check of every luminaire and exit sign',
      'Logbook entries and certificate',
      'Faulty units identified with replacement advice',
    ],
    pricing: [
      { label: 'Up to 3 lights', price: '£55' },
      { label: '3 to 5 lights', price: '£79' },
      { label: '5 to 8 lights', price: '£115' },
      { label: '8 to 12 lights', price: '£160' },
    ],
    faqs: [
      { q: 'How often is testing needed?', a: 'Monthly short tests and an annual full-duration test, which we can schedule for you.' },
    ],
  },
  {
    slug: 'pat-testing',
    name: 'PAT Testing',
    shortName: 'PAT Testing',
    summary: 'Portable appliance testing for offices, landlords’ furnished lets and communal kit.',
    description:
      'Portable appliance testing checks plugs, leads, kettles, extension leads and other portable kit for faults. We tag every tested item, record results and give you a register that proves your duty of care.',
    price: 'From £59.99',
    priceNote: 'Up to 10 appliances. Priced per batch for larger jobs.',
    icon: 'Plug',
    image: photo(7359566),
    includes: [
      'Visual and electrical testing of each appliance',
      'Pass or fail tagging',
      'Full asset register',
      'Retest schedule recommendations',
    ],
    pricing: [
      { label: 'Up to 10 appliances', price: '£59.99' },
      { label: '10 to 20 appliances', price: '£79.99' },
      { label: '20 to 40 appliances', price: '£99.99' },
    ],
    faqs: [
      { q: 'Do I need PAT testing for furnished lets?', a: 'Yes, every electrical item you supply to tenants should be inspected and recorded.' },
    ],
  },
  {
    slug: 'legionella',
    name: 'Legionella Risk Assessment',
    shortName: 'Legionella',
    summary: 'Water system risk assessments that protect tenants from Legionnaires’ disease.',
    description:
      'Legionella bacteria thrive in warm, stagnant water. We assess your hot and cold water systems, showers, tanks and outlets, and give you a written assessment with the actions needed to keep the water safe for residents.',
    price: 'From £210',
    priceNote: 'Residential buildings. Larger systems are quoted individually.',
    icon: 'Droplets',
    image: photo(28887606),
    includes: [
      'Review of hot and cold water systems',
      'Temperature and flushing recommendations',
      'Written risk assessment and action plan',
      'Review date and sampling advice',
    ],
    pricing: [
      { label: 'Single residence', price: '£210' },
      { label: 'Small block', price: '£320' },
      { label: 'Large block', price: 'Quoted' },
    ],
    faqs: [
      { q: 'Who needs a legionella assessment?', a: 'Any landlord with communal water systems, or responsibility for water in shared buildings.' },
    ],
  },
  {
    slug: 'asbestos-survey',
    name: 'Asbestos Survey',
    shortName: 'Asbestos',
    summary: 'Management and refurbishment surveys to locate asbestos before work begins.',
    description:
      'Asbestos can be found in many older buildings. Our surveyors locate and sample materials, then produce a survey report with a risk rating and management plan, helping you stay compliant and keep contractors safe.',
    price: 'From £239.99',
    priceNote: 'Price includes the first sample. Additional samples are charged separately.',
    icon: 'HardHat',
    image: photo(8204946),
    includes: [
      'Visual inspection of accessible areas',
      'Sampling and laboratory analysis',
      'Survey report with risk ratings',
      'Management plan and register',
    ],
    pricing: [
      { label: 'Management survey', price: 'From £239.99' },
      { label: 'Refurbishment survey', price: 'Quoted' },
    ],
    faqs: [
      { q: 'Is an asbestos survey required in a rental?', a: 'Landlords must manage asbestos in communal areas of non-domestic and shared buildings.' },
    ],
  },
  {
    slug: 'smoke-heat-alarms',
    name: 'Smoke and Heat Alarm Testing',
    shortName: 'Smoke Alarms',
    summary: 'Testing and certification of smoke and heat alarms in every room that requires them.',
    description:
      'Working smoke and heat alarms are a legal requirement in rental properties. We test each alarm, check positioning, and provide a written confirmation for your records and your tenants.',
    price: 'From £55',
    priceNote: 'Up to three alarms. Priced per property.',
    icon: 'Bell',
    image: photo(878832),
    includes: [
      'Test of every smoke and heat alarm',
      'Positioning and coverage check',
      'Written confirmation for your records',
      'Advice on replacements where needed',
    ],
    pricing: [
      { label: 'Up to 3 alarms', price: '£55' },
      { label: '3 to 6 alarms', price: '£90' },
    ],
    faqs: [
      { q: 'Do you supply replacement alarms?', a: 'We can fit and interlink replacement alarms as part of the visit.' },
    ],
  },
  {
    slug: 'fuse-box-installation',
    name: 'Fuse Box and Consumer Unit Replacement',
    shortName: 'Fuse Box',
    summary: 'Upgrade old fuse boxes to a modern, RCD-protected consumer unit that passes certification.',
    description:
      'Old fuse boxes lack modern protection and often fail an EICR. Our registered electricians replace them with a compliant consumer unit with RCD protection, labelled circuits and a certificate of compliance.',
    price: 'From £720',
    priceNote: 'Six-way unit fitted. Larger units and rewires are quoted on site.',
    icon: 'Wrench',
    image: photo(17842832),
    includes: [
      'Removal of old fuse box',
      'Fitting of RCD-protected consumer unit',
      'Labelled circuits and updated schedule',
      'Installation certificate (Part P)',
    ],
    pricing: [
      { label: '6-way unit', price: '£720' },
      { label: '10-way unit', price: '£780' },
      { label: '15-way unit', price: '£860' },
      { label: 'Skeleton unit', price: '£980' },
    ],
    faqs: [
      { q: 'Will I need to move out during the work?', a: 'Usually not. The work normally takes a single day, with power off for part of it.' },
    ],
  },
];

export function findService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
