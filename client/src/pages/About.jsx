import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Separator } from '../components/ui/Separator';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  Leaf,
  Shield,
  Award,
  FlaskConical,
  Heart,
  Users,
  Globe,
  CheckCircle,
} from 'lucide-react';

const milestones = [
  { year: '2009', title: 'Foundation', description: 'Vita Bioz Medica established with a vision to bring authentic Ayurveda to modern healthcare.', icon: Leaf },
  { year: '2012', title: 'GMP Certification', description: 'Achieved WHO-GMP certification for our manufacturing facility in Panchkula.', icon: Shield },
  { year: '2015', title: 'Product Launch', description: 'Launched Foie Sain - our flagship Ayurvedic liver tonic with 23 herbal ingredients.', icon: Award },
  { year: '2018', title: 'Pan-India Expansion', description: 'Expanded distribution network across all major states in India.', icon: Globe },
  { year: '2021', title: 'R&D Center', description: 'Established dedicated research center for clinical validation of Ayurvedic formulations.', icon: FlaskConical },
  { year: '2024', title: 'Digital Transformation', description: 'Launched digital platform for healthcare professionals and direct-to-consumer access.', icon: Users },
];

const values = [
  { icon: Leaf, title: 'Authenticity', description: 'We honor classical Ayurvedic texts and traditional preparation methods in every formulation.' },
  { icon: Shield, title: 'Quality First', description: 'Rigorous testing at every stage - from raw material sourcing to finished product release.' },
  { icon: FlaskConical, title: 'Scientific Rigor', description: 'Bridging ancient wisdom with modern science through clinical validation and analytical testing.' },
  { icon: Heart, title: 'Patient-Centric', description: 'Every decision guided by what best serves the health and wellbeing of our consumers.' },
  { icon: Award, title: 'Transparency', description: 'Complete traceability from farm to bottle with full ingredient disclosure and COA availability.' },
  { icon: Users, title: 'Sustainability', description: 'Ethical sourcing, eco-friendly packaging, and supporting farming communities.' },
];

const leadership = [
  { name: 'Dr. Rajesh Sharma', role: 'Founder & Managing Director', bio: 'BAMS, MD (Ayurveda) - 25+ years clinical experience', initials: 'RS' },
  { name: 'Dr. Priya Mehta', role: 'Chief Scientific Officer', bio: 'PhD (Pharmacognosy) - Leading R&D and clinical validation', initials: 'PM' },
  { name: 'Mr. Amit Kumar', role: 'Director Operations', bio: 'MBA (Operations) - 20+ years pharmaceutical manufacturing', initials: 'AK' },
  { name: 'Dr. Sunita Rao', role: 'Head of Quality Assurance', bio: 'M.Pharm (QA) - WHO-GMP compliance & regulatory affairs', initials: 'SR' },
];

export function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cream py-20 lg:py-28" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e8f4ef_0%,transparent_70%)]" aria-hidden="true" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-6">
              Our Journey
            </span>
            <h1 id="about-hero-heading" className="font-serif text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Bridging Ancient Wisdom<br />
              <span className="text-primary">With Modern Science</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              For over 15 years, Vita Bioz Medica has been at the forefront of authentic Ayurvedic healthcare,
              crafting premium formulations that honor traditional wisdom while meeting the highest modern quality standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <a href="#our-story">Our Story</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#leadership">Meet Our Team</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="our-story" className="py-20 lg:py-28 bg-white" aria-labelledby="story-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 id="story-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                Founded on Principles,<br />Driven by Purpose
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Vita Bioz Medica was born from a simple yet powerful belief: that the ancient wisdom of Ayurveda,
                  when combined with modern scientific rigor, can create healthcare solutions of unparalleled quality and efficacy.
                </p>
                <p>
                  Our journey began in 2009 in Panchkula, Haryana, when Dr. Rajesh Sharma, a practicing Ayurvedic physician
                  with over 25 years of clinical experience, envisioned a company that would bridge the gap between traditional
                  herbal knowledge and contemporary quality standards.
                </p>
                <p>
                  Today, we operate a state-of-the-art WHO-GMP certified manufacturing facility, serve healthcare professionals
                  across India, and continue to innovate while staying true to our founding principles of authenticity, quality,
                  and patient-centric care.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-serif text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-serif text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Healthcare Partners</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-serif text-3xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-gray-600">Lives Touched</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center p-8">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Leaf className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">Our Facility</h3>
                    <p className="text-gray-600">WHO-GMP Certified Manufacturing Unit, Panchkula</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-xl bg-primary-muted flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ISO 9001:2015</p>
                    <p className="text-sm text-gray-500">Quality Management</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary-muted flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WHO-GMP</p>
                    <p className="text-sm text-gray-500">Manufacturing Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50" aria-labelledby="values-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 id="values-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every decision we make is rooted in these fundamental beliefs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 lg:p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section id="leadership" className="py-20 lg:py-28 bg-white" aria-labelledby="leadership-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Leadership Team
            </span>
            <h2 id="leadership-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Guided by Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our leadership brings together decades of clinical, scientific, and operational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-5">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <span className="text-4xl font-bold text-primary/30">{leader.initials}</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-primary">{leader.initials}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="milestones-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 id="milestones-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Milestones of Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Key moments that have shaped our journey since 2009.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-12 lg:space-y-16 relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'} max-w-md`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-muted text-primary rounded-full text-sm font-medium mb-3 ${index % 2 === 0 ? '' : ''}`}>
                      <milestone.icon className="h-4 w-4" aria-hidden="true" />
                      <span className="font-serif text-xl font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-primary border-4 border-white shadow-lg z-10" aria-hidden="true" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-primary" aria-labelledby="certifications-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Quality Assurance
            </span>
            <h2 id="certifications-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We adhere to the highest international quality standards in every aspect of our operations.
            </p>
          </motion.div>

          {(() => {
            const certs = [
              { name: 'WHO-GMP', desc: 'Manufacturing Standards' },
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'AYUSH', desc: 'Government Approved' },
              { name: 'HACCP', desc: 'Food Safety' },
              { name: 'GLP', desc: 'Laboratory Practices' },
              { name: 'FSSAI', desc: 'Food License' },
            ];
            return (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {certs.map((cert) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 font-bold text-white text-lg">
                  {cert.name}
                </div>
                <h3 className="font-semibold text-white mb-1">{cert.name}</h3>
                <p className="text-white/60 text-sm">{cert.desc}</p>
              </motion.div>
                ))}
              </div>
            )
          })()}
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="cta-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="cta-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Whether you're a healthcare professional, distributor, or wellness enthusiast,
              we'd love to explore how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">Distribution Inquiry</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default About;