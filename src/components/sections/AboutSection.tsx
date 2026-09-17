import React from 'react';
import { Shield, Layers, Users, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import workshopImg from '../../assets/about/about_workshop.jpg';
import componentsImg from '../../assets/about/about_components.jpg';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Shield className="about-pillar-icon text-orange" size={20} />,
      title: "Precision Manufacturing",
      desc: "CNC & VMC machining with tight micron-level tolerances."
    },
    {
      icon: <Layers className="about-pillar-icon text-orange" size={20} />,
      title: "Wide Material Expertise",
      desc: "SS, Alloy Steel, Aluminium, Brass, Copper & Hardox."
    },
    {
      icon: <Users className="about-pillar-icon text-orange" size={20} />,
      title: "Customer-Centric Approach",
      desc: "Long-term partnership with tailored manufacturing workflows."
    },
    {
      icon: <Clock className="about-pillar-icon text-orange" size={20} />,
      title: "On-Time Delivery",
      desc: "Dependable scheduling for domestic and export commitments."
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-layout-grid">
          {/* Left: Asymmetric Imagery */}
          <div className="about-imagery-col">
            <div className="about-img-main-wrap">
              <img
                src={workshopImg}
                alt="Maruti Engineering CNC & VMC Manufacturing Workshop"
                className="about-img-main"
                loading="lazy"
              />
              <div className="about-experience-badge">
                <span className="about-exp-number">30+</span>
                <span className="about-exp-text">Years of Precision Excellence</span>
              </div>
            </div>

            {/* Overlaid Smaller Component Image with Orange Detail */}
            <div className="about-img-sub-wrap">
              <img
                src={componentsImg}
                alt="Precision Machined Components"
                className="about-img-sub"
                loading="lazy"
              />
              <div className="about-sub-label">
                <span>Precision Machined Components</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content-col">
            <div className="eyebrow">MARUTI ENGINEERING</div>
            <h2 className="about-heading">
              Engineering Precision. <br />
              Building Long-Term <span className="text-orange">Partnerships.</span>
            </h2>

            <p className="about-text-lead">
              Maruti Engineering is a precision engineering and contract manufacturing company based in Vadodara, Gujarat, India, specializing in high-precision machined components, assemblies, tooling, fixtures and customized engineering parts.
            </p>

            <p className="about-text-body">
              Established in 1996, we combine experienced technical expertise, modern CNC/VMC machining capabilities and a strong commitment to quality to deliver reliable engineering solutions for diverse industrial applications. Every component is manufactured strictly according to customer drawings and specifications.
            </p>

            {/* 4 Pillars Grid */}
            <div className="about-pillars-grid">
              {pillars.map((pillar, i) => (
                <div key={i} className="about-pillar-card">
                  <div className="about-pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="about-pillar-title">{pillar.title}</h4>
                    <p className="about-pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <Button to="/about-us" variant="primary" size="md" withArrow>
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
