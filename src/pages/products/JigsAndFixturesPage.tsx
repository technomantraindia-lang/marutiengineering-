import React from 'react';
import { Target, Repeat, Wrench, LayoutGrid, CheckCircle2, Settings } from 'lucide-react';
import { ProductDetailLayout } from './ProductDetailLayout';

import heroImg from '../../assets/capabilities/jigs_fixtures.jpg';
import cinematicImg from '../../assets/about/about_workshop.jpg';
import qualityImg from '../../assets/quality/quality_inspection.jpg';
import g1 from '../../assets/products/product_fixtures.jpg';
import g2 from '../../assets/capabilities/jigs_fixtures.jpg';
import g3 from '../../assets/capabilities/vmc_milling.jpg';
import relMachinedImg from '../../assets/products/product_machined.jpg';
import relToolingImg from '../../assets/products/product_tooling.jpg';
import relAssembliesImg from '../../assets/products/product_assemblies.jpg';

export const JigsAndFixturesPage: React.FC = () => (
  <ProductDetailLayout
    seoTitle="Custom Jigs & Fixtures | Machining & Welding Fixtures | Maruti Engineering"
    seoDescription="Custom precision jigs, machining fixtures, welding fixtures, and clamping assemblies manufactured at Maruti Engineering, Vadodara. High repeatability and rigid part holding."

    category="JIGS & FIXTURES"
    productName="Custom Jigs & Fixtures"
    heroDesc="Tailored manufacturing fixtures, clamping assemblies, checking gauges, and positioning jigs designed for high-efficiency repetitive batch manufacturing. Engineered for rigid part holding, high repeatability, and consistent dimensional outcomes across production runs."
    heroImage={heroImg}
    heroImageAlt="Custom machining and welding jigs and fixtures by Maruti Engineering"

    overviewTitle="Fixtures that Drive Manufacturing Consistency."
    overviewParagraphs={[
      "Jigs and fixtures are indispensable manufacturing tools that ensure component consistency across batch production runs. By rigidly locating and clamping workpieces in repeatable positions, well-designed fixtures reduce setup times, eliminate operator-dependent positioning errors, and dramatically improve machining accuracy for every component in a batch.",
      "At Maruti Engineering, we design and manufacture custom machining fixtures, welding fixtures, checking gauges, inspection jigs, and positioning fixtures according to customer-supplied component drawings and production requirements. Our fixtures are built to provide rigid, accurate, and repeatable part location and clamping with ergonomic operation for production operators.",
      "We manufacture fixtures for use in CNC turning, VMC milling, welding, assembly, and inspection operations. Each fixture is verified on the actual component before approval and delivery, ensuring that it functions precisely as intended on the customer's production line."
    ]}

    cinematicImage={cinematicImg}
    cinematicAlt="Manufacturing jigs and fixtures at Maruti Engineering workshop"

    features={[
      {
        icon: <Target size={20} />,
        title: "Precision Part Location",
        desc: "Locating pins, V-blocks, reference surfaces, and datum stops machined to precision tolerances for repeatable component positioning."
      },
      {
        icon: <Repeat size={20} />,
        title: "High Repeatability",
        desc: "Fixture designs ensure identical component positioning for every cycle, maintaining batch-to-batch dimensional consistency."
      },
      {
        icon: <Wrench size={20} />,
        title: "Rigid Clamping Systems",
        desc: "Screw, cam, toggle, and pneumatic clamping systems designed for secure part holding without distortion."
      },
      {
        icon: <LayoutGrid size={20} />,
        title: "Machining & Welding Fixtures",
        desc: "Purpose-designed fixtures for CNC machining, VMC milling operations, and MIG welding assembly positioning."
      },
      {
        icon: <CheckCircle2 size={20} />,
        title: "Checking Gauges & Inspection Jigs",
        desc: "Go/No-Go gauges and inspection fixtures for fast, reliable dimensional verification in production environments."
      },
      {
        icon: <Settings size={20} />,
        title: "Production-Proven Design",
        desc: "Each fixture is trialed on actual components before delivery to verify correct location, clamping, and dimensional accuracy."
      }
    ]}

    materials={[
      { name: "Mild Steel", code: "IS 2062 Grades", note: "For fixture bodies, bases, and structural elements requiring rigidity and weldability." },
      { name: "Alloy Steel", code: "EN8, EN19, EN31", note: "For locating pins, clamping elements, and hardened wear surfaces." },
      { name: "Aluminium", code: "6061-T6, 6082-T6", note: "For lightweight fixtures requiring ease of handling in production cells." },
      { name: "Stainless Steel", code: "SS 304, 316", note: "For fixtures used in corrosive or sanitary production environments." }
    ]}

    applications={[
      { name: "CNC Machining Fixtures", note: "Workholding fixtures for CNC turning and VMC milling operations." },
      { name: "Welding Fixtures", note: "Positioning and clamping jigs for accurate MIG welding assembly." },
      { name: "Inspection Gauges", note: "Go/No-Go gauges and checking fixtures for production quality verification." },
      { name: "Assembly Fixtures", note: "Part holding and alignment fixtures for sub-assembly production lines." },
      { name: "General Manufacturing", note: "Custom jigs for any repetitive batch manufacturing application." }
    ]}

    specs={[
      { param: "Product Type", value: "Custom Machining / Welding / Inspection Fixtures & Jigs", highlight: true },
      { param: "Manufacturing Method", value: "CNC Turning, VMC Milling, Fabrication, Manual Assembly" },
      { param: "Fixture Body Material", value: "Mild Steel, Alloy Steel, Aluminium — as per requirement" },
      { param: "Locating Elements", value: "As per customer drawing — pins, V-blocks, datum surfaces" },
      { param: "Clamping Type", value: "Screw, cam, toggle, or pneumatic — as per requirement" },
      { param: "Component Compatibility", value: "Designed specifically for customer's component drawings" },
      { param: "Repeatability", value: "As per customer requirement" },
      { param: "Trial and Verification", value: "Trialed on actual component before delivery" },
      { param: "Quantity", value: "As per customer requirement" }
    ]}

    qualityImage={qualityImg}
    qualityPoints={[
      "Locating elements machined and verified for dimensional accuracy.",
      "Fixture assembly trial with actual customer component before sign-off.",
      "Clamping force and distortion verified to ensure component integrity.",
      "Checking gauges calibrated and verified before delivery.",
      "Production repeatability verified across multiple component cycles."
    ]}

    galleryImages={[
      { src: g1, alt: "Custom machining fixture for batch production — Maruti Engineering" },
      { src: g2, alt: "Precision jig and fixture components manufactured at Maruti Engineering" },
      { src: g3, alt: "VMC milling operations producing precision fixture components" }
    ]}

    relatedProducts={[
      { name: "Precision Machined Components", category: "Machined", slug: "precision-machined-components", image: relMachinedImg },
      { name: "Tooling Components & Die Parts", category: "Tooling", slug: "tooling-components", image: relToolingImg },
      { name: "Mechanical Assemblies & Sub-Units", category: "Assemblies", slug: "mechanical-assemblies", image: relAssembliesImg }
    ]}
  />
);
