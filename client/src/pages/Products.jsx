import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { ProductCard } from '../components/product/ProductCard';
import { productsApi } from '../lib/api';

export function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

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
        if (categoriesRes.success && categoriesRes.data?.length > 0) {
          setCategoriesList(['All', ...categoriesRes.data]);
        }
      } catch (err) {
        console.error('Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <Container>
        {/* Page Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="asterisk-badge-icon">
              ✳
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-black">
              Classical Catalog
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-4">
            Our Formulations
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl font-normal">
            Precision herbal formulations manufactured in WHO-GMP certified facilities with 100% natural bio-botanicals.
          </p>

          {/* Minimalist Pill Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Card Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center animate-pulse">
                <div className="w-full card-img-rounded aspect-[4/3] bg-gray-100" />
                <div className="w-40 h-6 bg-gray-100 rounded-full mt-6" />
                <div className="w-28 h-4 bg-gray-100 rounded-full mt-2 mb-6" />
                <div className="w-36 h-10 bg-gray-100 rounded-full" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[40px]">
            <p className="text-xl font-bold text-black mb-2">No formulations found</p>
            <p className="text-gray-500 text-sm mb-6">Try selecting another category.</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="pill-btn"
            >
              View All Formulations +
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Products;
