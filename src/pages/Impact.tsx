import { useEffect } from "react";
import { useLocation } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import MagneticButton from "@/components/MagneticButton";
import heroImpact from "@/assets/hero-impact.png";
import stanfordSeedLogo from "@/assets/stanford seed logo.png";

// ── SDG LOCAL ASSETS ──────────────────────────────────────────────────────────
import sdg1Img from "@/assets/sdg1.png";
import sdg5Img from "@/assets/sdg5.png";
import sdg8Img from "@/assets/sdg8.png";
import sdg9Img from "@/assets/sdg9.png";
import sdg10Img from "@/assets/sdg10.png";
import sdg11Img from "@/assets/sdg11.png";
import sdg12Img from "@/assets/sdg12.png";
import sdg17Img from "@/assets/sdg17.png";

const SDGS = [
  { num: 1,  title: "No Poverty",                           img: sdg1Img,  desc: "Creating jobs and fostering economic independence across our operational markets." },
  { num: 5,  title: "Gender Equality",                      img: sdg5Img,  desc: "Promoting equity and advancing women in leadership at every level." },
  { num: 8,  title: "Decent Work & Economic Growth",        img: sdg8Img,  desc: "Driving employment through our training, placement, and operational activities." },
  { num: 9,  title: "Industry, Innovation & Infrastructure", img: sdg9Img,  desc: "Investing in technology and infrastructure that powers African businesses." },
  { num: 10, title: "Reduced Inequalities",                 img: sdg10Img, desc: "Reducing disparity through inclusive hiring and accessible technology." },
  { num: 11, title: "Sustainable Cities & Communities",     img: sdg11Img, desc: "Building resilient operational hubs that support local urban development." },
  { num: 12, title: "Responsible Consumption & Production", img: sdg12Img, desc: "Promoting efficient resource use and sustainable operational practices." },
  { num: 17, title: "Partnerships for the Goals",           img: sdg17Img, desc: "Collaborating with global and local partners to achieve sustainable impact." },
];

