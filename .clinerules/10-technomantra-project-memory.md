# Technomantra Project Memory

> This is a persistent locator map, not a claim that file contents are current. Read each target only once per task and rely on normal invalidation after edits.

- Workspace: MarutiEngineer
- Technology: React, Vite, Node.js/npm
- Active file at refresh: None
- Local code graph: 85 files · 141 edges · 0 matched flows
- Refreshed: 2026-09-17T03:54:31.486Z

## Framework Intelligence (V4.7.8)
- Profiles: react
- Package manager: npm
- Frontend router: React Router

### Entry / bootstrap candidates
- src/main.tsx
- src/App.tsx
- index.html

### Pages / views
- src/pages/AboutPage.css
- src/pages/AboutPage.tsx
- src/pages/ContactPage.css
- src/pages/ContactPage.tsx
- src/pages/HomePage.tsx
- src/pages/NotFoundPage.css
- src/pages/NotFoundPage.tsx
- src/pages/products/CustomizedPartsPage.tsx
- src/pages/products/JigsAndFixturesPage.tsx
- src/pages/products/MechanicalAssembliesPage.tsx
- src/pages/products/PrecisionMachinedComponentsPage.tsx
- src/pages/products/ProductDetailLayout.tsx
- src/pages/products/ProductDetailPage.css
- src/pages/products/SpecialComponentsPage.tsx
- src/pages/products/ToolingComponentsPage.tsx
- src/pages/ProductsPage.css

### Components
- src/components/cards/CapabilityCard.css
- src/components/cards/CapabilityCard.tsx
- src/components/cards/CustomerBadge.css
- src/components/cards/CustomerBadge.tsx
- src/components/cards/IndustryCard.css
- src/components/cards/IndustryCard.tsx
- src/components/cards/MachineCard.css
- src/components/cards/MachineCard.tsx
- src/components/cards/ProductCard.css
- src/components/cards/ProductCard.tsx
- src/components/forms/RFQForm.css
- src/components/forms/RFQForm.tsx
- src/components/layout/Container.tsx
- src/components/layout/Footer.css
- src/components/layout/Footer.tsx
- src/components/layout/Header.css

### React component symbols
- src/App.tsx: App
- src/components/cards/CapabilityCard.tsx: CapabilityCard
- src/components/cards/CustomerBadge.tsx: CustomerBadge
- src/components/cards/IndustryCard.tsx: IndustryCard
- src/components/cards/MachineCard.tsx: MachineCard
- src/components/cards/ProductCard.tsx: ProductCard
- src/components/forms/RFQForm.tsx: RFQForm
- src/components/layout/Container.tsx: Container
- src/components/layout/Footer.tsx: Footer
- src/components/layout/Header.tsx: Header
- src/components/sections/AboutSection.tsx: AboutSection
- src/components/sections/CapabilitiesSection.tsx: CapabilitiesSection
- src/components/sections/CredibilityStrip.tsx: CredibilityStrip
- src/components/sections/CustomerSection.tsx: CustomerSection
- src/components/sections/HeroSection.tsx: HeroSection
- src/components/sections/IndustriesSection.tsx: IndustriesSection
- src/components/sections/InfrastructureSection.tsx: InfrastructureSection
- src/components/sections/MaterialExpertise.tsx: MaterialExpertise
- src/components/sections/ProcessTimeline.tsx: ProcessTimeline
- src/components/sections/ProductPreviewSection.tsx: ProductPreviewSection
- src/components/sections/QualitySection.tsx: QualitySection
- src/components/sections/RFQCTASection.tsx: RFQCTASection
- src/components/sections/WhyChooseUsSection.tsx: WhyChooseUsSection
- src/components/ui/Badge.tsx: Badge
- src/components/ui/Button.tsx: Button
- src/components/ui/MetaTags.tsx: MetaTags
- src/components/ui/ScrollToTop.tsx: ScrollToTop
- src/components/ui/SectionHeading.tsx: SectionHeading
- src/pages/AboutPage.tsx: AboutPage
- src/pages/ContactPage.tsx: ContactPage

