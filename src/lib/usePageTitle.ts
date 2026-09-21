import { useEffect } from 'react';

const SITE = 'Shri Gaurdas Ji Maharaj';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Katha, Bhajan & Satsang, Vrindavan`;
  }, [title]);
}
