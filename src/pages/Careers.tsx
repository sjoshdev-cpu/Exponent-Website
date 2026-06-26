import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import { Globe, Heart, Zap, Users, MapPin, TrendingUp, ArrowRight, X, CheckCircle, Upload } from "lucide-react";
import heroCareers from "@/assets/hero-careers.jpg";

const WHY = [
  { icon: Globe, title: "Pan-African Footprint", desc: "Work across five countries with a team that thinks continentally." },
  { icon: Heart, title: "Women-Led Culture", desc: "An inclusive, empowering environment where merit and vision drive advancement." },
  { icon: Zap, title: "Growth & Innovation", desc: "Work alongside the XPO Tech Lab, the Academy, and teams pushing boundaries." },
  { icon: Users, title: "Meaningful Work", desc: "Every role contributes to job creation, SDG alignment, and genuine African progress." },
  { icon: TrendingUp, title: "Career Development", desc: "Certified training, mentorship, and a clear pathway to leadership." },
];

const LOCATIONS = [
  { country: "Zambia", city: "Lusaka", role: "Head Office", flag: "🇿🇲" },
  { country: "Botswana", city: "Gaborone", role: "Operations", flag: "🇧🇼" },
  { country: "Nigeria", city: "Lagos", role: "Operations", flag: "🇳🇬" },
  { country: "Kenya", city: "Nairobi", role: "Operations", flag: "🇰🇪" },
];

const AREAS = [
  "Call Centre Operations",
  "Sales & Business Development",
  "Trade Field Representatives",
  "Customer Experience Management",
  "Training & Facilitation",
  "Technology & Development",
  "Finance & Administration",
  "Legal & Compliance",
  "Human Resources",
  "Marketing & Communications",
];

