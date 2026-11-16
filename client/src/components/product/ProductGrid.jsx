import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Separator } from '../ui/Separator';
import { ProductCard } from './ProductCard';
import { productsApi } from '../../lib/api';
import { Button } from '../ui/Button';

export function ProductGrid({ featuredOnly = false, title, subtitle, showViewAll = true, viewAllHref = '/products' }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = featuredOnly ? await productsApi.getFeatured() : await productsApi.getAll();
        if (response.success) {
          setProducts(response.data);
        } else {
          setError('Failed to load products');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [featuredOnly]);

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="products-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              <>
                <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
                  Our Products
                </span>
                <h2 id="products-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                  {title}
                </h2>
              </>
            )}
            {subtitle && <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(3)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="bg-gray-50 rounded-2xl overflow-hidden h-[400px] animate-pulse" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  if (error || products.length === 0) {
    return (
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="products-heading">
        <Container>
          <div className="text-center py-16">
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">No Products Available</h3>
            <p className="text-gray-600 mb-6">We're currently updating our product catalog. Please check back soon.</p>
            <Button variant="primary" onClick={() => window.location.reload()}>Refresh</Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="products-heading">
      <Container>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {title && (
              <>
                <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
                  Our Products
                </span>
                <h2 id="products-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                  {title}
                </h2>
              </>
            )}
            {subtitle && <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} variant={featuredOnly ? 'featured' : 'default'} />
          ))}
        </div>

        {showViewAll && products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Separator className="mb-8" />
            <Button variant="outline" size="lg" asChild>
              <a href={viewAllHref}>View All Products</a>
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

export default ProductGrid;