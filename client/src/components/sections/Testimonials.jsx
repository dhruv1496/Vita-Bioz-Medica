import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

const testimonials = [
  {
    author: 'Dr. Ananya Sharma',
    role: 'Senior Ayurvedic Practitioner',
    quote: '"Vita Bioz Medica is truly authentic and professional. Their herbal formulations deliver verified clinical results with total safety."',
  },
  {
    author: 'Rajesh Verma',
    role: 'Verified Patient',
    quote: '"I had an exceptional experience with Foie Sain Liver Tonic. The pure botanical composition is gentle on digestion and profoundly effective."',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100" aria-labelledby="testimonials-heading">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Asterisk Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-3">
              <span className="asterisk-badge-icon">
                ✳
              </span>
              <h2 id="testimonials-heading" className="text-3xl font-bold text-black tracking-tight">
                Testimonials
              </h2>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Minimal Quotes */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col gap-3"
              >
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {item.author} • {item.role}
                </p>
                <blockquote className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-black leading-snug tracking-tight">
                  {item.quote}
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
