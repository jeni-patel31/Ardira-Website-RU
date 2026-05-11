import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <span className="section-eyebrow">Get in Touch</span>
          <h2>
            Talk to Us About
            <br />
            <span className="highlight">Your Salesforce Org</span>
          </h2>
          <p>
            Contact our team to schedule a demo, learn more about our products,
            or simply ask a question.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div className="info-label">Address</div>
                <div className="info-value">
                  2040 Martin Ave, Santa Clara, CA 95050
                </div>
              </div>
            </div>
            <div className="info-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8A19.79 19.79 0 01.12 2.22a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.13 6.13l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2v3z" />
              </svg>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-value">
                  <a href="tel:+16697776838">+1 (669) 777-6838</a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <div className="info-label">Email</div>
                <div className="info-value">
                  <a href="mailto:info@ardira.com">info@ardira.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>
          <p className="form-subtitle">
            We'll respond promptly to your inquiry
          </p>

          <div className="form-row">
            <div className="form-group">
              <label>
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Product of Interest</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <option value="">Select a product...</option>
              <option value="surveyvista">SurveyVista</option>
              <option value="formvista">FormVista</option>
              <option value="compliancevista">ComplianceVista</option>
              <option value="agentvista">AgentVista</option>
              <option value="relationshipvista">RelationshipVista</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your Salesforce use case..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </button>
          <p className="form-note">
            We're committed to your privacy. We will never share your data.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
