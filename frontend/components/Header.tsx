import { Play } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-6 w-6" />
            <span className="font-bold">VideoHub</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
} 
