export type ServiceCategorySlug =
  | 'electrical-safety-services'
  | 'gas-safety-services'
  | 'fire-safety-services'
  | 'asbestos-survey'
  | 'energy-performance-certificate'
  | 'commercial-epc'
  | 'legionella-risk-assessment';

export type ServiceIcon =
  | 'Zap'
  | 'Flame'
  | 'ShieldCheck'
  | 'HardHat'
  | 'FileText'
  | 'Droplets'
  | 'Lightbulb'
  | 'Plug'
  | 'Wrench'
  | 'DoorClosed'
  | 'Bell';

export type PriceRow = {
  label: string;
  price: string;
  custom?: boolean;
};

export type PricingSection = {
  title?: string;
  note?: string;
  rows: PriceRow[];
};

export type Service = {
  slug: string;
  category: ServiceCategorySlug;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  price: string;
  priceNote: string;
  icon: ServiceIcon;
  image: string;
  includes: string[];
  pricing: PricingSection[];
  faqs: { q: string; a: string }[];
};

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  name: string;
  shortName: string;
  summary: string;
  icon: ServiceIcon;
  services: Service[];
};

const photo = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const SERVICES: Service[] = [
  {
    slug: 'eicr', category: 'electrical-safety-services', name: 'Electrical Installation Condition Report (EICR)', shortName: 'EICR',
    summary: 'A professional inspection of domestic fixed wiring and electrical installations.',
    description: 'Our registered electricians inspect the fixed electrical installation, test circuits, identify defects and provide a graded EICR report for landlords, tenants and managing agents.',
    price: 'From £67.99', priceNote: 'Studio / 1 bedroom properties. All prices include the standard inspection.', icon: 'Zap', image: 'https://besgroup.com/app/uploads/2023/11/shutterstock_2063094095-scaled.jpg',
    includes: ['Inspection of fixed wiring and accessories', 'Consumer unit and RCD testing', 'Circuit testing and defect grading', 'EICR report issued for your records'],
    pricing: [{ title: 'Domestic EICR', note: 'Additional paid parking or the London Congestion Charge may apply.', rows: [
      { label: 'Studio / 1 bedroom', price: '£67.99' }, { label: '1–3 bedrooms', price: '£94.99' }, { label: '4 bedrooms', price: '£104.99' },
      { label: '5 bedrooms', price: '£139.99' }, { label: '6 bedrooms', price: '£159.99' }, { label: '7 bedrooms', price: '£179.99' },
      { label: '8 bedrooms', price: '£199.99' }, { label: 'More than 8 bedrooms', price: 'Custom quotation', custom: true }
    ]}],
    faqs: [{ q: 'How often is an EICR needed for a rental?', a: 'Rental properties generally require an EICR at least every five years, at each new tenancy where appropriate, or as required by legislation and the report recommendations.' }, { q: 'What happens if defects are found?', a: 'The report identifies the observation and required action. Any remedial work is priced separately unless agreed otherwise.' }]
  },
  {
    slug: 'commercial-eicr', category: 'electrical-safety-services', name: 'Commercial EICR', shortName: 'Commercial EICR',
    summary: 'Commercial fixed-electrical testing based on the number of consumer units.',
    description: 'A commercial EICR assesses the condition of the fixed electrical installation and provides an inspection report with any observed defects and recommended actions.',
    price: 'From £149.99', priceNote: 'Based on one consumer unit.', icon: 'Zap', image: photo(1216589),
    includes: ['Commercial installation inspection', 'Circuit and protective-device testing', 'Condition-report observations', 'Electrical inspection certificate and report'],
    pricing: [{ title: 'Commercial EICR', note: 'More than 8 consumer units requires a custom quotation.', rows: [
      { label: '1 consumer unit', price: '£149.99' }, { label: '2 consumer units', price: '£279.99' }, { label: '3 consumer units', price: '£418.99' },
      { label: '4 consumer units', price: '£548.99' }, { label: '5 consumer units', price: '£705.99' }, { label: '6 consumer units', price: '£849.99' },
      { label: '7 consumer units', price: '£998.99' }, { label: '8 consumer units', price: '£1,155.99' }, { label: 'More than 8 consumer units', price: 'Custom quotation', custom: true }
    ]}],
    faqs: [{ q: 'How is a commercial EICR priced?', a: 'The listed price is based on the number of consumer units in the commercial installation.' }, { q: 'Will the inspection guarantee a pass?', a: 'No. The report records the actual condition and may identify defects requiring remedial work.' }]
  },
  {
    slug: 'electrical-diagnostics', category: 'electrical-safety-services', name: 'Electrical Diagnostic', shortName: 'Electrical Diagnostics',
    summary: 'Troubleshooting and fault-finding by a qualified electrician.',
    description: 'An hourly diagnostic appointment for investigating electrical faults, intermittent power issues, tripping circuits and other electrical concerns.',
    price: '£89.99 per hour', priceNote: 'Materials are excluded. Paid parking and Congestion Charges may apply.', icon: 'Lightbulb', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA28PwZwuqpvwKbtf4QvPIhpyj5iV-km-79uESqHsQUw&s=10',
    includes: ['Electrical fault investigation', 'Testing of affected circuits', 'Diagnosis and repair advice', 'Clear explanation of recommended next work'],
    pricing: [{ title: 'Electrical diagnostic', note: 'Materials, replacement parts and any follow-on remedial work are charged separately.', rows: [{ label: 'Electrical diagnostic appointment', price: '£89.99 per hour' }] }],
    faqs: [{ q: 'Are materials included?', a: 'No. The £89.99 hourly rate is for diagnosis and labour. Materials are charged separately.' }]
  },
  {
    slug: 'fuse-box-installation', category: 'electrical-safety-services', name: 'Fuse Box / Consumer Unit Installation', shortName: 'Fuse Box Installation',
    summary: 'Replacement or installation of a modern protective consumer unit.',
    description: 'We remove or replace a fuse box with an appropriately sized, RCD-protected consumer unit and clearly labelled circuits.',
    price: 'From £580', priceNote: 'All-inclusive installation pricing. Paid parking or Congestion Charges may apply.', icon: 'Wrench', image: photo(17842832),
    includes: ['Consumer unit installation', 'RCD protection and circuit configuration', 'Circuit labels and final testing', 'Installation certification where applicable'],
    pricing: [{ title: 'Consumer unit options', note: 'All listed prices are all-inclusive for the stated unit type.', rows: [
      { label: '6-way consumer unit', price: '£580' }, { label: '6–10-way consumer unit', price: '£680' }, { label: '10–15-way consumer unit', price: '£860' },
      { label: '15–20-way consumer unit', price: '£1,080' }, { label: 'Double-decker consumer unit', price: '£1,150' }, { label: 'Skeleton board consumer unit', price: '£980' }
    ]}],
    faqs: [{ q: 'How do I choose the correct unit size?', a: 'Tell us the number of circuits and current layout. The electrician will confirm the correct type and capacity before work begins.' }]
  },
  {
    slug: 'emergency-lighting-test', category: 'electrical-safety-services', name: 'Emergency Lighting Testing', shortName: 'Emergency Light Test',
    summary: 'Routine testing and reporting of emergency lights and exit signs.',
    description: 'We test emergency luminaires based on the number of fittings, document the results and advise on any lights that require attention.',
    price: 'From £55', priceNote: 'Based on up to three emergency lights.', icon: 'Lightbulb', image: photo(11606737),
    includes: ['Emergency light function testing', 'Basic inspection of exit and emergency luminaires', 'Test results and fault advice', 'Certificate or test record where applicable'],
    pricing: [{ title: 'Emergency lighting testing', note: 'Paid parking or the London Congestion Charge may apply.', rows: [
      { label: 'Up to 3 emergency lights', price: '£55' }, { label: '3–6 emergency lights', price: '£90' }, { label: '6–9 emergency lights', price: '£125' },
      { label: '9–12 emergency lights', price: '£160' }, { label: '12–15 emergency lights', price: '£195' }, { label: '15–18 emergency lights', price: '£230' }, { label: '18–21 emergency lights', price: '£265' }
    ]}],
    faqs: [{ q: 'How many lights must I include?', a: 'Count each individual emergency luminaire or exit sign that requires testing.' }]
  },
  {
    slug: 'pat-testing', category: 'electrical-safety-services', name: 'Portable Appliance Testing (PAT)', shortName: 'Portable Appliance Test',
    summary: 'Electrical testing and identification labels for portable appliances.',
    description: 'We inspect and electrically test portable appliances, extension leads and other supplied electrical equipment, then provide an asset and test register.',
    price: 'From £59.99', priceNote: 'Based on up to 10 appliances.', icon: 'Plug', image: photo(7359566),
    includes: ['Visual and electrical inspection', 'Pass or fail identification tags', 'Portable-appliance asset register', 'Advice on failed equipment'],
    pricing: [{ title: 'PAT testing packages', note: 'More than 50 appliances requires a custom quotation.', rows: [
      { label: 'Up to 10 appliances', price: '£59.99' }, { label: '10–15 appliances', price: '£69.99' }, { label: '15–20 appliances', price: '£79.99' },
      { label: '20–25 appliances', price: '£99.99' }, { label: '25–30 appliances', price: '£129.99' }, { label: '30–35 appliances', price: '£169.99' },
      { label: '35–40 appliances', price: '£199.99' }, { label: '40–45 appliances', price: '£229.99' }, { label: '45–50 appliances', price: '£259.99' }, { label: 'More than 50 appliances', price: 'Custom quotation', custom: true }
    ]}],
    faqs: [{ q: 'Do you count extension leads?', a: 'Yes. Each portable item that requires testing is included in the total appliance count.' }]
  },
  {
    slug: 'gas-safety-certificate', category: 'gas-safety-services', name: 'Domestic Gas Safety Certificate', shortName: 'Gas Safety Certificate',
    summary: 'Domestic gas-appliance checks and an annual gas safety certificate.',
    description: 'A Gas Safe registered engineer checks the specified domestic gas appliances, meter controls and gas tightness, then confirms the resulting paperwork.',
    price: 'From £20', priceNote: 'Meter-only service is not a Gas Safety Certificate.', icon: 'Flame', image: photo(34938442),
    includes: ['Emergency control valve check', 'Gas-meter tightness test', 'Testing of included gas appliances where applicable', 'CP12 documentation where required'],
    pricing: [
      { title: 'Meter-only check', note: 'No Gas Safety Certificate is provided because no gas appliances are tested.', rows: [{ label: 'Meter-only tightness check', price: '£20' }] },
      { title: 'Domestic gas appliance testing', rows: [{ label: '1 gas appliance', price: '£50' }, { label: '2 gas appliances', price: '£60' }, { label: '3 gas appliances', price: '£70' }] },
      { title: 'Gas Safety Certificate with boiler service', rows: [{ label: 'GSC with boiler service', price: '£84.99' }] }
    ],
    faqs: [{ q: 'Does a meter-only booking provide a Gas Safety Certificate?', a: 'No. It checks the meter and emergency control valve only and is not a substitute for appliance testing.' }]
  },
  {
    slug: 'commercial-gas-safety-certificate', category: 'gas-safety-services', name: 'Commercial Gas Safety Certificate (CP42)', shortName: 'Commercial Gas Certificate',
    summary: 'Commercial gas safety checks based on the number of appliances.',
    description: 'A commercial gas safety inspection checks the listed gas appliances, associated meter controls and relevant gas safety requirements for the commercial premises.',
    price: 'From £199.99', priceNote: 'Based on one gas appliance.', icon: 'Flame', image: photo(34938442),
    includes: ['Commercial gas-appliance testing', 'Emergency control valve check', 'Gas-meter safety checks', 'Commercial gas safety documentation'],
    pricing: [{ title: 'Commercial gas safety certificate', note: 'For more than 8 appliances, request a custom quotation.', rows: [
      { label: '1 gas appliance', price: '£199.99' }, { label: '2 gas appliances', price: '£239.99' }, { label: '3 gas appliances', price: '£269.99' },
      { label: '4 gas appliances', price: '£299.99' }, { label: '5 gas appliances', price: '£339.99' }, { label: '6 gas appliances', price: '£399.99' },
      { label: '7 gas appliances', price: '£439.99' }, { label: '8 gas appliances', price: '£499.99' }, { label: 'More than 8 gas appliances', price: 'Custom quotation', custom: true }
    ]}],
    faqs: [{ q: 'What is included in the appliance count?', a: 'Boilers, hobs, cookers, fires and other installed gas appliances are included according to the confirmed commercial equipment list.' }]
  },
  {
    slug: 'fire-safety-certificate', category: 'fire-safety-services', name: 'Fire Safety Certificate', shortName: 'Fire Safety Certificate',
    summary: 'Testing and certification for smoke and heat alarms, with optional fire alarm panel testing.',
    description: 'We inspect and test smoke/heat alarm arrangements, with separate pricing for stand-alone alarm testing and systems that also include a fire alarm panel.',
    price: 'From £55', priceNote: 'Based on up to three smoke or heat alarms.', icon: 'Bell', image: photo(878832),
    includes: ['Smoke and heat alarm testing', 'Alarm-panel testing where selected', 'System condition record', 'Advice on alarm faults and coverage'],
    pricing: [
      { title: 'Smoke / heat alarm testing', rows: [{ label: 'Up to 3 alarms', price: '£55' }, { label: '3–6 alarms', price: '£90' }, { label: '6–9 alarms', price: '£125' }, { label: '9–12 alarms', price: '£160' }, { label: '12–15 alarms', price: '£195' }, { label: '15–18 alarms', price: '£230' }, { label: '18–21 alarms', price: '£265' }] },
      { title: 'Fire alarm panel testing with smoke / heat alarms', rows: [{ label: 'Panel plus up to 3 alarms', price: '£75' }, { label: 'Panel plus 3–6 alarms', price: '£110' }, { label: 'Panel plus 6–9 alarms', price: '£145' }, { label: 'Panel plus 9–12 alarms', price: '£180' }, { label: 'Panel plus 12–15 alarms', price: '£215' }, { label: 'Panel plus 15–18 alarms', price: '£230' }, { label: 'Panel plus 18–21 alarms', price: '£265' }] }
    ],
    faqs: [{ q: 'Which package should I select?', a: 'Select the stand-alone smoke/heat alarm package unless a fire alarm panel also requires testing.' }]
  },
  {
    slug: 'fire-risk-assessment', category: 'fire-safety-services', name: 'Fire Risk Assessment (FRA)', shortName: 'Fire Risk Assessment',
    summary: 'Residential and commercial fire-risk assessments with a clear action report.',
    description: 'A fire risk assessment reviews fire hazards, escape routes, detection, alarms, doors and management arrangements for the relevant property or communal area.',
    price: 'From £74', priceNote: 'Studio residential assessment. Paid parking or Congestion Charges may apply.', icon: 'ShieldCheck', image: photo(3108524),
    includes: ['Site fire-risk review', 'Written assessment and action findings', 'Escape-route and fire-safety observations', 'Review recommendations'],
    pricing: [
      { title: 'Residential fire risk assessment', rows: [{ label: 'Studio apartment', price: '£74' }, { label: 'Communal area, 1–3 floors', price: '£129.99' }, { label: 'Communal area, 3–6 floors', price: '£149.99' }, { label: '1–3 bedrooms', price: '£139.99' }, { label: '4 bedrooms', price: '£179.99' }, { label: '5 bedrooms', price: '£189.99' }, { label: '6 bedrooms', price: '£249.99' }, { label: '7 bedrooms', price: '£299.99' }, { label: '8 bedrooms', price: '£349.99' }, { label: 'More than 6 bedrooms or taller building', price: 'Custom quotation', custom: true }] },
      { title: 'Commercial communal areas', rows: [{ label: 'Up to 3 floors', price: '£149.99' }, { label: '3–5 floors', price: '£189.99' }, { label: '5–10 floors', price: '£279.99' }] },
      { title: 'Commercial buildings', rows: [{ label: '1–3 floors', price: '£249.99' }, { label: '3–5 floors', price: '£369.99' }, { label: '5–8 floors', price: '£459.99' }, { label: '8–12 floors', price: '£539.99' }, { label: 'More than 12 floors', price: 'Custom quotation', custom: true }] }
    ],
    faqs: [{ q: 'Which residential or commercial type should I book?', a: 'Select the type matching the property and tell us its size, bedrooms or floors when booking.' }]
  },
  {
    slug: 'fire-alarm-installation', category: 'fire-safety-services', name: 'Smoke / Heat Grade D Fire Alarm Installation', shortName: 'Fire Alarm Installation',
    summary: 'Supply and installation of Grade D smoke or heat alarms.',
    description: 'We install Grade D smoke/heat alarms using surface-mounted trunking. The price is charged per alarm and includes labour, materials and installation.',
    price: '£209.99 per alarm', priceNote: 'Per Smoke/Heat Grade D alarm. Paid parking or Congestion Charges may apply.', icon: 'Bell', image: photo(878832),
    includes: ['Supply of the alarm', 'Surface-mounted trunking installation', 'Labour and electrical connection', 'Alarm installation testing'],
    pricing: [{ title: 'Fire alarm installation', note: 'Existing alarm-system faults may require a separate diagnostic appointment.', rows: [{ label: '1 Smoke/Heat Grade D alarm', price: '£209.99' }, { label: 'Multiple alarm installation', price: 'Book by quantity and confirm during booking' }] }],
    faqs: [{ q: 'Is the price per alarm?', a: 'Yes. £209.99 applies to each Smoke/Heat Grade D alarm, including labour and materials for the advertised installation method.' }]
  },
  {
    slug: 'fire-door-certificate', category: 'fire-safety-services', name: 'Fire Door Certificate', shortName: 'Fire Door Certificate',
    summary: 'Fire door inspection and certification pricing from £120.',
    description: 'A fire door certificate covers the inspection and certification service for the stated door. Confirm the number and condition of doors when booking.',
    price: 'From £120', priceNote: 'All-inclusive service with additional parking or Congestion Charges if applicable.', icon: 'DoorClosed', image: photo(30445560),
    includes: ['Fire-door inspection', 'Visible condition and certificate review', 'Recorded inspection result', 'Advice on observed defects where applicable'],
    pricing: [{ title: 'Fire door certificate', rows: [{ label: 'Fire door certificate', price: '£120' }] }],
    faqs: [{ q: 'Does the price include remedial work?', a: 'No. Any separate replacement, repair or remedial work is priced after the inspection findings.' }]
  },
  {
    slug: 'fire-extinguisher-test', category: 'fire-safety-services', name: 'Fire Extinguisher Testing', shortName: 'Fire Extinguisher Test',
    summary: 'Inspection and testing of portable fire extinguishers.',
    description: 'Testing is priced according to the total number of portable fire extinguishers at the property.',
    price: 'From £80', priceNote: 'Based on 1–3 extinguishers.', icon: 'ShieldCheck', image: photo(5840501),
    includes: ['Visual inspection of extinguishers', 'Basic testing and condition check', 'Service record where applicable', 'Advice on replacement or remedial action'],
    pricing: [{ title: 'Fire extinguisher testing', note: 'More than 20 extinguishers requires a custom quotation.', rows: [{ label: '1–3 extinguishers', price: '£80' }, { label: '3–6 extinguishers', price: '£100' }, { label: '6–10 extinguishers', price: '£135' }, { label: '10–15 extinguishers', price: '£175' }, { label: '15–20 extinguishers', price: '£205' }, { label: 'More than 20 extinguishers', price: 'Custom quotation', custom: true }] }],
    faqs: [{ q: 'How is the quantity measured?', a: 'Count all portable fire extinguishers that require inspection at the property.' }]
  },
  {
    slug: 'asbestos-survey', category: 'asbestos-survey', name: 'Asbestos Survey', shortName: 'Asbestos Survey',
    summary: 'Asbestos sampling and survey based on the number of samples required.',
    description: 'An asbestos survey assesses identified areas and samples materials for laboratory analysis. The final requirements depend on the property and survey scope.',
    price: 'From £239.99', priceNote: 'Based on one sample.', icon: 'HardHat', image: photo(8204946),
    includes: ['Survey and accessible-area inspection', 'Asbestos sampling as selected', 'Survey findings and report', 'Advice on managing identified materials'],
    pricing: [{ title: 'Asbestos survey samples', note: 'For more than 6 samples, request a custom quotation.', rows: [{ label: '1 sample', price: '£239.99' }, { label: '2 samples', price: '£269.99' }, { label: '3 samples', price: '£299.99' }, { label: '4 samples', price: '£329.99' }, { label: '5 samples', price: '£359.99' }, { label: '6 samples', price: '£389.99' }, { label: 'More than 6 samples', price: 'Custom quotation', custom: true }] }],
    faqs: [{ q: 'How many samples are needed?', a: 'The surveyor will confirm the required sampling scope after reviewing the property and suspected materials.' }]
  },
  {
    slug: 'residential-epc', category: 'energy-performance-certificate', name: 'Residential Energy Performance Certificate (EPC)', shortName: 'Residential EPC',
    summary: 'A government-registered EPC for residential properties.',
    description: 'A domestic EPC assessment reviews the property’s energy performance and provides a rating and improvement recommendations.',
    price: 'From £89.99', priceNote: 'Studio apartment. Paid parking or Congestion Charges may apply.', icon: 'FileText', image: photo(12504321),
    includes: ['Residential energy assessment', 'Property energy-rating calculation', 'Official EPC lodgement', 'Improvement recommendations'],
    pricing: [{ title: 'Residential EPC', note: 'Properties with more than 5 bedrooms require a custom quotation.', rows: [{ label: 'Studio apartment', price: '£89.99' }, { label: '1–3 bedrooms', price: '£109.99' }, { label: '4 bedrooms', price: '£129.99' }, { label: '5 bedrooms', price: '£149.99' }, { label: 'More than 5 bedrooms', price: 'Custom quotation', custom: true }] }],
    faqs: [{ q: 'How long is an EPC valid?', a: 'An EPC is generally valid for ten years, subject to changes and applicable requirements.' }]
  },
  {
    slug: 'commercial-epc', category: 'commercial-epc', name: 'Commercial Energy Performance Certificate (EPC)', shortName: 'Commercial EPC',
    summary: 'A commercial EPC priced by property floor area.',
    description: 'A commercial energy assessment measures and rates the property’s energy performance and records improvement recommendations.',
    price: 'From £250', priceNote: 'Based on floor area up to 50 m².', icon: 'FileText', image: photo(12504321),
    includes: ['Commercial energy assessment', 'Floor-area and building-system review', 'Official EPC lodgement', 'Improvement recommendations'],
    pricing: [{ title: 'Commercial EPC floor area', note: 'More than 850 m² or complex properties require a custom quotation.', rows: [{ label: 'Up to 50 m²', price: '£250' }, { label: '50–100 m²', price: '£320' }, { label: '100–250 m²', price: '£399' }, { label: '250–350 m²', price: '£499' }, { label: '350–450 m²', price: '£599' }, { label: '450–550 m²', price: '£699' }, { label: '550–650 m²', price: '£799' }, { label: '650–750 m²', price: '£899' }, { label: '750–850 m²', price: '£999' }, { label: 'More than 850 m² / complex property', price: 'Custom quotation', custom: true }] }],
    faqs: [{ q: 'How is commercial EPC pricing calculated?', a: 'Commercial EPC prices are based primarily on the approximate usable floor area, with a custom quote for complex buildings.' }]
  },
  {
    slug: 'legionella-residential', category: 'legionella-risk-assessment', name: 'Residential Legionella Risk Assessment', shortName: 'Residential Legionella Risk Assessment',
    summary: 'A Legionella risk assessment for residential water systems.',
    description: 'We assess the property’s hot and cold water system, outlets and relevant risk controls, then provide an action-focused assessment.',
    price: 'From £210', priceNote: 'Final price may depend on property and assessment requirements.', icon: 'Droplets', image: photo(28887606),
    includes: ['Water-system risk review', 'Temperature and control observations', 'Assessment report and actions', 'Review recommendations'],
    pricing: [{ title: 'Residential Legionella assessment', rows: [{ label: 'Residential assessment', price: 'From £210' }, { label: 'Complex or unusual property', price: 'Custom quotation', custom: true }] }],
    faqs: [{ q: 'Can the exact price change?', a: 'Yes. The assessor must confirm the size and complexity of the water system before a final quotation.' }]
  },
  {
    slug: 'legionella-commercial', category: 'legionella-risk-assessment', name: 'Commercial Legionella Risk Assessment', shortName: 'Commercial Legionella Risk Assessment',
    summary: 'A Legionella risk assessment for commercial water systems.',
    description: 'We review the commercial water system, outlets, storage and control measures to identify Legionella risks and recommend proportionate actions.',
    price: 'From £250', priceNote: 'Final price may depend on property and assessment requirements.', icon: 'Droplets', image: photo(28887606),
    includes: ['Commercial water-system assessment', 'Storage and outlet risk review', 'Written findings and action recommendations', 'Control-measure review'],
    pricing: [{ title: 'Commercial Legionella assessment', rows: [{ label: 'Commercial assessment', price: 'From £250' }, { label: 'Complex commercial system', price: 'Custom quotation', custom: true }] }],
    faqs: [{ q: 'What information is needed for the quote?', a: 'The property type, number of outlets, water storage and complexity of the system will determine any final quotation.' }]
  }
];

