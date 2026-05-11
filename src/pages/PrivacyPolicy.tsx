function PrivacyPolicy() {
  const h2Style: React.CSSProperties = { color: "var(--navy)", fontSize: 24, margin: "32px 0 16px" };
  const h3Style: React.CSSProperties = { color: "var(--navy)", fontSize: 20, margin: "24px 0 12px" };
  const pStyle: React.CSSProperties = { marginBottom: 20, color: "var(--text-secondary)", lineHeight: 1.6 };
  const ulStyle: React.CSSProperties = { marginBottom: 24, paddingLeft: 24, color: "var(--text-secondary)", listStyle: "disc" };
  const liStyle: React.CSSProperties = { marginBottom: 12, lineHeight: 1.6 };
  const linkStyle: React.CSSProperties = { color: "var(--primary-green)", textDecoration: "underline" };

  return (
    <div style={{ padding: "60px 40px", maxWidth: 900, margin: "0 auto", minHeight: "60vh" }}>
      <div style={{ marginBottom: 40, borderBottom: "1px solid var(--border-color)", paddingBottom: 24 }}>
        <h1 style={{ color: "var(--navy)", marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Last Updated: May 6, 2026</p>
      </div>

      <div>
        <section>
          <h2 style={h2Style}>Privacy Notice</h2>
          <p style={pStyle}>
            The website located at <a href="https://ardira.com" style={linkStyle}>ardira.com</a>, (the "Website") is published, owned, and operated by Ardira Corporation, its affiliates and related entities ("Ardira," "the Company," "we," "us," and "our"). Ardira respects your privacy and is committed to protecting your privacy through our compliance with this website privacy policy (the "Policy"). This Policy should be read in conjunction with our website{" "}<a href="/terms" style={linkStyle}>Terms of Use</a>, into which this Policy is incorporated by reference.
          </p>
          <p style={{ ...pStyle, fontWeight: 600, color: "var(--navy)" }}>This Policy describes:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>The types of information we collect from you or that you may provide when you visit our website available at: <a href="https://ardira.com" style={linkStyle}>ardira.com</a> ("our Website").</li>
            <li style={liStyle}>Our practices for collecting, using, maintaining, protecting, and disclosing that information.</li>
          </ul>
          <p style={pStyle}>Please read this Policy carefully to understand our practices regarding your information and how we will treat it. If you do not agree with our policies and practices, then please do not use our Website. By using our Website, you agree to the terms of this Policy. This Policy may change from time to time (see below, "Changes to this Policy"). Your continued use of our Website after we make changes is deemed to be acceptance of those changes, so please check the Policy periodically for updates.</p>
        </section>

        <section>
          <h2 style={h2Style}>What We Collect and How We Collect It</h2>
          <p style={pStyle}>To ensure that we provide you with the best possible experience, we will store, use, and share information about you in accordance with this Policy.</p>
          <h3 style={h3Style}>Information You Provide to Us</h3>
          <p style={pStyle}>Personal Information is any information that can be used to individually identify you from a larger group, such as data including, but not limited to, your:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>first and last name,</li>
            <li style={liStyle}>email address,</li>
            <li style={liStyle}>telephone number,</li>
            <li style={liStyle}>state/region,</li>
            <li style={liStyle}>company/organization name,</li>
            <li style={liStyle}>job title,</li>
            <li style={liStyle}>job level (e.g., Supervisor, Manager, Consultant, etc.),</li>
            <li style={liStyle}>job role (e.g., Finance, Human Resources, Information Technology, etc.), and</li>
            <li style={liStyle}>comments or messages provided in free text boxes.</li>
          </ul>
          <p style={pStyle}>When you provide us Personal Information, we may combine that Personal Information from other data we have collected about you to learn more about you and to provide additional services.</p>
          <p style={{ ...pStyle, fontWeight: 600, color: "var(--navy)" }}>You may provide us Personal Information when you:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>request information,</li>
            <li style={liStyle}>provide requested services,</li>
            <li style={liStyle}>update your user profile,</li>
            <li style={liStyle}>schedule a demonstration,</li>
            <li style={liStyle}>apply for a job,</li>
            <li style={liStyle}>subscribe to our emails, and</li>
            <li style={liStyle}>register yourself with our Website.</li>
          </ul>
          <h3 style={h3Style}>Automated Information Collection</h3>
          <p style={pStyle}>In addition to the information that you provide to us, we may also collect information about you during your visit to our Website. We collect this information using automated tools that are detailed below.</p>
          <p style={{ ...pStyle, fontWeight: 600, color: "var(--navy)" }}>(a) Cookies</p>
          <p style={pStyle}>A "cookie" is a small data file transmitted from a website to your computer's hard drive. We use cookies to help you personalize your online experience.</p>
          <p style={{ ...pStyle, fontWeight: 600, color: "var(--navy)" }}>(b) Embedded Web Links</p>
          <p style={pStyle}>Links provided in our emails and, in some cases, on third-party websites may include tracking technology embedded in the link.</p>
          <p style={{ ...pStyle, fontWeight: 600, color: "var(--navy)" }}>(c) Third-Party Websites and Services</p>
          <p style={pStyle}>We work with a number of service providers of marketing communications technology.</p>
        </section>

        <section>
          <h2 style={h2Style}>Do Not Track Disclosure</h2>
          <p style={pStyle}>We may use cookies or other technologies to enable us to serve SurveyVista advertisements to you on trusted third party websites. However, no Personal Information is shared in such advertisement placements.</p>
        </section>

        <section>
          <h2 style={h2Style}>Your Choices and Selecting Your Privacy Preferences</h2>
          <p style={pStyle}>We want to provide you with relevant information that you have requested. You may opt-out of receiving communications from us at any time by selecting the "unsubscribe" link at the bottom of each email.</p>
        </section>

        <section>
          <h2 style={h2Style}>Accuracy and Access to Your Personal Information</h2>
          <p style={pStyle}>We strive to maintain and process your information accurately. Should you have any questions about your Personal Information, please e-mail us at <a href="mailto:privacy@ardira.com" style={linkStyle}>privacy@ardira.com</a>.</p>
        </section>

        <section>
          <h2 style={h2Style}>Information of Minors</h2>
          <p style={pStyle}>We do not actively seek to gather information from individuals under the age of eighteen (18).</p>
        </section>

        <section>
          <h2 style={h2Style}>How We Use Your Information</h2>
          <p style={pStyle}>The information we gather and that you provide is collected to provide you information and the services you request, including:</p>
          <ul style={ulStyle}>
            <li style={liStyle}>Assisting you with personalized experiences and enforcement of Terms of Use.</li>
            <li style={liStyle}>Preventing malicious activity and providing you with a secure experience.</li>
            <li style={liStyle}>Providing service and support for services you request.</li>
            <li style={liStyle}>Providing marketing communications that are effective and optimized for you.</li>
            <li style={liStyle}>Measuring the performance of our marketing programs.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2Style}>How We Share Your Information</h2>
          <p style={pStyle}>We do not sell or lease your information to any third party. We may disclose your Personal Information to our trusted third-party business partners in accordance with this Policy.</p>
        </section>

        <section>
          <h2 style={h2Style}>Third-Party Websites</h2>
          <p style={pStyle}>This Policy does not apply to websites or other domains that are maintained or operated by third parties or our affiliates.</p>
        </section>

        <section>
          <h2 style={h2Style}>Safeguarding the Information We Collect</h2>
          <p style={pStyle}>We take reasonable technical, administrative, and physical safeguards in order to protect your Personal Information against accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
        </section>

        <section>
          <h2 style={h2Style}>Changes to this Policy</h2>
          <p style={pStyle}>If we make any changes to this Policy, a revised Policy will be posted on this webpage and the date of the change will be reported in the "Last Revised" block.</p>
        </section>

        <section>
          <h2 style={h2Style}>How to Contact Us</h2>
          <p style={pStyle}>We value your opinions and welcome your feedback. To contact us about this Policy or your Personal Information, please contact us at:</p>
          <div>
            <p style={{ ...pStyle, fontWeight: 600, color: "var(--navy)" }}>Legal, Ardira</p>
            <p style={pStyle}>2040 Martin Ave</p>
            <p style={pStyle}>Santa Clara, CA 95050</p>
            <p style={pStyle}>1-669-777-6838</p>
            <p style={pStyle}><a href="mailto:privacy@ardira.com" style={linkStyle}>privacy@ardira.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
