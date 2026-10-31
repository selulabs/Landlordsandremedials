import { ArrowRight, Bell, Droplets, DoorClosed, FileText, Flame, HardHat, Lightbulb, Plug, ShieldCheck, Wrench, Zap, type LucideIcon } from 'lucide-react';
import { Link } from '@/components/Link';
import type { Service } from '@/data/services';

const ICONS: Record<Service['icon'], LucideIcon> = {
  Zap,
  Flame,
  FileText,
  ShieldCheck,
  DoorClosed,
  Lightbulb,
  Plug,
  Droplets,
  HardHat,
  Bell,
  Wrench,
};

export function ServiceIcon({ name, className = '' }: { name: Service['icon']; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={2} />;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg text-ink">{service.shortName}</h3>
        <p className="font-body text-sm leading-[1.6] text-ink/70">{service.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-heading text-sm font-bold text-brand-700">{service.price}</span>
          <span className="flex items-center gap-1 font-body text-sm font-medium text-ink transition group-hover:gap-2 group-hover:text-brand-700">
            Details
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
