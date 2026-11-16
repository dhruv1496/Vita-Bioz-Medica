import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf,
  Shield,
  Truck,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Quality Assurance', href: '/quality' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/contact#faqs' },
    { name: 'Shipping Policy', href: '/contact' },
    { name: 'Return Policy', href: '/contact' },
    { name: 'Privacy Policy', href: '/contact' },
  ],
  resources: [
    { name: 'Health Articles', href: '/about' },
    { name: 'Ayurveda Guide', href: '/about' },
    { name: 'Certifications', href: '/quality' },
    { name: 'Partnership Inquiry', href: '/contact' },
  ],
};

const contactInfo = {
  address: 'Plot No. 45, Industrial Area, Phase II, Panchkula - 134113, Haryana, India',
  phone: '+91-172-4567890',
  email: 'info@vitabiozmedica.com',
  supportEmail: 'support@vitabiozmedica.com',
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/vitabiozmedica', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/vitabiozmedica', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/vitabiozmedica', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/vitabiozmedica', icon: Twitter },
  { name: 'YouTube', href: 'https://youtube.com/@vitabiozmedica', icon: Youtube },
];

const trustBadges = [
  { icon: Shield, label: 'GMP Certified', desc: 'WHO-GMP approved facility' },
  { icon: Leaf, label: '100% Natural', desc: 'Pure Ayurvedic herbs' },
  { icon: Truck, label: 'Free Shipping', desc: 'On orders above ₹999' },
  { icon: Headphones, label: 'Expert Support', desc: 'Mon-Sat 9AM-6PM IST' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <Container>
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Link to="/" className="flex items-center gap-2 font-serif font-semibold text-2xl text-white mb-6" aria-label="Vita Bioz Medica - Home">
                <span className="relative flex h-10 w-10 items-center justify-center">
                  <svg className="h-10 w-10 text-secondary" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 8v12M8 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">V</span>
                  </span>
                </span>
                <span>Vita Bioz Medica</span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-xs">
                Bridging ancient Ayurvedic wisdom with modern science to create premium natural healthcare solutions for a healthier tomorrow.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-secondary hover:text-white transition-all duration-200"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Company</h3>
              <nav aria-label="Company links">
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {link.name}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Support</h3>
              <nav aria-label="Support links">
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {link.name}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Resources</h3>
              <nav aria-label="Resource links">
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {link.name}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Contact Us</h3>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-gray-400 text-sm leading-relaxed">{contactInfo.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">{contactInfo.email}</a>
                </div>
              </address>
            </motion.div>
          </div>

          <Separator className="my-10 border-gray-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Why Choose Vita Bioz Medica</h3>
              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl">
                    <Icon className="h-6 w-6 text-secondary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-white text-sm">{label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="lg:col-span-3"
            >
              <h3 className="font-serif text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for health tips, new product launches, and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md" onSubmit={(e) => { e.preventDefault(); alert('Newsletter subscription coming soon!'); }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  aria-label="Email address"
                  required
                />
                <Button variant="secondary" type="submit" className="whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
              <p className="text-gray-600 text-xs mt-3">We respect your privacy. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </div>
      </Container>

      <div className="bg-gray-950 border-t border-gray-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Vita Bioz Medica. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;