import { useEffect, useState } from 'react';

export type Location = { pathname: string; search: string };

const readLocation = (): Location => ({
  pathname: window.location.pathname,
  search: window.location.search,
});

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    window.scrollTo({ top: 0 });
    return;
  }
  window.history.pushState({}, '', url.pathname + url.search);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0 });
}

export function useLocation(): Location {
  const [location, setLocation] = useState<Location>(readLocation);

  useEffect(() => {
    const sync = () => setLocation(readLocation());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return location;
}
