import { ArrowRight, Award, HeartHandshake, Timer } from 'lucide-react';
import { Link } from '@/components/Link';
import { PageHero } from '@/components/PageHero';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/6285110/pexels-photo-6285110.jpeg?auto=compress&cs=tinysrgb&w=1920';
const TEAM_IMAGE = 'https://images.pexels.com/photos/27522902/pexels-photo-27522902.jpeg?auto=compress&cs=tinysrgb&w=1200';

const VALUES = [
  { icon: Award, title: 'Qualified, always', text: 'Every engineer is registered for their discipline and checked before they visit your property.' },
  { icon: Timer, title: 'Respect your time', text: 'Clear appointment windows, on-time arrivals and certificates issued fast so your tenancy keeps moving.' },
  { icon: HeartHandshake, title: 'Plain-English advice', text: 'We explain every finding, what it means for you and what it will cost to fix, with no jargon.' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built by landlords’ compliance specialists"
        intro="Landlord Certificates & Remedials was founded by Muhammad to make compliance simple. We handle the inspections, certificates and remedial work so you can focus on your properties."
        image={ABOUT_IMAGE}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <img src={TEAM_IMAGE} alt="Engineer with clipboard at a rental property" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="text-3xl text-ink sm:text-4xl">One team for every certificate</h2>
            <p className="mt-6 font-body text-base leading-[1.6] text-ink/75">
              Too many landlords juggle five different companies for five different certificates. We created a single point of contact for electrical, gas, fire, water and energy compliance across Central and East London.
            </p>
            <p className="mt-4 font-body text-base leading-[1.6] text-ink/75">
              Whether you own one flat or manage a portfolio of HMOs, you get the same care, the same documentation and the same straight answers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">What we stand for</span>
            <h2 className="text-3xl text-ink sm:text-4xl">Our promise to every landlord</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-3xl bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mb-3 text-xl text-ink">{value.title}</h3>
                <p className="font-body text-sm leading-[1.6] text-ink/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-brand-700 p-10 text-white sm:p-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl text-white sm:text-4xl">Want to see how we can help?</h2>
            <p className="mt-4 font-body text-base leading-[1.6] text-white/80">Tell us about your properties and we will recommend the right certificates and a sensible schedule.</p>
          </div>
          <Link to="/contact" className="btn-accent">
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
