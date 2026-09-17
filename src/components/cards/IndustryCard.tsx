import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { IndustryItem } from '../../data/industries';
import './IndustryCard.css';

interface IndustryCardProps {
  industry: IndustryItem;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div className="industry-card">
      <img src={industry.image} alt={industry.name} className="industry-card-bg" loading="lazy" />
      <div className="industry-card-overlay" />
      <div className="industry-card-content">
        <div className="industry-card-header">
          <span className="industry-tagline">{industry.tagline}</span>
          <h3 className="industry-name">{industry.name}</h3>
        </div>
        
        <p className="industry-desc">{industry.description}</p>

        <div className="industry-components">
          {industry.keyComponents.slice(0, 3).map((comp, idx) => (
            <div key={idx} className="industry-comp-item">
              <CheckCircle2 size={13} className="text-orange" />
              <span>{comp}</span>
            </div>
          ))}
        </div>

        <div className="industry-card-action">
          <span className="industry-action-link">
            Explore Solutions <ArrowRight size={15} className="industry-arrow" />
          </span>
        </div>
      </div>
      <div className="industry-card-border" />
    </div>
  );
};
