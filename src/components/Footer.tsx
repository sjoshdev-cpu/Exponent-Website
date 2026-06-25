import { Link } from "wouter";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoImg from "@/assets/logo-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10 pt-20 pb-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <img src={logoImg} alt="Exponent Bizolution" className="h-[72px] w-auto object-contain object-left" />
            <p className="text-white/60 text-sm leading-relaxed max-w-[240px] mt-1">
              Scaling Businesses. Creating Jobs. Transforming Africa.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/company/exponent-bizolution" target="_blank" rel="noreferrer" className="text-white/55 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/55 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/55 hover:text-primary transition-colors">
                <SiTiktok size={20} />
              </a>
              <a href="#" className="text-white/55 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-[11px] font-bold uppercase tracking-[0.12em]">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link>
              <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">Leadership</Link>
              <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">Our Values</Link>
              <Link href="/impact" className="text-white/60 hover:text-white text-sm transition-colors">SDG Commitment</Link>
              <Link href="/impact" className="text-white/60 hover:text-white text-sm transition-colors">Women Who Lead</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-[11px] font-bold uppercase tracking-[0.12em]">Services</h4>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Customer Experience</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Sales & Marketing</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Training & Development</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Digital Solutions</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Trade Management</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Back Office</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Debt Collection</Link>
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">Consultancy</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-[11px] font-bold uppercase tracking-[0.12em]">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="tel:+260978383700" className="hover:text-white transition-colors">+260 978 383 700</a>
              <a href="tel:+260966233214" className="hover:text-white transition-colors">+260 966 233 214</a>
              <a href="mailto:exponent@exponentbizolution.com" className="hover:text-white transition-colors break-all">exponent@exponentbizolution.com</a>
              <a href="https://www.exponentbizolution.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.exponentbizolution.com</a>
              <p className="mt-1">Lusaka, Zambia (Head Office)</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Exponent Bizolution Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
