import { useState, ChangeEvent, FormEvent } from "react";

const inputStyle: React.CSSProperties = { fontFamily: "var(--font-family)", fontSize: 14, padding: "12px 14px", border: "1.5px solid var(--border-color)", borderRadius: 8, background: "#fff", color: "var(--text-primary)", outline: "none", transition: "var(--transition)", width: "100%" };

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email) { setSubmitted(true); setFormData({ name: "", email: "", phone: "", company: "", product: "", message: "" }); setTimeout(() => setSubmitted(false), 3000); }
  };

  return (
    <section id="contact" style={{ padding: "80px 40px", background: "#fff", borderTop: "1px solid var(--border-color)" }}>
      <div className="contact-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "start" }}>
        <div style={{ paddingRight: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--primary-green)", marginBottom: 16 }}>Get in Touch</span>
          <h2 style={{ color: "var(--navy)", marginBottom: 16, textAlign: "left" }}>Talk to Us About<br /><span style={{ color: "var(--primary-green)" }}>Your Salesforce Org</span></h2>
          <p style={{ marginBottom: 32, textAlign: "left", fontSize: 15 }}>Contact our team to schedule a demo, learn more about our products, or simply ask a question.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Address", value: "2040 Martin Ave, Santa Clara, CA 95050" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.22a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.13 6.13l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2v3z"/></svg>, label: "Phone", value: <a href="tel:+16697776838" className="info-value" style={{ color: "var(--primary-green)" }}>+1 (669) 777-6838</a> },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: "Email", value: <a href="mailto:info@ardira.com" className="info-value" style={{ color: "var(--primary-green)" }}>info@ardira.com</a> },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, flexShrink: 0, marginTop: 4, color: "var(--primary-green)" }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ background: "var(--bg-light)", border: "1.5px solid var(--border-color)", borderRadius: 12, padding: 40, boxShadow: "var(--shadow-sm)" }}>
          <h3 style={{ fontSize: 18, color: "var(--navy)", marginBottom: 6 }}>Send us a Message</h3>
          <p style={{ fontSize: 13, fontWeight: 300, color: "var(--text-muted)", marginBottom: 28 }}>We'll respond promptly to your inquiry</p>
          <div className="form-row-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Full Name <span style={{ color: "var(--primary-green)" }}>*</span></label>
              <input className="form-input" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Email <span style={{ color: "var(--primary-green)" }}>*</span></label>
              <input className="form-input" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required style={inputStyle} />
            </div>
          </div>
          <div className="form-row-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Phone</label>
              <input className="form-input" name="phone" type="tel" placeholder="+1 (000) 000-0000" value={formData.phone} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Company</label>
              <input className="form-input" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Product of Interest</label>
            <select className="form-select" name="product" value={formData.product} onChange={handleChange} style={inputStyle}>
              <option value="">Select a product...</option>
              <option value="surveyvista">SurveyVista</option>
              <option value="formvista">FormVista</option>
              <option value="compliancevista">ComplianceVista</option>
              <option value="agentvista">AgentVista</option>
              <option value="relationshipvista">RelationshipVista</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Message</label>
            <textarea className="form-textarea" name="message" placeholder="Tell us about your Salesforce use case..." rows={5} value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical" as const, minHeight: 120 }} />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-family)", fontSize: 15, fontWeight: 600, padding: "13px 34px", borderRadius: 8, background: "var(--primary-green)", color: "#fff", boxShadow: "0 4px 14px rgba(57,180,74,0.3)", border: "2px solid transparent", cursor: "pointer", transition: "var(--transition)" }}>{submitted ? "✓ Message Sent!" : "Send Message"}</button>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 16, textAlign: "center" }}>We're committed to your privacy. We will never share your data.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
