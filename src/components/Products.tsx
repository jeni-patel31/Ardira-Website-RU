import { useState, useEffect } from "react";
import svImageLogo from "@assets/ProductLogo/SurveyVistaLogo.webp";
import fvImageLogo from "@assets/ProductLogo/FormVistaLogo.webp";
import cvImageLogo from "@assets/ProductLogo/ComplainceVistaLogo.webp";
import avImageLogo from "@assets/ProductLogo/AgentVistaLogo.webp";
import rvImageLogo from "@assets/ProductLogo/RelationshipVistaLogo.webp";
import svLogo from "@assets/ProductsIcon/SVLogo.webp";
import fvLogo from "@assets/ProductsIcon/FVLogo.webp";
import cvLogo from "@assets/ProductsIcon/CVLogo.webp";
import avLogo from "@assets/ProductsIcon/AVLogo.webp";
import rvLogo from "@assets/ProductsIcon/RVLogo.webp";

type ProductKey =
  | "surveyvista"
  | "formvista"
  | "compliancevista"
  | "agentvista"
  | "relationshipvista";

const products: Record<
  ProductKey,
  { title: string; description: string; image: string; features: string[]; link: string }
> = {
  surveyvista: {
    title:
      "Turn every customer experience signal into results – inside Salesforce",
    description:
      "The 100% Salesforce-native Customer Intelligence & Action Platform. Every response writes directly to your CRM — AI triggers automated workflows instantly, preventing churn and surfacing revenue.",
    image: svImageLogo,
    features: [
      "Surveys, forms & assessments unified",
      "AI churn detection & intervention",
      "Workflows fire on response receipt",
      "Enriches Salesforce records instantly",
      "5-star rated on AppExchange",
      "Trusted by 400+ organizations",
    ],
    link: "https://surveyvista.com/",
  },
  formvista: {
    title:
      "Endless Applications: The 5-star rated Data Collection Solution You Need.",
    description:
      "Native Salesforce business forms that write data directly into your CRM — no third-party tools, no integration overhead, no data leaving your org.",
    image: fvImageLogo,
    features: [
      "Writes to any Salesforce object",
      "Branded, mobile-responsive design",
      "Conditional logic & smart branching",
      "Pre-fill from Salesforce data",
      "Workflow triggers on submission",
      "Zero integration tax",
    ],
    link: "https://surveyvista.com/products/form-vista-business-forms/",
  },
  compliancevista: {
    title:
      "Automate assessments, reduce risk, and ensure compliance inside Salesforce",
    description:
      "Native Salesforce assessments, risk scoring, and compliance workflows. Signals detected in real-time — alerts fire instantly, evidence preserved automatically.",
    image: cvImageLogo,
    features: [
      "Real-time compliance risk detection",
      "Automated evidence preservation",
      "Regulatory response workflows",
      "Complete audit trail in one system",
      "Risk scoring with full CRM context",
      "Inherits Salesforce security",
    ],
    link: "https://compliancevista.com",
  },
  agentvista: {
    title: "AI-Powered Feedback Automation with SurveyVista & Agentforce",
    description:
      "Deploy intelligent AI agents that operate natively within Salesforce — with full CRM context, executing automated actions, delivering results without ever leaving your secure org.",
    image: avImageLogo,
    features: [
      "AI agents with full CRM context",
      "Executes actions directly in Salesforce",
      "No external AI data exposure",
      "Agentforce native integration",
      "Automated multi-step workflows",
      "Inherits your org's security model",
    ],
    link: "https://agentsvista.com",
  },
  relationshipvista: {
    title: "Uncover and Analyze Your Salesforce Relationships",
    description:
      "Visualize, analyze and navigate complex Salesforce account relationships and hierarchies — natively. See parent-child structures and account networks without ever leaving your CRM.",
    image: rvImageLogo,
    features: [
      "Interactive hierarchy visualization",
      "Any Salesforce object relationship",
      "Click-through to records in context",
      "Configurable depth & display options",
      "No external tools or exports needed",
      "Works with all Salesforce editions",
    ],
    link: "https://relationshipvista.com",
  },
};

const productMeta: Record<
  ProductKey,
  { name: string; subtitle: string; icon: string }
