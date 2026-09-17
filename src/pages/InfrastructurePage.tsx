import React, { useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, ClipboardCheck, Cog, Factory, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/ui/MetaTags';
import { Container } from '../components/layout/Container';
import './InfrastructurePage.css';
import heroImage from '../assets/infrastructure/infrastructure-hero.png';
import facilityImage from '../assets/infrastructure/facility-overview.png';
import cncImage from '../assets/infrastructure/infrastructure-cnc-turning.png';
import vmcImage from '../assets/infrastructure/infrastructure-vmc.png';
import latheImage from '../assets/infrastructure/infrastructure-lathe-milling.png';
import drillingImage from '../assets/infrastructure/infrastructure-drilling-welding.png';
import supportImage from '../assets/infrastructure/supporting-equipment.png';
import detailImage from '../assets/infrastructure/infrastructure-detail.png';

const equipment = [
  { id: 'cnc-turning', label: 'CNC TURNING', title: 'LMW CNC Turning Centre.', quantity: '1 No.', text: 'A dedicated CNC turning centre supporting drawing-based cylindrical component manufacture, turning, boring, facing, and profiling requirements.', image: cncImage, alt: 'CNC turning centre machining a cylindrical component', dark: false, reverse: false },
  { id: 'vmc', label: 'VMC MACHINING', title: 'Jyoti CNC VMC 1260P with Siemens 828D.', quantity: '2 Nos.', text: 'Two Jyoti CNC VMC 1260P machines with Siemens 828D support controlled milling of customer-specific components and complex geometry.', image: vmcImage, alt: 'Vertical machining centre cutting a metal component', dark: true, reverse: true },
  { id: 'milling', label: 'MILLING', title: 'DRO Milling Support.', text: 'DRO milling supports practical machining operations where a controlled manual milling process is appropriate to the drawing and requirement.', image: latheImage, alt: 'DRO milling machine in an engineering workshop', reverse: false },
  { id: 'turning', label: 'CONVENTIONAL TURNING', title: 'Conventional Turning Capability.', text: 'Lathe machines support manual turning operations, prototypes, preparation work, and customer-specific component requirements.', image: latheImage, alt: 'Conventional lathe machines in a workshop', reverse: true },
  { id: 'welding', label: 'WELDING SUPPORT', title: 'MIG Welding Support.', text: 'MIG welding supports fabrication and engineering assembly work as part of the wider manufacturing workflow.', image: drillingImage, alt: 'MIG welding and pillar drilling equipment on the shop floor', dark: true, reverse: false },
];
const flow = ['Drawing Review', 'Material Preparation', 'CNC / VMC Machining', 'Supporting Operations', 'Inspection', 'Finished Component'];
const links = ['CNC Turning', 'VMC Milling', 'Precision Machining', 'Fabrication', 'Tooling', 'Jigs & Fixtures'];

const EquipmentSection: React.FC<{ item: typeof equipment[number] }> = ({ item }) => (
  <section className={'infra-equipment section ' + (item.dark ? 'infra-equipment-dark section-dark blueprint-pattern' : '')} id={item.id}><Container><div className={'infra-equipment-grid infra-reveal ' + (item.reverse ? 'infra-reverse' : '')}><div className="infra-equipment-image"><img src={item.image} alt={item.alt} loading="lazy" /></div><div className="infra-equipment-copy"><span className="eyebrow">{item.label}</span><h2>{item.title}</h2>{item.quantity && <div className="infra-quantity"><span>QUANTITY</span><strong>{item.quantity}</strong></div>}<p>{item.text}</p></div></div></Container></section>
);

export const InfrastructurePage: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.infra-reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <div className="infrastructure-page">
    <MetaTags title="Manufacturing Infrastructure | CNC & VMC Facility | Maruti Engineering" description="Explore Maruti Engineering’s machining infrastructure in Vadodara including LMW CNC turning, Jyoti CNC VMC 1260P with Siemens 828D, milling, lathes, drilling, MIG welding and supporting shop-floor equipment." keywords="CNC machining infrastructure Vadodara, precision engineering facility Gujarat, VMC machining facility Vadodara, LMW CNC turning, industrial machining facility Gujarat" />
    <section className="infra-hero blueprint-pattern"><div className="infra-hero-image"><img src={heroImage} alt="Modern Indian precision engineering shop-floor with CNC and VMC equipment" /><div /></div><Container><div className="infra-hero-copy infra-reveal"><div className="infra-breadcrumb"><Link to="/">Home</Link><ChevronRight size={14} /><span>Infrastructure</span></div><span className="eyebrow">OUR MANUFACTURING INFRASTRUCTURE</span><h1>Infrastructure Built<br /><span className="text-orange">for Precision Manufacturing.</span></h1><p>Our GIDC Makarpura, Vadodara facility combines machining and supporting manufacturing equipment for drawing-based component production.</p><Link className="btn btn-primary btn-lg" to="/contact">Discuss Your Requirement <ArrowRight size={18} /></Link></div></Container></section>
    <section className="infra-intro section"><Container><div className="infra-intro-grid infra-reveal"><div><span className="eyebrow">THE FACILITY</span><h2>A Manufacturing Facility<br /><span className="text-orange">Focused on Precision.</span></h2></div><div><p>Located in GIDC Makarpura, Vadodara, our machining facility brings CNC, VMC, conventional, drilling, welding, and supporting shop-floor operations together for customer-specific components.</p><div className="infra-intro-points">{['GIDC Makarpura, Vadodara', 'Drawing-based production', 'Machining and supporting operations', 'Quality-focused workflow'].map((item) => <div key={item}><Check size={17} />{item}</div>)}</div></div></div><img className="infra-intro-image infra-reveal" src={facilityImage} alt="Organized Maruti Engineering production floor" loading="lazy" /></Container></section>
    <EquipmentSection item={equipment[0]} /><EquipmentSection item={equipment[1]} />
    <section className="infra-detail section section-soft"><Container><div className="infra-detail-grid infra-reveal"><div><span className="eyebrow">PRECISION MACHINING</span><h2>Equipment Supporting<br /><span className="text-orange">Controlled Production.</span></h2><p>Our infrastructure is arranged to support drawing review, material preparation, machining, practical shop-floor operations, and inspection through a connected manufacturing workflow.</p><div className="infra-detail-points"><div><Cog /> CNC and VMC machining</div><div><ClipboardCheck /> Customer-specific production</div><div><Ruler /> Inspection support</div></div></div><img src={detailImage} alt="Machining tooling and finished components in a precision engineering facility" loading="lazy" /></div></Container></section>
    <EquipmentSection item={equipment[2]} /><EquipmentSection item={equipment[3]} /><EquipmentSection item={equipment[4]} />
    <section className="infra-support section"><Container><div className="infra-support-grid infra-reveal"><div><span className="eyebrow">SUPPORTING EQUIPMENT</span><h2>Supporting Tools for Complete<br /><span className="text-orange">Shop-Floor Operations.</span></h2><p>Hand drills, grinders, a hand press, and other supporting shop-floor equipment help complete practical fitting, preparation, deburring, and assembly operations.</p><div className="infra-support-list">{['Hand Drills', 'Grinders', 'Hand Press', 'Shop-Floor Supporting Equipment'].map((item) => <div key={item}><Wrench size={17} />{item}</div>)}</div></div><img src={supportImage} alt="Hand drills, grinders and hand press supporting equipment" loading="lazy" /></div></Container></section>
    <section className="infra-flow section section-deep-dark blueprint-pattern"><Container><div className="infra-centered infra-reveal"><span className="eyebrow">INTEGRATED PRODUCTION FLOW</span><h2>Infrastructure Supporting<br /><span className="text-orange">Every Manufacturing Stage.</span></h2></div><div className="infra-flow-grid">{flow.map((item, index) => <div className="infra-flow-item" key={item}><div className="infra-flow-icon">{[<ClipboardCheck key="a" />, <LayersIcon key="b" />, <Cog key="c" />, <Wrench key="d" />, <Ruler key="e" />, <ShieldCheck key="f" />][index]}</div><strong>{item}</strong>{index < flow.length - 1 && <ArrowRight className="infra-flow-arrow" size={18} />}</div>)}</div></Container></section>
    <section className="infra-links section section-soft"><Container><div className="infra-centered infra-reveal"><span className="eyebrow">CAPABILITY CONNECTION</span><h2>Infrastructure Supporting<br /><span className="text-orange">Integrated Manufacturing.</span></h2></div><div className="infra-link-grid">{links.map((item, index) => <Link className="infra-link-card" to="/capabilities.html" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowRight size={18} /></Link>)}</div><div className="infra-link-cta"><Link className="btn btn-primary btn-lg" to="/capabilities.html">View Manufacturing Capabilities <ArrowRight size={18} /></Link></div></Container></section>
    <section className="infra-final section"><div className="infra-final-bg"><img src={heroImage} alt="Precision manufacturing infrastructure in Vadodara" /><div /></div><Container><div className="infra-final-copy infra-reveal"><span className="eyebrow">START A PROJECT</span><h2>Have a Drawing<br /><span className="text-orange">for Our Facility?</span></h2><p>Share your component requirement with our engineering team and discuss the right manufacturing route.</p><Link className="btn btn-primary btn-lg" to="/contact">Discuss Your Requirement <ArrowRight size={18} /></Link></div></Container></section>
  </div>;
};
const LayersIcon: React.FC = () => <Factory />;
export default InfrastructurePage;
