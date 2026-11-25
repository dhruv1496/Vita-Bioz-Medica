import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Container } from '../ui/Container';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Formulations', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm'
          : isHome
          ? 'bg-transparent py-6'
          : 'bg-white py-5 border-b border-gray-100'
      )}
      role="banner"
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className={cn(
                'flex items-center gap-3 transition-colors',
                !scrolled && isHome ? 'text-white' : 'text-black'
              )}
              aria-label="Vita Bioz Medica"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center p-1 flex-shrink-0 border border-gray-100">
                <img
                  src="/logo-icon.png"
                  alt="Vita Bioz Medica Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl md:text-2xl tracking-tight">Vita Bioz</span>
            </Link>

            {/* Desktop Pill Navigation Bar */}
            <div className="hidden lg:flex items-center">
              <div className="pill-nav">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'text-sm font-semibold transition-colors duration-150',
                      location.pathname === item.href
                        ? 'text-black underline underline-offset-4 decoration-2'
                        : 'text-black/80 hover:text-black'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Pill Counter Badge */}
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                  0
                </span>

                {/* Pill Button Inside Nav */}
                <Link to="/contact" className="pill-btn-white">
                  Consultation
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:!hidden items-center gap-3">
              <Link to="/contact" className="pill-btn text-xs px-4 py-2">
                Consultation
              </Link>
              <button
                type="button"
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                  !scrolled && isHome ? 'bg-white/20 text-white' : 'bg-gray-100 text-black'
                )}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Fullscreen / Slide Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="w-full max-w-sm bg-[#9EE6B2] h-full p-8 flex flex-col justify-between shadow-2xl text-black"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-black/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center p-1 flex-shrink-0">
                        <img src="/logo-icon.png" alt="Vita Bioz Medica Logo" className="w-full h-full object-contain" />
                      </div>
                      <span className="font-bold text-2xl tracking-tight">Vita Bioz</span>
                    </div>
                    <button
                      type="button"
                      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <nav className="mt-8 flex flex-col gap-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'text-2xl font-bold flex items-center justify-between',
                          location.pathname === item.href ? 'text-black underline' : 'text-black/80 hover:text-black'
                        )}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-60" />
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="pt-8 border-t border-black/10 flex flex-col gap-4">
                  <p className="text-sm font-semibold text-black/70">
                    Pure Classical Formulations • WHO-GMP Certified
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="pill-btn-dark w-full py-3.5 text-center"
                  >
                    Book an Appointment +
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
