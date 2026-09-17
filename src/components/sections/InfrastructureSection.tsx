import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MachineCard } from '../cards/MachineCard';
import { infrastructureData } from '../../data/infrastructure';
import './InfrastructureSection.css';
import { Button } from '../ui/Button';

export const InfrastructureSection: React.FC = () => {
  return (
    <section className="section infrastructure-section blueprint-pattern-light" id="infrastructure">
      <div className="container">
        <SectionHeading
          eyebrow="MANUFACTURING INFRASTRUCTURE"
          title="Infrastructure Built for Precision"
          highlightWord="Precision"
          subtitle="Our manufacturing facility at GIDC Makarpura, Vadodara is equipped with modern CNC, VMC, and precision machining equipment operated by experienced machinists."
          align="center"
          action={<Button to="/infrastructure.html" variant="primary" size="md" withArrow>Explore Infrastructure</Button>}
        />

        <div className="infrastructure-list">
          {infrastructureData.map((machine, index) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
