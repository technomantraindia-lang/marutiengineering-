import React from 'react';
import { Button } from '../ui/Button';
import { PhoneCall } from 'lucide-react';
import { companyData } from '../../data/company';
import ctaBgImg from '../../assets/quality/rfq_cta_bg.jpg';
import './RFQCTASection.css';

export const RFQCTASection: React.FC = () => {
  return (
    <section className="rfq-cta-section blueprint-pattern">
      <div className="rfq-cta-bg-wrapper">
        <img src={ctaBgImg} alt="Precision Engineering Manufacturing" className="rfq-cta-bg-img" loading="lazy" />
        <div className="rfq-cta-overlay" />
      </div>

      <div className="container rfq-cta-container">
        <div className="rfq-cta-content">
          <span className="rfq-cta-eyebrow">HAVE A DRAWING OR REQUIREMENT?</span>
          <h2 className="rfq-cta-heading">
            Let's Manufacture It <br />
            <span className="text-orange">With Precision.</span>
          </h2>
          <p className="rfq-cta-desc">
            Share your 2D drawings, 3D CAD models, or technical specifications with our engineering team in Vadodara. We review manufacturability, material choices, and provide a rapid, competitive quotation.
          </p>

          <div className="rfq-cta-buttons">
            <Button to="/contact" variant="primary" size="lg" withArrow>
              Send Your Requirement
            </Button>
            <Button href={`tel:${companyData.contacts[0].phone}`} variant="outline-white" size="lg">
              <PhoneCall size={18} />
              <span>Talk to Our Team</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
