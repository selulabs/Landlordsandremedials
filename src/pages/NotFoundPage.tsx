import { ArrowRight } from 'lucide-react';
import { Link } from '@/components/Link';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 pt-32 pb-20 text-center">
      <span className="font-heading text-7xl font-bold text-brand-100">404</span>
      <h1 className="text-3xl text-ink sm:text-4xl">We could not find that page</h1>
      <p className="max-w-md font-body text-base leading-[1.6] text-ink/70">The page may have moved. Browse our services or get in touch and we will help.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-brand-700">
          View services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
