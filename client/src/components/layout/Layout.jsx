import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';
import { cn } from '../../lib/utils';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className={cn('flex-1', !isHome && 'pt-24')} role="main">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0E0E0E',
            color: '#FFFFFF',
            borderRadius: '9999px',
            padding: '14px 24px',
            fontSize: '14px',
            fontWeight: 600,
          },
          success: {
            iconTheme: {
              primary: '#9EE6B2',
              secondary: '#0E0E0E',
            },
          },
        }}
      />
    </div>
  );
}

export default Layout;
