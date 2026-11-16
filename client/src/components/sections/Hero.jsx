import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Award, Truck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';

const stats = [
  { value: '23', label: 'Herbal Ingredients', icon: Leaf },
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '500+', label: 'Satisfied Clients', icon: Shield },
  { value: 'Pan India', label: 'Delivery Network', icon: Truck },
];

const trustBadges = [
  'WHO-GMP Certified',
  'ISO 9001:2015',
  'AYUSH Approved',
  'Heavy Metal Tested',
  'Cruelty Free',
  'Sustainably Sourced',
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cream" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e8f4ef_0%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent" aria-hidden="true" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-muted text-primary rounded-full text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" aria-hidden="true" />
              Premium Ayurvedic Formulations Since 2009
            </div>

            <h1
              id="hero-heading"
              className="font-serif text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 mb-6"
            >
              Nature&apos;s Wisdom,<br />
              <span className="text-primary">Science&apos;s Precision</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              Discover premium Ayurvedic healthcare solutions crafted from 23 time-tested herbs.
              Our flagship Foie Sain liver tonic combines ancient wisdom with modern quality standards.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                <img
                  src="/foie-sain-image.jpg"
                  alt="Foie Sain Ayurvedic Liver Tonic - 200ml bottle with caramel colored syrup"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <img src="/foie-sain-logo.jpg" alt="Foie Sain Logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <p className="font-serif text-xl font-semibold text-white">Foie Sain</p>
                      <p className="text-secondary text-sm">Ayurvedic Liver Tonic • 200ml</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 min-w-[280px]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary-muted flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Clinically Validated</p>
                    <p className="text-sm text-gray-500">Proven efficacy & safety</p>
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-primary">23</p>
                    <p className="text-xs text-gray-500">Herbs</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-primary">100%</p>
                    <p className="text-xs text-gray-500">Natural</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-primary">0</p>
                    <p className="text-xs text-gray-500">Side Effects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 lg:mt-28 relative z-10"
        >
          <Separator className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted text-primary mb-4">
                  <stat.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

export default Hero;