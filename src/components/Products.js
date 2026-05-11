import React, { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [activeTab, setActiveTab] = useState("surveyvista");
  const [autoplayIndex, setAutoplayIndex] = useState(0);

  const products = {
    surveyvista: {
      title: "Turn Customer Signals Into Results",
      description:
        "The 100% Salesforce-native Customer Intelligence & Action Platform. Every response writes directly to your CRM — AI triggers automated workflows instantly, preventing churn and surfacing revenue.",
      image: "assets/ProductCard/SV_ProductCard.webp",
      features: [
        "Surveys, forms & assessments unified",
        "AI churn detection & intervention",
        "Workflows fire on response receipt",
        "Enriches Salesforce records instantly",
        "5-star rated on AppExchange",
        "Trusted by 400+ organizations",
      ],
    },
    formvista: {
      title: "Endless Applications Native Forms",
      description:
        "Native Salesforce business forms that write data directly into your CRM — no third-party tools, no integration overhead, no data leaving your org. Beautiful, branded forms connected to any Salesforce object.",
      image: "assets/ProductCard/FV_ProductCard.webp",
      features: [
        "Writes to any Salesforce object",
        "Branded, mobile-responsive design",
        "Conditional logic & smart branching",
        "Pre-fill from Salesforce data",
        "Workflow triggers on submission",
        "Zero integration tax",
      ],
    },
    compliancevista: {
      title: "Automate Risk and Compliance",
      description:
        "Native Salesforce assessments, risk scoring, and compliance workflows. Signals detected in real-time — alerts fire instantly, evidence preserved automatically, regulators never catch you unprepared.",
      image: "assets/ProductCard/CV_ProductCard.webp",
      features: [
        "Real-time compliance risk detection",
        "Automated evidence preservation",
        "Regulatory response workflows",
        "Complete audit trail in one system",
        "Risk scoring with full CRM context",
        "Inherits Salesforce security",
      ],
    },
    agentvista: {
      title: "AI-Powered Feedback Automation",
      description:
        "Deploy intelligent AI agents that operate natively within Salesforce — with full CRM context, executing automated actions, delivering results without ever leaving your secure org environment.",
      image: "assets/ProductCard/AV_ProductCard.webp",
      features: [
        "AI agents with full CRM context",
        "Executes actions directly in Salesforce",
        "No external AI data exposure",
        "Agentforce native integration",
        "Automated multi-step workflows",
        "Inherits your org's security model",
      ],
    },
    relationshipvista: {
      title: "Uncover Salesforce Relationships",
      description:
        "Visualize, analyze and navigate complex Salesforce account relationships and hierarchies — natively. See parent-child structures and account networks without ever leaving your CRM.",
      image: "assets/ProductCard/RV_ProductCard.webp",
      features: [
        "Interactive hierarchy visualization",
        "Any Salesforce object relationship",
        "Click-through to records in context",
        "Configurable depth & display options",
        "No external tools or exports needed",
        "Works with all Salesforce editions",
      ],
    },
  };

  const productKeys = Object.keys(products);
  const productNames = {
    surveyvista: {
      name: "SurveyVista",
      subtitle: "Intelligence & Action",
      icon: "ProductLogo/SurveyVistaLogo.webp",
    },
    formvista: {
      name: "FormVista",
      subtitle: "Native Forms",
      icon: "ProductLogo/FormVistaLogo.webp",
    },
    compliancevista: {
      name: "ComplianceVista",
      subtitle: "Risk & Compliance",
      icon: "ProductLogo/ComplainceVistaLogo.webp",
    },
    agentvista: {
      name: "AgentVista",
      subtitle: "AI-Powered Agents",
      icon: "ProductLogo/AgentVistaLogo.webp",
    },
    relationshipvista: {
      name: "RelationshipVista",
      subtitle: "Account Hierarchies",
      icon: "ProductLogo/RelationshipVistaLogo.webp",
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAutoplayIndex((prev) => (prev + 1) % productKeys.length);
      setActiveTab(productKeys[(autoplayIndex + 1) % productKeys.length]);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplayIndex, productKeys]);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setAutoplayIndex(productKeys.indexOf(key));
  };

  const current = products[activeTab];
  const currentName = productNames[activeTab];

  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <span className="section-eyebrow">Our Products</span>
        <h2>
          Five Native Apps.
          <br />
          Unlimited Possibilities.
        </h2>
        <p>
          Each product is 100% built on Salesforce platform — no middleware, no
          integrations, no data leaving your org.
        </p>
      </div>

      <div className="product-tabs">
        <div className="tabs-list">
          {productKeys.map((key) => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? "active" : ""}`}
              onClick={() => handleTabClick(key)}
            >
              <img
                src={`assets/${productNames[key].icon}`}
                alt={productNames[key].name}
              />
              <div>
                <div className="tab-title">{productNames[key].name}</div>
                <div className="tab-subtitle">{productNames[key].subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="product-content">
          <div className="product-panel active">
            <div className="panel-left">
              <img
                src={current.image}
                alt={currentName.name}
                className="product-image"
              />
            </div>
            <div className="panel-right">
              <h3>{current.title}</h3>
              <p>{current.description}</p>
              <ul className="feature-list">
                {current.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
