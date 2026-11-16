import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const contactMethods = [
  { icon: Phone, label: 'Call Us', value: '+91-172-4567890', href: 'tel:+911724567890', description: 'Mon-Sat 9AM-6PM IST' },
  { icon: Mail, label: 'Email Us', value: 'info@vitabiozmedica.com', href: 'mailto:info@vitabiozmedica.com', description: 'Reply within 24 hours' },
  { icon: MapPin, label: 'Visit Us', value: 'Panchkula, Haryana', href: '/contact', description: 'By appointment only' },
];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#c9a86c_0%,transparent_50%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#16785f_0%,transparent_50%)]" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-primary" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-primary" aria-hidden="true" />

      <Container className="relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Ready to Partner with Us?
            </span>
            <h2 id="cta-heading" className="font-serif text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Let&apos;s Build Healthier<br />
              <span className="text-secondary">Futures Together</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Whether you're a healthcare professional, distributor, or wellness enthusiast,
              we'd love to explore how our Ayurvedic formulations can make a difference.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10" asChild>
                <Link to="/contact">Distribution Inquiry</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <div key={method.label} className="text-center">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <method.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-white/60 text-sm font-medium">{method.label}</p>
                  <a href={method.href} className="text-white font-medium text-sm block mt-1 hover:text-secondary transition-colors">{method.value}</a>
                  <p className="text-white/40 text-xs mt-1">{method.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">For Healthcare Professionals</h3>
                  <p className="text-white/60 text-sm">Access clinical data, samples & prescribing info</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Clinical Documentation</p>
                    <p className="text-white/60 text-sm">COA, stability data, trial summaries</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Product Samples</p>
                    <p className="text-white/60 text-sm">Request evaluation samples for your practice</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Training & Support</p>
                    <p className="text-white/60 text-sm">Product education & marketing materials</p>
                  </div>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="w-full" asChild>
                <Link to="/contact">Contact Our Team <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;