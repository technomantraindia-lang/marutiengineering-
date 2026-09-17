import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { whyChooseData } from '../../data/quality';
import { Calendar, DraftingCompass, Network, Layers, Wrench, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import './WhyChooseUsSection.css';

export const WhyChooseUsSection: React.FC = () => {
  const icons = [
    <Calendar key="1" size={24} className="text-orange" />,
    <DraftingCompass key="2" size={24} className="text-orange" />,
    <Network key="3" size={24} className="text-orange" />,
    <Layers key="4" size={24} className="text-orange" />,
    <Wrench key="5" size={24} className="text-orange" />,
    <ShieldCheck key="6" size={24} className="text-orange" />
  ];

  return (
    <section className="section section-dark why-choose-section blueprint-pattern" id="why-choose-us">
      <div className="container">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="Why Choose Maruti Engineering"
          highlightWord="Maruti Engineering"
          subtitle="More than three decades of manufacturing experience, delivering precision engineering, reliability, and value to our customers."
          variant="dark"
          action={
            <Button to="/about-us" variant="primary" size="md" withArrow>
              Learn More
            </Button>
          }
        />

        <div className="why-choose-grid">
          {whyChooseData.map((item, index) => (
            <div key={item.id} className="why-choose-card">
              <div className="why-choose-icon-box">
                {icons[index]}
              </div>
              <h3 className="why-choose-title">{item.title}</h3>
              <span className="why-choose-subtitle">{item.subtitle}</span>
              <p className="why-choose-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
