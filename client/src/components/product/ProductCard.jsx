import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card, CardImage, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const productIcons = {
  'Liver Health': Leaf,
  'Digestive Health': Leaf,
  'Immunity': Shield,
  'General Wellness': Heart,
};

export function ProductCard({ product, index = 0, variant = 'default' }) {
  const CategoryIcon = productIcons[product.category] || Leaf;
  const compositionCount = product.composition?.length || 0;

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
      >
        <div className="relative h-64 lg:h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <Badge variant="primary">{product.category}</Badge>
            {product.featured && (
              <Badge variant="secondary">Featured</Badge>
            )}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="font-serif text-2xl font-bold text-white">{product.name}</p>
              <p className="text-secondary text-sm font-medium">{product.tagline}</p>
            </div>
            <Button variant="primary" size="sm" className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              View Details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-gray-600 leading-relaxed line-clamp-3">{product.shortDescription}</p>

          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm">
              <Leaf className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {compositionCount} Herbs
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
              {product.form}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm">
              <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {product.packSize}
            </span>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              to={`/products/${product.slug}`}
              className="font-medium text-primary hover:text-primary-light flex items-center gap-1.5 transition-colors"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Button variant="primary" size="sm">Inquire Now</Button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover interactive className="h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <CardImage src={product.image} alt={product.name} />
          <div className="absolute top-3 left-3 right-3 flex justify-between">
            <Badge variant="primary">{product.category}</Badge>
            {product.featured && <Badge variant="secondary">Featured</Badge>}
          </div>
        </div>

        <CardContent className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <CategoryIcon className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>

          <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-secondary text-sm font-medium mb-3">{product.tagline}</p>

          <p className="text-gray-600 leading-relaxed flex-1 mb-4 line-clamp-3">{product.shortDescription}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
              <Leaf className="h-3 w-3 text-primary" aria-hidden="true" />
              {compositionCount} Herbs
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
              {product.form}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
              {product.packSize}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-4">
          <Link
            to={`/products/${product.slug}`}
            className="font-medium text-primary hover:text-primary-light flex items-center justify-center gap-1.5 transition-colors"
          >
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Button variant="primary" size="sm" className="w-full">Inquire Now</Button>
        </CardFooter>
      </Card>
    </motion.article>
  );
}

export default ProductCard;