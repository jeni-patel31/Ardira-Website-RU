import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Send,
  Layers,
  Share2,
  Sliders,
  TrendingUp,
  ClipboardCheck,
  Users,
  Rocket,
  AlertCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ContactCta from "@/components/ContactCta";
import { RecaptchaBadge } from "@/components/RecaptchaBadge";

import eightSquadLogo from "@/assets/TrustedPartner/8squadlogo.webp";
import accentureLogo from "@/assets/TrustedPartner/accenturelogo.webp";
import actumDigitalLogo from "@/assets/TrustedPartner/actumdigitallogo.webp";
import allCloudLogo from "@/assets/TrustedPartner/allcloudlogo.webp";
import asugoLogo from "@/assets/TrustedPartner/asugologojpg.webp";
import bearingLogo from "@/assets/TrustedPartner/bearinglogojpg.webp";
import capgeminiLogo from "@/assets/TrustedPartner/capgeminilogo.webp";
import nolticLogo from "@/assets/TrustedPartner/nolticlogo.webp";
import syraGonLogo from "@/assets/TrustedPartner/syragonlogojpg.webp";
import veraSolutionLogo from "@/assets/TrustedPartner/verasolutionlogo.webp";
import zenyusLogo from "@/assets/TrustedPartner/zenyus.webp";

const whyPartner = [
  {
    title: "Tailored Partner Tiers",
    desc: "Programs designed to match where you are today and grow with you as you scale.",
    icon: Layers,
  },
  {
    title: "Collaborative Marketing",
    desc: "Co-branded campaigns, case studies, and joint webinars that expand your reach and strengthen your credibility.",
    icon: Share2,
  },
  {
    title: "Flexible Models",
    desc: "Referral, reseller, or technology partnership. Choose the model that fits how your business works.",
    icon: Sliders,
  },
  {
    title: "Shared Leads & GTM Support",
    desc: "Joint go-to-market planning, shared leads, and dedicated partner success resources to help you win together.",
    icon: TrendingUp,
  },
];

const trustedPartners = [
  { name: "8Squad", logo: eightSquadLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "Actum Digital", logo: actumDigitalLogo },
  { name: "AllCloud", logo: allCloudLogo },
  { name: "Asugo", logo: asugoLogo },
  { name: "Bearing", logo: bearingLogo },
  { name: "Capgemini", logo: capgeminiLogo },
  { name: "Noltic", logo: nolticLogo },
  { name: "SyraGon", logo: syraGonLogo },
  { name: "VeraSolution", logo: veraSolutionLogo },
  { name: "Zenyus", logo: zenyusLogo },
];

