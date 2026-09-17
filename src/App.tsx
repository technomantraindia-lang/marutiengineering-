import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { QualityPage } from './pages/QualityPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Phase 2 — Product Detail Pages
import { PrecisionMachinedComponentsPage } from './pages/products/PrecisionMachinedComponentsPage';
import { MechanicalAssembliesPage } from './pages/products/MechanicalAssembliesPage';
import { ToolingComponentsPage } from './pages/products/ToolingComponentsPage';
import { JigsAndFixturesPage } from './pages/products/JigsAndFixturesPage';
import { CustomizedPartsPage } from './pages/products/CustomizedPartsPage';
import { SpecialComponentsPage } from './pages/products/SpecialComponentsPage';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <main className="app-main-content">
          <Routes>
            {/* Phase 1 — Primary Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/capabilities.html" element={<CapabilitiesPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/industries.html" element={<IndustriesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/infrastructure.html" element={<InfrastructurePage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/quality.html" element={<QualityPage />} />
            <Route path="/quality" element={<QualityPage />} />

            {/* Phase 2 — Product Detail Pages */}
            <Route path="/products/precision-machined-components" element={<PrecisionMachinedComponentsPage />} />
            <Route path="/products/mechanical-assemblies" element={<MechanicalAssembliesPage />} />
            <Route path="/products/tooling-components" element={<ToolingComponentsPage />} />
            <Route path="/products/jigs-and-fixtures" element={<JigsAndFixturesPage />} />
            <Route path="/products/customized-parts" element={<CustomizedPartsPage />} />
            <Route path="/products/special-components" element={<SpecialComponentsPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
