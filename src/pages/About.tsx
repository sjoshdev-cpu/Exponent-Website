import { useEffect } from "react";
import { useLocation } from "wouter";
import CountUp from "react-countup";
import { useInView as useIOInView } from "react-intersection-observer";
import heroAbout from "@/assets/hero-about.png";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import { Shield, Zap, Users, Globe, Lightbulb, Star, Leaf } from "lucide-react";
// New team member images (filenames indicate the intended card)
import teamImg1 from "@/assets/team-1.png";
import teamImg2 from "@/assets/team-2.png";
// New team member images
import AbigailImg from "@/assets/Abigail.jpg";
import TanakaImg from "@/assets/Tanaka.webp";
import DalisoImg from "@/assets/Daliso.webp";
import LoratoImg from "@/assets/Lorato.jpg";
import MbuleImg from "@/assets/Mbule.jpg";
import UchechiImg from "@/assets/Uchechi.jpg";
import LutenganoImg from "@/assets/Lutengano.jpg";
import UgoImg from "@/assets/Ugo.jpg";
import NkechiImg from "@/assets/Nkechi.jpg";
import ClautildaImg from "@/assets/clautilda.webp";
import OwenImg from "@/assets/Owen.jpg";
import MattImg from "@/assets/Matt (1).jpg";
const TEAM = [
  { name: "Nkechi Ajih", title: "CEO" },
  { name: "Ugo Tony Ajih", title: "Managing Director" },
  { name: "Lorato Mwape", title: "Director, Botswana" },
  { name: "Uchechi Awaraka", title: "Director, Nigeria" },
  { name: "Abigail Kalua", title: "Director, Kenya" },
  { name: "Tanaka Nyemba", title: "Head of MIS" },
  { name: "Matthews Nyirenda", title: "Head of R&D" },
  { name: "Clautilda Kaoma", title: "Head of Legal & Compliance" },
  { name: "Owen Kamboyi", title: "Head of Trade Operations" },
  { name: "Daliso Daka", title: "HR Manager" },
  { name: "Lutengano Tembo", title: "Head of Call Centre Ops" },
  { name: "Mbule Mwimba", title: "Head of Back Office Ops" },
];

const VALUES = [
  { icon: Shield, title: "Integrity in Action", desc: "We lead with transparency, accountability, and trust, delivering on every promise." },
  { icon: Zap, title: "Entrepreneurial Boldness", desc: "Smart risks, bold thinking, sustainable success." },
  { icon: Users, title: "Inclusive Impact", desc: "Growth that benefits the many, not just the few. Women and youth at the centre." },
  { icon: Globe, title: "Collaboration Over Competition", desc: "Pan-African partnerships and collective action." },
  { icon: Lightbulb, title: "Empowerment Through Opportunity", desc: "Connecting businesses and talent with the right tools and networks." },
  { icon: Star, title: "Service Excellence with Empathy", desc: "World-class interactions with consistency and care." },
  { icon: Leaf, title: "Sustainability & Responsibility", desc: "Aligned with the SDGs. Growth that is good for everyone." },
];

const ABOUT_STATS = [
  { value: 50, suffix: "M+", label: "Customer Interactions" },
  { value: 18389, suffix: "", label: "Jobs Created" },
  { value: 4, suffix: "", label: "African Countries" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 100, suffix: "+", label: "Clients Served" },
];

const AVATAR_BG = ["#0A1628", "#B7161C", "#1B2D4F", "#2F0545", "#0D1F38"];

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

function AboutStatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useIOInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="bg-[#0A1628] p-8 rounded-[12px] group hover:-translate-y-1 transition-all duration-250">
      <div className="text-white font-bold text-[42px] leading-none mb-2 tabular-nums group-hover:text-primary transition-colors duration-300">
        {inView ? <CountUp end={value} duration={4.0} separator="," /> : "0"}{suffix}
      </div>
      <div className="text-white/50 text-[12px] uppercase tracking-[0.1em] font-bold">{label}</div>
    </div>
  );
}

