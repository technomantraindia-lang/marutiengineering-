import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { materialsData } from '../../data/materials';
import { Check, ShieldCheck } from 'lucide-react';
import './MaterialExpertise.css';

export const MaterialExpertise: React.FC = () => {
  return (
    <section className="section section-blue-soft material-section" id="materials">
      <div className="container">
        <SectionHeading
          eyebrow="MATERIAL EXPERTISE"
          title="Engineered Across Diverse Materials"
          highlightWord="Materials"
          subtitle="We possess specialized machining knowledge across standard, high-tensile, non-ferrous, and heavy abrasion-resistant alloys strictly adhering to metallurgical requirements."
          align="center"
        />

        <div className="materials-grid">
          {materialsData.map((material) => (
            <div key={material.id} className="material-card">
              <div className="material-card-header">
                <span className="material-code-badge">{material.code}</span>
                <h3 className="material-name">{material.name}</h3>
              </div>

              <p className="material-desc">{material.description}</p>

              <div className="material-traits">
                {material.characteristics.map((char, i) => (
                  <span key={i} className="material-trait-pill">
                    <Check size={12} className="text-orange" />
                    {char}
                  </span>
                ))}
              </div>

              <div className="material-app-box">
                <span className="material-app-label">Typical Uses:</span>
                <p className="material-app-text">{material.applications}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="material-footer-note">
          <ShieldCheck size={18} className="text-orange" />
          <span>Complete material test reports (MTR / Mill TC) and chemical composition traceability provided on request.</span>
        </div>
      </div>
    </section>
  );
};
