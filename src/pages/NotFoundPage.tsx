import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { MetaTags } from '../components/ui/MetaTags';
import { Wrench } from 'lucide-react';
import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <MetaTags
        title="Page Not Found | Maruti Engineering"
        description="The requested page could not be found. Return to Maruti Engineering precision engineering home."
      />
      <Container>
        <div className="not-found-content">
          <div className="not-found-icon-wrap">
            <Wrench size={48} className="text-orange" />
          </div>
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="not-found-buttons">
            <Button to="/" variant="primary" size="md" withArrow>
              Return to Homepage
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Contact Engineering Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
