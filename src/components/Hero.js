import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-dots"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          100% Salesforce-Native Applications
        </div>
        <h1 className="hero-title">
          Your Salesforce org
          <br />
          is only as powerful as
          <br />
          what's <span className="highlight">native</span> to it.
        </h1>
        <p className="hero-subtitle">
          Ardira builds applications that live entirely inside Salesforce — no
          integrations to maintain, no data leaving your org, no hidden costs.
          Intelligence and action, where your team already works.
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn btn-primary">
            Explore Products →
          </a>
          <a href="#features" className="btn btn-secondary">
            Why Native Matters
          </a>
        </div>
        <div className="trust-indicators">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1L10 5.5L15 6.2L11.5 9.6L12.4 14.5L8 12.2L3.6 14.5L4.5 9.6L1 6.2L6 5.5Z"
                fill="#39B44A"
              />
            </svg>
            5-star AppExchange rating
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="#27AAE1"
                strokeWidth="1.5"
              />
              <path
                d="M5 8l2 2 4-4"
                stroke="#27AAE1"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            400+ organizations worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
