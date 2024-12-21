import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { MainLayout } from '../components/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VideoHub - Share and Watch Videos',
  description: 'A modern video sharing platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <Sidebar />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
