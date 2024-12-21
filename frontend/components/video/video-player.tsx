interface VideoPlayerProps {
    embedUrl: string;
    title: string;
  }
  
  export function VideoPlayer({ embedUrl, title }: VideoPlayerProps) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }
