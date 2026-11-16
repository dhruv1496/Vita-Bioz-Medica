import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Separator } from '../components/ui/Separator';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  Shield,
  FlaskConical,
  Leaf,
  CheckCircle,
  Award,
  Microscope,
  ClipboardCheck,
  Truck,
  Database,
  Search,
  Scale,
  Droplets,
} from 'lucide-react';

const qualityPillars = [
  {
    icon: Shield,
    title: 'GMP Compliance',
    description: 'WHO-GMP certified facility with strict adherence to international manufacturing standards.',
    points: ['Clean room classifications', 'Environmental monitoring', 'Personnel qualification', 'Change control systems'],
  },
  {
    icon: FlaskConical,
    title: 'Raw Material Testing',
    description: 'Every ingredient undergoes comprehensive analysis before entering production.',
    points: ['Identity verification', 'Purity & potency assays', 'Heavy metal screening', 'Microbial limits', 'Pesticide residue analysis'],
  },
  {
    icon: Microscope,
    title: 'In-Process Controls',
    description: 'Real-time monitoring at critical control points throughout manufacturing.',
    points: ['Weight variation checks', 'pH & viscosity monitoring', 'Particle size analysis', 'Blend uniformity', 'Fill volume verification'],
  },
  {
    icon: CheckCircle,
    title: 'Finished Product Release',
    description: 'Comprehensive testing before any product leaves our facility.',
    points: ['Complete assay & impurity profile', 'Dissolution & disintegration', 'Microbial & sterility testing', 'Stability indicating assays', 'Packaging integrity'],
  },
  {
    icon: Database,
    title: 'Stability Studies',
    description: 'Ongoing stability programs ensuring product quality throughout shelf life.',
    points: ['Long-term (25°C/60% RH)', 'Accelerated (40°C/75% RH)', 'Intermediate (30°C/65% RH)', 'Photostability testing', 'In-use stability'],
  },
  {
    icon: ClipboardCheck,
    title: 'Documentation & Traceability',
    description: 'Complete batch traceability from farm to patient with electronic records.',
    points: ['Electronic batch records', 'Audit trail compliance', 'Certificate of Analysis', 'Deviation management', 'CAPA system'],
  },
];

const certifications = [
  { name: 'WHO-GMP', issuer: 'WHO', scope: 'Manufacturing Practices', year: '2012', icon: Award },
  { name: 'ISO 9001:2015', issuer: 'ISO', scope: 'Quality Management', year: '2015', icon: Award },
  { name: 'AYUSH License', issuer: 'Ministry of AYUSH', scope: 'Ayurvedic Manufacturing', year: '2009', icon: Leaf },
  { name: 'FSSAI', issuer: 'FSSAI', scope: 'Food Safety Standards', year: '2010', icon: Shield },
  { name: 'GLP Compliance', issuer: 'OECD', scope: 'Laboratory Practices', year: '2018', icon: FlaskConical },
  { name: 'HACCP', issuer: 'Codex Alimentarius', scope: 'Food Safety', year: '2016', icon: CheckCircle },
];

const testingCapabilities = [
  { name: 'HPLC Analysis', desc: 'High-performance liquid chromatography for assay & impurities', icon: Search },
  { name: 'GC Analysis', desc: 'Gas chromatography for volatile compounds & solvents', icon: Search },
  { name: 'AAS/ICP-MS', desc: 'Heavy metal analysis (Pb, As, Cd, Hg) at ppb levels', icon: Droplets },
  { name: 'Microbial Testing', desc: 'Total count, yeast/mold, pathogens (E. coli, Salmonella)', icon: Microscope },
  { name: 'FTIR Spectroscopy', desc: 'Fourier transform IR for identity verification', icon: Search },
  { name: 'Dissolution Testing', desc: 'USP apparatus for release profile characterization', icon: FlaskConical },
  { name: 'Particle Size', desc: 'Laser diffraction for particle size distribution', icon: Microscope },
  { name: 'Karl Fischer', desc: 'Water content determination for stability', icon: Droplets },
];

