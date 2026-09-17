import React from 'react';
import { qualityData } from '../../data/quality';
import { Button } from '../ui/Button';
import { CheckCircle2, Sliders } from 'lucide-react';
import './QualitySection.css';

export const QualitySection: React.FC = () => {
  return (
    <section className="section quality-section" id="quality">
      <div className="container">
        <div className="quality-grid-layout">
          {/* Left: Quality Content */}
          <div className="quality-content-col">
            <div className="eyebrow">QUALITY POLICY</div>
            <h2 className="quality-heading">
              Quality <br />
              Is <span className="text-orange">Built In.</span>
            </h2>

            <p className="quality-tagline-text">
              {qualityData.tagline}
            </p>

            <p className="quality-intro-text">
              We are committed to delivering precision manufactured components strictly compliant with customer drawing specifications, dimensional tolerances, and quality criteria.
            </p>

            <div className="quality-principles-list">
              {qualityData.principles.map((principle, index) => (
                <div key={index} className="quality-principle-item">
                  <CheckCircle2 size={18} className="quality-check-icon text-orange" />
                  <span className="quality-principle-text">{principle}</span>
                </div>
              ))}
            </div>

            <div className="quality-cta-wrap">
              <Button to="/quality.html" variant="primary" size="md" withArrow>
                Our Quality Commitment
              </Button>
            </div>
          </div>

          {/* Right: Inspection & QA Image */}
          <div className="quality-image-col">
            <div className="quality-img-wrap">
              <img
                src={qualityData.image}
                alt="Precision Measurement & Quality Inspection"
                className="quality-img"
                loading="lazy"
              />
              <div className="quality-inspection-badge">
                <Sliders size={20} className="text-orange" />
                <div>
                  <span className="quality-badge-title">Dimensional Verification</span>
                  <span className="quality-badge-sub">Stage-wise in-process & final QA inspection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
