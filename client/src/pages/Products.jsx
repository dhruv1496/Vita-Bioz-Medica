import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Separator } from '../components/ui/Separator';
import { ProductCard } from '../components/product/ProductCard';
import { productsApi } from '../lib/api';
import { Badge } from '../components/ui/Badge';

const categories = ['All', 'Liver Health', 'Digestive Health', 'Immunity', 'General Wellness'];

export function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsRes, categoriesRes] = await Promise.all([
          productsApi.getAll(),
          productsApi.getCategories(),
        ]);

        if (productsRes.success) {
          setProducts(productsRes.data);
          setFilteredProducts(productsRes.data);
        }
        if (categoriesRes.success) {
          setCategoriesList(['All', ...categoriesRes.data]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory, products]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Container className="py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Premium Ayurvedic Formulations
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each product is crafted with precision, combining ancient wisdom with modern quality standards.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="bg-gray-50 rounded-2xl overflow-hidden h-[400px] animate-pulse" />
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Container className="py-16 lg:py-24">
          <div className="text-center py-16">
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-2">Unable to Load Products</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button onClick={() => window.location.reload()} className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-light transition-colors">
              Try Again
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gray-50 py-16 lg:py-24" aria-labelledby="products-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 id="products-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Premium Ayurvedic Formulations
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each product is crafted with precision, combining ancient wisdom with modern quality standards.
              Explore our range of clinically validated herbal formulations.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
            aria-label="Product categories"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categoriesList.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.nav>

          <Separator className="mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">No Products in This Category</h3>
                <p className="text-gray-600 mb-4">Try selecting a different category or view all products.</p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-light transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Separator className="mb-10" />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="h-14 w-14 rounded-2xl bg-primary-muted flex items-center justify-center mx-auto mb-4">
                  <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">Every batch tested for purity, potency & safety</p>
              </div>
              <div className="p-6">
                <div className="h-14 w-14 rounded-2xl bg-primary-muted flex items-center justify-center mx-auto mb-4">
                  <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Our Ayurvedic consultants are here to help</p>
              </div>
              <div className="p-6">
                <div className="h-14 w-14 rounded-2xl bg-primary-muted flex items-center justify-center mx-auto mb-4">
                  <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Pan-India shipping with temperature control</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default Products;