> = {
  surveyvista: {
    name: "SurveyVista",
    subtitle: "Intelligence & Action",
    icon: svLogo,
  },
  formvista: { name: "FormVista", subtitle: "Native Forms", icon: fvLogo },
  compliancevista: {
    name: "ComplianceVista",
    subtitle: "Risk & Compliance",
    icon: cvLogo,
  },
  agentvista: {
    name: "AgentVista",
    subtitle: "AI-Powered Agents",
    icon: avLogo,
  },
  relationshipvista: {
    name: "RelationshipVista",
    subtitle: "Account Hierarchies",
    icon: rvLogo,
  },
};

const productKeys = Object.keys(products) as ProductKey[];

function Products() {
  const [activeTab, setActiveTab] = useState<ProductKey>("surveyvista");
  const [autoIdx, setAutoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAutoIdx((prev) => {
        const next = (prev + 1) % productKeys.length;
        setActiveTab(productKeys[next]);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTab = (key: ProductKey) => {
    setActiveTab(key);
    setAutoIdx(productKeys.indexOf(key));
  };
  const cur = products[activeTab];
  const meta = productMeta[activeTab];

  return (
    <section
      id="products"
      style={{ padding: "80px 40px 60px", background: "#fff" }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto 50px",
            animation: "fadeIn 0.8s ease",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "var(--primary-green)",
              marginBottom: 20,
            }}
          >
            Our Products
          </span>
          <h2
            style={{
              color: "var(--navy)",
              marginBottom: 24,
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            One suite. Five{" "}
            <span style={{ color: "var(--primary-green)" }}>native</span> apps.
          </h2>
          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              fontSize: 16,
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Every Ardira product is built entirely on the Salesforce platform —
            no middleware, no integrations, no data leaving your org.
          </p>
        </div>
        <div
          className="product-tabs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 1,
            background: "var(--border-color)",
            border: "1.5px solid var(--border-color)",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div
            className="tabs-list-row"
            style={{
              background: "var(--bg-light)",
              display: "flex",
              flexDirection: "column",
              borderRight: "1.5px solid var(--border-color)",
            }}
          >
            {productKeys.map((key, i) => (
              <button
                key={key}
                className={`tab-btn${activeTab === key ? " active" : ""}`}
                onClick={() => handleTab(key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    i < productKeys.length - 1
                      ? "1px solid var(--border-color)"
                      : "none",
                  cursor: "pointer",
                  transition: "var(--transition)",
                  textAlign: "left",
                  fontFamily: "var(--font-family)",
                  flex: 1,
                }}
              >
                <img
                  src={productMeta[key].icon}
                  alt={productMeta[key].name}
                  style={{
                    width: 36,
                    height: 36,
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    className="tab-title"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {productMeta[key].name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {productMeta[key].subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div
            style={{
              background: "#fff",
              padding: "24px 40px 30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="product-panel"
              key={activeTab}
              style={{
                display: "flex",
                flexDirection: "column",
                animation: "fadeIn 0.5s ease",
              }}
            >
              {/* Logo Header */}
              <div
                style={{
                  marginBottom: 12,
                  paddingBottom: 8,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={cur.image}
                  alt={meta.name}
                  style={{
                    height: 55,
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Content Split */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr",
                  gap: 50,
                  alignItems: "start",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: "var(--navy)",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {cur.title}
                  </h3>
                  <p
                    style={{
                      marginBottom: 16,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {cur.description}
                  </p>
                </div>

                <ul
                  className="feature-list"
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {cur.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        fontSize: 15,
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <a
                  href={cur.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    padding: "13px 34px",
                    borderRadius: 8,
                    background: "var(--primary-green)",
                    color: "#fff",
                    boxShadow: "0 4px 14px rgba(57,180,74,0.3)",
                    border: "2px solid transparent",
                    textDecoration: "none",
                    transition: "var(--transition)",
                  }}
                >
                  Visit {meta.name} →
                </a>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    background: "rgba(57,180,74,0.08)",
                    border: "1px solid rgba(57,180,74,0.2)",
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#2d753c",
                    letterSpacing: "0.02em",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#43AF57",
                      boxShadow: "0 0 4px rgba(67, 175, 87, 0.5)",
                    }}
                  />
                  100% Native
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
