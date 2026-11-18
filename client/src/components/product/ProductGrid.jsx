import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ProductCard } from './ProductCard';
import { productsApi } from '../../lib/api';

export function ProductGrid({ title = 'Our Formulations', subtitle = 'Classical Ayurvedic remedies crafted with WHO-GMP certified purity' }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productsApi.getAll();
        if (response.success && response.data?.length > 0) {
          setProducts(response.data);
        }
      } catch (err) {
        console.error('Failed to load products', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-24 bg-white" aria-labelledby="formulations-heading">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 id="formulations-heading" className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 text-lg max-w-2xl font-normal">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 3-Column Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full card-img-rounded aspect-[4/3] bg-gray-100 animate-pulse" />
                <div className="w-40 h-6 bg-gray-100 rounded-full mt-6 animate-pulse" />
                <div className="w-28 h-4 bg-gray-100 rounded-full mt-2 mb-6 animate-pulse" />
                <div className="w-36 h-10 bg-gray-100 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProductGrid;