### React route -> component hints
- src/App.tsx: / -> HomePage, /about-us -> AboutPage, /products -> ProductsPage, /contact -> ContactPage, /contact-us -> ContactPage, /products/precision-machined-components -> PrecisionMachinedComponentsPage, /products/mechanical-assemblies -> MechanicalAssembliesPage, /products/tooling-components -> ToolingComponentsPage, /products/jigs-and-fixtures -> JigsAndFixturesPage, /products/customized-parts -> CustomizedPartsPage
- /AboutPage -> src/pages/AboutPage.tsx
- /ContactPage -> src/pages/ContactPage.tsx
- /HomePage -> src/pages/HomePage.tsx
- /NotFoundPage -> src/pages/NotFoundPage.tsx
- /products/CustomizedPartsPage -> src/pages/products/CustomizedPartsPage.tsx
- /products/JigsAndFixturesPage -> src/pages/products/JigsAndFixturesPage.tsx
- /products/MechanicalAssembliesPage -> src/pages/products/MechanicalAssembliesPage.tsx
- /products/PrecisionMachinedComponentsPage -> src/pages/products/PrecisionMachinedComponentsPage.tsx
- /products/ProductDetailLayout -> src/pages/products/ProductDetailLayout.tsx
- /products/SpecialComponentsPage -> src/pages/products/SpecialComponentsPage.tsx
- /products/ToolingComponentsPage -> src/pages/products/ToolingComponentsPage.tsx
- /ProductsPage -> src/pages/ProductsPage.tsx

### React dependency / API chains
- src/App.tsx: used by src/main.tsx · depends on src/components/layout/Header.tsx, src/components/layout/Footer.tsx, src/components/ui/ScrollToTop.tsx
- src/components/cards/CapabilityCard.tsx: used by src/components/sections/CapabilitiesSection.tsx · depends on src/components/cards/CapabilityCard.css
- src/components/cards/CustomerBadge.tsx: used by src/components/sections/CustomerSection.tsx · depends on src/components/cards/CustomerBadge.css
- src/components/cards/IndustryCard.tsx: used by src/components/sections/IndustriesSection.tsx · depends on src/components/cards/IndustryCard.css
- src/components/cards/MachineCard.tsx: used by src/components/sections/InfrastructureSection.tsx · depends on src/components/cards/MachineCard.css
- src/components/cards/ProductCard.tsx: used by src/components/sections/ProductPreviewSection.tsx, src/pages/ProductsPage.tsx · depends on src/components/cards/ProductCard.css
- src/components/forms/RFQForm.tsx: used by src/pages/ContactPage.tsx · depends on src/components/forms/RFQForm.css
- src/components/layout/Container.tsx: used by src/pages/AboutPage.tsx, src/pages/ContactPage.tsx, src/pages/NotFoundPage.tsx, src/pages/ProductsPage.tsx
- src/components/layout/Footer.tsx: used by src/App.tsx · depends on src/components/layout/Footer.css
- src/components/layout/Header.tsx: used by src/App.tsx · depends on src/components/layout/Header.css
- src/components/sections/AboutSection.tsx: used by src/pages/HomePage.tsx · depends on src/components/ui/Button.tsx, src/components/sections/AboutSection.css
- src/components/sections/CapabilitiesSection.tsx: used by src/pages/HomePage.tsx · depends on src/components/ui/SectionHeading.tsx, src/components/cards/CapabilityCard.tsx, src/components/ui/Button.tsx, src/components/sections/CapabilitiesSection.css
- src/components/sections/CredibilityStrip.tsx: used by src/pages/HomePage.tsx · depends on src/components/sections/CredibilityStrip.css
- src/components/sections/CustomerSection.tsx: used by src/pages/AboutPage.tsx · depends on src/components/ui/SectionHeading.tsx, src/components/cards/CustomerBadge.tsx, src/components/sections/CustomerSection.css
- src/components/sections/HeroSection.tsx: used by src/pages/HomePage.tsx · depends on src/components/ui/Button.tsx, src/components/sections/HeroSection.css
- src/components/sections/IndustriesSection.tsx: used by src/pages/HomePage.tsx · depends on src/components/ui/SectionHeading.tsx, src/components/cards/IndustryCard.tsx, src/components/ui/Button.tsx, src/components/sections/IndustriesSection.css
- src/components/sections/InfrastructureSection.tsx: used by src/pages/HomePage.tsx · depends on src/components/ui/SectionHeading.tsx, src/components/cards/MachineCard.tsx, src/components/sections/InfrastructureSection.css
- src/components/sections/MaterialExpertise.tsx: depends on src/components/ui/SectionHeading.tsx, src/components/sections/MaterialExpertise.css
- src/components/sections/ProcessTimeline.tsx: used by src/pages/HomePage.tsx · depends on src/components/ui/SectionHeading.tsx, src/components/sections/ProcessTimeline.css
- src/components/sections/ProductPreviewSection.tsx: depends on src/components/ui/SectionHeading.tsx, src/components/cards/ProductCard.tsx, src/components/ui/Button.tsx, src/components/sections/ProductPreviewSection.css
- src/components/sections/QualitySection.tsx: depends on src/components/ui/Button.tsx, src/components/sections/QualitySection.css
- src/components/sections/RFQCTASection.tsx: used by src/pages/AboutPage.tsx, src/pages/ProductsPage.tsx · depends on src/components/ui/Button.tsx, src/components/sections/RFQCTASection.css
- src/components/sections/WhyChooseUsSection.tsx: depends on src/components/ui/SectionHeading.tsx, src/components/ui/Button.tsx, src/components/sections/WhyChooseUsSection.css
- src/components/ui/Badge.tsx: depends on src/components/ui/Badge.css
- src/components/ui/Button.tsx: used by src/components/sections/AboutSection.tsx, src/components/sections/CapabilitiesSection.tsx, src/components/sections/HeroSection.tsx, src/components/sections/IndustriesSection.tsx · depends on src/components/ui/Button.css
- src/components/ui/MetaTags.tsx: used by src/pages/AboutPage.tsx, src/pages/ContactPage.tsx, src/pages/HomePage.tsx, src/pages/NotFoundPage.tsx
- src/components/ui/ScrollToTop.tsx: used by src/App.tsx
- src/components/ui/SectionHeading.tsx: used by src/components/sections/CapabilitiesSection.tsx, src/components/sections/CustomerSection.tsx, src/components/sections/IndustriesSection.tsx, src/components/sections/InfrastructureSection.tsx · depends on src/components/ui/SectionHeading.css
- src/data/capabilities.ts: used by src/components/cards/CapabilityCard.tsx, src/components/layout/Footer.tsx, src/components/sections/CapabilitiesSection.tsx
- src/data/company.ts: used by src/components/layout/Footer.tsx, src/components/layout/Header.tsx, src/components/sections/RFQCTASection.tsx, src/pages/ContactPage.tsx

