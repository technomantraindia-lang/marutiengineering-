import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { IndustryCard } from '../cards/IndustryCard';
import { industriesData } from '../../data/industries';
import { Button } from '../ui/Button';
import './IndustriesSection.css';

export const IndustriesSection: React.FC = () => {
  return (
    <section className="section section-soft industries-section" id="industries">
      <div className="container">
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Trusted Across Diverse Industries"
          highlightWord="Industries"
          subtitle="Our high-precision components and assemblies power critical operations in heavy industrial, fluid handling, energy, automotive, and processing applications."
          action={
            <Button to="/industries.html" variant="primary" size="md" withArrow>
              Explore Industries
            </Button>
          }
        />

        <div className="industries-grid">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};
