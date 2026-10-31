import type { ReactNode } from 'react';

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900/95 via-brand-800/85 to-ink/80" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <span className="eyebrow !text-brand-300">{eyebrow}</span>
        <h1 className="max-w-3xl text-4xl text-white sm:text-5xl lg:text-[56px]">{title}</h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-[1.6] text-white/80 sm:text-lg">{intro}</p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
