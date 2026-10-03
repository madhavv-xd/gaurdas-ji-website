import { useEffect, useState } from 'react';
import { EKADASHI_SHEET_URL } from '@/data/content';

export type Playlist = { id: string; title: string; thumbnail: string; videos: { yt: string; title: string }[] };

// Last list this browser saw: shown instantly while Apps Script (often 5–20 s) sends the fresh one.
const CACHE_KEY = 'katha-playlists-v1';
const readCache = (): Playlist[] | null => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? 'null');
  } catch {
    return null;
  }
};

// One request per page load, shared by the Kathas page and every playlist page.
let request: Promise<Playlist[]> | null = null;

// Playlists ticked in the sheet's Playlists tab, each with its ticked videos (see playlists() in the Apps Script).
// failed is only true when there is nothing to show at all.
export function usePlaylists() {
  const [lists, setLists] = useState<Playlist[] | null>(readCache);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    request ??= fetch(`${EKADASHI_SHEET_URL}?view=playlists`)
      .then((r) => r.json())
      // older deployments answer with the kirtan list (no playlists) or a video count instead of the videos
      .then((d) =>
        Array.isArray(d.playlists) ? d.playlists.map((p: Playlist) => ({ ...p, videos: Array.isArray(p.videos) ? p.videos : [] })) : []
      );
    let live = true;
    request
      .then((fresh) => {
        if (!live) return;
        setLists(fresh);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(fresh));
        } catch {
          /* storage blocked or full: the list still shows */
        }
      })
      .catch(() => {
        request = null; // let the next page try again
        if (live) setFailed(true);
      });
    return () => {
      live = false;
    };
  }, []);

  return { lists, failed: failed && !lists };
}
