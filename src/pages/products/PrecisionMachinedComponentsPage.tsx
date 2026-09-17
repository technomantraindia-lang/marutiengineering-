import React from 'react';
import { FileText, Wrench, Layers, BarChart2, Eye, RefreshCw } from 'lucide-react';
import { ProductDetailLayout } from './ProductDetailLayout';

// Images
import heroImg from '../../assets/capabilities/cnc_turning.jpg';
import cinematicImg from '../../assets/capabilities/precision_machining.jpg';
import qualityImg from '../../assets/quality/quality_inspection.jpg';
import g1 from '../../assets/products/product_machined.jpg';
import g2 from '../../assets/capabilities/cnc_turning.jpg';
import g3 from '../../assets/capabilities/vmc_milling.jpg';
import relAssembliesImg from '../../assets/products/product_assemblies.jpg';
import relToolingImg from '../../assets/products/product_tooling.jpg';
import relCustomImg from '../../assets/products/product_custom.jpg';

export const PrecisionMachinedComponentsPage: React.FC = () => (
  <ProductDetailLayout
    seoTitle="Precision Machined Components | CNC Turned & VMC Milled | Maruti Engineering"
    seoDescription="High-precision CNC turned and VMC milled components including shafts, flanges, bushings, and housings. Manufactured to customer drawings at Maruti Engineering, Vadodara."

    category="MACHINED COMPONENTS"
    productName="Precision Machined Components"
    heroDesc="High-precision turned and milled parts manufactured strictly according to customer drawings. Shafts, flanges, bushings, precision housings, connectors — engineered for exact dimensional conformance with smooth surface finishes."
    heroImage={heroImg}
    heroImageAlt="Precision CNC turned machined components — shafts and flanges by Maruti Engineering"

    overviewTitle="Engineered Around Your Drawing."
    overviewParagraphs={[
      "Precision machined components form the foundation of critical industrial assemblies across diverse engineering sectors. At Maruti Engineering, we manufacture cylindrical and prismatic machined parts including shafts, flanges, bushings, housings, step bores, and precision connectors using CNC turning centers and Jyoti VMC milling machines with Siemens 828D CNC control.",
      "Every component is manufactured strictly according to the customer-supplied 2D CAD drawing or 3D model. No dimension, tolerance, or material is assumed — every parameter is confirmed with the client before production commences. Our manufacturing team applies a structured multi-stage approach: raw material verification, machining sequence planning, stage-wise in-process inspection, final dimensional QA, and surface finishing before despatch.",
      "We supply machined components to industries including Mining, Cooling Towers, Pumps & Valves, Dairy Machinery, Automobile, and General Engineering across India and export markets."
    ]}

    cinematicImage={cinematicImg}
    cinematicAlt="Precision machining operations at Maruti Engineering CNC workshop"

    features={[
      {
        icon: <FileText size={20} />,
        title: "Drawing-Based Manufacturing",
        desc: "Every component is manufactured according to customer-supplied 2D/3D CAD drawings with full GD&T tolerance compliance."
      },
      {
        icon: <Wrench size={20} />,
        title: "CNC Turning & VMC Milling",
        desc: "Precision operations on LMW CNC Turning Centre and Jyoti VMC 1260P with Siemens 828D for complex geometries."
      },
      {
        icon: <Layers size={20} />,
        title: "Multi-Material Capability",
        desc: "Machining across Stainless Steel, Alloy Steel, Aluminium, Brass, Copper, and Hardox grades per application need."
      },
      {
        icon: <BarChart2 size={20} />,
        title: "Tight Dimensional Tolerances",
        desc: "Consistent micron-level tolerances on OD, ID, bore depth, shoulder faces, threads, and cross-features."
      },
      {
        icon: <Eye size={20} />,
        title: "In-Process Inspection",
        desc: "Stage-wise dimensional checks using calibrated measurement instruments at multiple production phases."
      },
      {
        icon: <RefreshCw size={20} />,
        title: "Batch & Volume Production",
        desc: "Consistent manufacturing from prototype to high-volume batch runs with repeatable quality and dimensional uniformity."
      }
    ]}

    materials={[
      { name: "Stainless Steel", code: "SS 304, 316, 316L, 410", note: "For corrosion-resistant, hygienic, and chemical-exposed components." },
      { name: "Alloy Steel", code: "EN8, EN19, EN24, EN31", note: "For high-strength, load-bearing, and heat-treatable components." },
      { name: "Aluminium", code: "6061-T6, 6082-T6, 7075", note: "For lightweight, machinable, and thermally conductive components." },
      { name: "Brass", code: "IS 319, CuZn39Pb3", note: "For precision threaded, fittings, and low-friction components." },
      { name: "Copper", code: "ETP, OFC Grades", note: "For electrical and thermally conductive applications." },
      { name: "Hardox", code: "400, 450, 500", note: "For extreme wear and abrasion-resistant applications." }
    ]}

    applications={[
      { name: "Mining Equipment", note: "Structural drive shafts, wear-resistant pins, bushings, and heavy housings." },
      { name: "Cooling Towers", note: "Fan hubs, drive couplings, support shafts, and corrosion-resistant fittings." },
      { name: "Pumps & Valves", note: "Pump impellers, valve stems, sealing flanges, precision sleeves." },
      { name: "Automobile", note: "Transmission shafts, precision bushings, mounting flanges, linkage pins." },
      { name: "Dairy Machinery", note: "Sanitary-grade stainless steel shafts, agitator parts, polished housings." },
      { name: "General Engineering", note: "Custom machined parts for diverse industrial machinery and equipment." }
    ]}

    specs={[
      { param: "Product Type", value: "Custom Precision Machined Components", highlight: true },
      { param: "Manufacturing Method", value: "CNC Turning, VMC Milling, Conventional Turning" },
      { param: "Applicable Materials", value: "SS, Alloy Steel, Aluminium, Brass, Copper, Hardox" },
      { param: "Drawing Requirement", value: "Customer-supplied 2D CAD / 3D Model (PDF, DWG, DXF, STEP, IGES)" },
      { param: "Dimensions", value: "As per customer drawing and specification" },
      { param: "Batch Quantity", value: "As per customer requirement (prototype to volume)" },
      { param: "Surface / Finish", value: "As per customer requirement" },
      { param: "Inspection", value: "In-process and final dimensional verification" },
      { param: "Delivery", value: "As per agreed schedule — domestic and export" }
    ]}

    qualityImage={qualityImg}
    qualityPoints={[
      "Dimensional verification at multiple machining stages.",
      "Calibrated measurement instruments for all critical parameters.",
      "Compliance with customer drawing tolerances and GD&T specifications.",
      "Defect-free final inspection before packaging and dispatch.",
      "Customer requirement verification and quality documentation support."
    ]}

    galleryImages={[
      { src: g1, alt: "Precision machined components including shafts and flanges by Maruti Engineering" },
      { src: g2, alt: "CNC turning operations for precision shafts at Maruti Engineering" },
      { src: g3, alt: "VMC milling of complex machined components at Maruti Engineering workshop" }
    ]}

    relatedProducts={[
      { name: "Mechanical Assemblies & Sub-Units", category: "Assemblies", slug: "mechanical-assemblies", image: relAssembliesImg },
      { name: "Tooling Components & Die Parts", category: "Tooling", slug: "tooling-components", image: relToolingImg },
      { name: "Customized Engineering Parts", category: "Customized", slug: "customized-parts", image: relCustomImg }
    ]}
  />
);