const CATEGORY_META: Omit<ServiceCategory, 'services'>[] = [
  { slug: 'electrical-safety-services', name: 'Electrical Safety Services', shortName: 'Electrical Safety', summary: 'Testing, diagnostics, installations and fixed-electrical compliance.', icon: 'Zap' },
  { slug: 'gas-safety-services', name: 'Gas Safety Services', shortName: 'Gas Safety', summary: 'Domestic and commercial gas safety checks.', icon: 'Flame' },
  { slug: 'fire-safety-services', name: 'Fire Safety Services', shortName: 'Fire Safety', summary: 'Fire certificates, assessments, alarms, doors and extinguisher testing.', icon: 'ShieldCheck' },
  { slug: 'asbestos-survey', name: 'Asbestos Survey', shortName: 'Asbestos Survey', summary: 'Asbestos sampling and survey reports.', icon: 'HardHat' },
  { slug: 'energy-performance-certificate', name: 'Energy Performance Certificate', shortName: 'Energy Performance Certificate', summary: 'Residential energy assessments and EPC lodgement.', icon: 'FileText' },
  { slug: 'commercial-epc', name: 'Commercial EPC', shortName: 'Commercial EPC', summary: 'Commercial energy certificates based on floor area.', icon: 'FileText' },
  { slug: 'legionella-risk-assessment', name: 'Legionella Risk Assessment', shortName: 'Legionella Risk Assessment', summary: 'Residential and commercial water-system risk assessments.', icon: 'Droplets' }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = CATEGORY_META.map((category) => ({
  ...category,
  services: SERVICES.filter((service) => service.category === category.slug)
}));

export function findService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
