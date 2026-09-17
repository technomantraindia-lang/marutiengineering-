import React from 'react';
import { MetaTags } from '../components/ui/MetaTags';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { qualityData } from '../data/quality';
import { RFQCTASection } from '../components/sections/RFQCTASection';
import { CustomerSection } from '../components/sections/CustomerSection';
import workshopImg from '../assets/about/about_workshop.jpg';
import qualityImg from '../assets/quality/quality_inspection.jpg';
import { CheckCircle2, Shield, Clock, Users, Target } from 'lucide-react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page-view">
      <MetaTags
        title="About Maruti Engineering | Precision Manufacturing Since 1996 Vadodara"
        description="Learn about Maruti Engineering, established in 1996 in Vadodara, Gujarat. Specializing in high-precision machined components, VMC milling, CNC turning, tooling, and fixtures."
      />

      {/* 1. Page Hero */}
      <section className="page-hero blueprint-pattern">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow">ABOUT MARUTI ENGINEERING</span>
            <h1 className="page-hero-title">
              Precision Engineered. <br />
              <span className="text-orange">Quality Assured.</span> Customer Focused.
            </h1>
            <p className="page-hero-desc">
              Established in 1996 in Vadodara, Gujarat, Maruti Engineering has built a steadfast reputation as a precision engineering and contract manufacturing partner for critical domestic and export industries.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="section about-intro-section">
        <Container>
          <div className="about-intro-grid">
            <div className="about-intro-text-col">
              <div className="eyebrow">COMPANY OVERVIEW</div>
              <h2 className="about-intro-title">
                From Drawing to Delivery — <br />
                <span className="text-orange">Precision You Can Trust.</span>
              </h2>
              <p className="about-intro-lead">
                At Maruti Engineering, we believe that every component is more than just a part — it is a critical element of our customer's product and performance.
              </p>
              <p className="about-intro-body">
                We specialize in manufacturing high-precision machined components, assemblies, tooling, fixtures, and customized engineering parts strictly according to customer drawings and technical specifications. Operating from our manufacturing facility in GIDC Makarpura, Vadodara, we combine modern CNC turning, VMC milling, and experienced craftsmanship to deliver reliable solutions with uncompromising accuracy.
              </p>
              
              <div className="about-stats-inline">
                <div className="inline-stat-item">
                  <span className="stat-number">1996</span>
                  <span className="stat-label">Year Founded</span>
                </div>
                <div className="inline-stat-divider" />
                <div className="inline-stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Years of Experience</span>
                </div>
                <div className="inline-stat-divider" />
                <div className="inline-stat-item">
                  <span className="stat-number">Vadodara</span>
                  <span className="stat-label">Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="about-intro-img-col">
              <div className="about-intro-img-wrap">
                <img src={workshopImg} alt="Maruti Engineering Workshop" className="about-intro-img" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Company Story Timeline */}
      <section className="section section-soft story-section">
        <Container>
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title="Our Story"
            highlightWord="Story"
            subtitle="Built on technical rigor, persistent quality improvement, and long-term customer trust."
            align="center"
          />

          <div className="story-timeline-container">
            <div className="story-item">
              <div className="story-badge">1996</div>
              <div className="story-card">
                <h3 className="story-title">Established in Vadodara</h3>
                <p className="story-desc">
                  Maruti Engineering commenced operations in GIDC Makarpura, Vadodara, focusing on specialized precision machining, conventional turning, and customized engineering components for industrial clients.
                </p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-badge">Present</div>
              <div className="story-card">
                <h3 className="story-title">Advanced CNC/VMC Contract Manufacturing</h3>
                <p className="story-desc">
                  Today, Maruti Engineering operates modern CNC Turning Centers and Jyoti VMC Milling Centers with Siemens 828D CNC controls, serving diverse sectors including Mining, Cooling Towers, Pumps & Valves, Automobile, Dairy Machinery, and Power Transmission.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Engineering Philosophy & Core Pillars */}
      <section className="section philosophy-section blueprint-pattern-light">
        <Container>
          <SectionHeading
            eyebrow="OUR PRINCIPLES"
            title="Our Engineering Philosophy"
            highlightWord="Philosophy"
            subtitle="The fundamental core values that guide our shop-floor machining, dimensional verification, and customer engagements."
            align="center"
          />

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Target size={24} className="text-orange" />
              </div>
              <h3 className="philosophy-title">Precision First</h3>
              <p className="philosophy-desc">
                Dimensional accuracy is non-negotiable. Every stage from raw material selection to multi-axis machining is measured to comply with drawing tolerances.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Shield size={24} className="text-orange" />
              </div>
              <h3 className="philosophy-title">Quality Throughout</h3>
              <p className="philosophy-desc">
                Building quality into every single process rather than treating it as an afterthought. Regular calibration, tool maintenance, and continuous skill refinement.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Users size={24} className="text-orange" />
              </div>
              <h3 className="philosophy-title">Customer Partnership</h3>
              <p className="philosophy-desc">
                We act as an integrated manufacturing extension for our clients, providing prompt communication, design feedback, and flexible batch scheduling.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Clock size={24} className="text-orange" />
              </div>
              <h3 className="philosophy-title">On-Time Execution</h3>
              <p className="philosophy-desc">
                Reliable production planning ensures that components and assemblies are finished and safely dispatched according to promised customer schedules.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Quality Policy Deep-Dive */}
      <section className="section section-dark about-quality-section">
        <Container>
          <div className="about-quality-grid">
            <div className="about-quality-text">
              <div className="eyebrow">QUALITY COMMITMENT</div>
              <h2 className="about-quality-title">
                Skill & Consistency: <br />
                <span className="text-orange">Our Quality Mission</span>
              </h2>
              <p className="about-quality-tagline">
                "{qualityData.tagline}"
              </p>
              
              <div className="about-quality-list">
                {qualityData.principles.map((p, idx) => (
                  <div key={idx} className="about-quality-item">
                    <CheckCircle2 size={18} className="text-orange" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-quality-img-wrap">
              <img src={qualityImg} alt="Quality Inspection" className="about-quality-img" />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Customer References */}
      <CustomerSection />

      {/* 7. RFQ CTA */}
      <RFQCTASection />
    </div>
  );
};
