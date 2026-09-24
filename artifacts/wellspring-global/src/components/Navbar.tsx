import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-06-16_at_05.41.40_(2)_1784376773171.jpeg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-lg border-b border-border/50 shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 relative z-50">
              <img src={logoPath} alt="Well Spring Global" className="h-14 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary font-semibold" : "text-foreground/80"}`}>
                  {link.label}
                </Link>
              ))}
              <Link href="/donate" className="border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Donate
              </Link>
              <Link href="/enquiries" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform active:scale-95 flex items-center justify-center shadow-md shadow-primary/20">
                Enquiries
              </Link>
            </nav>

            <button className="md:hidden relative z-50 p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden">
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl p-6 flex flex-col pt-24 border-l">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`text-lg font-medium border-b border-border/50 pb-2 ${location === link.href ? "text-primary" : "text-foreground"}`}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/donate" className="border-2 border-primary text-primary px-6 py-3 rounded-full text-base font-semibold text-center mt-2">
                  Donate
                </Link>
                <Link href="/enquiries" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-medium text-center shadow-md">
                  Make an Enquiry
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
