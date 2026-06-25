import { useEffect } from "react";
import { useLocation } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import { Bot, BarChart2, Activity, Users, BookOpen, Award, Zap, Globe } from "lucide-react";
import heroAcademy from "@/assets/hero-academy.png";

const INNOVATIONS = [
  {
    icon: Bot,
    title: "AHD Chatbot",
    desc: "Multichannel web and WhatsApp chatbot for customer query resolution. Handles thousands of interactions simultaneously with precision.",
  },
  {
    icon: Users,
    title: "Omni-Channel CRM",
    desc: "Call centre backbone for cross-platform customer relationship management. Unified view, every channel, real time.",
  },
  {
    icon: Globe,
    title: "Altus Loan Frontend",
    desc: "Development of Altus Loan website frontend, delivering a high-performance financial services interface.",
  },
  {
    icon: BarChart2,
    title: "Tracker/Survey/Analytics Website",
    desc: "A comprehensive data analytics platform for audits, surveys, and real-time field data tracking.",
  },
];

const PROGRAMMES = [
  { icon: BookOpen, title: "Customer Service Excellence", desc: "Practical certification in service delivery, complaint handling, and CX best practices." },
  { icon: Zap, title: "Sales & Soft Skills", desc: "Negotiation, closing, communication, and customer rapport modules." },
  { icon: Users, title: "Leadership Development", desc: "Management fundamentals, people leadership, and executive performance for emerging leaders." },
  { icon: Globe, title: "Digital Literacy", desc: "Foundational and advanced modules in CRM, data management, and digital communication." },
  { icon: Award, title: "Industry Certifications", desc: "Recognised qualifications aligned with international BPO and CX standards." },
  { icon: BookOpen, title: "Bespoke Corporate Training", desc: "Custom-designed programmes for companies seeking tailored workforce transformation." },
];

export default function Academy() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Exponent Academy & XPO Tech Lab";
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* HERO — NAVY */}
      <section className="min-h-[60vh] w-full flex items-end pb-16 relative overflow-hidden bg-[#0A1628] pt-32">
        <div className="absolute inset-0">
          <img src={heroAcademy} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Exponent Academy + XPO Tech Lab</div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.02em] max-w-[800px] mb-6">
            We Build the Future Workforce. And the Tools They'll Use.
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] max-w-[560px]">
            Two engines of capability: one to develop African talent, one to build the technology that powers their work.
          </p>
        </div>
      </section>

      {/* ACADEMY INTRO — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Exponent Academy</div>
              <AnimatedHeading className="text-[#121212]">
                We Don't Just Train People. We Build the Future Workforce.
              </AnimatedHeading>
              <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[560px] mt-4">
                Exponent Academy is a physical and virtual learning institution delivering certified training that transforms careers and elevates performance. We develop talent for our own operations and for the broader African business community.
              </p>
              <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[560px] mt-4">
                Over 1,000 professionals certified. Programmes spanning customer service, leadership, sales, and digital skills.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative bg-[#0A1628] rounded-[12px] p-10 text-center shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#1B2D4F]" />
                <div className="relative z-10">
                  <div className="text-white font-bold text-7xl mb-2">1,000+</div>
                  <div className="text-primary text-[13px] uppercase tracking-[0.12em] font-bold">Professionals Certified</div>
                  <div className="w-12 h-[2px] bg-primary mx-auto my-6" />
                  <p className="text-white/60 text-[15px] leading-[1.6]">Through physical and virtual learning programmes across Africa</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMMES — LIGHT GREY */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">Training Programmes</AnimatedHeading>
            <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[560px] mt-2">
              Structured learning pathways from foundational skills to executive leadership.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMMES.map((p, i) => (
              <TiltCard key={i} delay={i * 0.07}>
                <div className="bg-white border border-gray-200 rounded-[12px] p-7 h-full hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-250 group">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <p.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-[#121212] font-bold text-[17px] mb-3 leading-[1.3]">{p.title}</h3>
                  <p className="text-[#5A5A5A] text-[14px] leading-[1.65]">{p.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* XPO TECH LAB — NAVY */}
      <section className="bg-[#0A1628] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">XPO Tech Lab</div>
            <AnimatedHeading className="text-white">Innovation Built In-House. Deployed Across Africa.</AnimatedHeading>
            <p className="text-white/65 text-[17px] leading-[1.75] max-w-[600px] mt-2">
              Our R&D lab doesn't adapt off-the-shelf products. It builds purpose-designed tools for the realities of African business: the infrastructure, the culture, the scale.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {INNOVATIONS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/[0.05] border border-white/10 rounded-[12px] p-8 hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-250 group">
                  <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-white font-bold text-[18px] mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="border-l-4 border-primary pl-8">
              <p className="text-white font-bold text-[22px] leading-[1.4] italic">"We don't use off-the-shelf. We build what works."</p>
              <p className="text-primary text-[13px] uppercase tracking-[0.1em] font-bold mt-3">XPO Tech Lab, Lusaka</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA — RED */}
      <section className="py-[56px] md:py-[80px] bg-primary">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-white font-bold text-3xl md:text-[42px] leading-[1.2] mb-4">Train Your Team with Exponent Academy</h2>
            <p className="text-white/80 text-[18px] leading-[1.75] max-w-[480px] mx-auto mb-8">
              Corporate training packages available for teams of all sizes. Let's design your workforce transformation programme.
            </p>
            <MagneticButton
              as="button"
              onClick={() => setLocation("/contact")}
              className="bg-white text-primary px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              Enquire About Training →
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
