import { useState, useEffect } from "react";
import svCard from "@assets/ProductCard/SV_ProductCard.webp";
import fvCard from "@assets/ProductCard/FV_ProductCard.webp";
import cvCard from "@assets/ProductCard/CV_ProductCard.webp";
import avCard from "@assets/ProductCard/AV_ProductCard.webp";
import rvCard from "@assets/ProductCard/RV_ProductCard.webp";
import svLogo from "@assets/ProductLogo/SurveyVistaLogo.webp";
import fvLogo from "@assets/ProductLogo/FormVistaLogo.webp";
import cvLogo from "@assets/ProductLogo/ComplainceVistaLogo.webp";
import avLogo from "@assets/ProductLogo/AgentVistaLogo.webp";
import rvLogo from "@assets/ProductLogo/RelationshipVistaLogo.webp";

type ProductKey = "surveyvista" | "formvista" | "compliancevista" | "agentvista" | "relationshipvista";

const products: Record<ProductKey, { title: string; description: string; image: string; features: string[] }> = {
  surveyvista: { title: "Turn Customer Signals Into Results", description: "The 100% Salesforce-native Customer Intelligence & Action Platform. Every response writes directly to your CRM — AI triggers automated workflows instantly, preventing churn and surfacing revenue.", image: svCard, features: ["Surveys, forms & assessments unified", "AI churn detection & intervention", "Workflows fire on response receipt", "Enriches Salesforce records instantly", "5-star rated on AppExchange", "Trusted by 400+ organizations"] },
  formvista: { title: "Endless Applications Native Forms", description: "Native Salesforce business forms that write data directly into your CRM — no third-party tools, no integration overhead, no data leaving your org.", image: fvCard, features: ["Writes to any Salesforce object", "Branded, mobile-responsive design", "Conditional logic & smart branching", "Pre-fill from Salesforce data", "Workflow triggers on submission", "Zero integration tax"] },
  compliancevista: { title: "Automate Risk and Compliance", description: "Native Salesforce assessments, risk scoring, and compliance workflows. Signals detected in real-time — alerts fire instantly, evidence preserved automatically.", image: cvCard, features: ["Real-time compliance risk detection", "Automated evidence preservation", "Regulatory response workflows", "Complete audit trail in one system", "Risk scoring with full CRM context", "Inherits Salesforce security"] },
  agentvista: { title: "AI-Powered Feedback Automation", description: "Deploy intelligent AI agents that operate natively within Salesforce — with full CRM context, executing automated actions, delivering results without ever leaving your secure org.", image: avCard, features: ["AI agents with full CRM context", "Executes actions directly in Salesforce", "No external AI data exposure", "Agentforce native integration", "Automated multi-step workflows", "Inherits your org's security model"] },
  relationshipvista: { title: "Uncover Salesforce Relationships", description: "Visualize, analyze and navigate complex Salesforce account relationships and hierarchies — natively. See parent-child structures and account networks without ever leaving your CRM.", image: rvCard, features: ["Interactive hierarchy visualization", "Any Salesforce object relationship", "Click-through to records in context", "Configurable depth & display options", "No external tools or exports needed", "Works with all Salesforce editions"] },
};

const productMeta: Record<ProductKey, { name: string; subtitle: string; icon: string }> = {
  surveyvista: { name: "SurveyVista", subtitle: "Intelligence & Action", icon: svLogo },
  formvista: { name: "FormVista", subtitle: "Native Forms", icon: fvLogo },
  compliancevista: { name: "ComplianceVista", subtitle: "Risk & Compliance", icon: cvLogo },
  agentvista: { name: "AgentVista", subtitle: "AI-Powered Agents", icon: avLogo },
  relationshipvista: { name: "RelationshipVista", subtitle: "Account Hierarchies", icon: rvLogo },
};

const productKeys = Object.keys(products) as ProductKey[];

function Products() {
  const [activeTab, setActiveTab] = useState<ProductKey>("surveyvista");
  const [autoIdx, setAutoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAutoIdx(prev => { const next = (prev + 1) % productKeys.length; setActiveTab(productKeys[next]); return next; });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTab = (key: ProductKey) => { setActiveTab(key); setAutoIdx(productKeys.indexOf(key)); };
  const cur = products[activeTab];
  const meta = productMeta[activeTab];

  return (
    <section id="products" style={{ padding: "80px 40px", background: "#fff" }}>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 60px", animation: "fadeIn 0.8s ease" }}>
        <span style={{ display: "block", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--primary-green)", marginBottom: 12 }}>Our Products</span>
        <h2 style={{ color: "var(--navy)", marginBottom: 16 }}>Five Native Apps.<br />Unlimited Possibilities.</h2>
        <p style={{ maxWidth: 600, margin: "0 auto" }}>Each product is 100% built on Salesforce platform — no middleware, no integrations, no data leaving your org.</p>
      </div>
      <div className="product-tabs-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 1, background: "var(--border-color)", border: "1.5px solid var(--border-color)", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
        <div className="tabs-list-row" style={{ background: "var(--bg-light)", display: "flex", flexDirection: "column", borderRight: "1.5px solid var(--border-color)" }}>
          {productKeys.map((key, i) => (
            <button key={key} className={`tab-btn${activeTab === key ? " active" : ""}`} onClick={() => handleTab(key)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 16px", background: "transparent", border: "none", borderBottom: i < productKeys.length - 1 ? "1px solid var(--border-color)" : "none", cursor: "pointer", transition: "var(--transition)", textAlign: "left", fontFamily: "var(--font-family)" }}>
              <img src={productMeta[key].icon} alt={productMeta[key].name} style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="tab-title" style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{productMeta[key].name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{productMeta[key].subtitle}</div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ background: "#fff", padding: 40, display: "flex", flexDirection: "column" }}>
          <div className="product-panel" key={activeTab} style={{ display: "flex", flexDirection: "row", gap: 40, alignItems: "flex-start", minHeight: 500 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={cur.image} alt={meta.name} style={{ width: "100%", maxWidth: 400, height: "auto", borderRadius: 8, boxShadow: "var(--shadow-sm)" }} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 16 }}>{cur.title}</h3>
              <p style={{ marginBottom: 24, fontSize: 15 }}>{cur.description}</p>
              <ul className="feature-list" style={{ marginBottom: 32 }}>
                {cur.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>{f}</li>
                ))}
              </ul>
              <a href="#" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 15, fontWeight: 600, padding: "13px 34px", borderRadius: 8, background: "var(--primary-green)", color: "#fff", boxShadow: "0 4px 14px rgba(57,180,74,0.3)", border: "2px solid transparent", textDecoration: "none", transition: "var(--transition)", alignSelf: "flex-start" }}>Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