const qualityProcess = [
  { step: 1, title: 'Vendor Qualification', desc: 'Audit & approve raw material suppliers with quality agreements', icon: ClipboardCheck },
  { step: 2, title: 'Incoming QC', desc: '100% testing of all raw materials per pharmacopeial standards', icon: Search },
  { step: 3, title: 'Quarantine & Release', desc: 'Materials held until full analytical release by QA', icon: Shield },
  { step: 4, title: 'Controlled Manufacturing', desc: 'Batch manufacturing per master records with in-process checks', icon: FlaskConical },
  { step: 5, title: 'In-Process QC', desc: 'Real-time monitoring at critical control points', icon: Microscope },
  { step: 6, title: 'Finished Goods QC', desc: 'Complete release testing per specification', icon: CheckCircle },
  { step: 7, title: 'QA Review & Release', desc: 'Final batch disposition by Qualified Person', icon: ClipboardCheck },
  { step: 8, title: 'Controlled Distribution', desc: 'Temperature-monitored logistics with track & trace', icon: Truck },
];

export function Quality() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cream py-20 lg:py-28" aria-labelledby="quality-hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#e8f4ef_0%,transparent_70%)]" aria-hidden="true" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-6">
              Quality Assurance
            </span>
            <h1 id="quality-hero-heading" className="font-serif text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Uncompromising Quality,<br />
              <span className="text-primary">At Every Step</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              From seed to shelf, our multi-layered quality system ensures every product meets the highest
              international standards of purity, potency, and safety.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">WHO-GMP</p>
                <p className="text-sm text-gray-600">Certified Facility</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">ISO 9001</p>
                <p className="text-sm text-gray-600">Quality Management</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">AYUSH</p>
                <p className="text-sm text-gray-600">Approved</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="pillars-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Six Pillars
            </span>
            <h2 id="pillars-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Our Quality Framework
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Six interconnected pillars form the foundation of our quality management system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 lg:p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <pillar.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50" aria-labelledby="certifications-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Certifications
            </span>
            <h2 id="certifications-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Recognized Standards
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our facility and processes are certified by leading international and national bodies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-primary-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <cert.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{cert.scope}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <span>Issuer: {cert.issuer}</span>
                      <span>Since {cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="testing-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Laboratory Capabilities
            </span>
            <h2 id="testing-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Advanced Analytical Testing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our in-house QC laboratory is equipped with state-of-the-art instrumentation for comprehensive analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingCapabilities.map((cap, index) => (
              <motion.div
                key={cap.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/50 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-muted flex items-center justify-center mb-4">
                  <cap.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cap.name}</h3>
                <p className="text-gray-600 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="process-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-muted text-primary rounded-full text-sm font-medium mb-4">
              Quality Flow
            </span>
            <h2 id="process-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              From Source to Patient
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our end-to-end quality process ensures complete traceability and control at every stage.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2 hidden md:block" aria-hidden="true" />
            <div className="space-y-8 md:space-y-12 relative">
              {qualityProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'} max-w-md`}>
                    <div className="flex items-center gap-3 justify-end md:justify-end">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {step.step}
                      </div>
                      <div className="text-right">
                        <h3 className="font-serif text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
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

      <section className="py-20 lg:py-28 bg-primary" aria-labelledby="commitment-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="commitment-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-6">
              Our Quality Promise
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Every batch, every bottle, every dose - backed by science, validated by testing,
              and delivered with integrity. This is our promise to you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Shield, text: 'Batch Release by QP' },
                { icon: CheckCircle, text: 'COA with Every Order' },
                { icon: Database, text: 'Full Traceability' },
                { icon: Scale, text: 'Pharmacopeial Standards' },
                { icon: Award, text: 'Regulatory Compliant' },
                { icon: Leaf, text: '100% Natural Verified' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <item.icon className="h-6 w-6 text-secondary flex-shrink-0" aria-hidden="true" />
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default Quality;