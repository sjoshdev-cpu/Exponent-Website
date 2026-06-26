import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import {
  Headphones, TrendingUp, GraduationCap, Monitor,
  ShoppingCart, Archive, CreditCard, Briefcase, ChevronDown, ChevronUp
} from "lucide-react";
import serviceCx from "@/assets/service-cx.jpg";
import serviceSales from "@/assets/service-sales.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceTrade from "@/assets/service-trade.jpg";
import serviceBackoffice from "@/assets/service-backoffice.jpg";
import serviceDebt from "@/assets/service-debt.jpg";
import serviceConsultancy from "@/assets/service-consultancy.jpg";
import heroServices from "@/assets/hero-services.jpg";

const SERVICES = [
  {
    icon: Headphones,
    title: "Customer Experience Solutions",
    short: "End-to-end inbound and outbound management across every customer touchpoint.",
    img: serviceCx,
    items: [
      { name: "Inbound Call Centre Management", desc: "Retain, support, and attract customers through multi-channel strategies." },
      { name: "Outbound & Digital Call Centre", desc: "Build and retain relationships with high-potential customers via outbound and digital channels." },
      { name: "Retention Campaigns", desc: "Churn management, loyalty marketing, and upselling/cross-selling programmes." },
      { name: "Churn Management", desc: "Data-driven strategies to minimise customer attrition and protect revenue." },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Trade Management",
    short: "On-ground trade execution that delivers market share and measurable ROI.",
    img: serviceTrade,
    items: [
      { name: "DSA Management", desc: "Recruitment, training, deployment, and management of direct sales agents." },
      { name: "Field Activations", desc: "Coordinated on-ground activation teams that capture market share." },
      { name: "Merchandising", desc: "In-store and field merchandising that ensures brand presence at retail level." },
      { name: "Market Intelligence", desc: "Competitive analysis, data collection, and insight reporting from the field." },
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    short: "Certified training that builds your workforce and powers your operations.",
    img: serviceTraining,
    items: [
      { name: "Customer Service Excellence", desc: "Practical modules in service delivery, complaint handling, and CX standards." },
      { name: "Sales & Soft Skills", desc: "Negotiation, closing, communication, and customer rapport training." },
      { name: "Leadership Development", desc: "Management fundamentals, people leadership, and executive performance modules." },
      { name: "Customised Corporate Training", desc: "Bespoke programmes aligned to your business goals and industry." },
    ],
  },
  {
    icon: Monitor,
    title: "Digital Solutions",
    short: "Purpose-built technology for the African market, deployed and supported in-house.",
    img: serviceDigital,
    items: [
      { name: "Omni-Channel CRM", desc: "Our proprietary CRM integrates all customer communication channels into one unified view." },
      { name: "AHD Chatbot", desc: "WhatsApp and web chatbot for autonomous customer query resolution at scale." },
      { name: "Web & App Development", desc: "Custom digital products engineered for African market requirements." },
      { name: "Social Media Support", desc: "Moderation, community management, and digital reputation services." },
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing Services",
    short: "From paid lead campaigns to on-ground activations, we move product and build pipeline.",
    img: serviceSales,
    items: [
      { name: "Sales Lead Generation", desc: "PPC campaigns, telemarketing, email marketing, direct marketing, and co-registration leads." },
      { name: "Market Activation Services", desc: "Roadshows and market storms that create impactful on-ground brand experiences." },
      { name: "Customer Value Management", desc: "Analytics-led strategies to maximise lifetime value across segments." },
      { name: "Door-to-Door Sales", desc: "Trained DSAs conducting face-to-face customer acquisition in target markets." },
    ],
  },
  {
    icon: Archive,
    title: "Back Office Support",
    short: "Behind-the-scenes operations that keep your front lines efficient and your business compliant.",
    img: serviceBackoffice,
    items: [
      { name: "Help Desk Services", desc: "Tier 1 and Tier 2 support for internal and external stakeholders." },
      { name: "Social Media Support", desc: "Monitoring, engagement, and issue resolution across all social channels." },
      { name: "NFS Integration", desc: "National filing system and compliance document processing support." },
      { name: "Service Implants", desc: "Embedded operational teams deployed on-site at client locations." },
    ],
  },
  {
    icon: CreditCard,
    title: "Debt Collection",
    short: "Ethical, results-driven debt recovery that protects client relationships.",
    img: serviceDebt,
    items: [
      { name: "Early-Stage Recovery", desc: "Proactive collections at the earliest stage to maximise recovery rates." },
      { name: "Late-Stage Collections", desc: "Persistent, compliant recovery on delinquent accounts." },
      { name: "Retail Credit Management", desc: "Portfolio management and monthly retail collection programmes." },
      { name: "Compliance-First Approach", desc: "All collection activity conducted within regulatory and ethical guidelines." },
    ],
  },
  {
    icon: Briefcase,
    title: "Consultancy",
    short: "Strategic counsel that turns complexity into clarity and ambition into action.",
    img: serviceConsultancy,
    items: [
      { name: "HR Consultancy", desc: "Talent strategy, workforce design, and HR system implementation." },
      { name: "Strategy Development", desc: "Market entry, growth strategy, and business transformation roadmaps." },
      { name: "Trade Audit", desc: "Comprehensive field audit services with benchmarking and recommendations." },
      { name: "Customer Value Design", desc: "Designing propositions, loyalty frameworks, and service blueprints." },
    ],
  },
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Services | Exponent Bizolution";
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* HERO — NAVY */}
      <section className="min-h-[60vh] w-full flex items-end pb-16 relative overflow-hidden bg-[#0A1628] pt-32">
        <div className="absolute inset-0">
          <img src={heroServices} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">What We Do</div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.02em] max-w-[800px] mb-6">
            End-to-End Business Solutions, Delivered Across Africa.
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] max-w-[560px]">
            Eight service verticals. One strategic partner. Built for African markets, engineered to global standards.
          </p>
        </div>
      </section>
      {/* OVERVIEW GRID — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">Our Eight Service Verticals</AnimatedHeading>
            <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[560px] mt-2">From your first customer call to your largest trade activation.  We design, staff, and execute.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <TiltCard key={i} delay={i * 0.06} className="h-full">
                <div
                  className="bg-white border border-gray-200 rounded-[12px] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-250 cursor-pointer group"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  {svc.img ? (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={svc.img}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-[#0A1628]/10 to-[#B7161C]/10 flex items-center justify-center">
                      <svc.icon size={40} className="text-primary/50" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <svc.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-[#121212] font-bold text-[16px] leading-[1.3]">{svc.title}</h3>
                    <p className="text-[#5A5A5A] text-[13px] leading-[1.6] flex-1">{svc.short}</p>
                    <div className="flex items-center gap-2 text-primary text-[12px] font-bold uppercase tracking-[0.06em]">
                      Details {openIdx === i ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      {/* ACCORDION DETAILS — LIGHT GREY */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <AnimatedHeading className="text-[#121212]">Explore Each Service in Detail</AnimatedHeading>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="bg-white border border-gray-200 rounded-[12px] overflow-hidden hover:border-primary/30 transition-colors duration-200">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="w-full flex items-center justify-between p-7 text-left group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <svc.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-primary text-[11px] font-bold uppercase tracking-[0.1em] mb-1">Service {String(i + 1).padStart(2, "0")}</div>
                        <h3 className="text-[#121212] font-bold text-[18px]">{svc.title}</h3>
                      </div>
                    </div>
                    <div className="text-[#5A5A5A] flex-shrink-0 ml-4">
                      {openIdx === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  {openIdx === i && (
                    <div className="px-7 pb-7">
                      <p className="text-[#5A5A5A] text-[16px] mb-6 max-w-[600px]">{svc.short}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {svc.items.map((item, j) => (
                          <div key={j} className="bg-[#F8F9FA] rounded-[8px] p-5 border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <h4 className="text-[#121212] font-bold text-[14px]">{item.name}</h4>
                            </div>
                            <p className="text-[#5A5A5A] text-[13px] leading-[1.6] pl-3.5">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* CTA — RED */}
      <section className="py-[56px] md:py-[80px] bg-primary">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-white font-bold text-3xl md:text-[42px] leading-[1.2] mb-4">Ready to See What's Possible?</h2>
            <p className="text-white/80 text-[18px] leading-[1.75] max-w-[500px] mx-auto mb-8">Let's discuss your requirements and map out the right service mix for your business.</p>
            <MagneticButton
              as="button"
              onClick={() => setLocation("/contact")}
              className="bg-white text-primary px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              Get a Custom Quote →
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
