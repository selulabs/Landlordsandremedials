import { SITE } from '@/lib/site';

export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-ink';
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 120 120"
        className="h-16 w-16 shrink-0 overflow-visible"
        role="img"
        aria-label="We commit, we deliver"
      >
        <defs>
          <path id="logo-top-arc" d="M 24,60 A 36,36 0 0,1 96,60" />
          <path id="logo-bottom-arc" d="M 96,60 A 36,36 0 0,1 24,60" />
        </defs>
        <image
          href="https://res.cloudinary.com/dodviui8n/image/upload/v1793701298/Interlocking_Emerald_Ribbon_Rings.png"
          x="28"
          y="28"
          width="64"
          height="64"
        />
        <text fill="#166534" fontSize="10.5" fontWeight="700" letterSpacing="1.4">
          <textPath href="#logo-top-arc" startOffset="50%" textAnchor="middle">WE COMMIT</textPath>
        </text>
        <text fill="#166534" fontSize="10.5" fontWeight="700" letterSpacing="1.4">
          <textPath href="#logo-bottom-arc" startOffset="50%" textAnchor="middle">WE DELIVER</textPath>
        </text>
      </svg>
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-heading text-[15px] font-bold tracking-tight">{SITE.shortName}</span>
        <span className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.16em] opacity-80">& Remedials</span>
      </span>
    </span>
  );
}
