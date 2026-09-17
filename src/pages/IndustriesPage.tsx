import React, { useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, ClipboardCheck, Cog, Factory, Layers3, Ruler, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/ui/MetaTags';
import { Container } from '../components/layout/Container';
import { industriesData } from '../data/industries';
import { customersData } from '../data/customers';
import heroImage from '../assets/industries/industries-hero.png';
import miningImage from '../assets/industries/industry-mining.png';
import coolingTowersImage from '../assets/industries/industry-cooling-towers.png';
import pumpsValvesImage from '../assets/industries/industry-pumps-valves.png';
import automobileImage from '../assets/industries/industry-automobile.png';
import dairyImage from '../assets/industries/industry-dairy.png';
import generalEngineeringImage from '../assets/industries/industry-general-engineering.png';
import './IndustriesPage.css';

const industryImages: Record<string, string> = {
  mining: miningImage,
  'cooling-towers': coolingTowersImage,
  'pumps-valves': pumpsValvesImage,
  automobile: automobileImage,
  'dairy-machinery': dairyImage,
  'general-engineering': generalEngineeringImage,
};
const industries = [
  { id: 'mining', title: 'Engineering Support for Mining Applications.', text: 'Precision machined components for mining equipment and general manufacturing support for demanding industrial environments. Our approach follows the component drawing, material requirement, and application need.', reverse: false },
  { id: 'cooling-towers', title: 'Precision Components for Cooling Tower Systems.', text: 'Custom engineering and component manufacturing for cooling tower systems, developed according to customer drawings and specifications with attention to material selection and verification.', reverse: true },
  { id: 'pumps-valves', title: 'Machining for Pumps & Valve Applications.', text: 'Precision machining, dimensional control, material planning, and custom engineering parts for pumps and valve applications—without assuming requirements beyond the supplied design.', reverse: false, dark: true },
  { id: 'automobile', title: 'Precision Manufacturing for Automotive Applications.', text: 'Drawing-based turned and milled components, linkages, bushings, brackets, and other engineering parts for automotive applications. We focus on manufacturing capability rather than unsupported OEM claims.', reverse: true },
  { id: 'dairy-machinery', title: 'Engineering Components for Dairy Machinery.', text: 'Clean stainless-steel components and custom-machined parts for dairy machinery applications, manufactured around customer requirements without making unsupported hygiene certification claims.', reverse: false },
  { id: 'general-engineering', title: 'Custom Manufacturing for General Engineering.', text: 'A flexible manufacturing partner for diverse industrial engineering components, working from customer drawings across machining, fabrication, tooling, fixtures, and related production requirements.', reverse: true },
];
const workflow = ['Application Requirement', 'Drawing Review', 'Material Planning', 'Manufacturing', 'Inspection', 'Delivery'];
const capabilityLinks = ['CNC Turning', 'VMC Milling', 'Precision Machining', 'Fabrication', 'Laser Cutting', 'Tooling', 'Jigs & Fixtures', 'Custom Components'];

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.industry-reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <div className="industries-page">
    <MetaTags title="Industries We Serve | Industrial Precision Components | Maruti Engineering" description="Maruti Engineering serves mining, cooling towers, pumps and valves, automobile, dairy machinery and general engineering industries with precision machined and customized engineering components." keywords="precision engineering for mining industry, machined components for cooling towers, automotive machined components India, dairy machinery components, industrial engineering components Vadodara" />
    <section className="industry-page-hero blueprint-pattern"><div className="industry-hero-image"><img src={heroImage} alt="Industrial engineering environments and precision components across diverse sectors" /><div /></div><Container><div className="industry-hero-copy industry-reveal"><div className="industry-breadcrumb"><Link to="/">Home</Link><ChevronRight size={14} /><span>Industries</span></div><span className="eyebrow">INDUSTRIES WE SERVE</span><h1>Precision Engineering<br /><span className="text-orange">Across Diverse Industries.</span></h1><p>Maruti Engineering manufactures precision components, assemblies, tooling, fixtures and customized engineering parts for diverse industrial applications.</p><Link className="btn btn-primary btn-lg" to="/contact">Discuss Your Application <ArrowRight size={18} /></Link></div></Container></section>
    <section className="industry-intro section"><Container><div className="industry-intro-grid industry-reveal"><div><span className="eyebrow">ENGINEERED FOR APPLICATION</span><h2>Engineering Experience<br /><span className="text-orange">Across Industrial Applications.</span></h2></div><div><p>Our manufacturing approach begins with the customer’s application and component requirement. We review drawings, consider material selection and machining or fabrication needs, then verify the finished work against the agreed specification.</p><div className="industry-intro-points">{['Customer drawings', 'Component requirements', 'Material selection', 'Quality verification'].map((item) => <div key={item}><Check size={17} />{item}</div>)}</div></div></div></Container></section>
    {industries.map((industry) => <section className={'industry-story section ' + (industry.dark ? 'industry-story-dark section-dark blueprint-pattern' : '')} id={industry.id} key={industry.id}><Container><div className={'industry-story-grid industry-reveal ' + (industry.reverse ? 'industry-reverse' : '')}><div className="industry-story-image"><img src={industryImages[industry.id]} alt={industriesData.find((item) => item.id === industry.id)?.name + ' industrial engineering applications'} loading="lazy" /></div><div className="industry-story-copy"><span className="eyebrow">{industriesData.find((item) => item.id === industry.id)?.name}</span><h2>{industry.title}</h2><p>{industry.text}</p><div className="industry-story-tags">{(industriesData.find((item) => item.id === industry.id)?.keyComponents || []).slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><Link className="industry-inline-link" to="/capabilities.html">Explore Manufacturing Capabilities <ArrowRight size={16} /></Link></div></div></Container></section>)}
    <section className="industry-capabilities section section-soft"><Container><div className="industry-centered-heading industry-reveal"><span className="eyebrow">CROSS-INDUSTRY CAPABILITIES</span><h2>One Manufacturing Partner.<br /><span className="text-orange">Multiple Industrial Requirements.</span></h2></div><div className="industry-capability-grid">{capabilityLinks.map((item, index) => <Link className="industry-capability-card" to="/capabilities.html" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowRight size={18} /></Link>)}</div></Container></section>
    <section className="industry-materials section section-deep-dark blueprint-pattern"><Container><div className="industry-centered-heading industry-reveal"><span className="eyebrow">MATERIAL EXPERIENCE</span><h2>Material Experience<br /><span className="text-orange">Supporting Diverse Applications.</span></h2></div><div className="industry-material-grid">{['Stainless Steel', 'Alloy Steel', 'Aluminium', 'Brass', 'Copper', 'Hardox'].map((item, index) => <div className="industry-material-card" key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></Container></section>
    <section className="industry-workflow section"><Container><div className="industry-centered-heading industry-reveal"><span className="eyebrow">APPLICATION TO DELIVERY</span><h2>A Clear Workflow for<br /><span className="text-orange">Industrial Requirements.</span></h2></div><div className="industry-workflow-grid">{workflow.map((item, index) => <div className="industry-workflow-item" key={item}><div className="industry-workflow-icon">{[<Factory key="f" />, <ClipboardCheck key="c" />, <Layers3 key="l" />, <Cog key="g" />, <Ruler key="r" />, <ShieldCheck key="s" />][index]}</div><strong>{item}</strong>{index < workflow.length - 1 && <ArrowRight className="industry-workflow-arrow" size={18} />}</div>)}</div></Container></section>
    <section className="industry-customers section section-soft"><Container><div className="industry-centered-heading industry-reveal"><span className="eyebrow">OUR CUSTOMERS</span><h2>Trusted by Industrial<br /><span className="text-orange">Enterprises.</span></h2><p>Our approved customer presentation reflects long-term engineering partnerships without inventing testimonials or undocumented product relationships.</p></div><div className="industry-customer-grid">{customersData.map((customer) => <div className="industry-customer-card" key={customer.id}><span>{customer.name.charAt(0)}</span><strong>{customer.name}</strong></div>)}</div></Container></section>
    <section className="industry-final-cta section"><div className="industry-final-bg"><img src={heroImage} alt="Precision components for industrial applications" /><div /></div><Container><div className="industry-final-copy industry-reveal"><span className="eyebrow">START A CONVERSATION</span><h2>Have an Industrial<br /><span className="text-orange">Component Requirement?</span></h2><p>Share your drawing, material requirement and application context with our engineering team.</p><div className="industry-cta-actions"><Link className="btn btn-primary btn-lg" to="/contact">Share Your Drawing <ArrowRight size={18} /></Link><Link className="btn btn-outline-white btn-lg" to="/contact">Request a Quote</Link></div></div></Container></section>
  </div>;
};
export default IndustriesPage;
