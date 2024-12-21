'use client';

import { useParams } from 'next/navigation';
import { videos } from '@/lib/data';
import { VideoPlayer } from '@/components/video/video-player';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

export default function VideoPage() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="container py-6">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <VideoPlayer embedUrl={video.embedUrl} title={video.title} />
          <div className="mt-4 space-y-4">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={video.channelAvatarUrl}
                    alt={video.channelName}
                  />
                  <AvatarFallback>{video.channelName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">{video.channelName}</h2>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(video.uploadDate), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              <Button>Subscribe</Button>
            </div>
            <p className="text-muted-foreground">{video.description}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Related Videos</h2>
          <div className="space-y-4">
            {videos
              .filter((v) => v.id !== id)
              .slice(0, 5)
              .map((video) => (
                <div
                  key={video.id}
                  className="flex space-x-3 rounded-lg hover:bg-accent"
                >
                  <div className="aspect-video w-40 flex-none overflow-hidden rounded">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1 py-1">
                    <h3 className="line-clamp-2 text-sm font-medium">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {video.channelName}
                    </p>
                    <div className="flex text-xs text-muted-foreground">
                      <span>{video.views.toLocaleString()} views</span>
                      <span className="mx-1">•</span>
                      <span>
                        {formatDistanceToNow(new Date(video.uploadDate), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
