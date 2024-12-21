import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="rounded-full" />;
}

interface AvatarFallbackProps {
  children: React.ReactNode;
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return <div className="rounded-full bg-gray-200 flex items-center justify-center">{children}</div>;
}

interface AvatarImageProps extends AvatarProps {}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return <Avatar src={src} alt={alt} />;
} 
