import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView as useIOInView } from "react-intersection-observer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedWordReveal from "@/components/AnimatedWordReveal";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import {
  Headphones, TrendingUp, GraduationCap, Monitor,
  ShoppingCart, Archive, CreditCard, Briefcase,
  ArrowRight, X, CheckCircle
} from "lucide-react";
import heroBpo from "@/assets/hero-bpo.png";
import aboutLeader from "@/assets/about-leader.png";

// ── SDG LOCAL ASSETS ──────────────────────────────────────────────────────────
import sdg1Img from "@/assets/sdg1.png";
import sdg5Img from "@/assets/sdg5.png";
import sdg8Img from "@/assets/sdg8.png";
import sdg9Img from "@/assets/sdg9.png";
import sdg10Img from "@/assets/sdg10.png";
import sdg11Img from "@/assets/sdg11.png";
import sdg12Img from "@/assets/sdg12.png";
import sdg17Img from "@/assets/sdg17.png";

// ── CLIENT LOGO LOCAL ASSETS ──────────────────────────────────────────────────
import momoMTN from "@/assets/Momo from MTN.png";
import momoBlue from "@/assets/Momo Blue.png";
import airtelMain from "@/assets/Airtel-logo-e1723428516547.png";
import airtelScaled from "@/assets/Airtel-Logo-scaled.jpg";
import globacom from "@/assets/globacom_logo.jpeg";
import veritas from "@/assets/Veritas.png";
import mtnLogo from "@/assets/MTN.png";
import zedfin from "@/assets/Zed-fin.png";
import burn from "@/assets/Burn-Logo_Stoves-scaled.png";
import yoWifi from "@/assets/Yo-Wifi.png";
import prudential from "@/assets/Prudential.jpg";
import xtraCash from "@/assets/Xtra Cash.png";
import mpulungu from "@/assets/Mpulungu harbour.png";
import winALot from "@/assets/Win-a-lot.png";
import altus from "@/assets/Altus.png";
import zamtel from "@/assets/Zamtel.png";
import zamtelMoney from "@/assets/Zamtel Money.png";
import abInBev from "@/assets/ABInBev.png";
import serviceCx from "@/assets/service-cx.png";
import serviceSales from "@/assets/service-sales.png";
import serviceTraining from "@/assets/service-training.png";
import serviceDigital from "@/assets/service-digital.png";
import serviceTrade from "@/assets/service-trade.png";
import serviceBackoffice from "@/assets/service-backoffice.png";
import serviceDebt from "@/assets/service-debt.png";
import serviceConsultancy from "@/assets/service-consultancy.png";

const SERVICES = [
  { icon: Headphones, title: "Customer Experience Solutions", desc: "Inbound, outbound, retention, and churn management across every channel.", img: serviceCx },
  { icon: ShoppingCart, title: "Trade Management", desc: "DSA management, field activations, merchandising, and market intelligence.", img: serviceTrade },
  { icon: GraduationCap, title: "Training & Development", desc: "Industry-certified programmes and bespoke corporate training.", img: serviceTraining },
  { icon: Monitor, title: "Digital Solutions", desc: "CRM, omnichannel platforms, chatbots, and custom technology development.", img: serviceDigital },
  { icon: TrendingUp, title: "Sales & Marketing", desc: "Lead generation, market activation, and customer value management.", img: serviceSales },
  { icon: Archive, title: "Back Office Support", desc: "Help desk, social media support, NFS integration, and service implants.", img: serviceBackoffice },
  { icon: CreditCard, title: "Debt Collection", desc: "Ethical, results-driven debt recovery and retail management.", img: serviceDebt },
  { icon: Briefcase, title: "Consultancy", desc: "HR, strategy development, trade audit, and customer value design.", img: serviceConsultancy },
];

const STATS = [
  { value: 50, suffix: "M+", label: "Customer Interactions" },
  { value: 18389, suffix: "", label: "Jobs Created" },
  { value: 4, suffix: "", label: "African Countries" },
  { value: 98, suffix: "%", label: "Customer Satisfaction", sublabel: "Global Standard: 85%" },
  { value: 100, suffix: "+", label: "Clients Served" },
];

