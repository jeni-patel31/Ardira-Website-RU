import React from "react";
import "./TrustedSection.css";

function TrustedSection() {
  const partners = [
    "TrustedPartner/8squadlogo.webp",
    "TrustedPartner/accenturelogo.webp",
    "TrustedPartner/actumdigitallogo.webp",
    "TrustedPartner/allcloudlogo.webp",
    "TrustedPartner/asugologojpg.webp",
    "TrustedPartner/bearinglogojpg.webp",
    "TrustedPartner/capgeminilogo.webp",
    "TrustedPartner/nolticlogo.webp",
    "TrustedPartner/syragonlogojpg.webp",
    "TrustedPartner/verasolutionlogo.webp",
    "TrustedPartner/zenyus.webp",
  ];

  return (
    <section className="trusted-section">
      <p className="section-label">Trusted by leading organizations</p>
      <div className="logos-container">
        <div className="logo-track">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="logo-item">
              <img
                src={`assets/${logo}`}
                alt={`Partner ${idx}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
