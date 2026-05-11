import React from "react";
import "./TrustedSection.css";

function TrustedSection() {
  const partners = [
    "/assets/TrustedPartner/8squadlogo.webp",
    "/assets/TrustedPartner/accenturelogo.webp",
    "/assets/TrustedPartner/actumdigitallogo.webp",
    "/assets/TrustedPartner/allcloudlogo.webp",
    "/assets/TrustedPartner/asugologojpg.webp",
    "/assets/TrustedPartner/bearinglogojpg.webp",
    "/assets/TrustedPartner/capgeminilogo.webp",
    "/assets/TrustedPartner/nolticlogo.webp",
    "/assets/TrustedPartner/syragonlogojpg.webp",
    "/assets/TrustedPartner/verasolutionlogo.webp",
    "/assets/TrustedPartner/zenyus.webp",
  ];

  return (
    <section className="trusted-section">
      <p className="section-label">Trusted by leading organizations</p>
      <div className="logos-container">
        <div className="logo-track">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="logo-item">
              <img src={logo} alt={`Partner ${idx}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
