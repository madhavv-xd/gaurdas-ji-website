import { Link, useParams } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import VideoGallery from '@/components/VideoGallery';
import NotFound from '@/pages/NotFound';
import { usePlaylists } from '@/lib/usePlaylists';
import { IMAGES } from '@/data/content';

// One katha playlist: its videos in day order, playable here (from the Kathas page's cards).
export default function KathaPlaylist() {
  const { id } = useParams();
  const { lists, failed } = usePlaylists();
  const playlist = lists?.find((p) => p.id === id);
  // an unknown or unticked playlist, once the list is in
  if (lists && !playlist) return <NotFound />;

  return (
    <div>
      <PageHero
        breadcrumb="Katha"
        title={playlist?.title ?? 'Katha'}
        subtitle={playlist && `${playlist.videos.length} ${playlist.videos.length === 1 ? 'video' : 'videos'}`}
        crumbs={[{ label: 'All Kathas', to: '/all-kathas' }]}
        image={playlist?.thumbnail || IMAGES.heroKatha}
        vtName={`pl-${id}`}
      />

      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          {failed ? (
            <p className="text-center text-ink-400 py-10">Couldn’t load this katha. Check your connection and refresh.</p>
          ) : !playlist ? (
            <p className="text-center text-ink-400 py-10" aria-live="polite">Loading videos…</p>
          ) : playlist.videos.length ? (
            <VideoGallery
              items={playlist.videos.map((v, i) => ({ id: i, title: v.title, yt: v.yt }))}
              searchPlaceholder="Search this katha’s videos"
            />
          ) : (
            <div className="text-center py-10">
              <p className="text-ink-400">No videos in this katha yet.</p>
              <Link to="/all-kathas" className="btn-outline mt-4">All kathas</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
