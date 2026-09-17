import React from 'react';
import { MetaTags } from '../components/ui/MetaTags';
import { HeroSection } from '../components/sections/HeroSection';
import { CredibilityStrip } from '../components/sections/CredibilityStrip';
import { AboutSection } from '../components/sections/AboutSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { InfrastructureSection } from '../components/sections/InfrastructureSection';
import { MaterialExpertise } from '../components/sections/MaterialExpertise';
import { ProductPreviewSection } from '../components/sections/ProductPreviewSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { QualitySection } from '../components/sections/QualitySection';
import { CustomerSection } from '../components/sections/CustomerSection';
import { RFQCTASection } from '../components/sections/RFQCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page-view">
      <MetaTags
        title="Maruti Engineering | Precision Engineering & Contract Manufacturing Vadodara"
        description="Maruti Engineering manufactures high-precision components, assemblies, tooling, fixtures and customized engineering parts as per customer drawings in Vadodara, Gujarat."
      />

      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Trust / Credibility Strip */}
      <CredibilityStrip />

      {/* 03. About Maruti Engineering */}
      <AboutSection />

      {/* 04. Manufacturing Capabilities */}
      <CapabilitiesSection />

      {/* 05. Drawing to Delivery Process Timeline */}
      <ProcessTimeline />

      {/* 06. Industries We Serve */}
      <IndustriesSection />

      {/* 07. Manufacturing Infrastructure */}
      <InfrastructureSection />

      {/* 08. Material Expertise */}
      <MaterialExpertise />

      {/* 09. Product Preview */}
      <ProductPreviewSection />

      {/* 10. Why Choose Maruti Engineering */}
      <WhyChooseUsSection />

      {/* 11. Quality Policy */}
      <QualitySection />

      {/* 12. Trusted Industrial Customers */}
      <CustomerSection />

      {/* 13. High-Conversion RFQ CTA */}
      <RFQCTASection />
    </div>
  );
};
