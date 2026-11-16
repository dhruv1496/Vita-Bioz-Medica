import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-20" role="main">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1815',
            color: '#faf9f6',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 20px 48px rgba(26, 24, 21, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#16785f',
              secondary: '#faf9f6',
            },
          },
          error: {
            iconTheme: {
              primary: '#c0392b',
              secondary: '#faf9f6',
            },
          },
        }}
      />
    </div>
  );
}

export default Layout;