import { videos } from '../lib/data';
import { VideoGrid } from '@/components/video/video-grid';

export default function Home() {
  return (
    <main className="container px-6">
      <div className="max-w-[1800px] mx-auto">
        <h1 className="mb-6 text-2xl font-bold">Recommended</h1>
        <VideoGrid videos={videos} />
      </div>
    </main>
  );
}
