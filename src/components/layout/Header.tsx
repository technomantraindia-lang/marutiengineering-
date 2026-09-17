import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/company';
import logoImg from '../../assets/brand/logo.png';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/products') {
      return location.pathname === '/products' || location.pathname.startsWith('/products/');
    }
    return location.pathname === path;
  };

  return (
    <header className={`global-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* 1. Slim Navy Top Bar */}
      <div className="top-contact-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-tagline">{companyData.supportingTagline}</span>
          </div>
          <div className="top-bar-right">
            <a href={`https://maps.google.com/?q=${encodeURIComponent(companyData.fullAddress)}`} target="_blank" rel="noopener noreferrer" className="top-bar-item desktop-only">
              <MapPin size={13} className="text-orange" />
              <span>Vadodara, Gujarat, India</span>
            </a>
            <div className="top-bar-divider desktop-only" />
            <a href={`tel:${companyData.contacts[0].phone}`} className="top-bar-item">
              <Phone size={13} className="text-orange" />
              <span>{companyData.contacts[0].displayPhone}</span>
            </a>
            <span className="top-bar-subtext desktop-only">/</span>
            <a href={`tel:${companyData.contacts[1].phone}`} className="top-bar-item desktop-only">
              <span>{companyData.contacts[1].displayPhone}</span>
            </a>
            <div className="top-bar-divider" />
            <a href={`mailto:${companyData.email}`} className="top-bar-item">
              <Mail size={13} className="text-orange" />
              <span>{companyData.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="main-navbar">
        <div className="container main-nav-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo-link" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logoImg} alt="Maruti Engineering Logo" className="brand-logo-img" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              <li>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/capabilities.html" className={'nav-link ' + (isActive('/capabilities.html') ? 'active' : '')}>
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/industries.html" className={'nav-link ' + (isActive('/industries.html') ? 'active' : '')}>
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/infrastructure.html" className={'nav-link ' + (isActive('/infrastructure.html') ? 'active' : '')}>
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/quality.html" className={'nav-link ' + (isActive('/quality.html') ? 'active' : '')}>
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Action CTA */}
          <div className="header-actions">
            <Link to="/contact" className="nav-cta-btn">
              <span>Request a Quote</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <img src={logoImg} alt="Maruti Engineering Logo" className="mobile-logo-img" />
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-nav-body">
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/about-us') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/capabilities.html" className={'mobile-nav-link ' + (isActive('/capabilities.html') ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/industries.html" className={'mobile-nav-link ' + (isActive('/industries.html') ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/infrastructure.html" className={'mobile-nav-link ' + (isActive('/infrastructure.html') ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/quality.html" onClick={() => setIsMobileMenuOpen(false)} className={'mobile-nav-link ' + (isActive('/quality.html') ? 'active' : '')}>
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mobile-cta-btn">
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>

            <div className="mobile-contact-snippet">
              <div className="mobile-contact-row">
                <Phone size={14} className="text-orange" />
                <a href={`tel:${companyData.contacts[0].phone}`}>{companyData.contacts[0].displayPhone}</a>
              </div>
              <div className="mobile-contact-row">
                <Mail size={14} className="text-orange" />
                <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
              </div>
              <div className="mobile-contact-row">
                <MapPin size={14} className="text-orange" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
