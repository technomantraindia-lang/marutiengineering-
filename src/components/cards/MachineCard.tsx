import React from 'react';
import { Settings } from 'lucide-react';
import { MachineItem } from '../../data/infrastructure';
import './MachineCard.css';

interface MachineCardProps {
  machine: MachineItem;
  reversed?: boolean;
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine, reversed = false }) => {
  return (
    <div className={`machine-card ${reversed ? 'machine-card-reversed' : ''}`}>
      <div className="machine-img-container">
        <img src={machine.image} alt={machine.name} className="machine-img" loading="lazy" />
        <div className="machine-category-pill">{machine.category}</div>
      </div>
      <div className="machine-details">
        <div className="machine-header">
          <h3 className="machine-name">{machine.name}</h3>
          {machine.quantity && (
            <span className="machine-qty-badge">{machine.quantity}</span>
          )}
        </div>
        
        <div className="machine-specs-box">
          <Settings size={15} className="text-orange" />
          <span className="machine-specs-text">{machine.specs}</span>
        </div>

        <p className="machine-desc">{machine.description}</p>
      </div>
    </div>
  );
};
