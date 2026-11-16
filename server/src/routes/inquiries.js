import { Router } from 'express';
import { z } from 'zod';
import { AppError } from '../middleware/errorHandler.js';
import {
  getAllInquiries,
  getInquiryById,
  createInquiry,
  updateInquiryStatus,
  deleteInquiry,
} from '../data/inquiries.js';

export const inquiryRouter = Router();

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits').max(20).optional(),
  company: z.string().max(100).optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(5000),
  inquiryType: z.enum(['general', 'product', 'partnership', 'career', 'media', 'complaint']).default('general'),
  productId: z.coerce.number().int().positive().optional(),
});

const statusUpdateSchema = z.object({
  status: z.enum(['new', 'in-progress', 'resolved', 'closed']),
});

inquiryRouter.post('/', async (req, res, next) => {
  try {
    const data = inquirySchema.parse(req.body);

    const inquiry = createInquiry(data);

    // In production, you would send email notifications here
    console.log('New inquiry received:', {
      id: inquiry.id,
      name: inquiry.name,
      email: inquiry.email,
      subject: inquiry.subject,
      type: inquiry.inquiryType,
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully. We will get back to you within 24-48 hours.',
      data: {
        id: inquiry.id,
        status: inquiry.status,
        createdAt: inquiry.createdAt,
      },
    });
  } catch (err) {
    next(err);
  }
});

inquiryRouter.get('/', async (req, res, next) => {
  try {
    const inquiries = getAllInquiries();
    res.json({
      success: true,
      data: inquiries,
    });
  } catch (err) {
    next(err);
  }
});

inquiryRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const inquiry = getInquiryById(id);

    if (!inquiry) {
      throw new AppError('Inquiry not found', 404, 'INQUIRY_NOT_FOUND');
    }

    res.json({
      success: true,
      data: inquiry,
    });
  } catch (err) {
    next(err);
  }
});

inquiryRouter.patch('/:id/status', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = statusUpdateSchema.parse(req.body);

    const inquiry = updateInquiryStatus(id, status);

    if (!inquiry) {
      throw new AppError('Inquiry not found', 404, 'INQUIRY_NOT_FOUND');
    }

    res.json({
      success: true,
      message: 'Inquiry status updated',
      data: inquiry,
    });
  } catch (err) {
    next(err);
  }
});

inquiryRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const inquiry = deleteInquiry(id);

    if (!inquiry) {
      throw new AppError('Inquiry not found', 404, 'INQUIRY_NOT_FOUND');
    }

    res.json({
      success: true,
      message: 'Inquiry deleted',
    });
  } catch (err) {
    next(err);
  }
});