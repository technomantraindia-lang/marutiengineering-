import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MetaTags } from '../../components/ui/MetaTags';
import { ZoomIn, X, ArrowRight } from 'lucide-react';
import '../../components/ui/SectionHeading.css';
import '../products/ProductDetailPage.css';

export interface ProductSpec {
  param: string;
  value: string;
  highlight?: boolean;
}

export interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface ProductMaterial {
  name: string;
  code: string;
  note: string;
}

export interface ProductApplication {
  name: string;
  note: string;
}

export interface RelatedProduct {
  name: string;
  category: string;
  slug: string;
  image: string;
}

export interface ProductDetailProps {
  /** SEO */
  seoTitle: string;
  seoDescription: string;

  /** Hero */
  category: string;
  productName: string;
  heroDesc: string;
  heroImage: string;
  heroImageAlt: string;

  /** Overview */
  overviewTitle: string;
  overviewParagraphs: string[];

  /** Cinematic image */
  cinematicImage: string;
  cinematicAlt: string;

  /** Features */
  features: ProductFeature[];

  /** Materials */
  materials: ProductMaterial[];

  /** Process steps — optional custom, otherwise uses default 7-step */
  processSteps?: { number: string; title: string; sub: string }[];

  /** Applications */
  applications: ProductApplication[];

  /** Specs */
  specs: ProductSpec[];

  /** Quality */
  qualityImage: string;
  qualityPoints: string[];

  /** Gallery images */
  galleryImages: { src: string; alt: string }[];

  /** Related products */
  relatedProducts: RelatedProduct[];
}

const DEFAULT_PROCESS = [
  { number: '01', title: 'Drawing Review', sub: 'Customer supplied 2D/3D CAD' },
  { number: '02', title: 'Engineering Review', sub: 'Manufacturability & planning' },
  { number: '03', title: 'Material Selection', sub: 'Verified raw material sourcing' },
  { number: '04', title: 'CNC/VMC Machining', sub: 'Precision manufacturing' },
  { number: '05', title: 'Inspection', sub: 'Dimensional QA verification' },
  { number: '06', title: 'Finishing', sub: 'Deburring, surface treatment' },
  { number: '07', title: 'Delivery', sub: 'On-time dispatch' },
];

const SUB_NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Capabilities', href: '#features' },
  { label: 'Materials', href: '#materials' },
  { label: 'Process', href: '#process' },
  { label: 'Applications', href: '#applications' },
  { label: 'Quality', href: '#quality' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Quote', href: '#rfq-cta' },
];