const CLIENTS = [
  { name: "MoMo Zambia", logo: momoMTN },
  { name: "Airtel Zambia", logo: airtelMain },
  { name: "Airtel Nigeria", logo: airtelScaled },
  { name: "Glo Nigeria", logo: globacom },
  { name: "Veritas General Insurance", logo: veritas },
  { name: "MTN Zambia", logo: momoBlue },
  { name: "MTN Nigeria", logo: mtnLogo },
  { name: "Zedfin Financial Services", logo: zedfin },
  { name: "Burn Manufacturing", logo: burn },
  { name: "Yo-Wifi (UTT)", logo: yoWifi },
  { name: "Prudential Insurance", logo: prudential },
  { name: "XtraCash", logo: xtraCash },
  { name: "Mpulungu Harbour Corp LTD", logo: mpulungu },
  { name: "Paramount Gamings Ltd", logo: winALot },
  { name: "Altus Financial Services Ltd", logo: altus },
  { name: "Zamtel Telecommunications", logo: zamtel },
  { name: "Zamtel Mobile Money", logo: zamtelMoney },
  { name: "ABInBev", logo: abInBev },
];

const SDGS = [
  { num: 1,  title: "No Poverty",                          img: sdg1Img },
  { num: 8,  title: "Decent Work & Economic Growth",       img: sdg8Img },
  { num: 9,  title: "Industry, Innovation & Infrastructure", img: sdg9Img },
  { num: 10, title: "Reduced Inequalities",                img: sdg10Img },
  { num: 11, title: "Sustainable Cities & Communities",    img: sdg11Img },
  { num: 12, title: "Responsible Consumption & Production", img: sdg12Img },
  { num: 5,  title: "Gender Equality",                     img: sdg5Img },
  { num: 17, title: "Partnerships for the Goals",          img: sdg17Img },
];

const SERVICES_OPTIONS = [
  "Customer Experience Solutions",
  "Sales & Marketing Services",
  "Training & Development",
  "Digital Solutions",
  "Trade Management",
  "Back Office Support",
  "Debt Collection",
  "Consultancy",
  "Partnership Enquiry",
  "Other",
];