export default function PartnerHub() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    country: "USA",
    partnerType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validate all required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Business Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9+()\-\s]+$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must contain only numbers";
    }
    if (!formData.country) {
      newErrors.country = "Country / Region is required";
    }
    if (!formData.partnerType) {
      newErrors.partnerType = "Partnership Type is required";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result: any = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else if (!response.ok) {
        throw new Error(`Server execution failed (Status ${response.status}). If testing locally, ensure you are using Vercel Dev.`);
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Partner form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] text-[#0f172a] font-sans"
      data-testid="page-partners"
    >

      {/* Why Partner */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              Why Partner With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Built for Mutual Success
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyPartner.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border-2 border-[#e0f2e9] rounded-2xl p-8 hover:border-[#43AF57] hover:shadow-md transition-all group"
              >
                <div className="inline-flex p-3 rounded-xl bg-[#f0fdf4] mb-6 group-hover:bg-[#e8fbf0] transition-colors">
                  <item.icon size={24} className="text-[#43AF57]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#0f172a] mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trusted Partners - Carousel */}
      <section className="py-24 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] border-t border-slate-100" style={{ paddingLeft: "48px", paddingRight: "48px" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              Our Global Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="relative w-full overflow-hidden mx-auto" onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector('.partner-carousel-track');
              if (track) track.style.animationPlayState = 'paused';
            }} onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector('.partner-carousel-track');
              if (track) track.style.animationPlayState = 'running';
            }}>
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#f0fdf4] to-transparent z-10 pointer-events-none" />
              <div
                className="partner-carousel-track flex items-center animate-marquee py-4 w-max"
                style={{ animationDuration: "40s" }}
              >
                {[
                  ...trustedPartners,
                  ...trustedPartners,
                  ...trustedPartners,
                  ...trustedPartners,
                ].map((p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="flex items-center justify-center mx-10 md:mx-14 flex-shrink-0 h-14 md:h-16"
                  >
                    <img loading="lazy"
                      src={p.logo}
                      alt={p.name}
                      className="max-h-full max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* How It Works */}
      <section className="py-28 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Getting Started Is Simple
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Fill out the partner application form below. Tell us about your business and how you'd like to partner.",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Onboard",
                desc: "Our partner team will review your application and set you up with training, resources, and a dedicated partner manager.",
                icon: Users,
              },
              {
                step: "03",
                title: "Grow Together",
                desc: "Start referring, reselling, or integrating. Access joint GTM resources, shared leads, and co-marketing support.",
                icon: Rocket,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-extrabold font-display text-emerald-100 mb-4 flex justify-center">
                  <item.icon size={48} className="text-[#43AF57]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#0f172a] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section id="partner-form" className="py-16 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Info Section - Green Background */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#43AF57] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none p-8 flex flex-col justify-between text-white"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight mb-2">
                  Become a Partner
                </h2>
                <p className="text-lg text-green-50 mb-8 leading-relaxed">
                  Grow Faster with Ardira
                </p>

                <p className="text-lg leading-relaxed text-green-50 mb-8 pb-8">
                  Apply to join our partner network and unlock new opportunities
                  to scale your business with Salesforce-native solutions
                </p>

                <div className="space-y-4">
                  {[
                    "Exclusive partner-only resources and GTM support",
                    "Competitive revenue sharing and referral incentives",
                    "Personalized guidance from a dedicated Partner Success Manager",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-white shrink-0 mt-0.5"
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none p-8"
            >
              {submitted ? (
                <div className="flex items-center justify-center">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-emerald-100 mb-4">
                      <CheckCircle size={32} className="text-[#43AF57]" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#0f172a] mb-3">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-slate-500">
                      Thank you for your interest. Our partnerships team will
                      review your application and reach out within 2 business
                      days.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error Banner */}
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle
                        size={18}
                        className="text-red-600 shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-2 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.fullName
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 focus:ring-emerald-500"
                      }`}
                      placeholder="Full Name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={`w-full px-4 py-2 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.company
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 focus:ring-emerald-500"
                      }`}
                      placeholder="Company Name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-2 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 focus:ring-emerald-500"
                      }`}
                      placeholder="Business Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        // Only allow numbers and basic phone characters
                        const value = e.target.value.replace(
                          /[^0-9+()\-\s]/g,
                          "",
                        );
                        setFormData({ ...formData, phone: value });
                      }}
                      className={`w-full px-4 py-2 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 focus:ring-emerald-500"
                      }`}
                      placeholder="Phone Number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                        Country / Region <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          setFormData({ ...formData, country: value })
                        }
                      >
                        <SelectTrigger
                          className={`w-full text-sm ${errors.country ? "border-red-500" : "border-slate-200"}`}
                        >
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USA">USA</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">
                            United Kingdom
                          </SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                          <SelectItem value="Germany">Germany</SelectItem>
                          <SelectItem value="France">France</SelectItem>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="Singapore">Singapore</SelectItem>
                          <SelectItem value="Japan">Japan</SelectItem>
                          <SelectItem value="Brazil">Brazil</SelectItem>
                          <SelectItem value="Mexico">Mexico</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.country}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                        Partnership Type <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.partnerType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, partnerType: value })
                        }
                      >
                        <SelectTrigger
                          className={`w-full text-sm ${errors.partnerType ? "border-red-500" : "border-slate-200"}`}
                        >
                          <SelectValue placeholder="Select Partnership Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Reseller">Reseller</SelectItem>
                          <SelectItem value="Referral">Referral</SelectItem>
                          <SelectItem value="Technology">Technology</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.partnerType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.partnerType}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Tell us about your business{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-1.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 focus:ring-emerald-500"
                      }`}
                      placeholder="Tell us about your business"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 pt-0.5">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-[#43AF57] hover:underline">
                      privacy policy
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#43AF57] text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-emerald-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors shadow-md flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}{" "}
                    {!isSubmitting && (
                      <Send
                        size={20}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    )}
                  </button>

                  <RecaptchaBadge />
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCta
        headline="Ready to Partner with Ardira?"
        description="Get in touch and a member of the Ardira Partnerships team will be in contact to explore how we can accelerate your growth together."
        buttonText="Contact Our Partner Team"
        buttonLink="#partner-form"
      />
    </div>
  );
}
