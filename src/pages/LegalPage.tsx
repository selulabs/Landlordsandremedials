import { LEGAL_DOCUMENTS, type LegalDocument } from '@/data/legal';

const LEGAL_IMAGE = 'https://images.pexels.com/photos/28887606/pexels-photo-28887606.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function LegalPage({ slug }: { slug: LegalDocument['slug'] }) {
  const doc = LEGAL_DOCUMENTS[slug];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-900 pt-36 pb-16 text-white">
        <img src={LEGAL_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <span className="eyebrow !text-brand-300">Legal</span>
          <h1 className="text-4xl text-white sm:text-5xl">{doc.title}</h1>
          <p className="mt-4 font-body text-sm text-white/70">{doc.updated}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <div className="space-y-12">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-xl text-ink">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="font-body text-base leading-[1.6] text-ink/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
