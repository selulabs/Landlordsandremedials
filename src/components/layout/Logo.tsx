import { SITE } from '@/lib/site';

export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-ink';
  return (
    <span className="flex items-center gap-3">
      <img
        src="https://res.cloudinary.com/dodviui8n/image/upload/v1793701298/Interlocking_Emerald_Ribbon_Rings.png"
        alt="Landlords Certificates & Remedials logo mark"
        className="h-10 w-10 object-contain"
      />
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-heading text-[15px] font-bold tracking-tight">{SITE.shortName}</span>
        <span className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.16em] opacity-80">& Remedials</span>
      </span>
    </span>
  );
}