export default function About() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "About Us | Exponent Bizolution";
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* HERO — NAVY */}
      <section className="min-h-[60vh] w-full flex items-end pb-16 relative overflow-hidden bg-[#0A1628] pt-32">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">About Exponent Bizolution</div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.02em] max-w-[800px] mb-6">
            Trailblazing Business Process Excellence Across Africa.
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] max-w-[560px]">
            Founded with purpose. Built with precision. Operating across four African nations and growing.
          </p>
        </div>
      </section>
      {/* OUR STORY — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <AnimatedHeading className="text-[#121212]">How Exponent Began</AnimatedHeading>
              <div className="space-y-5 text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[600px]">
                <p>Exponent Bizolution Ltd was founded on a singular conviction: that African businesses deserve execution partners who understand their markets, share their ambitions, and deliver results at international standards. As a faith-based organisation, we operate with a deep sense of purpose and integrity.</p>
                <p>Our journey began with a vision to empower women through decent jobs, skills development, and a profound understanding of technology. We believe that by providing the right tools and opportunities, we can create brighter futures for individuals and communities alike.</p>
                <p>What started as a customer experience operation has evolved into a comprehensive suite of digital solutions, training, trade management, and consultancy -- built because our clients needed more, and we were determined to deliver more.</p>
                <p>Today, Exponent operates across 4 African markets with a growing footprint, a certified training academy, and a technology lab producing tools purpose-built for the African context.</p>
                <p className="font-bold text-[#121212]">This is not outsourcing. This is a growth partnership.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_STATS.map((stat, i) => (
                  <AboutStatCounter key={i} {...stat} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* VISION & MISSION — LIGHT GREY */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">What Drives Us</AnimatedHeading>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { label: "Vision", text: "To become Africa's leading execution partner by powering scalable growth, innovation, and inclusive prosperity." },
              { label: "Mission", text: "To empower women and youth through decent jobs, skills development, and technology understanding to build brighter futures." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-[12px] p-10 h-full shadow-sm hover:shadow-md transition-all duration-250">
                  <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">{item.label}</div>
                  <p className="text-[#121212] text-[22px] font-bold leading-[1.4]">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Brand Promise", text: "Delivering excellence that enables businesses to pivot and scale." },
              { label: "Positioning", text: "Premium, strategic, Pan-African, and women-led." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-[12px] p-8 hover:border-primary/30 hover:shadow-sm transition-all duration-250">
                  <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-3">{item.label}</div>
                  <p className="text-[#5A5A5A] text-[17px] leading-[1.6]">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* CORE VALUES — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">What We Stand For</AnimatedHeading>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <TiltCard key={i} delay={i * 0.07}>
                <div className="bg-white border border-gray-200 rounded-[12px] p-7 h-full hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-250">
                  <val.icon size={24} className="text-primary mb-4" />
                  <h3 className="text-[#121212] font-bold text-[16px] mb-3 leading-[1.3]">{val.title}</h3>
                  <p className="text-[#5A5A5A] text-[14px] leading-[1.65]">{val.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      {/* LEADERSHIP — LIGHT GREY */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">The Team Behind the Growth</AnimatedHeading>
            <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[600px] mt-2">
              Experienced leaders operating across Africa with the expertise and vision to deliver.
            </p>
          </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {(() => {
              // Map each team member name to its imported image
              const imageMap: Record<string, string> = {
                "Ugo Tony Ajih": UgoImg,
                "Nkechi Ajih": NkechiImg,
                "Lorato Mwape": LoratoImg,
                "Uchechi Awaraka": UchechiImg,
                "Abigail Kalua": AbigailImg,
                "Tanaka Nyemba": TanakaImg,
                "Daliso Daka": DalisoImg,
                "Mbule Mwimba": MbuleImg,
              "Clautilda Kaoma": ClautildaImg,
              "Lutengano Tembo": LutenganoImg,
              "Owen Kamboyi": OwenImg,
              "Matthews Nyirenda": MattImg,
              // fallback for any missing entry
              };
              return TEAM.map((member, i) => {
                const imgSrc = imageMap[member.name] ?? null;
                return (
                  <TiltCard key={i} delay={i * 0.04}>
                    <div className="bg-white border border-gray-200 rounded-[12px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-250 group">
                      <div
                        className="h-36 flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: AVATAR_BG[i % AVATAR_BG.length] }}
                      >
                        {imgSrc ? (
                          <img src={imgSrc} alt={member.name} className="object-cover w-full h-full" />
                        ) : (
                          <span className="text-white/80 font-bold text-3xl group-hover:scale-110 transition-transform duration-300">{getInitials(member.name)}</span>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-[#121212] font-bold text-[13px] leading-[1.3] mb-1">{member.name}</div>
                        <div className="text-primary text-[11px] font-bold leading-[1.4]">{member.title}</div>
                      </div>
                    </div>
                  </TiltCard>
                );
              });
            })()}
          </div>
        </div>
      </section>
      {/* CTA — RED */}
      <section className="py-[56px] md:py-[80px] bg-primary">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-white font-bold text-3xl md:text-[42px] leading-[1.2] mb-6">Ready to Partner with Exponent?</h2>
            <MagneticButton
              as="button"
              onClick={() => setLocation("/contact")}
              className="bg-white text-primary px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              Get in Touch →
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}