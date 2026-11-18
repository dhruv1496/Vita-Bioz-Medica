import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-[#9EE6B2] text-black pt-24 pb-12" role="contentinfo">
      <Container>
        {/* Giant Logo & Brand Name */}
        <div className="flex items-center gap-6 md:gap-10 pb-16 border-b border-black/15">
          {/* Outline Smiley / Wellness Circle Icon matching template */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[3.5px] md:border-[5px] border-black flex items-center justify-center flex-shrink-0">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 14.5s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
              <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
            </svg>
          </div>
          <span className="footer-giant-title">
            Vita Bioz
          </span>
        </div>

        {/* Middle Row: Address & Contact Details */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-black/15">
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black max-w-md leading-tight">
              Plot 42, Pharmaceutical Zone, Mohali / Haridwar, India
            </p>
          </div>
          <div className="md:text-right flex flex-col md:items-end justify-start gap-2">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">
              +91 (011) 456-7890
            </p>
            <a
              href="mailto:care@vitabiozmedica.com"
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity"
            >
              care@vitabiozmedica.com
            </a>
          </div>
        </div>

        {/* Bottom Row: Links & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm font-semibold text-black">
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link to="/contact" className="underline underline-offset-4 hover:opacity-75">
              Terms & Conditions
            </Link>
            <Link to="/quality" className="underline underline-offset-4 hover:opacity-75">
              Accessibility Statement
            </Link>
            <Link to="/contact" className="underline underline-offset-4 hover:opacity-75">
              Refund Policy
            </Link>
            <Link to="/contact" className="underline underline-offset-4 hover:opacity-75">
              Privacy Policy
            </Link>
          </div>
          <p className="text-black/80 font-normal">
            © 2026 by Vita Bioz Medica. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
