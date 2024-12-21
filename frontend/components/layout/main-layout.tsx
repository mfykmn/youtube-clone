interface MainLayoutProps {
    children: React.ReactNode;
  }
  
  export function MainLayout({ children }: MainLayoutProps) {
    return (
      <div className="pl-72 pt-4">
        {children}
      </div>
    );
  }
