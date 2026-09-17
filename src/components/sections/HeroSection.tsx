import React, { useEffect, useRef } from 'react';
import { Shield, Award, Cpu, Handshake } from 'lucide-react';
import { Button } from '../ui/Button';
import heroImg from '../../assets/hero/hero_cnc.jpg';
import gsap from 'gsap';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean, premium entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(eyebrowRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(tagsRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero-section blueprint-pattern">
      <div className="hero-background-wrapper">
        <img src={heroImg} alt="Precision CNC Machining" className="hero-bg-image" />
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/video/maruti-hero-poster.webp"
          aria-hidden="true"
          onError={(event) => event.currentTarget.classList.add('hero-video-unavailable')}
        >
          <source src="/assets/video/maruti-hero-cnc.webm" type="video/webm" />
          <source src="/assets/video/maruti-hero-cnc.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div ref={eyebrowRef} className="hero-eyebrow-box">
            <span className="hero-eyebrow-text">PRECISION ENGINEERING SINCE 1996</span>
          </div>

          <h1 ref={headlineRef} className="hero-headline">
            From Drawing to <br />
            <span className="text-orange">Delivery</span> — Precision You Can Trust.
          </h1>

          <p ref={descRef} className="hero-description">
            Maruti Engineering manufactures high-precision components, assemblies, tooling, fixtures and customized engineering parts according to customer drawings and specifications.
          </p>

          <div ref={ctaRef} className="hero-cta-group">
            <Button
              variant="primary"
              size="lg"
              withArrow
              onClick={() => scrollToSection('capabilities')}
            >
              Explore Capabilities
            </Button>
            <Button
              variant="outline-white"
              size="lg"
              to="/contact"
            >
              Request a Quote
            </Button>
          </div>
        </div>

        {/* Subtle Right-Side Vertical Badges */}
        <div ref={tagsRef} className="hero-vertical-tags desktop-only">
          <div className="hero-tag-item">
            <Cpu size={16} className="text-orange" />
            <span>PRECISION</span>
          </div>
          <div className="hero-tag-divider" />
          <div className="hero-tag-item">
            <Shield size={16} className="text-orange" />
            <span>QUALITY</span>
          </div>
          <div className="hero-tag-divider" />
          <div className="hero-tag-item">
            <Award size={16} className="text-orange" />
            <span>RELIABILITY</span>
          </div>
          <div className="hero-tag-divider" />
          <div className="hero-tag-item">
            <Handshake size={16} className="text-orange" />
            <span>PARTNERSHIP</span>
          </div>
        </div>
      </div>

      {/* Subtle Engineering Blueprint Accent Line */}
      <div className="hero-tech-line" />
    </section>
  );
};
