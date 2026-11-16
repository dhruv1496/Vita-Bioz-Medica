import { motion } from 'framer-motion';
import { Leaf, Shield, FlaskConical, Truck, Heart, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Separator } from '../ui/Separator';

const features = [
  {
    icon: Leaf,
    title: 'Authentic Ayurveda',
    description: 'Formulations based on classical Ayurvedic texts, prepared using traditional methods passed down through generations.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'GMP Certified Quality',
    description: 'Manufactured in WHO-GMP certified facilities with rigorous quality control at every stage of production.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Validation',
    description: 'Each product undergoes clinical evaluation and modern analytical testing to ensure safety and efficacy.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description: 'Addressing root causes rather than symptoms, our products support the body\'s natural healing mechanisms.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: Sparkles,
    title: 'Pure Ingredients',
    description: 'Sourced from certified organic farms, free from pesticides, heavy metals, and artificial additives.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Truck,
    title: 'Pan-India Reach',
    description: 'Efficient distribution network ensuring timely delivery across India with cold-chain logistics where needed.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="features-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
            Our Commitment
          </span>
          <h2 id="features-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Six Pillars of Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every decision we make is guided by these core principles, ensuring you receive only the finest Ayurvedic healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={cn('h-14 w-14 rounded-2xl flex items-center justify-center mb-6', feature.bg, feature.color)}>
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Separator className="mb-10" />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-primary">15+</p>
              <p className="text-gray-600 mt-2">Years of Trusted Service</p>
            </div>
            <div className="p-6">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-primary">500+</p>
              <p className="text-gray-600 mt-2">Healthcare Partners</p>
            </div>
            <div className="p-6">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-primary">50K+</p>
              <p className="text-gray-600 mt-2">Lives Touched</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Features;