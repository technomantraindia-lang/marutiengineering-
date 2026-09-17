import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CapabilityCard } from '../cards/CapabilityCard';
import { capabilitiesData } from '../../data/capabilities';
import { Button } from '../ui/Button';
import './CapabilitiesSection.css';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="section section-dark capabilities-section blueprint-pattern" id="capabilities">
      <div className="container">
        <SectionHeading
          eyebrow="OUR MANUFACTURING CAPABILITIES"
          title="End-to-End Manufacturing Capabilities"
          highlightWord="Capabilities"
          subtitle="From single-part prototypes to high-volume production batches, we offer integrated machining and contract manufacturing solutions under one roof."
          variant="dark"
          action={
            <Button to="/contact" variant="primary" size="md" withArrow>
              Request a Technical Quote
            </Button>
          }
        />

        <div className="capabilities-grid">
          {capabilitiesData.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>
      </div>
    </section>
  );
};
