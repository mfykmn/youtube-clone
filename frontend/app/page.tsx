import { MainLayout } from '../components/MainLayout';
import { Sidebar } from '../components/Sidebar';
import { VideoCard } from '../components/VideoCard';
import { videos } from '../lib/data';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <main className="container px-4">
            <div className="max-w-[1800px] mx-auto">
              <h1 className="mb-6 text-2xl font-bold">Recommended</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
