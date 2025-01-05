import { useState } from 'react';
import { useServerAction } from 'next-server-components';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = async () => {
    const { data } = await fetch('/api/upload', {
      method: 'POST',
    }).then((res) => res.json());

    setVideoUrl(data.link);
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload Video</button>
      {videoUrl && <video src={videoUrl} controls />}
    </div>
  );
}

export const getServerAction = useServerAction(async () => {
  const Vimeo = require('vimeo').Vimeo;
  const client = new Vimeo(
    process.env.VIMEO_CLIENT_ID,
    process.env.VIMEO_CLIENT_SECRET,
    process.env.VIMEO_ACCESS_TOKEN
  );

  const uploadVideo = () => {
    return new Promise((resolve, reject) => {
      client.upload(
        './path/to/video.mp4',
        {
          name: 'My Video',
          description: 'This is a video',
        },
        (uri) => {
          resolve(uri);
        },
        (bytesUploaded, bytesTotal) => {
          console.log(`${bytesUploaded} / ${bytesTotal}`);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  const uri = await uploadVideo();

  return {
    data: {
      link: uri,
    },
  };
});
