import { useSearchParams } from 'react-router-dom';

// Search text lives in the URL (?q=) so Back, refresh and shared links keep it.
export function useQueryParam(key = 'q') {
  const [params, setParams] = useSearchParams();
  const value = params.get(key) ?? '';
  const setValue = (v: string) =>
    setParams(
      (p) => {
        if (v) p.set(key, v);
        else p.delete(key);
        return p;
      },
      { replace: true }
    );
  return [value, setValue] as const;
}
