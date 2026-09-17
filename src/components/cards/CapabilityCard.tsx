import React from 'react';
import { ArrowRight, Cog } from 'lucide-react';
import { CapabilityItem } from '../../data/capabilities';
import './CapabilityCard.css';

interface CapabilityCardProps {
  capability: CapabilityItem;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability }) => {
  return (
    <div className="capability-card">
      <div className="capability-card-top">
        <div className="capability-card-header">
          <span className="capability-number">{capability.number}</span>
          <div className="capability-icon-wrap">
            <Cog className="capability-icon" size={22} />
          </div>
        </div>
        <div className="capability-card-img-wrap">
          <img src={capability.image} alt={capability.title} className="capability-card-img" loading="lazy" />
        </div>
      </div>
      <div className="capability-card-body">
        <h3 className="capability-title">{capability.title}</h3>
        <p className="capability-subtitle">{capability.subtitle}</p>
        <p className="capability-desc">{capability.description}</p>
        
        <div className="capability-features">
          {capability.features.map((feat, idx) => (
            <span key={idx} className="capability-feat-tag">{feat}</span>
          ))}
        </div>

        <div className="capability-card-footer">
          <span className="capability-learn-more">
            Technical Specs
            <ArrowRight className="capability-arrow" size={16} />
          </span>
        </div>
      </div>
      <div className="capability-card-accent" />
    </div>
  );
};