export const ProductDetailLayout: React.FC<ProductDetailProps> = (props) => {
  const {
    seoTitle, seoDescription,
    category, productName, heroDesc, heroImage, heroImageAlt,
    overviewTitle, overviewParagraphs,
    cinematicImage, cinematicAlt,
    features, materials, processSteps, applications, specs,
    qualityImage, qualityPoints,
    galleryImages, relatedProducts,
  } = props;

  const navigate = useNavigate();
  const processData = processSteps || DEFAULT_PROCESS;

  // Modal state
  const [modalImg, setModalImg] = useState<{ src: string; alt: string } | null>(null);

  // Refs for GSAP-style animations (CSS-based scroll reveals)
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroBadgesRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const elements = [
      { ref: breadcrumbRef, delay: 0 },
      { ref: categoryRef, delay: 100 },
      { ref: titleRef, delay: 200 },
      { ref: descRef, delay: 300 },
      { ref: ctasRef, delay: 400 },
      { ref: heroImgRef, delay: 150 },
      { ref: heroBadgesRef, delay: 500 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (!ref.current) return;
      const el = ref.current;
      el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
      el.style.transform = el === heroImgRef.current ? 'translateX(24px)' : 'translateY(18px)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translate(0,0)';
        });
      });
    });
  }, []);

  // Scroll reveal for cards/sections
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(
      '.product-feature-card, .material-tag-card, .product-application-card, .process-step, .related-product-card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = (idx % 6) * 80;
            setTimeout(() => el.classList.add('revealed'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    // Process line animation
    const lineEl = document.querySelector<HTMLElement>('.process-connector-line-fill');
    if (lineEl) {
      const lineObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          lineEl.style.transition = 'transform 1.4s cubic-bezier(0.16,1,0.3,1)';
          lineEl.style.transform = 'scaleX(1)';
          lineObserver.disconnect();
        }
      }, { threshold: 0.5 });
      const track = document.querySelector('.product-process-track');
      if (track) lineObserver.observe(track);
    }

    // Sticky subnav
    const subnav = document.querySelector<HTMLElement>('.product-subnav');
    let subnavStuck = false;
    const handleScroll = () => {
      if (!subnav) return;
      const rect = subnav.getBoundingClientRect();
      const isStuck = rect.top <= 0;
      if (isStuck !== subnavStuck) {
        subnavStuck = isStuck;
        subnav.classList.toggle('is-stuck', isStuck);
      }

      // Active subnav link
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      document.querySelectorAll('.subnav-link').forEach((link) => {
        const href = link.getAttribute('href')?.replace('#', '');
        link.classList.toggle('active', href === current);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Parallax cinematic image
    const cinematicImg = document.querySelector<HTMLElement>('.product-cinematic-img');
    const handleParallax = () => {
      if (!cinematicImg) return;
      const rect = cinematicImg.closest('.product-cinematic')?.getBoundingClientRect();
      if (!rect) return;
      const offset = (rect.top / window.innerHeight) * 40;
      cinematicImg.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  // Modal keyboard close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalImg ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalImg]);

  const handleRFQ = (e: React.MouseEvent) => {
    e.preventDefault();
    const slug = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    navigate(`/contact?product=${encodeURIComponent(slug)}`);
  };

  return (
    <div className="product-detail-page">
      <MetaTags title={seoTitle} description={seoDescription} />

      {/* Sticky Sub Navigation */}
      <nav className="product-subnav" aria-label="Product sections">
        <div className="container product-subnav-inner">
          {SUB_NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="subnav-link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ======================== HERO ======================== */}
      <section className="product-hero" id="overview">
        <div className="product-hero-blueprint" />

        {/* Left Content */}
        <div className="product-hero-left">
          {/* Breadcrumb */}
          <div className="product-breadcrumb" ref={breadcrumbRef}>
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{productName}</span>
          </div>

          {/* Category eyebrow */}
          <div className="eyebrow" ref={categoryRef} style={{ opacity: 0 }}>
            {category}
          </div>

          {/* H1 */}
          <h1 className="product-hero-title" ref={titleRef}>
            {productName}
          </h1>

          {/* Short description */}
          <p className="product-hero-desc" ref={descRef}>
            {heroDesc}
          </p>

          {/* CTAs */}
          <div className="product-hero-ctas" ref={ctasRef}>
            <a href="#rfq-cta" className="product-hero-cta-primary" onClick={handleRFQ}>
              Request a Quote <ArrowRight size={16} />
            </a>
            <a href="#rfq-cta" className="product-hero-cta-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('rfq-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              Send Your Drawing
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="product-hero-right">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="product-hero-image"
            ref={heroImgRef}
            loading="eager"
          />
          <div className="product-hero-image-overlay" />

          {/* Floating badges */}
          <div className="product-hero-badges" ref={heroBadgesRef}>
            <span className="product-hero-badge">Custom Manufacturing</span>
            <span className="product-hero-badge">Drawing Based</span>
            <span className="product-hero-badge">Precision Engineered</span>
          </div>
        </div>
      </section>

      {/* ======================== OVERVIEW ======================== */}
      <section className="product-overview" id="overview-detail">
        <div className="container">
          <div className="product-overview-grid">
            <div>
              <div className="eyebrow product-overview-label">PRODUCT OVERVIEW</div>
              <h2 className="product-overview-title">{overviewTitle}</h2>
              <div className="product-detail-divider" />
            </div>
            <div className="product-overview-right">
              {overviewParagraphs.map((para, i) => (
                <p key={i} className="product-overview-text">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CINEMATIC VISUAL ======================== */}
      <div className="product-cinematic">
        <img
          src={cinematicImage}
          alt={cinematicAlt}
          className="product-cinematic-img"
          loading="lazy"
        />
        <div className="product-cinematic-overlay" />
      </div>

      {/* ======================== FEATURES ======================== */}
      <section className="product-features-section" id="features">
        <div className="container">
          <div className="pd-section-heading">
            <div className="eyebrow">KEY CAPABILITIES</div>
            <h2 className="pd-heading">Engineered to Perform.</h2>
            <p className="pd-subtext">Every component is manufactured with rigorous attention to accuracy, material integrity, and drawing compliance.</p>
          </div>
          <div className="product-features-grid">
            {features.map((feat, i) => (
              <div key={i} className="product-feature-card">
                <div className="product-feature-icon">{feat.icon}</div>
                <h3 className="product-feature-title">{feat.title}</h3>
                <p className="product-feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== MATERIALS ======================== */}
      <section className="product-materials-section" id="materials">
        <div className="container">
          <div className="pd-section-heading">
            <div className="eyebrow">MATERIAL OPTIONS</div>
            <h2 className="pd-heading pd-heading-on-dark">Multi-Material Expertise.</h2>
            <p className="pd-subtext pd-subtext-dim">We machine and fabricate across a wide range of verified engineering alloys based on your application requirement.</p>
          </div>

          <div className="product-materials-grid">
            {materials.map((mat, i) => (
              <div key={i} className="material-tag-card">
                <div className="material-tag-name">{mat.name}</div>
                <div className="material-tag-code">{mat.code}</div>
                <p className="material-tag-note">{mat.note}</p>
              </div>
            ))}
          </div>

          <div className="product-materials-disclaimer">
            <p>Material selection is subject to component design, technical requirement and customer specification. Contact our team to discuss the most suitable alloy for your application.</p>
          </div>
        </div>
      </section>

      {/* ======================== PROCESS ======================== */}
      <section className="product-process-section" id="process">
        <div className="container">
          <div className="pd-section-heading">
            <div className="eyebrow">MANUFACTURING PROCESS</div>
            <h2 className="pd-heading">From Drawing to Delivery.</h2>
            <p className="pd-subtext">A structured, quality-driven manufacturing sequence ensuring precision conformance at every stage.</p>
          </div>

          <div className="product-process-track">
            <div className="process-connector-line">
              <div className="process-connector-line-fill" />
            </div>
            {processData.map((step) => (
              <div key={step.number} className="process-step">
                <div className="process-step-node">
                  <span className="process-step-number">{step.number}</span>
                </div>
                <div className="process-step-content">
                  <div className="process-step-title">{step.title}</div>
                  <div className="process-step-sub">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== APPLICATIONS ======================== */}
      <section className="product-applications-section" id="applications">
        <div className="container">
          <div className="pd-section-heading">
            <div className="eyebrow">ENGINEERING APPLICATIONS</div>
            <h2 className="pd-heading">Engineered for Industrial Applications.</h2>
          </div>

          <div className="product-applications-grid">
            {applications.map((app, i) => (
              <div key={i} className="product-application-card">
                <div className="product-application-dot" />
                <div>
                  <div className="product-application-name">{app.name}</div>
                  {app.note && <p className="product-application-note">{app.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SPECIFICATIONS ======================== */}
      <section className="product-specs-section" id="specifications">
        <div className="container">
          <div className="pd-section-heading" style={{ textAlign: 'left' }}>
            <div className="eyebrow">CUSTOM MANUFACTURING PARAMETERS</div>
            <h2 className="pd-heading" style={{ textAlign: 'left' }}>Manufacturing to Your Specification.</h2>
          </div>

          {/* Desktop Table */}
          <table className="product-specs-table">
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Parameter</th>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, i) => (
                <tr key={i}>
                  <td><span className="spec-param">{spec.param}</span></td>
                  <td><span className="spec-value">{spec.highlight ? <strong>{spec.value}</strong> : spec.value}</span></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="product-specs-mobile">
            {specs.map((spec, i) => (
              <div key={i} className="spec-mobile-card">
                <div className="spec-mobile-param">{spec.param}</div>
                <div className="spec-mobile-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== QUALITY ======================== */}
      <section className="product-quality-section" id="quality">
        <div className="container">
          <div className="product-quality-grid">
            <div className="product-quality-text-col">
              <div className="eyebrow">QUALITY & INSPECTION</div>
              <h2 className="product-quality-title">
                Precision Verified <br />Before Delivery.
              </h2>
              <p className="product-quality-desc">
                Every manufactured component undergoes rigorous dimensional inspection to ensure strict compliance with customer drawings and specified tolerances before dispatch.
              </p>
              <div className="product-quality-list">
                {qualityPoints.map((point, i) => (
                  <div key={i} className="product-quality-item">
                    <div className="product-quality-check" />
                    <span className="product-quality-item-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-quality-img-col">
              <img
                src={qualityImage}
                alt="Precision dimensional inspection at Maruti Engineering"
                className="product-quality-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== GALLERY ======================== */}
      <section className="product-gallery-section" id="gallery">
        <div className="container">
          <div className="pd-section-heading">
            <div className="eyebrow">PRODUCT GALLERY</div>
            <h2 className="pd-heading">Component Showcase.</h2>
          </div>

          <div className="product-gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setModalImg(img)}
                role="button"
                tabIndex={0}
                aria-label={`View full size: ${img.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && setModalImg(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <ZoomIn size={28} className="gallery-zoom-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WHY MARUTI ======================== */}
      <section className="product-why-section">
        <div className="container">
          <div className="pd-section-heading">
            <div className="eyebrow">WHY MARUTI ENGINEERING</div>
            <h2 className="pd-heading">Your Precision Manufacturing Partner Since 1996.</h2>
          </div>

          <div className="product-why-grid">
            <div className="product-why-card">
              <div className="product-why-card-label">Experience</div>
              <div className="product-why-card-title">30+ Years in Precision Manufacturing</div>
            </div>
            <div className="product-why-card">
              <div className="product-why-card-label">Approach</div>
              <div className="product-why-card-title">Customer Drawing-Based Production</div>
            </div>
            <div className="product-why-card">
              <div className="product-why-card-label">Capability</div>
              <div className="product-why-card-title">CNC Turning + VMC Milling + Fabrication</div>
            </div>
            <div className="product-why-card">
              <div className="product-why-card-label">Materials</div>
              <div className="product-why-card-title">Multi-Alloy Manufacturing Expertise</div>
            </div>
            <div className="product-why-card">
              <div className="product-why-card-label">Quality</div>
              <div className="product-why-card-title">Stage-wise Dimensional Inspection</div>
            </div>
            <div className="product-why-card">
              <div className="product-why-card-label">Delivery</div>
              <div className="product-why-card-title">Reliable On-Time Domestic & Export Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== RELATED PRODUCTS ======================== */}
      {relatedProducts.length > 0 && (
        <section className="product-related-section">
          <div className="container">
            <div className="pd-section-heading">
              <div className="eyebrow">RELATED PRODUCTS</div>
              <h2 className="pd-heading">Explore Related Engineering Products.</h2>
            </div>

            <div className="product-related-grid">
              {relatedProducts.map((prod) => (
                <Link
                  key={prod.slug}
                  to={`/products/${prod.slug}`}
                  className="related-product-card"
                >
                  <div className="related-card-img-wrap">
                    <img
                      src={prod.image}
                      alt={`${prod.name} — Maruti Engineering`}
                      className="related-card-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="related-card-body">
                    <div className="related-card-category">{prod.category}</div>
                    <div className="related-card-name">{prod.name}</div>
                    <span className="related-card-link">View Product <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================== RFQ CTA ======================== */}
      <section className="product-rfq-cta" id="rfq-cta">
        <div className="product-rfq-cta-blueprint" />
        <div className="container">
          <div className="product-rfq-cta-inner">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>REQUEST A QUOTE</div>
            <h2 className="product-rfq-cta-title">
              Have a Drawing for <br />
              <span className="text-orange">This Component?</span>
            </h2>
            <p className="product-rfq-cta-desc">
              Share your drawing, material requirement, quantity, and technical specifications with our team. We'll review your requirement and respond promptly.
            </p>
            <div className="product-rfq-cta-btns">
              <a
                href="/contact"
                className="product-hero-cta-primary"
                onClick={handleRFQ}
                style={{ fontSize: '0.9rem', padding: '1rem 2rem' }}
              >
                Send Your Drawing <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="product-hero-cta-secondary"
                style={{ fontSize: '0.9rem', padding: '1rem 2rem' }}
              >
                Request a Quote
              </Link>
            </div>
            <div className="product-rfq-accepted">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim-dark)' }}>Accepted formats:</span>
              {['PDF', 'DWG', 'DXF', 'STEP', 'IGES'].map((fmt) => (
                <span key={fmt} className="rfq-format-tag">{fmt}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== GALLERY MODAL ======================== */}
      <div
        className={`gallery-modal-backdrop ${modalImg ? 'open' : ''}`}
        onClick={() => setModalImg(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        {modalImg && (
          <div className="gallery-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setModalImg(null)}
              aria-label="Close image viewer"
            >
              <X size={18} />
            </button>
            <img
              src={modalImg.src}
              alt={modalImg.alt}
              className="gallery-modal-img"
            />
          </div>
        )}
      </div>
    </div>
  );
};
