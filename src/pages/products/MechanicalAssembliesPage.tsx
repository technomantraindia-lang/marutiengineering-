import React from 'react';
import { Settings, CheckCircle2, Layers, Target, Package, Wrench } from 'lucide-react';
import { ProductDetailLayout } from './ProductDetailLayout';

import heroImg from '../../assets/products/product_assemblies.jpg';
import cinematicImg from '../../assets/capabilities/precision_machining.jpg';
import qualityImg from '../../assets/quality/quality_inspection.jpg';
import g1 from '../../assets/products/product_assemblies.jpg';
import g2 from '../../assets/capabilities/cnc_turning.jpg';
import g3 from '../../assets/about/about_workshop.jpg';
import relMachinedImg from '../../assets/products/product_machined.jpg';
import relToolingImg from '../../assets/products/product_tooling.jpg';
import relFixturesImg from '../../assets/products/product_fixtures.jpg';

export const MechanicalAssembliesPage: React.FC = () => (
  <ProductDetailLayout
    seoTitle="Mechanical Assemblies & Sub-Units | Precision Engineering | Maruti Engineering"
    seoDescription="Precision mechanical assemblies and integrated sub-units built from CNC machined components. Custom-manufactured at Maruti Engineering, Vadodara, Gujarat as per customer drawings."

    category="ASSEMBLIES & SUB-UNITS"
    productName="Mechanical Assemblies & Sub-Units"
    heroDesc="Complex mechanical sub-assemblies and integrated engineering units built from precision-machined components, fasteners, pins, and custom housings. Ready for direct line assembly according to customer requirements."
    heroImage={heroImg}
    heroImageAlt="Precision mechanical assembly and sub-unit manufactured at Maruti Engineering"

    overviewTitle="Assembled with Precision. Delivered Ready to Install."
    overviewParagraphs={[
      "Mechanical assemblies are multi-component engineering units where dimensional accuracy across individual parts translates into the performance of the complete assembly. At Maruti Engineering, we manufacture and integrate mechanical sub-assemblies and units from precision-machined components produced in our own CNC and VMC machining facilities.",
      "Our assembled units are built strictly according to customer drawings, assembly specifications, and fit/form requirements. The assembly process includes precision alignment, correct fastener torque, bearing fit verification, and drawing-compliant dimensional checks at the assembly stage. This ensures that every sub-unit delivered to the customer is correct, complete, and ready for direct installation on the production line.",
      "We supply mechanical assemblies for industrial customers across Mining, Cooling Towers, Pumps & Valves, and General Engineering sectors where integrated mechanical performance is critical."
    ]}

    cinematicImage={cinematicImg}
    cinematicAlt="Precision component machining for mechanical assembly at Maruti Engineering"

    features={[
      {
        icon: <Settings size={20} />,
        title: "Drawing-Based Assembly",
        desc: "Each assembly is built strictly per customer-supplied assembly drawings, exploded views, and component-level specifications."
      },
      {
        icon: <CheckCircle2 size={20} />,
        title: "Precision Alignment & Fit",
        desc: "Bearing seats, shaft fits, bore concentricity, and clearances verified at every assembly step."
      },
      {
        icon: <Layers size={20} />,
        title: "In-House Component Machining",
        desc: "All component parts machined in our CNC/VMC facility for full dimensional control before assembly."
      },
      {
        icon: <Target size={20} />,
        title: "Assembly Dimensional Verification",
        desc: "Critical assembly parameters such as alignment, squareness, and runout are verified against drawing tolerances."
      },
      {
        icon: <Package size={20} />,
        title: "Line-Ready Sub-Units",
        desc: "Assemblies delivered fully built, inspected, and ready for customer's production or assembly line integration."
      },
      {
        icon: <Wrench size={20} />,
        title: "Multi-Material Integration",
        desc: "Combining SS, Alloy Steel, Hardox, Brass, and other materials within a single assembly as required."
      }
    ]}

    materials={[
      { name: "Alloy Steel", code: "EN8, EN19, EN24, EN31", note: "For high-strength structural and drive components within assemblies." },
      { name: "Stainless Steel", code: "SS 304, 316, 316L", note: "For corrosion-resistant and sanitary assembly applications." },
      { name: "Hardox", code: "400, 450, 500", note: "For wear-resistant components in heavy-duty assembly applications." },
      { name: "Aluminium", code: "6061-T6, 6082-T6", note: "For lightweight assembly housings and structural carriers." },
      { name: "Brass", code: "IS 319, CuZn39Pb3", note: "For bushings, threaded inserts, and anti-friction assembly elements." }
    ]}

    applications={[
      { name: "Mining Equipment", note: "Drive sub-assemblies, shaft-hub units, and structural load-bearing assemblies." },
      { name: "Cooling Towers", note: "Fan drive assemblies, shaft-coupling units, and integrated structural sub-units." },
      { name: "Pumps & Valves", note: "Pump rotating assemblies, valve stem assemblies, and manifold sub-units." },
      { name: "General Engineering", note: "Custom mechanical sub-units for diverse industrial machinery and equipment lines." }
    ]}

    specs={[
      { param: "Product Type", value: "Custom Mechanical Sub-Assembly", highlight: true },
      { param: "Manufacturing Method", value: "CNC Turning + VMC Milling + Manual Assembly" },
      { param: "Component Materials", value: "As per customer drawing specification" },
      { param: "Assembly Drawing", value: "Customer-supplied assembly drawing / exploded view required" },
      { param: "Dimensions / Envelope", value: "As per customer assembly drawing" },
      { param: "Fit Specifications", value: "Bore / shaft fits as per customer drawing (H7/g6, etc.)" },
      { param: "Inspection", value: "Component-level and assembly-level dimensional verification" },
      { param: "Quantity", value: "As per customer requirement" },
      { param: "Packaging", value: "As per customer requirement or standard protective packaging" }
    ]}

    qualityImage={qualityImg}
    qualityPoints={[
      "Individual component inspection before assembly commencement.",
      "Precision alignment verification during assembly stages.",
      "Assembly-level dimensional checks against customer drawings.",
      "Fit and clearance verification for rotating and sliding elements.",
      "Final inspection and visual quality check before packing and dispatch."
    ]}

    galleryImages={[
      { src: g1, alt: "Precision mechanical assembly and sub-unit by Maruti Engineering" },
      { src: g2, alt: "CNC machined component parts for mechanical assembly" },
      { src: g3, alt: "Maruti Engineering manufacturing workshop for assemblies" }
    ]}

    relatedProducts={[
      { name: "Precision Machined Components", category: "Machined", slug: "precision-machined-components", image: relMachinedImg },
      { name: "Tooling Components & Die Parts", category: "Tooling", slug: "tooling-components", image: relToolingImg },
      { name: "Custom Jigs & Fixtures", category: "Fixtures", slug: "jigs-and-fixtures", image: relFixturesImg }
    ]}
  />
);
