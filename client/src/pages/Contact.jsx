import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input, Textarea, Select, Label, FormField } from '../components/ui/Input';
import { Separator } from '../components/ui/Separator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inquirySchema } from '../lib/validations';
import { inquiriesApi } from '../lib/api';
import { toast } from 'react-hot-toast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Leaf,
  Shield,
  Truck,
  Headphones,
} from 'lucide-react';

const contactMethods = [
  { icon: Mail, label: 'Email Us', value: 'info@vitabiozmedica.com', href: 'mailto:info@vitabiozmedica.com', description: 'General inquiries & support', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Mail, label: 'Support', value: 'support@vitabiozmedica.com', href: 'mailto:support@vitabiozmedica.com', description: 'Technical & order support', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Phone, label: 'Call Us', value: '+91-172-4567890', href: 'tel:+911724567890', description: 'Mon-Sat 9AM-6PM IST', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: MapPin, label: 'Visit Us', value: 'Panchkula, Haryana', href: 'https://maps.google.com/?q=Vita+Bioz+Medica+Panchkula', description: 'By appointment only', color: 'text-amber-600', bg: 'bg-amber-50' },
];

const faqs = [
  {
    q: 'What is the minimum order quantity for wholesale?',
    a: 'Our minimum order quantity for wholesale/distribution is 50 units per SKU. For first-time partners, we offer flexible starter packs. Contact our sales team for detailed terms.'
  },
  {
    q: 'Do you provide product samples for evaluation?',
    a: 'Yes, we provide complimentary samples to qualified healthcare professionals and potential distribution partners. Please submit a sample request through our contact form with your professional credentials.'
  },
  {
    q: 'Are your products certified and tested?',
    a: 'Absolutely. All our products are manufactured in WHO-GMP certified facilities, tested for heavy metals, microbial contamination, and purity. Each batch comes with a Certificate of Analysis (COA).'
  },
  {
    q: 'What is your shipping policy?',
    a: 'We offer free shipping on orders above ₹999 across India. Standard delivery takes 3-7 business days. Temperature-controlled logistics are used for sensitive formulations. Express delivery available at additional cost.'
  },
  {
    q: 'Can I become a distributor for Vita Bioz Medica?',
    a: 'We are always looking for passionate distribution partners. Please fill out our partnership inquiry form with details about your territory, existing network, and experience. Our team will evaluate and respond within 5-7 business days.'
  },
  {
    q: 'Do you offer private labeling or contract manufacturing?',
    a: 'Yes, we offer contract manufacturing and private labeling services for qualified partners. Minimum order quantities apply. Please contact our business development team with your requirements for a detailed proposal.'
  },
];