### Styles
- src/components/cards/CapabilityCard.css
- src/components/cards/CustomerBadge.css
- src/components/cards/IndustryCard.css
- src/components/cards/MachineCard.css
- src/components/cards/ProductCard.css
- src/components/forms/RFQForm.css
- src/components/layout/Footer.css
- src/components/layout/Header.css
- src/components/sections/AboutSection.css
- src/components/sections/CapabilitiesSection.css
- src/components/sections/CredibilityStrip.css
- src/components/sections/CustomerSection.css

### Available validation scripts
- dev: vite
- build: tsc -b && vite build
- preview: vite preview

### Local dependency hints
- src/App.tsx -> src/components/layout/Header.tsx, src/components/layout/Footer.tsx, src/components/ui/ScrollToTop.tsx, src/pages/HomePage.tsx, src/pages/AboutPage.tsx, src/pages/ProductsPage.tsx, src/pages/ContactPage.tsx, src/pages/NotFoundPage.tsx
- src/components/cards/CapabilityCard.tsx -> src/data/capabilities.ts, src/components/cards/CapabilityCard.css
- src/components/cards/CustomerBadge.tsx -> src/data/customers.ts, src/components/cards/CustomerBadge.css
- src/components/cards/IndustryCard.tsx -> src/data/industries.ts, src/components/cards/IndustryCard.css
- src/components/cards/MachineCard.tsx -> src/data/infrastructure.ts, src/components/cards/MachineCard.css
- src/components/cards/ProductCard.tsx -> src/data/products.ts, src/components/cards/ProductCard.css
- src/components/forms/RFQForm.tsx -> src/components/forms/RFQForm.css
- src/components/layout/Footer.tsx -> src/data/company.ts, src/data/capabilities.ts, src/components/layout/Footer.css
- src/components/layout/Header.tsx -> src/data/company.ts, src/components/layout/Header.css
- src/components/sections/AboutSection.tsx -> src/components/ui/Button.tsx, src/components/sections/AboutSection.css
- src/components/sections/CapabilitiesSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/CapabilityCard.tsx, src/data/capabilities.ts, src/components/ui/Button.tsx, src/components/sections/CapabilitiesSection.css
- src/components/sections/CredibilityStrip.tsx -> src/components/sections/CredibilityStrip.css
- src/components/sections/CustomerSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/CustomerBadge.tsx, src/data/customers.ts, src/components/sections/CustomerSection.css
- src/components/sections/HeroSection.tsx -> src/components/ui/Button.tsx, src/components/sections/HeroSection.css
- src/components/sections/IndustriesSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/IndustryCard.tsx, src/data/industries.ts, src/components/ui/Button.tsx, src/components/sections/IndustriesSection.css
- src/components/sections/InfrastructureSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/MachineCard.tsx, src/data/infrastructure.ts, src/components/sections/InfrastructureSection.css
- src/components/sections/MaterialExpertise.tsx -> src/components/ui/SectionHeading.tsx, src/data/materials.ts, src/components/sections/MaterialExpertise.css
- src/components/sections/ProcessTimeline.tsx -> src/components/ui/SectionHeading.tsx, src/data/process.ts, src/components/sections/ProcessTimeline.css
- src/components/sections/ProductPreviewSection.tsx -> src/components/ui/SectionHeading.tsx, src/components/cards/ProductCard.tsx, src/data/products.ts, src/components/ui/Button.tsx, src/components/sections/ProductPreviewSection.css
- src/components/sections/QualitySection.tsx -> src/data/quality.ts, src/components/ui/Button.tsx, src/components/sections/QualitySection.css
- src/components/sections/RFQCTASection.tsx -> src/components/ui/Button.tsx, src/data/company.ts, src/components/sections/RFQCTASection.css
- src/components/sections/WhyChooseUsSection.tsx -> src/components/ui/SectionHeading.tsx, src/data/quality.ts, src/components/ui/Button.tsx, src/components/sections/WhyChooseUsSection.css
- src/components/ui/Badge.tsx -> src/components/ui/Badge.css
- src/components/ui/Button.tsx -> src/components/ui/Button.css

