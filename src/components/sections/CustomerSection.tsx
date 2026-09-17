import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CustomerBadge } from '../cards/CustomerBadge';
import { customersData } from '../../data/customers';
import './CustomerSection.css';

export const CustomerSection: React.FC = () => {
  return (
    <section className="section section-soft customer-section" id="customers">
      <div className="container">
        <SectionHeading
          eyebrow="OUR CUSTOMERS"
          title="Trusted by Leading Industrial Enterprises"
          highlightWord="Industrial"
          subtitle="We take pride in long-standing contract manufacturing partnerships with leading domestic and international engineering corporations."
          align="center"
        />

        <div className="customers-grid">
          {customersData.map((cust) => (
            <CustomerBadge key={cust.id} customer={cust} />
          ))}
        </div>
      </div>
    </section>
  );
};
