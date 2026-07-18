import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logoPath from "@assets/WhatsApp_Image_2026-06-16_at_05.41.40_(2)_1784376773171.jpeg";

export function Footer() {
  return (
    <footer className="pt-16 pb-4 bg-background">
      <div className="bg-[#0D2B1A] text-white rounded-[2.5rem] mx-4 p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="inline-block w-fit">
              <img src={logoPath} alt="Well Spring Global" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-[#F57C00] font-serif text-2xl tracking-wide italic">
              Health, Hope & Humanity
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              A consortium of public health experts delivering evidence-based interventions across underserved communities.
            </p>
            <Link
              href="/enquiries"
              className="inline-flex items-center gap-3 bg-[#111] hover:bg-[#222] text-white pl-6 pr-2 py-2 rounded-full w-fit text-sm font-medium transition-colors"
            >
              Enquire now <div className="bg-white/20 p-2 rounded-full"><ArrowRight size={16} /></div>
            </Link>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="text-white/70 hover:text-white transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2">Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Research & Consultancy</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Capacity Building</Link></li>
              <li><Link href="/programs" className="text-white/70 hover:text-white transition-colors">Our Programmes</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2">Connect</h3>
            <ul className="flex flex-col gap-4 mb-8">
              <li><Link href="/enquiries" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/enquiries" className="text-white/70 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link href="/enquiries" className="text-white/70 hover:text-white transition-colors">Make an Enquiry</Link></li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
          <p className="text-white/70 text-sm">
            © 2025 Well Spring Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
