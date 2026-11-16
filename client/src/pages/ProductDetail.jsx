import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Leaf, Shield, CheckCircle, Truck, Heart, Star, Minus, Plus, X } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Separator } from '../components/ui/Separator';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { productsApi } from '../lib/api';
import { inquiriesApi } from '../lib/api';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inquirySchema } from '../lib/validations';

export function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: 'product',
      productId: product?.id,
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await productsApi.getBySlug(slug);
        if (response.success) {
          setProduct(response.data);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleInquirySubmit = async (data) => {
    try {
      const response = await inquiriesApi.create({
        ...data,
        productId: product.id,
      });
      if (response.success) {
        toast.success('Inquiry submitted successfully! We\'ll get back to you within 24-48 hours.');
        setInquiryModalOpen(false);
        reset();
      }
    } catch (err) {
      toast.error(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Container className="py-16">
          <div className="max-w-5xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="aspect-[4/3] rounded-2xl bg-gray-100" />
                <div className="space-y-6">
                  <div className="h-8 w-1/3 bg-gray-100 rounded" />
                  <div className="h-10 w-1/2 bg-gray-100 rounded" />
                  <div className="h-32 bg-gray-100 rounded" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-12 bg-gray-100 rounded" />
                    <div className="h-12 bg-gray-100 rounded" />
                    <div className="h-12 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-40 bg-gray-100 rounded-xl" />
                <div className="h-40 bg-gray-100 rounded-xl" />
                <div className="h-40 bg-gray-100 rounded-xl" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Container className="py-16 lg:py-24">
          <div className="text-center py-16">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-8">
              <ArrowLeft className="h-5 w-5" />
              Back to Products
            </Link>
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl font-semibold text-gray-900 mb-2">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/products" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-light transition-colors inline-block">
              Browse All Products
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Leaf },
    { id: 'composition', label: 'Composition', icon: Leaf },
    { id: 'benefits', label: 'Benefits', icon: Heart },
    { id: 'usage', label: 'Usage & Dosage', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <nav className="bg-gray-50 border-b border-gray-100" aria-label="Breadcrumb">
        <Container className="py-4">
          <ol className="flex items-center gap-2 text-sm" role="list">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link to="/products" className="text-gray-500 hover:text-primary transition-colors">Products</Link>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs" aria-current="page">{product.name}</li>
          </ol>
        </Container>
      </nav>

      <Container className="py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-6">
            <ArrowLeft className="h-5 w-5" />
            Back to Products
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="primary">{product.category}</Badge>
            {product.featured && <Badge variant="secondary">Featured</Badge>}
            <Badge variant="outline">{product.form}</Badge>
            <Badge variant="outline">{product.packSize}</Badge>
          </div>
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">{product.name}</h1>
          <p className="text-secondary text-lg font-medium">{product.tagline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={`${product.name} - ${product.form} ${product.packSize}`}
                className="w-full h-full object-cover"
              />
              {product.logo && (
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <img
                    src={product.logo}
                    alt={`${product.name} Logo`}
                    className="h-16 w-auto object-contain drop-shadow-lg"
                  />
                </div>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2" role="list" aria-label="Product images">
              {[product.image, product.logo].filter(Boolean).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 h-20 w-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-primary' : 'border-transparent hover:border-gray-300'
                  }`}
                  aria-label={`View image ${i + 1}`}
                  aria-current={selectedImage === i ? 'true' : 'false'}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">{product.fullDescription}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="font-serif text-2xl font-bold text-primary">{product.composition?.length || 0}</p>
                    <p className="text-sm text-gray-500">Herbal Ingredients</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="font-serif text-2xl font-bold text-primary">100%</p>
                    <p className="text-sm text-gray-500">Natural</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="font-serif text-2xl font-bold text-primary">0</p>
                    <p className="text-sm text-gray-500">Side Effects</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Button variant="primary" size="lg" onClick={() => setInquiryModalOpen(true)} className="flex-1 sm:flex-none">
                    Inquire About This Product
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                    Request Sample
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                      <div className="h-10 w-10 rounded-xl bg-primary-muted flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">GMP Certified</p>
                        <p className="text-gray-500 text-xs">WHO-GMP approved facility</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                      <div className="h-10 w-10 rounded-xl bg-primary-muted flex items-center justify-center flex-shrink-0">
                        <Truck className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Free Shipping</p>
                        <p className="text-gray-500 text-xs">On orders above ₹999</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                      <div className="h-10 w-10 rounded-xl bg-primary-muted flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Expert Support</p>
                        <p className="text-gray-500 text-xs">Mon-Sat 9AM-6PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                      <div className="h-10 w-10 rounded-xl bg-primary-muted flex items-center justify-center flex-shrink-0">
                        <Star className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Quality Guaranteed</p>
                        <p className="text-gray-500 text-xs">Batch tested for purity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <Separator className="mb-8" />

          <div className="border-b border-gray-200 mb-8" role="tablist" aria-label="Product details">
            <nav className="flex flex-wrap gap-2 -mb-px" aria-label="Product tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                  id={`${tab.id}-tab`}
                  className={`px-6 py-4 font-medium text-sm rounded-t-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-b-2 border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              id={`${activeTab}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeTab}-tab`}
            >
              {activeTab === 'overview' && (
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">{product.fullDescription}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                      <ul className="space-y-3">
                        {product.benefits?.slice(0, 4).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications?.map((cert) => (
                          <Badge key={cert} variant="outline">{cert}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'composition' && (
                <div>
                  <p className="text-gray-600 mb-6">Each 10ml contains aqueous extracts of the following herbs:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left" role="table">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="pb-3 font-medium text-gray-900">Ingredient</th>
                          <th className="pb-3 font-medium text-gray-900">Botanical Name</th>
                          <th className="pb-3 font-medium text-gray-900">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.composition?.map((item, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 font-medium text-gray-900">{item.name}</td>
                            <td className="py-3 text-gray-600 italic">{item.botanicalName}</td>
                            <td className="py-3 text-gray-700 font-mono">{item.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits?.map((benefit, i) => (
                    <div key={i} className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary-muted flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-0.5">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Recommended Dosage</h3>
                    <div className="bg-primary-muted rounded-2xl p-6 lg:p-8">
                      <p className="text-primary text-lg leading-relaxed">{product.dosage}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Precautions</h3>
                    <ul className="space-y-3">
                      {product.precautions?.map((precaution, i) => (
                        <li key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="h-8 w-8 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                            <svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{precaution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">Storage Instructions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="font-medium text-gray-900 mb-1">Temperature</p>
                        <p className="text-gray-600">Store below 30°C</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="font-medium text-gray-900 mb-1">Light</p>
                        <p className="text-gray-600">Keep away from direct sunlight</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="font-medium text-gray-900 mb-1">Moisture</p>
                        <p className="text-gray-600">Store in a dry place</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="font-medium text-gray-900 mb-1">Safety</p>
                        <p className="text-gray-600">Keep out of reach of children</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Separator className="mb-8" />
          <h2 className="font-serif text-2xl font-semibold text-gray-900 text-center mb-8">Related Products</h2>
          <ProductGrid featuredOnly={true} title="" subtitle="" showViewAll={false} />
        </motion.div>
      </Container>

      <AnimatePresence>
        {inquiryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setInquiryModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 id="inquiry-modal-title" className="font-serif text-xl font-semibold text-gray-900">
                  Inquire About {product.name}
                </h2>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                  aria-label="Close inquiry form"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit(handleInquirySubmit)} className="p-6 space-y-4" noValidate>
                <input type="hidden" {...register('inquiryType')} value="product" />
                <input type="hidden" {...register('productId')} value={product.id} />

                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name *</label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-sm text-red-500" role="alert">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email *</label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-sm text-red-500" role="alert">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone</label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="text-sm text-red-500" role="alert">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject *</label>
                  <input
                    {...register('subject')}
                    id="subject"
                    type="text"
                    placeholder="Product inquiry / Sample request / Bulk order"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <p className="text-sm text-red-500" role="alert">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message *</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements, quantity needed, timeline, or any specific questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-sm text-red-500" role="alert">{errors.message.message}</p>}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="ghost" type="button" onClick={() => setInquiryModalOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductDetail;