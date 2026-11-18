import { motion } from 'framer-motion';

const galleryItems = [
  {
    title: 'Natural Herbs',
    tag: 'Classical Ayurveda',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Patient Smile',
    tag: 'Holistic Wellness',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Foie Sain Formulation',
    tag: '23 Herbs Synergy',
    image: '/foie-sain-image.jpg',
  },
  {
    title: 'Vitality & Care',
    tag: 'Family Health',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Pure Extraction',
    tag: 'WHO-GMP Standards',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
];

export function GalleryCarousel() {
  return (
    <section className="bg-[#9EE6B2] py-20 px-6 overflow-hidden" aria-label="Visual Gallery">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center gap-6 md:gap-8 flex-nowrap overflow-x-auto pb-4 scrollbar-none">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-44 md:w-56 h-72 md:h-96 capsule-card shadow-md group relative cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 text-center">
                <span className="text-xs font-bold text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryCarousel;
