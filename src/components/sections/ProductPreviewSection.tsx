import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from '../cards/ProductCard';
import { productGroupsData } from '../../data/products';
import { Button } from '../ui/Button';
import './ProductPreviewSection.css';

export const ProductPreviewSection: React.FC = () => {
  return (
    <section className="section product-preview-section" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          title="Precision Components Built to Specification."
          highlightWord="Specification"
          subtitle="Customized components, assemblies, tooling and fixtures manufactured strictly as per customer drawings and technical requirements."
          action={
            <Button to="/products" variant="primary" size="md" withArrow>
              View All Products
            </Button>
          }
        />

        <div className="product-preview-grid">
          {productGroupsData.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};
