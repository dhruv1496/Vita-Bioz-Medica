import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20).optional().or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject is too long'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(5000, 'Message is too long'),
  inquiryType: z.enum(['general', 'product', 'partnership', 'career', 'media', 'complaint']).default('general'),
  productId: z.coerce.number().int().positive().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

/**
 * @typedef {z.infer<typeof inquirySchema>} InquiryFormData
 * @typedef {z.infer<typeof newsletterSchema>} NewsletterFormData
 */

export const INQUIRY_TYPES = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'product', label: 'Product Information' },
  { value: 'partnership', label: 'Partnership / Distribution' },
  { value: 'career', label: 'Career Opportunities' },
  { value: 'media', label: 'Media / Press' },
  { value: 'complaint', label: 'Complaint / Feedback' },
];

export const INQUIRY_TYPE_LABELS = {
  general: 'General Inquiry',
  product: 'Product Information',
  partnership: 'Partnership / Distribution',
  career: 'Career Opportunities',
  media: 'Media / Press',
  complaint: 'Complaint / Feedback',
};