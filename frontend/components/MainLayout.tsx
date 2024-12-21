interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="ml-56 pt-4">
      {children}
    </div>
  );
} 
