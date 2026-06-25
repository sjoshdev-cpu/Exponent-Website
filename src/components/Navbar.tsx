import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-transparent.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Impact", href: "/impact" },
    { name: "Academy", href: "/academy" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out h-[80px] flex items-center ${
          scrolled
            ? "bg-[#0A1628]/96 backdrop-blur-[14px] shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center">
          <Link href="/" className="flex items-center relative z-50">
            <img
              src={logoImg}
              alt="Exponent Bizolution"
              className="h-[130px] w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const active = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-semibold tracking-[0.04em] transition-colors duration-200 ${
                    active
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-primary hover:bg-[#9A1116] text-white px-8 py-3 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)]"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 z-40 bg-[#0A1628]/98 backdrop-blur-xl flex flex-col items-center justify-center pt-24"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              <img src={logoImg} alt="Exponent Bizolution" className="h-[96px] w-auto mb-2" />
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold uppercase tracking-wider ${
                    location === link.href ? "text-primary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-primary text-white w-full max-w-sm text-center py-4 rounded-[6px] font-bold text-[16px] uppercase tracking-[0.06em]"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
