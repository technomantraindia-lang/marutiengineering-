import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductGroupItem } from '../../data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductGroupItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const detailUrl = `/products/${product.detailSlug}`;

  return (
    <div className="product-card">
      <Link to={detailUrl} className="product-card-img-wrap" tabIndex={-1} aria-hidden="true">
        <img
          src={product.image}
          alt={`${product.name} — Precision manufacturing by Maruti Engineering`}
          className="product-card-img"
          loading="lazy"
        />
        <span className="product-category-badge">{product.categoryLabel}</span>
      </Link>
      <div className="product-card-body">
        <Link to={detailUrl} className="product-title-link">
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <p className="product-subtitle">{product.subtitle}</p>
        <p className="product-desc">{product.description}</p>

        <div className="product-materials-wrap">
          <span className="product-materials-label">
            <Layers size={13} /> Materials:
          </span>
          <div className="product-materials-tags">
            {product.materials.map((mat, i) => (
              <span key={i} className="product-mat-tag">{mat}</span>
            ))}
          </div>
        </div>

        <div className="product-card-footer">
          <Link to={detailUrl} className="product-view-btn">
            View Product <ArrowRight size={15} className="product-arrow" />
          </Link>
          <Link to={`/contact?product=${product.detailSlug}`} className="product-rfq-btn">
            Request Quote <ArrowRight size={15} className="product-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};
