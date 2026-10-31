import { MapPin } from 'lucide-react';
import { Link } from '@/components/Link';
import { PageHero } from '@/components/PageHero';

const AREAS_IMAGE = 'https://images.pexels.com/photos/12504321/pexels-photo-12504321.jpeg?auto=compress&cs=tinysrgb&w=1920';

const CENTRAL = ['Bloomsbury', 'Holborn', 'Fitzrovia', 'Marylebone', 'Covent Garden', 'Soho', 'Clerkenwell', 'Farringdon', 'Barbican', 'The City'];
const EAST = ['Whitechapel', 'Stepney', 'Shoreditch', 'Hackney', 'Bow', 'Mile End', 'Bethnal Green', 'Canary Wharf', 'Limehouse', 'Stratford', 'Poplar', 'Wapping'];

function AreaGroup({ title, description, areas }: { title: string; description: string; areas: string[] }) {
  return (
    <div className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10">
      <h2 className="text-2xl text-ink">{title}</h2>
      <p className="mt-3 font-body text-sm leading-[1.6] text-ink/70">{description}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {areas.map((area) => (
          <li key={area} className="flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 font-body text-sm font-medium text-brand-800 transition hover:bg-brand-700 hover:text-white">
            <MapPin className="h-3.5 w-3.5" />
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas we cover"
        title="Certified inspections across Central and East London"
        intro="Our engineers work throughout the capital's central and eastern boroughs. If your property is not listed, call us to check availability."
        image={AREAS_IMAGE}
      />
      <section className="bg-mist py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <AreaGroup
            title="Central London"
            description="Inspections in the heart of the capital, from Bloomsbury and Holborn to Marylebone and the City."
            areas={CENTRAL}
          />
          <AreaGroup
            title="East London"
            description="Coverage across the East End and beyond, including Hackney, Stratford and the Docklands."
            areas={EAST}
          />
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start gap-4 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-body text-base text-ink/75">Not sure if we cover your postcode?</p>
          <Link to="/contact" className="btn-primary">
            Check my postcode
          </Link>
        </div>
      </section>
    </>
  );
}
