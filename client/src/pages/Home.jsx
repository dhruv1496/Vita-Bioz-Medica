import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { ProductGrid } from '../components/product/ProductGrid';
import { CTA } from '../components/sections/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductGrid
        featuredOnly={true}
        title="Our Flagship Product"
        subtitle="Discover Foie Sain - our premium Ayurvedic liver tonic formulated with 23 time-tested herbs"
        showViewAll={true}
      />
      <CTA />
    </>
  );
}

export default Home;