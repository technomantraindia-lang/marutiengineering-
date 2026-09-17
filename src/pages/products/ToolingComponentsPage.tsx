import React from 'react';
import { Sliders, Shield, Zap, Target, Wrench, Layers } from 'lucide-react';
import { ProductDetailLayout } from './ProductDetailLayout';

import heroImg from '../../assets/capabilities/tooling.jpg';
import cinematicImg from '../../assets/capabilities/precision_machining.jpg';
import qualityImg from '../../assets/quality/quality_inspection.jpg';
import g1 from '../../assets/products/product_tooling.jpg';
import g2 from '../../assets/capabilities/tooling.jpg';
import g3 from '../../assets/capabilities/cnc_turning.jpg';
import relMachinedImg from '../../assets/products/product_machined.jpg';
import relFixturesImg from '../../assets/products/product_fixtures.jpg';
import relSpecialImg from '../../assets/products/product_special.jpg';

export const ToolingComponentsPage: React.FC = () => (
  <ProductDetailLayout
    seoTitle="Tooling Components & Die Parts | Precision Tooling Manufacturing | Maruti Engineering"
    seoDescription="Custom precision tooling components, punches, die inserts, and wear parts manufactured at Maruti Engineering, Vadodara. High wear resistance, heat-treated durability."

    category="TOOLING & DIE PARTS"
    productName="Tooling Components & Die Parts"
    heroDesc="Specialized tool holders, punches, die components, inserts, and wear parts engineered for extended operational life under repetitive industrial impact loads. Manufactured in hard-wearing materials with precision profiles and strict dimensional control."
    heroImage={heroImg}
    heroImageAlt="Precision tooling components and die parts manufactured at Maruti Engineering"

    overviewTitle="Tooling Built for Durability and Precision."
    overviewParagraphs={[
      "Tooling components and die parts are the workhorses of industrial manufacturing operations. They must maintain dimensional accuracy under repeated mechanical stress and impact loads while resisting accelerated wear. At Maruti Engineering, we design and manufacture custom tooling components including punches, die inserts, tool holders, specialized cutters, and wear-resistant parts according to customer-supplied specifications.",
      "Our tooling components are manufactured in hard-wearing materials such as Tool Steel, Alloy Steel grades (EN31, EN19), and Hardox, with optional heat treatment processes to achieve the necessary hardness and wear resistance for the specific application. Every tooling profile is machined with precision on our CNC turning and VMC milling centers to ensure exact conformance to customer drawing dimensions.",
      "We supply tooling components to customers in metal forming, press tool, stamping, and industrial manufacturing sectors. Our manufacturing approach prioritizes extended tool life and profile accuracy — two parameters that directly impact productivity and component quality in our customers' operations."
    ]}

    cinematicImage={cinematicImg}
    cinematicAlt="Precision CNC machining of tooling components at Maruti Engineering"

    features={[
      {
        icon: <Shield size={20} />,
        title: "High Wear Resistance",
        desc: "Manufactured in wear-resistant alloys including Hardox, EN31, and tool steel grades for maximum operational lifespan."
      },
      {
        icon: <Sliders size={20} />,
        title: "Custom Tool Profiles",
        desc: "Complex punch profiles, die radii, clearance angles, and precision features machined per customer tooling drawings."
      },
      {
        icon: <Zap size={20} />,
        title: "Heat Treatment Ready",
        desc: "Components are designed and manufactured with allowance for post-machining heat treatment to achieve required hardness."
      },
      {
        icon: <Target size={20} />,
        title: "Strict Dimensional Control",
        desc: "Tool profiles, punch clearances, and die cavity dimensions verified at every machining stage per drawing specification."
      },
      {
        icon: <Wrench size={20} />,
        title: "Drawing-Based Production",
        desc: "All tooling components manufactured strictly per customer-supplied tool design drawings and technical parameters."
      },
      {
        icon: <Layers size={20} />,
        title: "Prototype to Production",
        desc: "Single prototype tooling pieces through to batch replacement tooling components supplied on schedule."
      }
    ]}

    materials={[
      { name: "Tool Steel", code: "D2, H11, H13", note: "For hard-wearing punch and die components with high compressive strength." },
      { name: "Alloy Steel", code: "EN31, EN19, EN24", note: "For tough tooling components requiring heat treatment to high hardness." },
      { name: "Hardox", code: "400, 450, 500", note: "For abrasion-resistant wear parts in heavy industrial tooling applications." },
      { name: "Stainless Steel", code: "SS 410, 420", note: "For tooling applications requiring corrosion resistance with reasonable hardness." }
    ]}

    applications={[
      { name: "Press Tool & Stamping", note: "Precision punches, die inserts, and stripper plates for sheet metal forming operations." },
      { name: "Mining Equipment", note: "Wear-resistant tooling, crusher liners, and impact-resistant wear components." },
      { name: "General Engineering", note: "Custom tool holders, specialized cutters, and wear parts for industrial machinery." },
      { name: "Metal Forming", note: "Forming dies, blank holders, and precision die components for metal forming presses." }
    ]}

    specs={[
      { param: "Product Type", value: "Custom Tooling Components & Die Parts", highlight: true },
      { param: "Manufacturing Method", value: "CNC Turning, VMC Milling, Precision Grinding (where specified)" },
      { param: "Materials", value: "Tool Steel, Alloy Steel (EN31, EN19), Hardox — as per requirement" },
      { param: "Heat Treatment", value: "As per customer specification (post-machining)" },
      { param: "Hardness", value: "As per customer specification and material grade" },
      { param: "Drawing Requirement", value: "Customer-supplied tool drawing with profile, tolerances, and material specification" },
      { param: "Dimensions", value: "As per customer tooling drawing" },
      { param: "Inspection", value: "Profile, dimensional, and surface finish verification" },
      { param: "Quantity", value: "Prototype to batch replacement tooling quantities" }
    ]}

    qualityImage={qualityImg}
    qualityPoints={[
      "Raw material grade and material test verification before machining.",
      "Precision tooling profile machined per customer drawing dimensions.",
      "Dimensional inspection of all critical tooling features.",
      "Surface finish verification per drawing specification.",
      "Final profile and dimensional check before packaging for dispatch."
    ]}

    galleryImages={[
      { src: g1, alt: "Precision tooling components and die parts by Maruti Engineering" },
      { src: g2, alt: "CNC machined tooling components ready for industrial use" },
      { src: g3, alt: "CNC turning of precision tooling blanks at Maruti Engineering" }
    ]}

    relatedProducts={[
      { name: "Precision Machined Components", category: "Machined", slug: "precision-machined-components", image: relMachinedImg },
      { name: "Custom Jigs & Fixtures", category: "Fixtures", slug: "jigs-and-fixtures", image: relFixturesImg },
      { name: "Special Engineering Components", category: "Customized", slug: "special-components", image: relSpecialImg }
    ]}
  />
);
