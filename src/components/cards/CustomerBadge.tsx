import React from 'react';
import { Building2 } from 'lucide-react';
import { CustomerItem } from '../../data/customers';
import './CustomerBadge.css';

interface CustomerBadgeProps {
  customer: CustomerItem;
}

export const CustomerBadge: React.FC<CustomerBadgeProps> = ({ customer }) => {
  return (
    <div className="customer-badge-card">
      <div className="customer-badge-icon-box" style={{ borderColor: customer.color || 'var(--brand-orange)' }}>
        <Building2 size={20} style={{ color: customer.color || 'var(--brand-orange)' }} />
      </div>
      <div className="customer-badge-info">
        <h4 className="customer-badge-title">{customer.name}</h4>
        <span className="customer-badge-industry">{customer.industry}</span>
      </div>
    </div>
  );
};
