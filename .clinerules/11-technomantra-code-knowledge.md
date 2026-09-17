# Technomantra Local Code Knowledge Graph (V4.8.14)

> Structural local index. Read current source before editing. Secrets are intentionally excluded.

- Indexed source files: 85
- Structural edges: 141
- Matched end-to-end flows: 0
- Updated: 2026-09-17T03:54:31.469Z

## Routes
- REACT src/App.tsx: / -> HomePage, /about-us -> AboutPage, /products -> ProductsPage, /contact -> ContactPage, /contact-us -> ContactPage, /products/precision-machined-components -> PrecisionMachinedComponentsPage, /products/mechanical-assemblies -> MechanicalAssembliesPage, /products/tooling-components -> ToolingComponentsPage, /products/jigs-and-fixtures -> JigsAndFixturesPage, /products/customized-parts -> CustomizedPartsPage
- REACT /AboutPage -> src/pages/AboutPage.tsx
- REACT /ContactPage -> src/pages/ContactPage.tsx
- REACT /HomePage -> src/pages/HomePage.tsx
- REACT /NotFoundPage -> src/pages/NotFoundPage.tsx
- REACT /products/CustomizedPartsPage -> src/pages/products/CustomizedPartsPage.tsx
- REACT /products/JigsAndFixturesPage -> src/pages/products/JigsAndFixturesPage.tsx
- REACT /products/MechanicalAssembliesPage -> src/pages/products/MechanicalAssembliesPage.tsx
- REACT /products/PrecisionMachinedComponentsPage -> src/pages/products/PrecisionMachinedComponentsPage.tsx
- REACT /products/ProductDetailLayout -> src/pages/products/ProductDetailLayout.tsx
- REACT /products/SpecialComponentsPage -> src/pages/products/SpecialComponentsPage.tsx
- REACT /products/ToolingComponentsPage -> src/pages/products/ToolingComponentsPage.tsx
- REACT /ProductsPage -> src/pages/ProductsPage.tsx

