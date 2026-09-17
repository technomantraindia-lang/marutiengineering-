import React from 'react';
import { MetaTags } from '../components/ui/MetaTags';
import { Container } from '../components/layout/Container';
import { RFQForm } from '../components/forms/RFQForm';
import { companyData } from '../data/company';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page-view">
      <MetaTags
        title="Contact Maruti Engineering | Precision Manufacturing Vadodara"
        description="Contact Maruti Engineering in GIDC Makarpura, Vadodara, Gujarat. Send technical drawings, request quotations for CNC/VMC machined components and precision tooling."
      />

      {/* 1. Contact Hero */}
      <section className="page-hero blueprint-pattern">
        <Container>
          <div className="page-hero-content">
            <span className="eyebrow">CONTACT MARUTI ENGINEERING</span>
            <h1 className="page-hero-title">
              Let's Engineer <br />
              <span className="text-orange">Something Precise.</span>
            </h1>
            <p className="page-hero-desc">
              Have an engineering drawing, prototype requirement, or production batch enquiry? Reach out to our technical leadership team in Vadodara or submit an RFQ below.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact Cards + RFQ Form Layout */}
      <section className="section contact-main-section">
        <Container>
          <div className="contact-layout-grid">
            {/* Left Column: Contact Cards & Info */}
            <div className="contact-info-col">
              <div className="contact-info-header">
                <span className="eyebrow">DIRECT CONTACT</span>
                <h2 className="contact-info-title">Speak With Our Leadership Team</h2>
                <p className="contact-info-desc">
                  Our directors and technical engineers are directly accessible to discuss drawing specifications, material selection, and delivery commitments.
                </p>
              </div>

              {/* Direct Personnel Cards */}
              <div className="personnel-cards-grid">
                <div className="personnel-card">
                  <div className="personnel-icon-wrap">
                    <Phone size={20} className="text-orange" />
                  </div>
                  <div className="personnel-details">
                    <span className="personnel-role">Executive Contact</span>
                    <h3 className="personnel-name">{companyData.contacts[0].name}</h3>
                    <a href={`tel:${companyData.contacts[0].phone}`} className="personnel-phone-link">
                      {companyData.contacts[0].displayPhone}
                    </a>
                  </div>
                </div>

                <div className="personnel-card">
                  <div className="personnel-icon-wrap">
                    <Phone size={20} className="text-orange" />
                  </div>
                  <div className="personnel-details">
                    <span className="personnel-role">Technical & Operations</span>
                    <h3 className="personnel-name">{companyData.contacts[1].name}</h3>
                    <a href={`tel:${companyData.contacts[1].phone}`} className="personnel-phone-link">
                      {companyData.contacts[1].displayPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Facility & Email Card */}
              <div className="facility-card">
                <div className="facility-item">
                  <Mail size={20} className="facility-icon text-orange" />
                  <div>
                    <span className="facility-label">Official Email</span>
                    <a href={`mailto:${companyData.email}`} className="facility-email-link">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="facility-divider" />

                <div className="facility-item">
                  <MapPin size={20} className="facility-icon text-orange" />
                  <div>
                    <span className="facility-label">Works & Office Address</span>
                    <p className="facility-address">
                      {companyData.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="facility-divider" />

                <div className="facility-item">
                  <Clock size={20} className="facility-icon text-orange" />
                  <div>
                    <span className="facility-label">Working Hours</span>
                    <p className="facility-hours">
                      Monday – Saturday: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality Trust Badge */}
              <div className="nda-trust-card">
                <ShieldCheck size={24} className="text-orange" />
                <div>
                  <h4 className="nda-title">Drawing Confidentiality Guaranteed</h4>
                  <p className="nda-desc">
                    All CAD models, proprietary drawings, and technical specifications shared with Maruti Engineering are protected under strict industrial confidentiality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive RFQ Form */}
            <div className="contact-form-col">
              <RFQForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Google Maps Embed Section */}
      <section className="map-section">
        <div className="map-header">
          <Container>
            <div className="map-header-inner">
              <div>
                <span className="eyebrow">OUR LOCATION</span>
                <h3 className="map-title">Manufacturing Plant & Facility</h3>
                <p className="map-subtitle">Located in the prime industrial hub of GIDC Makarpura, Vadodara, Gujarat.</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyData.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open in Google Maps
              </a>
            </div>
          </Container>
        </div>

        <div className="map-frame-wrapper">
          <iframe
            title="Maruti Engineering Location Map"
            src="https://maps.google.com/maps?q=875%2F6%2C%20G.I.D.C.%20Estate%2C%20Makarpura%2C%20Vadodara%2C%20Gujarat%20390010&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};
