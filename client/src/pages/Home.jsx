import { Hero } from '../components/sections/Hero';
import { ProductGrid } from '../components/product/ProductGrid';
import { Testimonials } from '../components/sections/Testimonials';
import { GalleryCarousel } from '../components/sections/GalleryCarousel';
import { Features } from '../components/sections/Features';

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductGrid
        title="Our Formulations"
        subtitle="Classical Ayurvedic remedies crafted with WHO-GMP certified purity"
      />
      <Testimonials />
      <GalleryCarousel />
      <Features />
    </div>
  );
}

export default Home;
