import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col items-center text-center group"
    >
      {/* 40px Rounded Card Image Container */}
      <div className="w-full card-img-rounded aspect-[4/3] bg-emerald-50/50 relative overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-black font-semibold text-xs rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Details (Centered) */}
      <div className="mt-6 flex flex-col items-center max-w-xs">
        <h3 className="font-bold text-2xl text-black tracking-tight mb-1.5 group-hover:text-[#1C60D5] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm font-medium mb-6">
          {product.tagline || 'Ayurvedic Formulation'}
        </p>

        {/* Mint Pill Button */}
        <Link
          to={`/products/${product.slug}`}
          className="pill-btn text-sm px-7 py-3"
        >
          Book an Appointment +
        </Link>
      </div>
    </motion.article>
  );
}

export default ProductCard;