// ── JOB APPLICATION MODAL ─────────────────────────────────────────────────────
function JobApplicationModal({
  open, onClose, defaultArea,
}: {
  open: boolean; onClose: () => void; defaultArea?: string;
}) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "", area: defaultArea || "", linkedin: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (defaultArea) setForm(f => ({ ...f, area: defaultArea }));
  }, [defaultArea]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_jsbgx78",
        "template_ptbvu4h",
        {
          from_name:  form.name,
          from_email: form.email,
          name:       form.name,
          email:      form.email,
          phone:      form.phone,
          subject:    `Job Application – ${form.area || "General"} – ${form.name}`,
          title:      `Job Application – ${form.area || "General"} – ${form.name}`,
          service:    form.area,
          message:    `Area of Interest: ${form.area}\nLocation: ${form.location}\nLinkedIn/Portfolio: ${form.linkedin || "Not provided"}\n\nCover Note:\n${form.message}`,
        },
        "N9E6gVeQeOM5MaWGb"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback: mailto if EmailJS fails
      const subject = encodeURIComponent(`Job Application – ${form.area || "General"} – ${form.name}`);
      const body = encodeURIComponent(
        `JOB APPLICATION\n===============\n\n` +
        `Full Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
        `Location: ${form.location}\nArea of Interest: ${form.area}\n` +
        `LinkedIn / Portfolio: ${form.linkedin || "Not provided"}\n\nCover Note:\n${form.message}\n\n` +
        `---\nSubmitted via exponentbizolution.org Careers Page\n\nNote: Please attach your CV to this email before sending.`
      );
      window.location.href = `mailto:jobs@exponentbizolution.org?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[16px] w-full max-w-[560px] max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="bg-[#0A1628] rounded-t-[16px] px-8 py-6 flex items-center justify-between">
          <div>
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.12em] mb-1">Careers at Exponent</div>
            <h2 className="text-white font-bold text-[22px]">Apply Now</h2>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1"><X size={20} /></button>
        </div>
        {submitted ? (
          <div className="p-10 text-center">
            <CheckCircle size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-[#121212] font-bold text-[22px] mb-2">Application Submitted!</h3>
            <p className="text-[#5A5A5A] text-[15px] mb-2">Your application has been sent directly to our HR team.</p>
            <p className="text-primary font-bold text-[14px] mb-6">Please email your CV to jobs@exponentbizolution.org to complete your application.</p>
            <button onClick={onClose} className="bg-primary text-white px-8 py-3 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em]">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Full Name *</label>
              <input required value={form.name} onChange={set("name")} placeholder="Your full name" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Phone</label>
                <input value={form.phone} onChange={set("phone")} placeholder="+260 ..." className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Location</label>
                <input value={form.location} onChange={set("location")} placeholder="City, Country" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Area of Interest *</label>
                <select required value={form.area} onChange={set("area")} className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all bg-white">
                  <option value="">Select area...</option>
                  {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                  <option value="General / Speculative">General / Speculative</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">LinkedIn or Portfolio URL</label>
              <input type="url" value={form.linkedin} onChange={set("linkedin")} placeholder="https://linkedin.com/in/..." className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Cover Note *</label>
              <textarea required value={form.message} onChange={set("message")} rows={4} placeholder="Tell us why you'd be a great fit. Include your experience, skills, and what drives you..." className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all resize-none" />
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-[8px] px-4 py-3 flex items-start gap-3">
              <Upload size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <p className="text-[13px] text-[#5A5A5A]"><strong className="text-[#121212]">CV submission</strong> — after applying here, email your CV directly to <strong>jobs@exponentbizolution.org</strong> to complete your application.</p>
            </div>
            <div className="pt-2">
              <button type="submit" disabled={sending} className="w-full bg-primary hover:bg-[#9A1116] text-white py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)] disabled:opacity-50 disabled:cursor-not-allowed">
                {sending ? "Submitting..." : "Submit Application →"}
              </button>
              <p className="text-center text-[12px] text-[#888] mt-3">Sends to jobs@exponentbizolution.org · We review every application</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
export default function Careers() {
  const [, setLocation] = useLocation();
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string>("");

  useEffect(() => {
    document.title = "Careers | Join Exponent Bizolution";
  }, []);

  const openApply = (area?: string) => {
    setSelectedArea(area || "");
    setApplyOpen(true);
  };

  return (
    <div className="w-full flex flex-col">
      <JobApplicationModal open={applyOpen} onClose={() => setApplyOpen(false)} defaultArea={selectedArea} />

      {/* HERO — NAVY */}
      <section className="min-h-[60vh] w-full flex items-end pb-16 relative overflow-hidden bg-[#0A1628] pt-32">
        <div className="absolute inset-0">
          <img src={heroCareers} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/40" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Careers at Exponent</div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.02em] max-w-[800px] mb-6">
            Build Africa's Future. Start With Your Career.
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] max-w-[560px]">
            We're building the Pan-African enterprise the continent deserves, operating across 4 countries. We need exceptional people to do it.
          </p>
        </div>
      </section>

      {/* WHY EXPONENT — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Why Exponent</div>
            <AnimatedHeading className="text-[#121212]">Five Reasons to Build Your Career Here</AnimatedHeading>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((item, i) => (
              <TiltCard key={i} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 rounded-[12px] p-8 h-full hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-250 group">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-[#121212] font-bold text-[18px] mb-3">{item.title}</h3>
                  <p className="text-[#5A5A5A] text-[15px] leading-[1.65]">{item.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES — NAVY */}
      <section className="bg-[#0A1628] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Our Locations</div>
            <AnimatedHeading className="text-white">We Operate Across Four African Countries</AnimatedHeading>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {LOCATIONS.map((loc, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/[0.05] border border-white/10 rounded-[12px] p-6 text-center hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-250 group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-250">{loc.flag}</div>
                  <div className="text-white font-bold text-[15px] mb-1">{loc.country}</div>
                  <div className="flex items-center justify-center gap-1 text-white/50 text-[12px] mb-2">
                    <MapPin size={10} /> {loc.city}
                  </div>
                  <div className="text-primary text-[11px] font-bold uppercase tracking-[0.08em]">{loc.role}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING AREAS — LIGHT GREY */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12">
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Open Roles</div>
            <AnimatedHeading className="text-[#121212]">We're Always Looking for Exceptional Talent</AnimatedHeading>
            <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[560px] mt-2">
              We hire across ten functional areas. If your skills align with our mission, we want to hear from you.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mb-12">
            {AREAS.map((area, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <button
                  onClick={() => openApply(area)}
                  className="w-full text-left bg-white border border-gray-200 rounded-[10px] px-6 py-4 flex items-center justify-between hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="text-[#121212] font-semibold text-[15px]">{area}</span>
                  <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="bg-[#0A1628] rounded-[12px] p-10 md:p-14 text-center">
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-3">Don't See Your Role?</div>
              <h3 className="text-white font-bold text-[28px] mb-4">Send a Speculative Application</h3>
              <p className="text-white/60 text-[16px] max-w-[400px] mx-auto mb-8">
                If you believe you'd add value to the Exponent team, we'd love to know about you.
              </p>
              <MagneticButton
                as="button"
                onClick={() => openApply("General / Speculative")}
                className="bg-primary hover:bg-[#9A1116] text-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)] inline-block"
              >
                Apply Now →
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA — RED */}
      <section className="py-[56px] md:py-[80px] bg-primary">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-white font-bold text-3xl md:text-[42px] leading-[1.2] mb-4">Ready to Join the Team?</h2>
            <p className="text-white/80 text-[18px] leading-[1.75] max-w-[480px] mx-auto mb-8">
              Send your CV to our HR team. We review every application.
            </p>
              <button
              onClick={() => openApply()}
              className="bg-white text-primary px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] inline-block transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              Apply Now →
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}