export function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: 'general',
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await inquiriesApi.create(data);
      if (response.success) {
        toast.success('Message sent successfully! We\'ll get back to you within 24-48 hours.');
        setFormSubmitted(true);
        reset();
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (err) {
      toast.error(err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gray-50 py-16 lg:py-24" aria-labelledby="contact-hero-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 id="contact-hero-heading" className="font-serif text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              We&apos;d Love to<br />
              <span className="text-primary">Hear from You</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Whether you have a question about our products, want to explore partnership opportunities,
              or need support - our team is here to help.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="contact-methods-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group block p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 hover:border-primary/50 border border-gray-100 transition-all duration-300">
                  <div className={`${method.bg} ${method.color} h-14 w-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all`}>
                    <method.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{method.label}</h3>
                  <p className={`${method.color} font-medium mb-1`}>{method.value}</p>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <Separator className="mb-12" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 id="contact-methods-heading" className="font-serif text-3xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill out the form and we'll get back to you as soon as possible.
                For urgent inquiries, please call us directly.
              </p>

              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-4"
                  role="alert"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                    <p className="text-green-700 text-sm mt-1">Thank you for reaching out. Our team will respond within 24-48 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Full Name *" error={errors.name?.message} required>
                    <Input {...register('name')} placeholder="Your full name" aria-invalid={!!errors.name} />
                  </FormField>
                  <FormField label="Email Address *" error={errors.email?.message} required>
                    <Input {...register('email')} type="email" placeholder="your@email.com" aria-invalid={!!errors.email} />
                  </FormField>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Phone Number" error={errors.phone?.message}>
                    <Input {...register('phone')} type="tel" placeholder="+91 98765 43210" aria-invalid={!!errors.phone} />
                  </FormField>
                  <FormField label="Company / Organization" error={errors.company?.message}>
                    <Input {...register('company')} placeholder="Optional" aria-invalid={!!errors.company} />
                  </FormField>
                </div>

                <FormField label="Inquiry Type *" error={errors.inquiryType?.message} required>
                  <Select
                    {...register('inquiryType')}
                    options={[
                      { value: 'general', label: 'General Inquiry' },
                      { value: 'product', label: 'Product Information' },
                      { value: 'partnership', label: 'Partnership / Distribution' },
                      { value: 'career', label: 'Career Opportunities' },
                      { value: 'media', label: 'Media / Press' },
                      { value: 'complaint', label: 'Complaint / Feedback' },
                    ]}
                    placeholder="Select inquiry type"
                    aria-invalid={!!errors.inquiryType}
                  />
                  {errors.inquiryType && <p className="text-sm text-red-500 mt-1" role="alert">{errors.inquiryType.message}</p>}
                </FormField>

                <FormField label="Subject *" error={errors.subject?.message} required>
                  <Input {...register('subject')} placeholder="Brief subject line" aria-invalid={!!errors.subject} />
                </FormField>

                <FormField label="Message *" error={errors.message?.message} hint="Minimum 20 characters" required>
                  <Textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    aria-invalid={!!errors.message}
                  />
                </FormField>

                <Button variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                        open={activeFaq === index}
                      >
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <p className="font-medium text-gray-900 pr-10">{faq.q}</p>
                          <svg className={`h-5 w-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed animate-slide-down">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 lg:p-8 bg-primary text-white">
                  <h3 className="font-serif text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="flex items-center gap-2">
                        <Clock className="h-5 w-5" aria-hidden="true" />
                        Monday - Saturday
                      </span>
                      <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="flex items-center gap-2 text-white/70">
                        <Clock className="h-5 w-5" aria-hidden="true" />
                        Sunday
                      </span>
                      <span className="font-medium text-white/70">Closed</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mt-4">Response time: 24-48 hours for email inquiries</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50" aria-labelledby="why-contact-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 id="why-contact-heading" className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Why Connect with Vita Bioz Medica?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're committed to providing exceptional support at every touchpoint.
            </p>
          </motion.div>

          {(() => {
            const benefits = [
              { icon: Leaf, title: 'Expert Guidance', desc: 'Ayurvedic consultants available for product selection' },
              { icon: Shield, title: 'Quality Assurance', desc: 'Full documentation & COA provided on request' },
              { icon: Truck, title: 'Reliable Logistics', desc: 'Temperature-controlled delivery across India' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Personal account manager for partners' },
            ];
            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary-muted flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
                ))}
              </div>
            )
          })()}
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-primary" aria-labelledby="office-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 id="office-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-6">
                Visit Our Headquarters
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Our state-of-the-art WHO-GMP certified manufacturing facility is located in the
                pharmaceutical hub of Panchkula, Haryana. Visits are welcome by prior appointment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Manufacturing Facility</p>
                    <p className="text-white/70 text-sm">Plot No. 45, Industrial Area, Phase II</p>
                    <p className="text-white/70 text-sm">Panchkula - 134113, Haryana, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Mail className="h-6 w-6 text-secondary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Correspondence Address</p>
                    <p className="text-white/70 text-sm">Vita Bioz Medica Pvt. Ltd.</p>
                    <p className="text-white/70 text-sm">Plot No. 45, Industrial Area, Phase II</p>
                    <p className="text-white/70 text-sm">Panchkula - 134113, Haryana, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-2">Interactive Map</h3>
                    <p className="text-white/60 mb-6">Click to open in Google Maps</p>
                    <a href="https://maps.google.com/?q=Vita+Bioz+Medica+Panchkula" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-xl font-medium hover:bg-secondary-dark transition-colors">
                      Open in Maps
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Contact;