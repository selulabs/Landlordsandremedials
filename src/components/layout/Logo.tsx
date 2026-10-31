import { ShieldCheck } from 'lucide-react';
import { SITE } from '@/lib/site';

export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-ink';
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-brand-400 shadow-sm">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-heading text-[15px] font-bold tracking-tight">{SITE.shortName}</span>
        <span className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.16em] opacity-80">& Remedials</span>
      </span>
    </span>
  );
}
