import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedHeading from "@/components/AnimatedHeading";
import { MapPin, Phone, Mail, Globe, MessageSquare, CheckCircle } from "lucide-react";

const OFFICES = [
  { country: "Zambia", city: "Lusaka", flag: "🇿🇲", role: "Head Office", phone: ["+260 978 383 700", "+260 966 233 214"] },
  { country: "Botswana", city: "Gaborone", flag: "🇧🇼", role: "Operations" },
  { country: "Nigeria", city: "Lagos", flag: "🇳🇬", role: "Operations" },
  { country: "Kenya", city: "Nairobi", flag: "🇰🇪", role: "Operations" },
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
  "Careers",
  "Other",
];

function FloatingLabelInput({
  label, id, type = "text", required = false, value, onChange
}: {
  label: string; id: string; type?: string; required?: boolean; value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <input
        id={id} type={type} required={required} value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`peer w-full border rounded-[6px] px-4 pt-5 pb-2 text-[15px] bg-white text-[#121212] outline-none transition-all duration-200 ${
          active ? "border-[#0A1628]" : "border-gray-300"
        } focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)]`}
      />
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 text-[#888] ${
          active ? "top-1.5 text-[10px] font-bold uppercase tracking-[0.08em]" : "top-4 text-[15px]"
        } ${focused ? "text-primary" : ""}`}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

function FloatingLabelTextarea({
  label, id, required = false, value, onChange
}: {
  label: string; id: string; required?: boolean; value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <textarea id={id} required={required} value={value} rows={5}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`peer w-full border rounded-[6px] px-4 pt-6 pb-3 text-[15px] bg-white text-[#121212] outline-none resize-none transition-all duration-200 ${
          active ? "border-[#0A1628]" : "border-gray-300"
        } focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)]`}
      />
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 text-[#888] ${
          active ? "top-2 text-[10px] font-bold uppercase tracking-[0.08em]" : "top-4 text-[15px]"
        } ${focused ? "text-primary" : ""}`}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = "Contact Exponent Bizolution | Get a Quote";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

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
          subject:    `Contact Form Enquiry – ${form.company || form.name}`,
          service:    form.service,
          message:    form.message,
          title:      `Contact Form Enquiry – ${form.company || form.name}`,
        },
        "N9E6gVeQeOM5MaWGb"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback: mailto if EmailJS fails
      const subject = encodeURIComponent(`Contact Form Enquiry – ${form.company || form.name}`);
      const body = encodeURIComponent(
        `CONTACT FORM ENQUIRY\n====================\n\n` +
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

  return (
    <div className="w-full flex flex-col">
      {/* HERO — NAVY */}
      <section className="min-h-[50vh] w-full flex items-end pb-16 relative overflow-hidden bg-[#0A1628] pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#2F0545]/25" />
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Get in Touch</div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.02em] max-w-[800px] mb-6">
            Let's Build Something Together.
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] max-w-[560px]">
            Tell us about your business. We'll respond within 24 hours with a clear path forward.
          </p>
        </div>
      </section>

      {/* FORM + OFFICES — WHITE */}
      <section className="bg-white py-[56px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* FORM */}
            <AnimatedSection>
              <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Send a Message</div>
              <AnimatedHeading className="text-[#121212] mb-8">How Can We Help?</AnimatedHeading>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F8F9FA] border border-gray-200 rounded-[12px] p-12 flex flex-col items-center text-center"
                >
                  <CheckCircle size={56} className="text-primary mb-5" />
                  <h3 className="text-[#121212] font-bold text-[24px] mb-3">Message Received</h3>
                  <p className="text-[#5A5A5A] text-[16px] leading-[1.7] max-w-[380px]">
                    Thank you for reaching out. Our team will review your enquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-8 text-primary text-[14px] font-bold uppercase tracking-[0.06em] hover:underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingLabelInput label="Full Name" id="name" required value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} />
                    <FloatingLabelInput label="Company" id="company" value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingLabelInput label="Email Address" id="email" type="email" required value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} />
                    <FloatingLabelInput label="Phone Number" id="phone" type="tel" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} />
                  </div>
                  <div className="relative">
                    <select
                      id="service" required value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className={`w-full border rounded-[6px] px-4 py-3.5 text-[15px] bg-white outline-none appearance-none transition-all duration-200 ${
                        form.service ? "border-[#0A1628] text-[#121212]" : "border-gray-300 text-[#888]"
                      } focus:border-primary focus:shadow-[0_0_0_3px_rgba(183,22,28,0.1)]`}
                    >
                      <option value="" disabled>Service of Interest *</option>
                      {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <MessageSquare size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] pointer-events-none" />
                  </div>
                  <FloatingLabelTextarea label="Message" id="message" required value={form.message} onChange={v => setForm(f => ({ ...f, message: v }))} />
                  {error && <p className="text-primary text-[13px]">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-primary hover:bg-[#9A1116] text-white py-4 rounded-[6px] font-bold text-[14px] uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(183,22,28,0.4)] mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message →"}
                  </button>
                  <p className="text-[#888] text-[13px] text-center">
                    We respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </AnimatedSection>

            {/* SIDEBAR — CONTACT INFO */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-2">Direct Contact</div>
                <div className="flex flex-col gap-4">
                  <a href="tel:+260978383700" className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-[10px] border border-gray-200 hover:border-primary/30 hover:bg-white transition-all duration-200 group">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-[#888] uppercase tracking-[0.08em] mb-0.5">Phone</div>
                      <div className="text-[#121212] font-semibold text-[14px]">+260 978 383 700</div>
                    </div>
                  </a>
                  <a href="tel:+260966233214" className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-[10px] border border-gray-200 hover:border-primary/30 hover:bg-white transition-all duration-200">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-[#888] uppercase tracking-[0.08em] mb-0.5">Phone</div>
                      <div className="text-[#121212] font-semibold text-[14px]">+260 966 233 214</div>
                    </div>
                  </a>
                  <a href="mailto:exponent@exponentbizolution.com" className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-[10px] border border-gray-200 hover:border-primary/30 hover:bg-white transition-all duration-200">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-[#888] uppercase tracking-[0.08em] mb-0.5">Email</div>
                      <div className="text-[#121212] font-semibold text-[13px] break-all">exponent@exponentbizolution.com</div>
                    </div>
                  </a>
                  <a href="https://www.exponentbizolution.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-[10px] border border-gray-200 hover:border-primary/30 hover:bg-white transition-all duration-200">
                    <Globe size={18} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-[#888] uppercase tracking-[0.08em] mb-0.5">Website</div>
                      <div className="text-[#121212] font-semibold text-[14px]">exponentbizolution.com</div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-primary text-[12px] font-bold uppercase tracking-[0.12em] mb-4">Our Offices</div>
                  <div className="flex flex-col gap-2">
                    {OFFICES.map((o, i) => (
                      <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
                        <span className="text-xl">{o.flag}</span>
                        <div className="flex-1">
                          <div className="text-[#121212] font-semibold text-[14px]">{o.city}, {o.country}</div>
                          <div className="flex items-center gap-1 text-[#888] text-[12px]">
                            <MapPin size={10} /> {o.role}
                          </div>
                        </div>
                        {o.phone && (
                          <div className="text-[#5A5A5A] text-[12px] text-right">
                            {o.phone.map((p, pi) => <div key={pi}>{p}</div>)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}