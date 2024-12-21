export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  channelName: string;
  channelAvatarUrl: string;
  uploadDate: string;
  views: number;
}

export interface Channel {
  id: string;
  name: string;
  avatarUrl: string;
  subscriberCount: number;
}