export default function Impact() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Our Impact | Women Who Lead & SDG Commitment";
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* HERO — NAVY */}
      <section className="min-h-[60vh] w-full flex items-end pb-16 relative overflow-hidden bg-[#0A1628] pt-32">
        <div className="absolute inset-0">
          <img src={heroImpact} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Our Impact</div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.02em] max-w-[800px] mb-6">
            Scaling Businesses. Creating Jobs. Transforming Africa.
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] max-w-[560px]">
            Every contract we sign is a commitment to our clients, to the communities we operate in, and to the Africa we are building together.
          </p>
        </div>
      </section>

      {/* WOMEN WHO LEAD — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Women Who Lead</div>
              <AnimatedHeading className="text-[#121212]">This Is What Leadership Looks Like.</AnimatedHeading>
              <p className="text-primary font-bold text-[16px] uppercase tracking-[0.06em] mb-6">
                Leading the Legacy. Shaping the Future.
              </p>
              <div className="space-y-4 text-[#5A5A5A] text-[17px] leading-[1.75] mb-8">
                <p>At Exponent Bizolution, we proudly celebrate our legacy of empowering women in leadership. From inception, women have been at the helm of our operations, driving innovation, fostering collaboration, and shaping our future.</p>
                <p>This is not a quota. This is our culture. Women lead our executive team, our country operations, our legal function, and our technology lab.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative bg-[#F8F9FA] border border-gray-200 rounded-[12px] p-10 shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-[12px]" />
                <p className="text-[#121212] font-bold text-[32px] leading-[1.3] italic mb-4">"Women built this."</p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-primary" />
                  <span className="text-[#5A5A5A] text-[14px]">Exponent Bizolution</span>
                </div>
                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-[#5A5A5A] text-[18px] italic">"Leadership has no gender. Only vision."</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STANFORD SEED — LIGHT GREY */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Global Recognition</div>
              <AnimatedHeading className="text-[#121212]">Scaling With Stanford Seed.</AnimatedHeading>
              <div className="space-y-4 text-[#5A5A5A] text-[17px] leading-[1.75] my-6">
                <p>
                  Exponent Bizolution is a current participant in the <strong className="text-[#121212]">Stanford Seed Strategic Transformation Program (STP)</strong> -- a highly selective programme by Stanford University's Graduate School of Business designed to accelerate high-growth enterprises across emerging markets.
                </p>
                <p>
                  The STP brings together founders and senior leaders from across Africa and Asia for intensive strategy workshops, executive coaching, and peer learning with world-class faculty. Being selected reflects Stanford Seed's confidence in Exponent's model, leadership, and potential to drive systemic economic transformation across the continent.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-[0.08em] px-4 py-2 rounded-full">Stanford University</span>
                <span className="bg-[#0A1628]/10 text-[#0A1628] text-[12px] font-bold uppercase tracking-[0.08em] px-4 py-2 rounded-full">GSB Faculty</span>
                <span className="bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-[0.08em] px-4 py-2 rounded-full">2025 / 2026 Cohort</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-[#0A1628] rounded-[16px] p-8 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <img src={stanfordSeedLogo} alt="Stanford Seed" className="w-full h-full object-contain bg-white p-1" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[16px]">Stanford Seed</div>
                    <div className="text-primary text-[11px] uppercase tracking-[0.1em] font-bold">Strategic Transformation Program</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Programme", value: "Strategic Transformation Program (STP)" },
                    { label: "Institution", value: "Stanford Seed, Stanford University" },
                    { label: "Focus", value: "Scaling high-growth African enterprises" },
                    { label: "Stage", value: "Active Participant -- 2025 / 2026 Cohort" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="text-white/50 text-[11px] uppercase tracking-[0.1em] font-bold mb-1">{item.label}</div>
                      <div className="text-white text-[15px] font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-[14px] leading-[1.7] italic">
                    "Selected by Stanford Seed as a high-growth enterprise with the leadership and model to transform business across Africa."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* SDG — LIGHT GREY with IMAGE CARDS */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">Our SDG Commitment</AnimatedHeading>
            <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[600px] mt-2">
              Aligned with 8 of the 17 Sustainable Development Goals, not as a tagline, but as a measurement of whether our growth creates genuine value.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
            {SDGS.map((sdg, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="bg-white border border-gray-200 rounded-[12px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-250 group">
                  <div className="h-[120px] overflow-hidden">
                    <img
                      src={sdg.img}
                      alt={`SDG ${sdg.num} - ${sdg.title}`}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.05]"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-primary font-bold text-[12px] uppercase tracking-[0.1em] mb-1">SDG {sdg.num}</div>
                    <h3 className="text-[#121212] font-bold text-[14px] mb-2 leading-[1.3]">{sdg.title}</h3>
                    <p className="text-[#5A5A5A] text-[13px] leading-[1.5]">{sdg.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH THAT GIVES BACK — NAVY */}
      <section className="bg-[#0A1628] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <AnimatedHeading className="text-white">Growth That Gives Back</AnimatedHeading>
              <p className="text-white/65 text-[17px] leading-[1.75] max-w-[600px] mt-4">
                Through our training programmes, employment creation, and community investment, Exponent Bizolution creates measurable economic value in every market we enter. We don't just serve communities. We build them.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "18,389 Jobs Created", note: "And counting" },
                  { label: "Communities Reached", note: "Across 4 nations" },
                  { label: "Women in Leadership", note: "At every level" },
                  { label: "8 SDGs Aligned", note: "SDGs 1, 2, 5, 8, 9, 10, 11 & 17" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.05] border border-white/10 rounded-[12px] p-6 hover:border-primary/40 transition-all duration-250">
                    <div className="text-white font-bold text-[15px] mb-1">{item.label}</div>
                    <div className="text-primary text-[12px] uppercase tracking-[0.08em] font-bold">{item.note}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA — RED */}
      <section className="py-[56px] md:py-[80px] bg-primary">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-white font-bold text-3xl md:text-[42px] leading-[1.2] mb-6">Build Impact With Us</h2>
            <MagneticButton
              as="button"
              onClick={() => setLocation("/contact")}
              className="bg-white text-primary px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px]"
            >
              Partner With Exponent →
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}