// ── BOOKING MODAL ─────────────────────────────────────────────────────────────
function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

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
          subject:    `Meeting Request – ${form.company || form.name}`,
          service:    form.service,
          message:    form.message,
          title:      `Meeting Request – ${form.company || form.name}`,
        },
        "N9E6gVeQeOM5MaWGb"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback: mailto if EmailJS fails
      const subject = encodeURIComponent(`Meeting Request – ${form.company || form.name}`);
      const body = encodeURIComponent(
        `MEETING REQUEST\n===============\n\n` +
        `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n` +
        `Phone: ${form.phone}\nService Interest: ${form.service}\n\nMessage:\n${form.message}\n\n` +
        `---\nSubmitted via exponentbizolution.org`
      );
      window.location.href = `mailto:hr@exponentbizolution.org?subject=${subject}&body=${body}`;
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
      <div className="relative bg-white rounded-[16px] w-full max-w-[540px] max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="bg-[#0A1628] rounded-t-[16px] px-8 py-6 flex items-center justify-between">
          <div>
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.12em] mb-1">Book a Meeting</div>
            <h2 className="text-white font-bold text-[22px]">Let's Talk Business</h2>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>
        {submitted ? (
          <div className="p-10 text-center">
            <CheckCircle size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-[#121212] font-bold text-[22px] mb-2">Request Sent!</h3>
            <p className="text-[#5A5A5A] text-[15px] mb-6">Your request has been sent directly to our team. We'll respond within 24 hours.</p>
            <button onClick={onClose} className="bg-primary text-white px-8 py-3 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em]">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Full Name *</label>
                <input required value={form.name} onChange={set("name")} placeholder="Your name" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Company</label>
                <input value={form.company} onChange={set("company")} placeholder="Company name" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Phone</label>
                <input value={form.phone} onChange={set("phone")} placeholder="+260 ..." className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Service Interest *</label>
              <select required value={form.service} onChange={set("service")} className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all bg-white">
                <option value="">Select a service...</option>
                {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Message</label>
              <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Tell us about your needs, timeline, or any specific questions..." className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all resize-none" />
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-primary hover:bg-[#9A1116] text-white py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)]">
                Request Meeting →
              </button>
              <p className="text-center text-[12px] text-[#888] mt-3">Sends to hr@exponentbizolution.org · We respond within 24h</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
function StatCounter({ value, suffix, label, isFirst, sublabel }: { value: number; suffix: string; label: string; isFirst?: boolean; sublabel?: string }) {
  const { ref, inView } = useIOInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`flex flex-col flex-1 group py-2 ${
        isFirst
          ? "items-start text-left pl-0 pr-4"
          : "items-center text-center px-4"
      }`}
    >
      <div className="text-white font-bold text-[40px] md:text-[48px] lg:text-[56px] leading-none tabular-nums transition-transform duration-300 group-hover:scale-105">
        {inView ? (
          <CountUp end={value} duration={4.0} separator="," />
        ) : "0"}{suffix}
      </div>
      <div className={`text-white/55 text-[10px] uppercase tracking-[0.1em] mt-3 leading-[1.5] ${isFirst ? "max-w-[150px]" : "max-w-[120px]"}`}>{label}</div>
      {sublabel && <div className="text-primary/80 text-[9px] font-bold uppercase tracking-[0.05em] mt-1">{sublabel}</div>}
    </div>
  );
}

function SDGMarquee() {
  const doubled = [...SDGS, ...SDGS];
  return (
    <div className="overflow-hidden group">
      <div className="flex gap-4 animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
        {doubled.map((sdg, i) => (
          <div key={i} className="flex-shrink-0 w-[120px] h-[120px] rounded-[8px] overflow-hidden bg-[#1B2D4F] border border-white/10">
            <img
              src={sdg.img}
              alt={`SDG ${sdg.num} - ${sdg.title}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent) {
                  parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#0A1628;text-align:center;line-height:1.3;">${sdg.title}</span>`;
                }
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientsMarquee() {
  const half = Math.ceil(CLIENTS.length / 2);
  const rowA = [...CLIENTS.slice(0, half), ...CLIENTS.slice(0, half)];
  const rowB = [...CLIENTS.slice(half), ...CLIENTS.slice(half)];

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden group">
        <div className="flex gap-6 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {rowA.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[160px] h-[90px] rounded-[10px] bg-white border border-gray-200 flex items-center justify-center p-4 shadow-sm transition-all duration-250 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
            >
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="max-h-full max-w-full object-contain transition-all duration-250"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#0A1628;text-align:center;line-height:1.3;">${client.name}</span>`;
                  }
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden group">
        <div className="flex gap-6 animate-[marquee_45s_linear_infinite_reverse] group-hover:[animation-play-state:paused] w-max">
          {rowB.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[160px] h-[90px] rounded-[10px] bg-white border border-gray-200 flex items-center justify-center p-4 shadow-sm transition-all duration-250 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
            >
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="max-h-full max-w-full object-contain transition-all duration-250"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#0A1628;text-align:center;line-height:1.3;">${client.name}</span>`;
                  }
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── QUICK EMAIL MODAL ─────────────────────────────────────────────────────────
function QuickEmailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

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
          phone:      "",
          subject:    `Email Enquiry from ${form.name}`,
          title:      `Email Enquiry from ${form.name}`,
          service:    "General Enquiry",
          message:    form.message,
        },
        "N9E6gVeQeOM5MaWGb"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      const subject = encodeURIComponent(`Email Enquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:exponent@exponentbizolution.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[16px] w-full max-w-[480px] shadow-2xl">
        <div className="bg-[#0A1628] rounded-t-[16px] px-8 py-6 flex items-center justify-between">
          <div>
            <div className="text-primary text-[11px] font-bold uppercase tracking-[0.12em] mb-1">Exponent Bizolution</div>
            <h2 className="text-white font-bold text-[22px]">Send Us a Message</h2>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1"><X size={20} /></button>
        </div>
        {submitted ? (
          <div className="p-10 text-center">
            <CheckCircle size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-[#121212] font-bold text-[22px] mb-2">Message Sent!</h3>
            <p className="text-[#5A5A5A] text-[15px] mb-6">Our team will get back to you within 24 hours.</p>
            <button onClick={onClose} className="bg-primary text-white px-8 py-3 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em]">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Full Name *</label>
              <input required value={form.name} onChange={set("name")} placeholder="Your name" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Email *</label>
              <input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5A5A5A] mb-1.5">Message *</label>
              <textarea required value={form.message} onChange={set("message")} rows={4} placeholder="How can we help you?" className="w-full border border-gray-200 rounded-[6px] px-4 py-2.5 text-[15px] text-[#121212] outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)] transition-all resize-none" />
            </div>
            <div className="pt-2">
              <button type="submit" disabled={sending} className="w-full bg-primary hover:bg-[#9A1116] text-white py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)] disabled:opacity-50 disabled:cursor-not-allowed">
                {sending ? "Sending..." : "Send Message →"}
              </button>
              <p className="text-center text-[12px] text-[#888] mt-3">Sends to exponent@exponentbizolution.com · We respond within 24h</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [quickEmailOpen, setQuickEmailOpen] = useState(false);

  useEffect(() => {
    document.title = "Exponent Bizolution | Pan-African BPO & IT Partner";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Women-led BPO and using tech to work smarter company delivering CX, trade management, and IT solutions across Africa. Partner with Exponent.");
  }, []);

  return (
    <div className="w-full flex flex-col">
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <QuickEmailModal open={quickEmailOpen} onClose={() => setQuickEmailOpen(false)} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-[100dvh] w-full flex items-center justify-center relative overflow-hidden bg-[#0A1628] pt-24">
        <div className="absolute inset-0">
          <img
            src={heroBpo}
            alt="Exponent Bizolution team"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent) {
                parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#0A1628;text-align:center;line-height:1.3;">Exponent Bizolution</span>`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-[#0A1628]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-70" />
        </div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 flex flex-col items-start py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary text-[16px] font-bold uppercase tracking-[0.12em] mb-6"
          >
            Pan-African · BPO · Offshoring · Using Tech to Work Smarter
          </motion.div>
          <div className="mb-8">
            <AnimatedWordReveal text="We Are the Bridge Between Ambition and Execution." className="text-white max-w-[900px]" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/75 text-[18px] leading-[1.75] max-w-[580px] mb-12"
          >Exponent Bizolution delivers customer experience, using tech to work smarter, and workforce solutions which are built for African markets, engineered for global standards.</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              as="button"
              onClick={() => setBookingOpen(true)}
              className="bg-primary hover:bg-[#9A1116] text-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)]"
            >
              Pivot Your Business →
            </MagneticButton>
            <MagneticButton
              as="button"
              onClick={() => setLocation("/services")}
              className="bg-transparent border-[1.5px] border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200"
            >
              Explore Our Services
            </MagneticButton>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </div>
      </section>
      {/* ── STATS BAR (NAVY) ─────────────────────── */}
      <section className="bg-[#0A1628] border-t border-b border-white/10 py-16 md:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-8 md:px-14 lg:px-28">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:divide-x sm:divide-white/10 gap-10 sm:gap-0">
            {STATS.map((stat, i) => (
              <StatCounter key={i} {...stat} isFirst={i === 0} />
            ))}
          </div>
        </div>
      </section>
      {/* ── ABOUT STRIP (WHITE) ──────────────────── */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Who We Are</div>
              <AnimatedHeading className="text-[#121212]">
                Africa's Premier Women-Led BPO & Using Tech to Work Smarter Partner
              </AnimatedHeading>
              <p className="text-[#5A5A5A] text-[17px] leading-[1.75] mb-8 max-w-[600px]">
                Exponent Bizolution Ltd is a Pan-African company specialising in Business Process Outsourcing, Customer Experience Management, IT Solutions, and Consultancy. Rooted in excellence, professionalism, and inclusivity, we partner with leading businesses across Africa to deliver solutions that scale.
              </p>
              <p className="text-[#121212] font-bold text-[17px] mb-10">
                Women lead here. Innovation thrives here. Africa grows here.
              </p>
              <MagneticButton
                as="button"
                onClick={() => setLocation("/about")}
                className="bg-primary hover:bg-[#9A1116] text-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)]"
              >
                Our Story →
              </MagneticButton>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[400px] lg:h-[560px] overflow-hidden rounded-[0px]">
                <img
                  src={aboutLeader}
                  alt="Exponent Bizolution leadership"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#0A1628;text-align:center;line-height:1.3;">Exponent Bizolution</span>`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0A1628]/90 backdrop-blur-sm border-l-4 border-primary">
                  <div className="text-white font-bold text-[22px] leading-tight">Pan-African Operations</div>
                  <div className="text-primary text-[12px] uppercase tracking-[0.1em] font-bold mt-1">Headquartered in Lusaka, Zambia</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── SERVICES GRID (WHITE) ────────────────── */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-14 text-center">
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">What We Do</div>
            <AnimatedHeading className="text-[#121212] text-center">
              End-to-End Business Solutions, Delivered Across Africa
            </AnimatedHeading>
            <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[600px] mx-auto mt-2">From your first customer call to your largest trade activation, we design, staff, and execute the operations that move your business forward.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <TiltCard key={i} delay={i * 0.07} className="h-full">
                <div
                  className="bg-white border border-gray-200 rounded-[12px] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-250 cursor-pointer group"
                  onClick={() => setLocation("/services")}
                >
                  {svc.img && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={svc.img}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.06]"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:#0A1628;text-align:center;line-height:1.3;">${svc.title}</span>`;
                          }
                        }}
                        loading="lazy"
                      />
                    </div>
                  )}
                  {!svc.img && (
                    <div className="h-40 bg-gradient-to-br from-[#0A1628]/10 to-[#B7161C]/10 flex items-center justify-center">
                      <svc.icon size={36} className="text-primary/60" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svc.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-[#121212] font-bold text-[16px] leading-[1.3]">{svc.title}</h3>
                    <p className="text-[#5A5A5A] text-[14px] leading-[1.6] flex-1">{svc.desc}</p>
                    <div className="flex items-center gap-2 text-primary text-[13px] font-bold uppercase tracking-[0.06em] group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      {/* ── IMPACT QUOTE (NAVY) ──────────────────── */}
      <section className="bg-[#0A1628] py-[80px] md:py-[120px] lg:py-[160px]">
        <AnimatedSection className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-20 text-center">
          <p className="text-white font-bold text-2xl md:text-3xl lg:text-[40px] leading-[1.3] italic mb-8">
            "Africa is not emerging. It is executing. And we are the engine."
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-[2px] bg-primary mb-4" />
            <span className="text-primary text-[14px] font-bold uppercase tracking-[0.1em]">Nkechi Ajih, CEO — Exponent Bizolution Ltd</span>
          </div>
        </AnimatedSection>
      </section>
      {/* ── ACADEMY FEATURE (WHITE) ──────────────── */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection delay={0.1}>
              <div className="relative h-[400px] bg-gradient-to-br from-[#0A1628] to-[#1B2D4F] rounded-[12px] overflow-hidden flex flex-col items-center justify-center text-center p-10 shadow-lg">
                <div className="text-white font-bold text-7xl leading-none mb-3"><CountUp end={1000} duration={3} separator="," />+</div>
                <div className="text-primary text-[13px] uppercase tracking-[0.12em] font-bold">Professionals Certified</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Exponent Academy</div>
              <AnimatedHeading className="text-[#121212]">
                We Don't Just Train People. We Build the Future Workforce.
              </AnimatedHeading>
              <p className="text-[#5A5A5A] text-[17px] leading-[1.75] mb-8">Over <strong className="text-[#121212]"><CountUp end={1000} duration={3} separator="," />+</strong> professionals certified through our physical and virtual learning programmes. From customer service excellence to leadership development. Exponent Academy equips people with skills that pay dividends for life.</p>
              <MagneticButton
                as="button"
                onClick={() => setLocation("/academy")}
                className="bg-primary hover:bg-[#9A1116] text-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)]"
              >
                Explore the Academy →
              </MagneticButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── XPO TECH LAB (LIGHT GREY) ────────────── */}
      <section className="bg-[#F8F9FA] py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">XPO Tech Lab</div>
              <AnimatedHeading className="text-[#121212]">Innovation Built In-House. Deployed Across Africa.</AnimatedHeading>
              <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[560px] my-6">
                Our R&D lab has produced the AHD Chatbot, an Omni-Channel CRM, the iExpo Trade Productivity Tracker, and DUNA, our internal collaboration platform. We don't use off-the-shelf. We build what works.
              </p>
              <MagneticButton
                as="button"
                onClick={() => setLocation("/academy")}
                className="bg-[#0A1628] hover:bg-[#0D1F38] text-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(10,22,40,0.4)]"
              >
                See Our Technology →
              </MagneticButton>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {["AHD Chatbot", "Omni-Channel CRM", "Altus Loan Frontend", "Tracker/Survey/Analytics Website"].map((tech, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-[12px] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250">
                    <div className="w-2 h-2 bg-primary rounded-full mb-4" />
                    <div className="text-[#121212] font-bold text-[15px] mb-1">{tech}</div>
                    <div className="text-[#5A5A5A] text-[13px]">Purpose-built for Africa</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── SDG STRIP (NAVY) ─────────────────────── */}
      <section className="bg-[#0A1628] py-[56px] md:py-[80px] overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 mb-12">
          <AnimatedSection>
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">SDG Commitment</div>
            <AnimatedHeading className="text-white">Business Growth That Serves a Bigger Purpose</AnimatedHeading>
            <p className="text-white/60 text-[17px] leading-[1.75] max-w-[560px] mt-2">We are aligned with 8 Sustainable Development Goals namely; eradicating poverty, advancing gender equality, and driving decent work and economic growth.</p>
          </AnimatedSection>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex-1">
            <SDGMarquee />
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="w-[180px] h-[180px] relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-white font-bold text-[32px]">8</div>
                  <div className="text-primary text-[10px] uppercase tracking-widest font-bold">SDGs</div>
                  <div className="text-white/50 text-[10px] mt-1">Aligned</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-[28px] leading-none">8 SDGs</div>
              <div className="text-primary text-[11px] uppercase tracking-[0.1em] font-bold mt-1">Aligned</div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 mt-10">
          <AnimatedSection>
            <MagneticButton
              as="button"
              onClick={() => setLocation("/impact")}
              className="bg-transparent border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200"
            >
              Our Impact →
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
      {/* ── WOMEN WHO LEAD (WHITE) ───────────────── */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Women Who Lead</div>
              <AnimatedHeading className="text-[#121212]">Leadership Has No Gender. Only Vision.</AnimatedHeading>
              <p className="text-[#5A5A5A] text-[17px] leading-[1.75] max-w-[600px] my-6">From inception, Exponent Bizolution has been powered by women in every critical leadership role. Our women-led foundation isn't a marketing message, it is our operational reality and our competitive edge.</p>
              <MagneticButton
                as="button"
                onClick={() => setLocation("/impact")}
                className="bg-primary hover:bg-[#9A1116] text-white px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)]"
              >
                Our Impact →
              </MagneticButton>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative bg-[#F8F9FA] border border-gray-200 rounded-[12px] p-10 shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-[12px]" />
                <div className="text-primary text-[13px] uppercase tracking-[0.12em] font-bold mb-6">Leading the Legacy. Shaping the Future.</div>
                <p className="text-[#121212] text-[28px] font-bold leading-[1.3] italic">"Women built this."</p>
                <p className="text-[#5A5A5A] text-[15px] mt-4">— Exponent Bizolution</p>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-[#5A5A5A] text-[16px] italic">"Leadership has no gender. Only vision."</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── COMPANIES WE'VE WORKED WITH (WHITE) ───── */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <AnimatedSection className="mb-12 text-center">
            <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Trusted Across Africa</div>
            <h2 className="text-[#121212] font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.2] tracking-[-0.01em]">
              Companies We've Worked With
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ClientsMarquee />
          </AnimatedSection>
        </div>
      </section>
      {/* ── CTA BANNER (RED) ─────────────────────── */}
      <section className="py-[56px] md:py-[80px]" style={{ backgroundColor: "#E63946" }}>
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.2] mb-6">
              Ready to Pivot Your Business?
            </h2>
            <p className="text-white/85 text-[18px] leading-[1.75] max-w-[560px] mx-auto mb-10">
              Talk to our team. We'll map out exactly how Exponent can scale your operations, reduce cost, and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <MagneticButton
                as="button"
                onClick={() => setBookingOpen(true)}
                className="bg-white text-primary px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              >
                Book a Meeting →
              </MagneticButton>
              <button
                onClick={() => setQuickEmailOpen(true)}
                className="bg-transparent border-[1.5px] border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200"
              >
                Send Us an Email
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/70 text-[14px]">
              <a href="tel:+260978383700" className="hover:text-white transition-colors">+260 978 383 700</a>
              <span className="hidden md:block">·</span>
              <a href="tel:+260966233214" className="hover:text-white transition-colors">+260 966 233 214</a>
              <span className="hidden md:block">·</span>
              <a href="mailto:exponent@exponentbizolution.com" className="hover:text-white transition-colors">exponent@exponentbizolution.com</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}