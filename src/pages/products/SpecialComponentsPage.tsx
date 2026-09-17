import React from 'react';
import { Cpu, Shield, Layers, Target, Sliders, FileText } from 'lucide-react';
import { ProductDetailLayout } from './ProductDetailLayout';

import heroImg from '../../assets/capabilities/precision_machining.jpg';
import cinematicImg from '../../assets/capabilities/vmc_milling.jpg';
import qualityImg from '../../assets/quality/quality_inspection.jpg';
import g1 from '../../assets/products/product_special.jpg';
import g2 from '../../assets/capabilities/precision_machining.jpg';
import g3 from '../../assets/capabilities/vmc_milling.jpg';
import relMachinedImg from '../../assets/products/product_machined.jpg';
import relCustomImg from '../../assets/products/product_custom.jpg';
import relToolingImg from '../../assets/products/product_tooling.jpg';

export const SpecialComponentsPage: React.FC = () => (
  <ProductDetailLayout
    seoTitle="Special Engineering Components | Critical Industrial Parts | Maruti Engineering"
    seoDescription="Special engineering components for critical industrial applications. Complex multi-axis machined parts, specialized alloy fabrication, and precision tapping by Maruti Engineering, Vadodara."

    category="SPECIAL COMPONENTS"
    productName="Special Engineering Components"
    heroDesc="Specialized components requiring multi-axis machining, precision tapping, intricate cross-holes, and specialized alloy fabrication for critical industrial machinery. Engineered for demanding applications where standard components are insufficient."
    heroImage={heroImg}
    heroImageAlt="Special engineering components for critical industrial applications by Maruti Engineering"

    overviewTitle="Engineering Complexity. Manufactured with Precision."
    overviewParagraphs={[
      "Special engineering components occupy a unique position in industrial manufacturing — they are the parts that cannot be sourced from a catalogue, that require specific geometric complexity, specialized alloy properties, or critical dimensional accuracy that exceeds standard manufacturing expectations. At Maruti Engineering, these are precisely the components we are equipped and experienced to produce.",
      "Our special components category covers a wide range of highly specific engineering requirements: multi-feature components with complex cross-bores, angled features, and intricate machined geometries; components in specialized alloys like Hardox requiring both precision machining and material expertise; parts with demanding surface finish requirements; and complex sub-components that feed into critical machinery assemblies across heavy engineering sectors.",
      "Each special component project begins with a thorough engineering review of the customer's drawing. We assess the machining sequence, identify critical features requiring special attention, select appropriate tooling, and plan the inspection methodology before any cutting commences. This front-end engineering rigor is what ensures that even the most demanding components are delivered correctly on the first production run."
    ]}

    cinematicImage={cinematicImg}
    cinematicAlt="VMC milling of special complex engineering components at Maruti Engineering"

    features={[
      {
        icon: <Cpu size={20} />,
        title: "Complex Geometry Machining",
        desc: "Multi-axis CNC turning and VMC milling of intricate cross-bores, angled features, complex pockets, and precision profiles."
      },
      {
        icon: <Shield size={20} />,
        title: "Critical Application Design",
        desc: "Components designed and manufactured for high-stress, high-load, or high-precision industrial critical applications."
      },
      {
        icon: <Layers size={20} />,
        title: "Specialized Alloy Manufacturing",
        desc: "Expertise machining Hardox, high-tensile alloy steels, and specialized engineering alloys requiring skilled tooling and process control."
      },
      {
        icon: <Target size={20} />,
        title: "Thorough Dimensional Inspection",
        desc: "Heightened QA protocols for special components including verification of all complex features, cross-bores, and critical interfaces."
      },
      {
        icon: <Sliders size={20} />,
        title: "High Load-Bearing Capacity",
        desc: "Material selection and manufacturing process optimized for components operating under high static, dynamic, or impact loads."
      },
      {
        icon: <FileText size={20} />,
        title: "Drawing-Based Manufacturing",
        desc: "Every special component manufactured per customer-supplied engineering drawing with no assumed parameters."
      }
    ]}

    materials={[
      { name: "Hardox", code: "400, 450, 500", note: "For abrasion-resistant special components in extreme wear environments." },
      { name: "Alloy Steel", code: "EN19, EN24, EN31, EN36C", note: "For high-strength special components with demanding mechanical properties." },
      { name: "Stainless Steel", code: "SS 316, 316L, 410", note: "For special components requiring corrosion resistance in critical service." },
      { name: "Aluminium", code: "7075, 6061-T6", note: "For high-strength lightweight special components in critical applications." }
    ]}

    applications={[
      { name: "Mining & Mineral Processing", note: "Critical wear components, crusher parts, and heavy drive components for mining equipment." },
      { name: "Heavy Engineering", note: "Structural and dynamic components for heavy industrial machinery and equipment systems." },
      { name: "Cooling Tower Systems", note: "Critical rotating and structural components for industrial cooling tower assemblies." },
      { name: "Pumps & Valves", note: "Special high-precision components for demanding pumping and valve applications." },
      { name: "General Industrial", note: "Critical bespoke components for diverse machinery requiring specialized engineering." }
    ]}

    specs={[
      { param: "Product Type", value: "Special Engineering Components for Critical Applications", highlight: true },
      { param: "Manufacturing Method", value: "CNC Turning, VMC Milling, Fabrication — complex multi-operation" },
      { param: "Materials", value: "Hardox, High-tensile Alloy Steel, SS, Al — as per specification" },
      { param: "Geometry Complexity", value: "Multi-feature, cross-bored, angled, complex profile — as per drawing" },
      { param: "Drawing Requirement", value: "Customer engineering drawing mandatory — DWG, DXF, STEP, PDF" },
      { param: "Dimensional Tolerances", value: "As per customer drawing — tighter tolerances for critical features" },
      { param: "Inspection Protocol", value: "Enhanced stage-wise inspection for all critical dimensions and features" },
      { param: "Quantity", value: "Prototype through production batch — as per requirement" },
      { param: "Delivery", value: "As per agreed schedule — expedited available for critical requirements" }
    ]}

    qualityImage={qualityImg}
    qualityPoints={[
      "Pre-production engineering review of complex drawing features.",
      "First-article dimensional verification before batch production.",
      "Stage-wise inspection at all critical machining operations.",
      "100% final dimensional inspection for critical specification features.",
      "Special inspection documentation available as per customer QA requirements."
    ]}

    galleryImages={[
      { src: g1, alt: "Special engineering components for critical industrial applications — Maruti Engineering" },
      { src: g2, alt: "Complex precision machining of special engineering components" },
      { src: g3, alt: "VMC milling of specialized engineering components at Maruti Engineering" }
    ]}

    relatedProducts={[
      { name: "Precision Machined Components", category: "Machined", slug: "precision-machined-components", image: relMachinedImg },
      { name: "Customized Engineering Parts", category: "Customized", slug: "customized-parts", image: relCustomImg },
      { name: "Tooling Components & Die Parts", category: "Tooling", slug: "tooling-components", image: relToolingImg }
    ]}
  />
);
