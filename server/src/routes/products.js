import { Router } from 'express';
import { z } from 'zod';
import { AppError } from '../middleware/errorHandler.js';
import {
  getAllProducts,
  getProductById,
  getProductBySlug,
  getFeaturedProducts,
  getProductsByCategory,
} from '../data/products.js';

export const productRouter = Router();

const querySchema = z.object({
  category: z.string().optional(),
  featured: z.coerce.boolean().optional(),
  limit: z.coerce.number().int().min(1).max(50).optional(),
  offset: z.coerce.number().int().min(0).optional(),
});

productRouter.get('/', async (req, res, next) => {
  try {
    const { category, featured, limit = 50, offset = 0 } = querySchema.parse(req.query);

    let products = getAllProducts();

    if (category) {
      products = getProductsByCategory(category);
    }

    if (featured) {
      products = products.filter(p => p.featured);
    }

    const total = products.length;
    const paginated = products.slice(offset, offset + limit);

    res.json({
      success: true,
      data: paginated,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    });
  } catch (err) {
    next(err);
  }
});

productRouter.get('/featured', async (req, res, next) => {
  try {
    const products = getFeaturedProducts();
    res.json({
      success: true,
      data: products,
    });
  } catch (err) {
    next(err);
  }
});

productRouter.get('/categories', async (req, res, next) => {
  try {
    const products = getAllProducts();
    const categories = [...new Set(products.map(p => p.category))];
    res.json({
      success: true,
      data: categories,
    });
  } catch (err) {
    next(err);
  }
});

productRouter.get('/slug/:slug', async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = getProductBySlug(slug);

    if (!product) {
      throw new AppError('Product not found', 404, 'PRODUCT_NOT_FOUND');
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
});

productRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = getProductById(parseInt(id, 10));

    if (!product) {
      throw new AppError('Product not found', 404, 'PRODUCT_NOT_FOUND');
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
});