import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { processStepsData } from '../../data/process';
import { FileCode, SearchCheck, Box, Cog, CheckCircle, PackageCheck, Truck } from 'lucide-react';
import './ProcessTimeline.css';

export const ProcessTimeline: React.FC = () => {
  const stepIcons = [
    <FileCode key="1" size={20} className="process-icon" />,
    <SearchCheck key="2" size={20} className="process-icon" />,
    <Box key="3" size={20} className="process-icon" />,
    <Cog key="4" size={20} className="process-icon" />,
    <CheckCircle key="5" size={20} className="process-icon" />,
    <PackageCheck key="6" size={20} className="process-icon" />,
    <Truck key="7" size={20} className="process-icon" />
  ];

  return (
    <section className="section process-section blueprint-pattern-light" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="FROM DRAWING TO DELIVERY"
          title="From Drawing to Delivery Process"
          highlightWord="Delivery"
          subtitle="A streamlined, stage-wise manufacturing workflow engineered to ensure dimensional accuracy, quality compliance, and on-time dispatch."
          align="center"
        />

        <div className="process-timeline-wrapper">
          <div className="process-timeline-line" />
          
          <div className="process-steps-container">
            {processStepsData.map((step, index) => (
              <div key={step.number} className="process-step-item">
                <div className="process-node-wrap">
                  <div className="process-node-icon-box">
                    {stepIcons[index]}
                  </div>
                </div>

                <div className="process-step-content">
                  <span className="process-step-subtitle">{step.subtitle}</span>
                  <h4 className="process-step-title">{step.title}</h4>
                  <p className="process-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
