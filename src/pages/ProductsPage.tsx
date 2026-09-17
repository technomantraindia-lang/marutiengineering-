import React, { useState } from 'react';
import { MetaTags } from '../components/ui/MetaTags';
import { Container } from '../components/layout/Container';
import { ProductCard } from '../components/cards/ProductCard';
import { productGroupsData } from '../data/products';
import { RFQCTASection } from '../components/sections/RFQCTASection';
import { ShieldCheck, Filter } from 'lucide-react';
import './ProductsPage.css';

type CategoryFilter = 'all' | 'machined' | 'assemblies' | 'tooling' | 'fixtures' | 'customized';

export const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Product Groups' },
    { key: 'machined', label: 'Machined Components' },
    { key: 'assemblies', label: 'Assemblies & Units' },
    { key: 'tooling', label: 'Tooling & Dies' },
    { key: 'fixtures', label: 'Jigs & Fixtures' },
    { key: 'customized', label: 'Customized Parts' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? productGroupsData
    : productGroupsData.filter(item => item.category === activeCategory);

  return (
    <div className="products-page-view">
      <MetaTags
        title="Precision Machined Components & Engineering Products | Maruti Engineering"
        description="Explore precision components, mechanical assemblies, tooling, and fixtures manufactured by Maruti Engineering in Vadodara according to customer drawings and technical specifications."
      />

      {/* 1. Products Hero */}
      <section className="page-hero blueprint-pattern">
        <Container>
          <div className="page-hero-content">
            <span className="eyebrow">OUR PRODUCTS</span>
            <h1 className="page-hero-title">
              Precision Components <br />
              <span className="text-orange">Built to Specification.</span>
            </h1>
            <p className="page-hero-desc">
              High-precision machined components, mechanical assemblies, specialized tooling, and custom fixtures manufactured strictly according to client drawings and international quality standards.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Filter & Products Grid */}
      <section className="section products-grid-section">
        <Container>
          {/* Category Filter Bar */}
          <div className="products-filter-wrapper">
            <div className="filter-label-group">
              <Filter size={16} className="text-orange" />
              <span className="filter-label">Filter by Group:</span>
            </div>
            <div className="filter-buttons-scroll">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`filter-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="products-main-grid">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

          {/* Custom Specification Note */}
          <div className="products-custom-notice">
            <ShieldCheck size={24} className="text-orange" />
            <div>
              <h4 className="notice-title">Need custom manufacturing according to your drawing?</h4>
              <p className="notice-desc">
                We manufacture bespoke parts as per 2D/3D CAD models, strict GD&T tolerances, and specialized metallurgy. Send your drawing for engineering evaluation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. RFQ CTA */}
      <RFQCTASection />
    </div>
  );
};
