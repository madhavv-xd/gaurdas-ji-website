import { useEffect, useState } from 'react';
import { EKADASHI_SHEET_URL } from '@/data/content';

export type Playlist = { id: string; title: string; thumbnail: string; videos: { yt: string; title: string }[] };

// Last list this browser saw: shown instantly while Apps Script (often 5–20 s) sends the fresh one.
const cacheKey = (view: string) => `katha-${view}-v1`;
const readCache = (view: string): Playlist[] | null => {
  try {
    return JSON.parse(localStorage.getItem(cacheKey(view)) ?? 'null');
  } catch {
    return null;
  }
};

// One request per view per page load, shared by the Kathas page and every playlist page.
const requests: Record<string, Promise<Playlist[]> | undefined> = {};

// Playlists ticked in the sheet's Playlists tab, each with its ticked videos (see playlists() in the Apps Script).
// view = 'playlists' (main channel) or 'nitaiPlaylists' (Nitai Das ji's channel).
// failed is only true when there is nothing to show at all.
export function usePlaylists(view = 'playlists') {
  const [lists, setLists] = useState<Playlist[] | null>(() => readCache(view));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const request = (requests[view] ??= fetch(`${EKADASHI_SHEET_URL}?view=${view}`)
      .then((r) => r.json())
      // older deployments answer with the kirtan list (no playlists) or a video count instead of the videos
      .then((d) =>
        Array.isArray(d.playlists) ? d.playlists.map((p: Playlist) => ({ ...p, videos: Array.isArray(p.videos) ? p.videos : [] })) : []
      ));
    let live = true;
    request
      .then((fresh) => {
        if (!live) return;
        setLists(fresh);
        try {
          localStorage.setItem(cacheKey(view), JSON.stringify(fresh));
        } catch {
          /* storage blocked or full: the list still shows */
        }
      })
      .catch(() => {
        requests[view] = undefined; // let the next page try again
        if (live) setFailed(true);
      });
    return () => {
      live = false;
    };
  }, [view]);

  return { lists, failed: failed && !lists };
}
