import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/company';
import { capabilitiesData } from '../../data/capabilities';
import logoImg from '../../assets/brand/logo.png';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="global-footer">
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo-link">
              <img src={logoImg} alt="Maruti Engineering" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline-main">
              {companyData.tagline}
            </p>
            <p className="footer-about-snippet">
              Precision contract manufacturing company in Vadodara, Gujarat specializing in CNC turning, VMC milling, tooling, and fixtures since 1996.
            </p>
            <div className="footer-quality-badge">
              <ShieldCheck size={16} className="text-orange" />
              <span>Customer Drawing-Based Manufacturing</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Products
                </Link>
              </li>
              <li>
                <Link to="/capabilities.html" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Capabilities
                </Link>
              </li>
              <li>
                <Link to="/industries.html" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Industries
                </Link>
              </li>
              <li>
                <Link to="/infrastructure.html" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/quality.html" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Quality Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="footer-col">
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-links">
              {capabilitiesData.map((cap) => (
                <li key={cap.id}>
                  <Link to={'/capabilities.html#' + cap.id} className="footer-link">
                    <ArrowRight size={13} className="footer-link-icon" /> {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Contact Information</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon text-orange" />
                <div className="footer-contact-text">
                  <span>875/6, G.I.D.C. Estate, Makarpura,</span>
                  <span>Vadodara, Gujarat, India – 390010</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon text-orange" />
                <div className="footer-contact-text">
                  <a href={`tel:${companyData.contacts[0].phone}`} className="footer-contact-link">
                    {companyData.contacts[0].name}: {companyData.contacts[0].displayPhone}
                  </a>
                  <a href={`tel:${companyData.contacts[1].phone}`} className="footer-contact-link">
                    {companyData.contacts[1].name}: {companyData.contacts[1].displayPhone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon text-orange" />
                <div className="footer-contact-text">
                  <a href={`mailto:${companyData.email}`} className="footer-contact-link">
                    {companyData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-cta-box">
              <Link to="/contact" className="footer-rfq-button">
                <span>Send Requirement</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} {companyData.name}. All Rights Reserved.
          </p>
          <p className="footer-bottom-tagline">
            {companyData.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
