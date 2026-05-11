import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-header">
            <img
              src="/assets/ArdiraFooterLogo.webp"
              alt="Ardira"
              className="footer-logo"
            />
          </div>
          <p>
            Building 100% Salesforce-native applications that turn your CRM into
            an intelligence and action engine.
          </p>
          <div className="footer-badges">
            <img
              src="/assets/SalesForcePartnerLogo.webp"
              alt="Salesforce Partner"
              className="badge"
            />
          </div>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#">SurveyVista</a>
            </li>
            <li>
              <a href="#">FormVista</a>
            </li>
            <li>
              <a href="#">ComplianceVista</a>
            </li>
            <li>
              <a href="#">AgentVista</a>
            </li>
            <li>
              <a href="#">RelationshipVista</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
            <li>
              <a href="#">Partner Hub</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ardira Corporation. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