## Dependency edges
- IMPORT index.html -> src/main.tsx
- IMPORT src/App.tsx -> src/components/layout/Header.tsx, src/components/layout/Footer.tsx, src/components/ui/ScrollToTop.tsx, src/pages/HomePage.tsx, src/pages/AboutPage.tsx, src/pages/ProductsPage.tsx, src/pages/ContactPage.tsx, src/pages/NotFoundPage.tsx
- IMPORT src/components/cards/CapabilityCard.tsx -> src/data/capabilities.ts, src/components/cards/CapabilityCard.css
- IMPORT src/components/cards/CustomerBadge.tsx -> src/data/customers.ts, src/components/cards/CustomerBadge.css
- IMPORT src/components/cards/IndustryCard.tsx -> src/data/industries.ts, src/components/cards/IndustryCard.css
- IMPORT src/components/cards/MachineCard.tsx -> src/data/infrastructure.ts, src/components/cards/MachineCard.css
- IMPORT src/components/cards/ProductCard.tsx -> src/data/products.ts, src/components/cards/ProductCard.css
- IMPORT src/components/forms/RFQForm.tsx -> src/components/forms/RFQForm.css
- IMPORT src/components/layout/Footer.tsx -> src/data/company.ts, src/data/capabilities.ts, src/components/layout/Footer.css
- IMPORT src/components/layout/Header.tsx -> src/data/company.ts, src/components/layout/Header.css
- IMPORT src/components/sections/AboutSection.tsx -> src/components/ui/Button.tsx, src/components/sections/AboutSection.css
- IMPORT src/components/sections/CapabilitiesSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/CapabilityCard.tsx, src/data/capabilities.ts, src/components/ui/Button.tsx, src/components/sections/CapabilitiesSection.css
- IMPORT src/components/sections/CredibilityStrip.tsx -> src/components/sections/CredibilityStrip.css
- IMPORT src/components/sections/CustomerSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/CustomerBadge.tsx, src/data/customers.ts, src/components/sections/CustomerSection.css
- IMPORT src/components/sections/HeroSection.tsx -> src/components/ui/Button.tsx, src/components/sections/HeroSection.css
- IMPORT src/components/sections/IndustriesSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/IndustryCard.tsx, src/data/industries.ts, src/components/ui/Button.tsx, src/components/sections/IndustriesSection.css
- IMPORT src/components/sections/InfrastructureSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/MachineCard.tsx, src/data/infrastructure.ts, src/components/sections/InfrastructureSection.css
- IMPORT src/components/sections/MaterialExpertise.tsx -> src/components/ui/SectionHeading.tsx, src/data/materials.ts, src/components/sections/MaterialExpertise.css
- IMPORT src/components/sections/ProcessTimeline.tsx -> src/components/ui/SectionHeading.tsx, src/data/process.ts, src/components/sections/ProcessTimeline.css
- IMPORT src/components/sections/ProductPreviewSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/ProductCard.tsx, src/data/products.ts, src/components/ui/Button.tsx, src/components/sections/ProductPreviewSection.css
- IMPORT src/components/sections/QualitySection.tsx -> src/data/quality.ts, src/components/ui/Button.tsx, src/components/sections/QualitySection.css
- IMPORT src/components/sections/RFQCTASection.tsx -> src/components/ui/Button.tsx, src/data/company.ts, src/components/sections/RFQCTASection.css
- IMPORT src/components/sections/WhyChooseUsSection.tsx -> src/components/ui/SectionHeading.tsx, src/data/quality.ts, src/components/ui/Button.tsx, src/components/sections/WhyChooseUsSection.css
- IMPORT src/components/ui/Badge.tsx -> src/components/ui/Badge.css
- IMPORT src/components/ui/Button.tsx -> src/components/ui/Button.css
- IMPORT src/components/ui/SectionHeading.tsx -> src/components/ui/SectionHeading.css
- IMPORT src/main.tsx -> src/App.tsx, src/styles/variables.css, src/styles/globals.css, src/styles/animations.css
- IMPORT src/pages/AboutPage.tsx -> src/components/ui/MetaTags.tsx, src/components/layout/Container.tsx, src/components/ui/SectionHeading.tsx, src/data/quality.ts, src/components/sections/RFQCTASection.tsx, src/components/sections/CustomerSection.tsx, src/pages/AboutPage.css
- IMPORT src/pages/ContactPage.tsx -> src/components/ui/MetaTags.tsx, src/components/layout/Container.tsx, src/components/forms/RFQForm.tsx, src/data/company.ts, src/pages/ContactPage.css
- IMPORT src/pages/HomePage.tsx -> src/components/ui/MetaTags.tsx, src/components/sections/HeroSection.tsx, src/components/sections/CredibilityStrip.tsx, src/components/sections/AboutSection.tsx, src/components/sections/CapabilitiesSection.tsx, src/components/sections/ProcessTimeline.tsx, src/components/sections/IndustriesSection.tsx, src/components/sections/InfrastructureSection.tsx
- IMPORT src/pages/NotFoundPage.tsx -> src/components/layout/Container.tsx, src/components/ui/Button.tsx, src/components/ui/MetaTags.tsx, src/pages/NotFoundPage.css
- IMPORT src/pages/products/CustomizedPartsPage.tsx -> src/pages/products/ProductDetailLayout.tsx
- IMPORT src/pages/products/JigsAndFixturesPage.tsx -> src/pages/products/ProductDetailLayout.tsx
- IMPORT src/pages/products/MechanicalAssembliesPage.tsx -> src/pages/products/ProductDetailLayout.tsx
- IMPORT src/pages/products/PrecisionMachinedComponentsPage.tsx -> src/pages/products/ProductDetailLayout.tsx
- IMPORT src/pages/products/ProductDetailLayout.tsx -> src/components/ui/MetaTags.tsx, src/components/ui/SectionHeading.css, src/pages/products/ProductDetailPage.css
- IMPORT src/pages/products/SpecialComponentsPage.tsx -> src/pages/products/ProductDetailLayout.tsx
- IMPORT src/pages/products/ToolingComponentsPage.tsx -> src/pages/products/ProductDetailLayout.tsx
- IMPORT src/pages/ProductsPage.tsx -> src/components/ui/MetaTags.tsx, src/components/layout/Container.tsx, src/components/cards/ProductCard.tsx, src/data/products.ts, src/components/sections/RFQCTASection.tsx, src/pages/ProductsPage.css
- REACT src/App.tsx: used by src/main.tsx · depends on src/components/layout/Header.tsx, src/components/layout/Footer.tsx, src/components/ui/ScrollToTop.tsx
- REACT src/components/cards/CapabilityCard.tsx: used by src/components/sections/CapabilitiesSection.tsx · depends on src/components/cards/CapabilityCard.css
- REACT src/components/cards/CustomerBadge.tsx: used by src/components/sections/CustomerSection.tsx · depends on src/components/cards/CustomerBadge.css