### Reverse dependency hints
- src/components/layout/Header.tsx <- src/App.tsx
- src/components/layout/Footer.tsx <- src/App.tsx
- src/components/ui/ScrollToTop.tsx <- src/App.tsx
- src/pages/HomePage.tsx <- src/App.tsx
- src/pages/AboutPage.tsx <- src/App.tsx
- src/pages/ProductsPage.tsx <- src/App.tsx
- src/pages/ContactPage.tsx <- src/App.tsx
- src/pages/NotFoundPage.tsx <- src/App.tsx
- src/data/capabilities.ts <- src/components/cards/CapabilityCard.tsx, src/components/layout/Footer.tsx, src/components/sections/CapabilitiesSection.tsx
- src/components/cards/CapabilityCard.css <- src/components/cards/CapabilityCard.tsx
- src/data/customers.ts <- src/components/cards/CustomerBadge.tsx, src/components/sections/CustomerSection.tsx
- src/components/cards/CustomerBadge.css <- src/components/cards/CustomerBadge.tsx
- src/data/industries.ts <- src/components/cards/IndustryCard.tsx, src/components/sections/IndustriesSection.tsx
- src/components/cards/IndustryCard.css <- src/components/cards/IndustryCard.tsx
- src/data/infrastructure.ts <- src/components/cards/MachineCard.tsx, src/components/sections/InfrastructureSection.tsx
- src/components/cards/MachineCard.css <- src/components/cards/MachineCard.tsx
- src/data/products.ts <- src/components/cards/ProductCard.tsx, src/components/sections/ProductPreviewSection.tsx, src/pages/ProductsPage.tsx
- src/components/cards/ProductCard.css <- src/components/cards/ProductCard.tsx
- src/components/forms/RFQForm.css <- src/components/forms/RFQForm.tsx
- src/data/company.ts <- src/components/layout/Footer.tsx, src/components/layout/Header.tsx, src/components/sections/RFQCTASection.tsx, src/pages/ContactPage.tsx

## Recently edited files
- None recorded yet

