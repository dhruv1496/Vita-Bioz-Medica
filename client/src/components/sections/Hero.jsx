import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden text-white pt-32 pb-12"
      style={{
        background: 'linear-gradient(180deg, #1C60D5 0%, #1752B6 100%)',
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background Soft Ambient Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 75% 45%, #9EE6B2 0%, transparent 55%)'
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Main Content Area */}
        <div className="grid lg:grid-cols-12 gap-10 items-center flex-1 my-auto py-8">
          {/* Left Title Column */}
          <div className="lg:col-span-7">
            <h1 id="hero-heading" className="hero-giant-title">
              Welcome to<br />
              <span className="text-[#9EE6B2]">Vita Bioz</span>
            </h1>

            <p
              className="mt-6 text-xl md:text-2xl max-w-xl font-normal leading-snug"
              style={{ color: '#E6FAF0' }}
            >
              Authentic Ayurvedic formulations combining 23 time-tested classical botanicals with modern WHO-GMP precision.
            </p>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs md:max-w-sm flex justify-center">
              <div
                className="rounded-[40px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 transition-transform hover:scale-[1.02] duration-300 max-h-[440px] flex flex-col items-center justify-center"
              >
                <img
                  src="/foie-sain-image.jpg"
                  alt="Vita Bioz Foie Sain Ayurvedic Formulation"
                  className="max-h-[340px] w-auto rounded-[28px] object-contain shadow-inner"
                />
                <div className="mt-3 flex items-center justify-between w-full px-2">
                  <div>
                    <p className="font-bold text-white text-base">Foie Sain</p>
                    <p className="text-[11px] text-[#9EE6B2] font-semibold uppercase tracking-wider">Ayurvedic Liver Tonic</p>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#9EE6B2] text-black font-bold text-xs rounded-full">
                    23 Herbs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Bar */}
        <div className="pt-10 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Subtitle / Value Tag */}
          <p
            className="text-lg font-medium max-w-lg"
            style={{ color: '#E6FAF0' }}
          >
            Your Trusted Ayurvedic Healthcare & Liver Wellness Provider
          </p>

          {/* CTA Group with Signature Asterisk Badge */}
          <div className="flex items-center gap-3">
            <div className="asterisk-pill" title="Certified Excellence">
              ✳
            </div>
            <Link to="/products" className="pill-btn">
              Explore Products +
            </Link>
            <Link to="/contact" className="pill-btn-white">
              Contact Us +
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