## Database references
- DB vite.config.ts -> vite, path
- DB src/App.tsx -> react
- DB src/components/cards/CapabilityCard.tsx -> react, lucide
- DB src/components/cards/CustomerBadge.tsx -> react, lucide
- DB src/components/cards/IndustryCard.tsx -> react, lucide
- DB src/components/cards/MachineCard.tsx -> react, lucide
- DB src/components/cards/ProductCard.tsx -> react, lucide
- DB src/components/forms/RFQForm.tsx -> react, lucide
- DB src/components/layout/Container.tsx -> react
- DB src/components/layout/Footer.tsx -> react, lucide
- DB src/components/layout/Header.tsx -> react, lucide
- DB src/components/sections/AboutSection.tsx -> react, lucide
- DB src/components/sections/CapabilitiesSection.tsx -> react, single
- DB src/components/sections/CredibilityStrip.tsx -> react, lucide
- DB src/components/sections/CustomerSection.tsx -> react
- DB src/components/sections/HeroSection.tsx -> react, lucide, gsap, Drawing
- DB src/components/sections/IndustriesSection.tsx -> react
- DB src/components/sections/InfrastructureSection.tsx -> react
- DB src/components/sections/MaterialExpertise.tsx -> react, lucide
- DB src/components/sections/ProcessTimeline.tsx -> react, lucide, DRAWING, Drawing
- DB src/components/sections/ProductPreviewSection.tsx -> react
- DB src/components/sections/QualitySection.tsx -> react, lucide
- DB src/components/sections/RFQCTASection.tsx -> react, lucide
- DB src/components/sections/WhyChooseUsSection.tsx -> react, lucide

## Symbols
- SYMBOL src/components/forms/RFQForm.tsx: handleInputChange, handleFileChange, handleRemoveFile, handleSubmit, handleReset
- SYMBOL src/components/layout/Footer.tsx: handleSectionClick
- SYMBOL src/components/layout/Header.tsx: handleScroll, handleNavClick, isActive
- SYMBOL src/components/sections/HeroSection.tsx: scrollToSection
- SYMBOL src/components/ui/ScrollToTop.tsx: ScrollToTop
- SYMBOL src/components/ui/SectionHeading.tsx: renderTitle
- SYMBOL src/pages/products/ProductDetailLayout.tsx: handleScroll, handleParallax, handleKey, handleRFQ