## High-value project files
- index.html
- package.json
- vite.config.ts
- src/App.tsx
- src/components/cards/CapabilityCard.css
- src/components/cards/CapabilityCard.tsx
- src/components/cards/CustomerBadge.css
- src/components/cards/CustomerBadge.tsx
- src/components/cards/IndustryCard.css
- src/components/cards/IndustryCard.tsx
- src/components/cards/MachineCard.css
- src/components/cards/MachineCard.tsx
- src/components/cards/ProductCard.css
- src/components/cards/ProductCard.tsx
- src/components/forms/RFQForm.css
- src/components/forms/RFQForm.tsx
- src/components/layout/Container.tsx
- src/components/layout/Footer.css
- src/components/layout/Footer.tsx
- src/components/layout/Header.css
- src/components/layout/Header.tsx
- src/components/sections/AboutSection.css
- src/components/sections/AboutSection.tsx
- src/components/sections/CapabilitiesSection.css
- src/components/sections/CapabilitiesSection.tsx
- src/components/sections/CredibilityStrip.css
- src/components/sections/CredibilityStrip.tsx
- src/components/sections/CustomerSection.css
- src/components/sections/CustomerSection.tsx
- src/components/sections/HeroSection.css
- src/components/sections/HeroSection.tsx
- src/components/sections/IndustriesSection.css
- src/components/sections/IndustriesSection.tsx
- src/components/sections/InfrastructureSection.css
- src/components/sections/InfrastructureSection.tsx
- src/components/sections/MaterialExpertise.css
- src/components/sections/MaterialExpertise.tsx
- src/components/sections/ProcessTimeline.css
- src/components/sections/ProcessTimeline.tsx
- src/components/sections/ProductPreviewSection.css
- src/components/sections/ProductPreviewSection.tsx
- src/components/sections/QualitySection.css
- src/components/sections/QualitySection.tsx
- src/components/sections/RFQCTASection.css
- src/components/sections/RFQCTASection.tsx
- src/components/sections/WhyChooseUsSection.css
- src/components/sections/WhyChooseUsSection.tsx
- src/components/ui/Badge.css
- src/components/ui/Badge.tsx
- src/components/ui/Button.css
- src/components/ui/Button.tsx
- src/components/ui/MetaTags.tsx
- src/components/ui/ScrollToTop.tsx
- src/components/ui/SectionHeading.css
- src/components/ui/SectionHeading.tsx
- src/data/capabilities.ts
- src/data/company.ts
- src/data/customers.ts
- src/data/industries.ts
- src/data/infrastructure.ts
- src/data/materials.ts
- src/data/process.ts
- src/data/products.ts
- src/data/quality.ts
- src/main.tsx
- src/pages/AboutPage.css
- src/pages/AboutPage.tsx
- src/pages/ContactPage.css
- src/pages/ContactPage.tsx
- src/pages/HomePage.tsx
- src/pages/NotFoundPage.css
- src/pages/NotFoundPage.tsx
- src/pages/products/CustomizedPartsPage.tsx
- src/pages/products/JigsAndFixturesPage.tsx
- src/pages/products/MechanicalAssembliesPage.tsx
- src/pages/products/PrecisionMachinedComponentsPage.tsx
- src/pages/products/ProductDetailLayout.tsx
- src/pages/products/ProductDetailPage.css
- src/pages/products/SpecialComponentsPage.tsx
- src/pages/products/ToolingComponentsPage.tsx

## Additional indexed files
- src/pages/ProductsPage.css
- src/pages/ProductsPage.tsx
- src/styles/animations.css
- src/styles/globals.css
- src/styles/variables.css
- src/vite-env.d.ts
- tsconfig.json
- tsconfig.node.json
- .clinerules/05-technomantra-execution-mode.md
- .clinerules/06-technomantra-developer-mode.md
- .clinerules/08-technomantra-task-watchdog.md
- .clinerules/09-technomantra-multitask-isolation.md
- .clinerules/10-technomantra-project-memory.md
- .clinerules/11-technomantra-code-knowledge.md
- .clinerules/11-technomantra-patch-index.md
- .clinerules/12-technomantra-task-capsules.md
- .clinerules/13-technomantra-runtime-price-optimizer.md
- .clinerules/14-technomantra-adaptive-cost-optimizer.md
- .clinerules/15-technomantra-fast-coding-engine.md
- .clinerules/90-technomantra-selected-agent.md
- .technomantra/workspace-index.json
- IMAGE_SOURCES.md
- package-lock.json
