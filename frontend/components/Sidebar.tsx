import { Home, Compass, PlaySquare, Clock, ThumbsUp, History } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

function SidebarItem({ icon, label, href }: SidebarItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-start" asChild>
      <Link href={href} className="flex items-center space-x-3">
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  );
}

export function Sidebar() {
  return (
    <div className="fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r bg-background px-3">
      <div className="space-y-6 py-6">
        <div className="space-y-1">
          <SidebarItem icon={<Home className="h-5 w-5" />} label="Home" href="/" />
          <SidebarItem icon={<Compass className="h-5 w-5" />} label="Explore" href="/explore" />
          <SidebarItem icon={<PlaySquare className="h-5 w-5" />} label="Subscriptions" href="/subscriptions" />
        </div>
        <div className="space-y-3">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Library</h2>
          <div className="space-y-1">
            <SidebarItem icon={<History className="h-5 w-5" />} label="History" href="/history" />
            <SidebarItem icon={<Clock className="h-5 w-5" />} label="Watch Later" href="/watch-later" />
            <SidebarItem icon={<ThumbsUp className="h-5 w-5" />} label="Liked Videos" href="/liked" />
          </div>
        </div>
      </div>
    </div>
  );
} 