## UI/style selectors
- UI index.html: #root
- UI src/components/cards/CapabilityCard.css: .capability-card, #FFFFFF, .capability-card-top, .capability-card-header, .capability-number, .capability-icon-wrap, .capability-card-img-wrap, .capability-card-img, .capability-card-body, .capability-title, .capability-subtitle, .capability-desc, .capability-features, .capability-feat-tag
- UI src/components/cards/CustomerBadge.css: .customer-badge-card, #FFFFFF, .customer-badge-icon-box, .customer-badge-info, .customer-badge-title, .customer-badge-industry, uses --border, uses --radius-md, uses --transition-fast, uses --brand-orange, uses --shadow-card, uses --background-soft, uses --text-sm, uses --heading
- UI src/components/cards/IndustryCard.css: .industry-card, .industry-card-bg, .industry-card-overlay, .industry-card-content, #FFFFFF, .industry-tagline, .industry-name, .industry-desc, .industry-components, .industry-comp-item, .industry-card-action, .industry-action-link, .industry-arrow, .industry-card-border
- UI src/components/cards/MachineCard.css: .machine-card, #FFFFFF, .machine-card-reversed, .machine-details, .machine-img-container, .machine-img, .machine-category-pill, .machine-header, .machine-name, .machine-qty-badge, .machine-specs-box, .machine-specs-text, .machine-desc, uses --radius-xl
- UI src/components/cards/ProductCard.css: .product-card, #FFFFFF, .product-card-img-wrap, .product-card-img, .product-category-badge, .product-card-body, .product-title-link, .product-title, .product-subtitle, .product-desc, .product-materials-wrap, .product-materials-label, .product-materials-tags, .product-mat-tag
- UI src/components/forms/RFQForm.css: .rfq-form-container, #FFFFFF, .rfq-form-header, .rfq-form-title, .rfq-form-subtitle, .rfq-form-grid, .form-group, .form-group-full, .form-label, .req, #ef4444, .form-input, .form-select, .form-textarea
- UI src/components/layout/Footer.css: .global-footer, #cbd5e1, .footer-main, .footer-grid, .footer-logo-link, .footer-logo-img, .footer-tagline-main, #FFFFFF, .footer-about-snippet, .footer-quality-badge, #e2e8f0, .footer-heading, .footer-links, .footer-link
- UI src/components/layout/Header.css: .global-header, .top-contact-bar, #FFFFFF, .top-bar-container, .top-bar-left, .top-bar-tagline, #cbd5e1, .top-bar-right, .top-bar-item, #e2e8f0, .top-bar-divider, .top-bar-subtext, .main-navbar, .main-nav-container
- UI src/components/sections/AboutSection.css: .about-section, #FFFFFF, .about-layout-grid, .about-imagery-col, .about-img-main-wrap, .about-img-main, .about-experience-badge, .about-exp-number, .about-exp-text, #cbd5e1, .about-img-sub-wrap, .about-img-sub, .about-sub-label, .about-heading
- UI src/components/sections/CapabilitiesSection.css: .capabilities-section, .capabilities-grid, uses --brand-navy, uses --text-on-dark
- UI src/components/sections/CredibilityStrip.css: .credibility-strip-wrapper, .credibility-card, #FFFFFF, .credibility-grid, .credibility-item, .credibility-icon-box, .credibility-text-box, .credibility-primary, .credibility-label, uses --radius-xl, uses --border, uses --radius-md, uses --brand-orange-light, uses --font-heading
- UI src/components/sections/CustomerSection.css: .customer-section, .customers-grid, uses --background-soft
- UI src/components/sections/HeroSection.css: .hero-section, #FFFFFF, .hero-background-wrapper, .hero-bg-image, .hero-gradient-overlay, .hero-container, .hero-content, .hero-eyebrow-box, .hero-eyebrow-text, .hero-headline, .hero-description, #e2e8f0, .hero-cta-group, .hero-vertical-tags
- UI src/components/sections/IndustriesSection.css: .industries-section, .industries-grid, uses --background-soft
- UI src/components/sections/InfrastructureSection.css: .infrastructure-section, #FFFFFF, .infrastructure-list
- UI src/components/sections/MaterialExpertise.css: .material-section, .materials-grid, .material-card, #FFFFFF, .material-card-header, .material-code-badge, .material-name, .material-desc, .material-traits, .material-trait-pill, .material-app-box, .material-app-label, .material-app-text, .material-footer-note
- UI src/components/sections/ProcessTimeline.css: .process-section, #FFFFFF, .process-timeline-wrapper, .process-timeline-line, .process-steps-container, .process-step-item, .process-node-wrap, .process-node-icon-box, .process-step-number, .process-step-content, .process-step-subtitle, .process-step-title, .process-step-desc, uses --brand-orange
- UI src/components/sections/ProductPreviewSection.css: .product-preview-section, #FFFFFF, .product-preview-grid
- UI src/components/sections/QualitySection.css: .quality-section, #FFFFFF, .quality-grid-layout, .quality-heading, .quality-tagline-text, .quality-intro-text, .quality-principles-list, .quality-principle-item, .quality-check-icon, .quality-principle-text, .quality-image-col, .quality-img-wrap, .quality-img, .quality-inspection-badge
