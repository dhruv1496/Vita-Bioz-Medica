import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';

const features = [
  {
    title: 'Personalized Care',
    description: 'We provide classical formulations tailored to your metabolic balance, ensuring comfort, liver revitalization, and long-term vitality.',
    btnText: 'Discover More +',
    btnHref: '/products',
  },
  {
    title: 'Advanced Science',
    description: 'Our state-of-the-art laboratory utilizes precision hydro-extraction and HPLC standardization, adhering strictly to WHO-GMP protocols.',
    btnText: 'Learn More +',
    btnHref: '/quality',
  },
  {
    title: 'Expert Team',
    description: 'Formulated by seasoned Ayurvedic vaidyas and pharmaceutical researchers dedicated to purity, safety, and classical efficacy.',
    btnText: 'Meet the Team +',
    btnHref: '/about',
  },
];

export function Features() {
  return (
    <section
      className="py-28 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1C60D5 0%, #154EB1 100%)',
      }}
      aria-labelledby="features-heading"
    >
      <Container>
        {/* Top Asterisk Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-12"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-white text-[#1C60D5] font-extrabold flex items-center justify-center text-lg shadow-sm">
              ✳
            </span>
            <h2 id="features-heading" className="text-2xl font-bold tracking-tight text-white">
              Key Features
            </h2>
          </div>
        </motion.div>

        {/* Center Floating Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="my-10 flex justify-center"
        >
          <div className="relative">
            <img
              src="/foie-sain-image.jpg"
              alt="Foie Sain Tonic Display"
              className="h-60 md:h-72 w-auto rounded-[32px] shadow-2xl object-cover animate-float border-2 border-white/20 bg-white/10 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* 3 Columns Below with Mint Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center mt-16">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-bold text-2xl md:text-3xl text-white mb-4 tracking-tight">
                {item.title}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed mb-8 max-w-sm"
                style={{ color: '#E8F5FF' }}
              >
                {item.description}
              </p>
              <Link to={item.btnHref} className="pill-btn mt-auto">
                {item.btnText}
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
