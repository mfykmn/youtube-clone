import { Video } from '../types';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/videos/${video.id}`}>
      <Card className="overflow-hidden transition-all hover:scale-[1.02]">
        <div className="aspect-video overflow-hidden">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <div className="h-9 w-9">
              <AvatarImage src={video.channelAvatarUrl} alt={video.channelName} />
              <AvatarFallback>{video.channelName[0]}</AvatarFallback>
            </div>
            <div className="space-y-1">
              <h3 className="line-clamp-2 font-medium leading-tight">
                {video.title}
              </h3>
              <div className="flex flex-col text-sm text-muted-foreground">
                <span>{video.channelName}</span>
                <div className="flex items-center space-x-1">
                  <span>{video.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>
                    {formatDistanceToNow(new Date(video.uploadDate), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 
