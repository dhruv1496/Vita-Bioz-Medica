import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="mb-8">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-gray-400 font-serif font-bold text-4xl"
              aria-hidden="true"
            >
              404
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed mb-10"
          >
            Sorry, we couldn't find the page you're looking for. It might have been moved
            or doesn't exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <Link to="/">
                <Home className="h-5 w-5 mr-2" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                <Search className="h-5 w-5 mr-2" aria-hidden="true" />
                Browse Products
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-100"
          >
            <p className="text-gray-500 text-sm mb-4">Or explore our main sections:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/products', label: 'Products' },
                { href: '/about', label: 'About Us' },
                { href: '/quality', label: 'Quality' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all border border-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

export default NotFound;