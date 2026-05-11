import React, { useState } from "react";

const trustedPartners = [
  { name: "8Squad", logo: "/assets/TrustedPartner/8squadlogo.webp" },
  { name: "Accenture", logo: "/assets/TrustedPartner/accenturelogo.webp" },
  { name: "Actum Digital", logo: "/assets/TrustedPartner/actumdigitallogo.webp" },
  { name: "AllCloud", logo: "/assets/TrustedPartner/allcloudlogo.webp" },
  { name: "Asugo", logo: "/assets/TrustedPartner/asugologojpg.webp" },
  { name: "Bearing", logo: "/assets/TrustedPartner/bearinglogojpg.webp" },
  { name: "Capgemini", logo: "/assets/TrustedPartner/capgeminilogo.webp" },
  { name: "Noltic", logo: "/assets/TrustedPartner/nolticlogo.webp" },
  { name: "SyraGon", logo: "/assets/TrustedPartner/syragonlogojpg.webp" },
  { name: "VeraSolution", logo: "/assets/TrustedPartner/verasolutionlogo.webp" },
  { name: "Zenyus", logo: "/assets/TrustedPartner/zenyus.webp" },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  const h1Style: React.CSSProperties = { color: "var(--navy)", marginBottom: 16, fontSize: "clamp(2rem, 5vw, 3rem)" };
  const h2Style: React.CSSProperties = { color: "var(--navy)", fontSize: 32, margin: "0 0 16px" };
  const pStyle: React.CSSProperties = { color: "var(--text-secondary)", lineHeight: 1.6 };

  return (
    <div style={{ minHeight: "100vh", padding: "60px 0 0" }}>
      
      {/* Hero Section */}
      <section style={{ padding: "80px 40px", textAlign: "center", background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)" }}>
        <p style={{ color: "var(--primary-green)", fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: 16 }}>Why Partner With Us</p>
        <h1 style={h1Style}>Built for Mutual Success</h1>
        <p style={{ ...pStyle, fontSize: 18, maxWidth: 600, margin: "0 auto 40px" }}>
          Join the Ardira Partner Program and build a successful business around Salesforce-native intelligence applications.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 1000, margin: "0 auto", textAlign: "left" }}>
          {[
            { title: "Tailored Partner Tiers", desc: "Programs designed to match where you are today and grow with you as you scale." },
            { title: "Collaborative Marketing", desc: "Co-branded campaigns, case studies, and joint webinars that expand your reach." },
            { title: "Flexible Models", desc: "Referral, reseller, or technology partnership. Choose the model that fits you." },
            { title: "Shared Leads & GTM", desc: "Joint go-to-market planning, shared leads, and dedicated partner success resources." }
          ].map(item => (
            <div key={item.title} style={{ background: "#fff", padding: 32, borderRadius: 16, border: "1px solid var(--border-color)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontSize: 20, color: "var(--navy)", marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="partner-form" style={{ padding: "80px 40px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
          
          <div style={{ background: "var(--primary-green)", padding: 48, color: "#fff" }}>
            <h2 style={{ fontSize: 36, color: "#fff", marginBottom: 16, marginTop: 0 }}>Become a Partner</h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", marginBottom: 32 }}>Grow Faster with Ardira</p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 40, lineHeight: 1.6 }}>Apply to join our partner network and unlock new opportunities to scale your business with Salesforce-native solutions.</p>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {["Exclusive partner-only resources and GTM support", "Competitive revenue sharing and referral incentives", "Personalized guidance from a dedicated Partner Success Manager"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "rgba(255,255,255,0.9)" }}>
                  <span style={{ color: "#fff" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "#fff", padding: 48 }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Full Name *</label>
                  <input type="text" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Company *</label>
                  <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box" }} />
                </div>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Email *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Phone *</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Country *</label>
                  <select required value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box" }}>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Partner Type *</label>
                  <select required value={formData.partnerType} onChange={e => setFormData({...formData, partnerType: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box" }}>
                    <option value="">Select Type</option>
                    <option value="Reseller">Reseller</option>
                    <option value="Referral">Referral</option>
                    <option value="Technology">Technology</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>Tell us about your business *</label>
                <textarea required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ w: "100%", padding: "10px 14px", border: "1px solid var(--border-color)", borderRadius: 8, fontSize: 14, width: "100%", boxSizing: "border-box", resize: "none" }} />
              </div>

              <button type="submit" className="btn-demo" style={{ background: "var(--primary-green)", color: "#fff", border: "none", padding: "14px 24px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 8 }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
