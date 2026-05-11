import p1 from "@assets/TrustedPartner/8squadlogo.webp";
import p2 from "@assets/TrustedPartner/accenturelogo.webp";
import p3 from "@assets/TrustedPartner/actumdigitallogo.webp";
import p4 from "@assets/TrustedPartner/allcloudlogo.webp";
import p5 from "@assets/TrustedPartner/asugologojpg.webp";
import p6 from "@assets/TrustedPartner/bearinglogojpg.webp";
import p7 from "@assets/TrustedPartner/capgeminilogo.webp";
import p8 from "@assets/TrustedPartner/nolticlogo.webp";
import p9 from "@assets/TrustedPartner/syragonlogojpg.webp";
import p10 from "@assets/TrustedPartner/verasolutionlogo.webp";
import p11 from "@assets/TrustedPartner/zenyus.webp";

const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

function TrustedSection() {
  return (
    <section style={{ padding: "56px 40px", background: "var(--bg-light)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", textAlign: "center" }}>
      <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-muted)", marginBottom: 36 }}>Trusted by leading organizations</p>
      <div className="logos-container" style={{ overflow: "hidden", position: "relative" }}>
        <div className="logo-track" style={{ display: "flex", gap: 60, alignItems: "center", width: "max-content" }}>
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="logo-item" style={{ display: "flex", alignItems: "center", height: 32, minWidth: "max-content" }}>
              <img src={logo} alt={`Partner ${idx}`} loading="lazy" style={{ height: 26, width: "auto", maxWidth: 140, objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
