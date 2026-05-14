import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { RecaptchaBadge } from "@/components/RecaptchaBadge";
import { CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-family)",
  fontSize: 14,
  padding: "12px 14px",
  border: "1.5px solid var(--border-color)",
  borderRadius: 8,
  background: "#fff",
  color: "var(--text-primary)",
  outline: "none",
  transition: "var(--transition)",
  width: "100%",
};

function Contact() {
  const executeRecaptcha = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Get reCAPTCHA token
      let recaptchaToken = "";
      try {
        recaptchaToken = await executeRecaptcha("contact_form");
      } catch {
        throw new Error("reCAPTCHA verification failed. Please try again.");
      }

      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      let result: any = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else if (!response.ok) {
        throw new Error(`Server error (Status ${response.status})`);
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to send. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 40px",
        background: "#fff",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 56,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              paddingRight: 20,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "var(--primary-green)",
                marginBottom: 16,
              }}
            >
              Get in Touch
            </span>
            <h2
              style={{
                color: "var(--navy)",
                marginBottom: 20,
                textAlign: "left",
                fontSize: "clamp(32px, 4.5vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Talk to us about
              <br />
              <span style={{ color: "var(--primary-green)" }}>
                your Salesforce org.
              </span>
            </h2>
            <p style={{ marginBottom: 24, textAlign: "left", fontSize: 15 }}>
              Contact our team to schedule a demo, learn more about our
              products, or simply ask a question. We respond promptly.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Address",
                  value: "2040 Martin Ave, Santa Clara, CA 95050",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.22a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.13 6.13l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2v3z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: (
                    <a
                      href="tel:+16697776838"
                      className="info-value"
                      style={{ color: "var(--primary-green)" }}
                    >
                      +1 (669) 777-6838
                    </a>
                  ),
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: (
                    <a
                      href="mailto:info@ardira.com"
                      className="info-value"
                      style={{ color: "var(--primary-green)" }}
                    >
                      info@ardira.com
                    </a>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      flexShrink: 0,
                      marginTop: 4,
                      color: "var(--primary-green)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                        color: "var(--text-muted)",
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                minHeight: 200,
              }}
            >
              <iframe
                title="Ardira Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.828552174391!2d-121.9542036847253!3d37.36952877983637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb0aeb354cd1%3A0xc3f1737be70d8a55!2s2040%20Martin%20Ave%2C%20Santa%20Clara%2C%20CA%2095050%2C%20USA!5e0!3m2!1sen!2s!4v1655073432070!5m2!1sen!2s"
                style={{
                  border: 0,
                  display: "block",
                  flexGrow: 1,
                  width: "100%",
                  height: "100%",
                  minHeight: 200,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {submitted ? (
            <div
              style={{
                background: "var(--bg-light)",
                border: "1.5px solid var(--border-color)",
                borderRadius: 12,
                padding: 32,
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-start",
                marginTop: 32,
                width: "100%",
                minHeight: 350,
              }}
            >
              <div
                style={{
                  background: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  borderRadius: 16,
                  padding: 32,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: 16,
                    borderRadius: "50%",
                    background: "#d1fae5",
                    marginBottom: 16,
                  }}
                >
                  <CheckCircle size={32} color="#43AF57" />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 12,
                  }}
                >
                  Message Sent Successfully!
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    lineHeight: 1.5,
                  }}
                >
                  Thank you for getting in touch. One of our representatives
                  will review your message and reach out to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--bg-light)",
                border: "1.5px solid var(--border-color)",
                borderRadius: 12,
                padding: 32,
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
                alignItems: "stretch",
                marginTop: 32,
                gap: 0,
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 4,
                  letterSpacing: "-0.01em",
                }}
              >
                Fill out the form and we'll be in touch shortly!
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  marginBottom: 24,
                }}
              >
                Fields marked with <span style={{ color: "#ef4444" }}>*</span>{" "}
                are mandatory.
              </p>
              <div
                className="form-row-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <label
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Full Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    className="form-input"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <label
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    className="form-input"
                    name="email"
                    type="email"
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address."
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
              <div
                className="form-row-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <label
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    className="form-input"
                    name="phone"
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <label
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Company
                  </label>
                  <input
                    className="form-input"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Product of Interest
                </label>
                <select
                  className="form-select"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select a product...</option>
                  <option value="surveyvista">SurveyVista</option>
                  <option value="formvista">FormVista</option>
                  <option value="compliancevista">ComplianceVista</option>
                  <option value="agentvista">AgentVista</option>
                  <option value="relationshipvista">RelationshipVista</option>
                  <option value="general">All Products/General enquiry</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Tell us about your salesforce use case or what you're looking to achieve..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: "none" as const,
                    minHeight: 100,
                    maxHeight: 140,
                  }}
                />
              </div>
              {submitError && (
                <div
                  style={{
                    padding: "12px 16px",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#dc2626",
                    marginBottom: 8,
                  }}
                >
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: "100%",
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontFamily: "var(--font-family)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "13px 34px",
                  borderRadius: 8,
                  background: isSubmitting ? "#94a3b8" : "var(--primary-green)",
                  color: "#fff",
                  boxShadow: "0 4px 14px rgba(57,180,74,0.3)",
                  border: "2px solid transparent",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "var(--transition)",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                We're committed to your{" "}
                <Link
                  to="/privacy-policy"
                  style={{
                    color: "var(--primary-green)",
                    textDecoration: "underline",
                  }}
                >
                  privacy
                </Link>
                . We will never share your data with third parties.
              </p>
              <RecaptchaBadge />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
