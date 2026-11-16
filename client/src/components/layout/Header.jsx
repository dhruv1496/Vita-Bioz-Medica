import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Shield, Leaf, Truck, Headphones } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' },
];

const trustIndicators = [
  { icon: Shield, label: 'GMP Certified', description: 'International standards' },
  { icon: Leaf, label: '100% Natural', description: 'Ayurvedic formulations' },
  { icon: Truck, label: 'Pan India Delivery', description: 'Free shipping above ₹999' },
  { icon: Headphones, label: 'Expert Support', description: 'Mon-Sat 9AM-6PM' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="relative" aria-label="Main navigation">
        <Container>
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary font-serif font-semibold text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
              aria-label="Vita Bioz Medica - Home"
            >
              <span className="relative flex h-10 w-10 items-center justify-center">
                <svg className="h-10 w-10 text-primary" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 8v12M8 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">V</span>
                </span>
              </span>
              <span className="hidden sm:block">Vita Bioz Medica</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'relative py-2 text-sm font-medium transition-colors duration-150',
                    location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  )}
                  aria-current={location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href)) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="primary" size="sm" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </Container>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-2 font-serif font-semibold text-xl text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Vita Bioz Medica
                </Link>
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex-1 p-4 overflow-y-auto" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors',
                          location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                            ? 'bg-primary-muted text-primary'
                            : 'text-gray-700 hover:bg-gray-100'
                        )}
                        aria-current={location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href)) ? 'page' : undefined}
                      >
                        {item.name}
                        {item.href !== '/' && (
                          <ChevronDown
                            className={cn(
                              'h-5 w-5 text-gray-400 transition-transform',
                              mobileDropdown === item.name && 'rotate-180'
                            )}
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <div className="space-y-3">
                  {trustIndicators.map(({ icon: Icon, label, description }) => (
                    <div key={label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-gray-900">{label}</p>
                        <p className="text-xs text-gray-500">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="primary" className="mt-6" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</Link>
                </Button>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>

      {scrolled && (
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true" />
      )}
    </header>
  );
}

export default Header;