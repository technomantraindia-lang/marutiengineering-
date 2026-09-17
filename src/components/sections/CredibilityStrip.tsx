import React from 'react';
import { Calendar, Award, MapPin, DraftingCompass, Network } from 'lucide-react';
import './CredibilityStrip.css';

export const CredibilityStrip: React.FC = () => {
  const items = [
    {
      icon: <Calendar className="cred-icon text-orange" size={26} />,
      primary: "1996",
      label: "Established"
    },
    {
      icon: <Award className="cred-icon text-orange" size={26} />,
      primary: "30+",
      label: "Years of Experience"
    },
    {
      icon: <MapPin className="cred-icon text-orange" size={26} />,
      primary: "Vadodara, India",
      label: "Our Location"
    },
    {
      icon: <DraftingCompass className="cred-icon text-orange" size={26} />,
      primary: "Custom Manufacturing",
      label: "Drawing-Based Solutions"
    },
    {
      icon: <Network className="cred-icon text-orange" size={26} />,
      primary: "Multi-Industry",
      label: "Diverse Experience"
    }
  ];

  return (
    <div className="credibility-strip-wrapper">
      <div className="container">
        <div className="credibility-card">
          <div className="credibility-grid">
            {items.map((item, index) => (
              <div key={index} className="credibility-item">
                <div className="credibility-icon-box">
                  {item.icon}
                </div>
                <div className="credibility-text-box">
                  <span className="credibility-primary">{item.primary}</span>
                  <span className="credibility-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
