import React from 'react';
import { FileText, Layers, Cpu, Sliders, Package, CheckCircle2 } from 'lucide-react';
import { ProductDetailLayout } from './ProductDetailLayout';

import heroImg from '../../assets/capabilities/custom_components.jpg';
import cinematicImg from '../../assets/capabilities/precision_machining.jpg';
import qualityImg from '../../assets/quality/quality_inspection.jpg';
import g1 from '../../assets/products/product_custom.jpg';
import g2 from '../../assets/capabilities/custom_components.jpg';
import g3 from '../../assets/about/about_components.jpg';
import relMachinedImg from '../../assets/products/product_machined.jpg';
import relSpecialImg from '../../assets/products/product_special.jpg';
import relAssembliesImg from '../../assets/products/product_assemblies.jpg';

export const CustomizedPartsPage: React.FC = () => (
  <ProductDetailLayout
    seoTitle="Customized Engineering Parts | Drawing-Based Manufacturing | Maruti Engineering"
    seoDescription="Custom-manufactured engineering parts as per client drawings and specifications. Maruti Engineering, Vadodara produces precision customized components across diverse industrial sectors."

    category="CUSTOMIZED COMPONENTS"
    productName="Customized Engineering Parts"
    heroDesc="Custom-manufactured engineering parts strictly engineered to client-specific drawings and operating parameters. Complex geometries, multi-alloy construction, and specialized surface treatments across diverse heavy-engineering applications."
    heroImage={heroImg}
    heroImageAlt="Customized precision engineering parts manufactured at Maruti Engineering"

    overviewTitle="Your Drawing. Our Manufacturing Expertise."
    overviewParagraphs={[
      "At Maruti Engineering, our contract manufacturing model is built entirely around the customer's design requirement. We do not manufacture standard off-the-shelf components — every part we produce is custom-engineered to a specific customer drawing, model, or technical specification. This is our core strength and the reason customers across diverse industrial sectors trust us as their manufacturing partner.",
      "Customized engineering parts encompass a broad range of component types: complex multi-feature turned parts, prismatic VMC-milled housings, intricate cross-bored components, stepped shafts with multiple diameter transitions, machined flanges with precise bolt hole patterns, specialized connectors, and any other geometry that a customer's application demands.",
      "We work closely with our customers from drawing review through production and inspection. Our team reviews each new drawing for manufacturability, advises on material selection where required, and proposes machining sequences that ensure both quality and efficient production. The result is a reliable manufacturing partnership that delivers components exactly as specified — consistently and on schedule."
    ]}

    cinematicImage={cinematicImg}
    cinematicAlt="Customized component precision machining at Maruti Engineering"

    features={[
      {
        icon: <FileText size={20} />,
        title: "Drawing-Based Customization",
        desc: "All customized parts manufactured per client-supplied 2D drawings, 3D CAD models, or technical specifications — no assumptions."
      },
      {
        icon: <Layers size={20} />,
        title: "Multi-Alloy Compatibility",
        desc: "Manufacturing capability across SS, Alloy Steel, Aluminium, Brass, Copper, and Hardox as specified per design requirement."
      },
      {
        icon: <Cpu size={20} />,
        title: "Complex Geometry Capability",
        desc: "Multi-axis CNC turning and VMC milling for complex profiles, pockets, cross-features, and precision bore patterns."
      },
      {
        icon: <Sliders size={20} />,
        title: "Surface Treatment Coordination",
        desc: "Components can be supplied with surface finish requirements including polishing, anodizing, or as-machined as specified."
      },
      {
        icon: <Package size={20} />,
        title: "Prototype to Volume",
        desc: "Single prototype customized parts through to high-volume batch production runs with consistent quality and dimensions."
      },
      {
        icon: <CheckCircle2 size={20} />,
        title: "Complete Material Traceability",
        desc: "Raw material grade verification and traceability documentation available as per customer quality requirements."
      }
    ]}

    materials={[
      { name: "Stainless Steel", code: "SS 304, 316, 316L, 410", note: "For corrosion-resistant and sanitary customized components." },
      { name: "Aluminium", code: "6061-T6, 6082-T6, 7075", note: "For lightweight customized parts with high machinability." },
      { name: "Copper", code: "ETP, Oxygen-Free (OFC)", note: "For electrical conductivity and thermal management components." },
      { name: "Brass", code: "IS 319, CuZn39Pb3", note: "For precision threaded and anti-friction custom components." },
      { name: "Alloy Steel", code: "EN8, EN19, EN24, EN31", note: "For high-strength, load-bearing customized components." },
      { name: "Hardox", code: "400, 450, 500", note: "For extreme wear-resistant customized components." }
    ]}

    applications={[
      { name: "Mining Industry", note: "Custom-machined structural and drive components for mineral processing equipment." },
      { name: "Cooling Towers", note: "Specialized stainless steel and alloy steel custom components for cooling tower systems." },
      { name: "Pumps & Valves", note: "Custom pump housings, valve bodies, impellers, and precision fluid handling components." },
      { name: "Dairy Machinery", note: "Hygienic stainless steel customized parts for food and dairy processing equipment." },
      { name: "Automobile Sector", note: "Custom automotive components, brackets, linkages, and precision drive parts." },
      { name: "General Engineering", note: "Diverse customized components for industrial machinery, equipment, and assembly lines." }
    ]}

    specs={[
      { param: "Product Type", value: "Customized Engineering Components (As per Drawing)", highlight: true },
      { param: "Manufacturing Method", value: "CNC Turning, VMC Milling, Fabrication — as required" },
      { param: "Material", value: "As per customer specification (SS, Alloy Steel, Al, Brass, Cu, Hardox)" },
      { param: "Drawing Format", value: "PDF, DWG, DXF, STEP, IGES — customer supplied" },
      { param: "Dimensions", value: "As per customer drawing — all features per specification" },
      { param: "Surface / Finish", value: "As per customer requirement" },
      { param: "Tolerances", value: "As per customer drawing GD&T specifications" },
      { param: "Quantity", value: "Prototype / batch / volume — as per customer requirement" },
      { param: "Inspection", value: "Dimensional and visual QA per drawing specification" }
    ]}

    qualityImage={qualityImg}
    qualityPoints={[
      "Customer drawing reviewed and confirmed before production commencement.",
      "Raw material grade and traceability verified before machining.",
      "In-process dimensional checks at critical machining stages.",
      "All drawing-specified features verified before final inspection.",
      "Customer-specific quality documentation available on request."
    ]}

    galleryImages={[
      { src: g1, alt: "Customized engineering parts manufactured per customer drawings at Maruti Engineering" },
      { src: g2, alt: "Complex custom machined components in Stainless Steel and Aluminium" },
      { src: g3, alt: "Precision customized components from Maruti Engineering Vadodara" }
    ]}

    relatedProducts={[
      { name: "Precision Machined Components", category: "Machined", slug: "precision-machined-components", image: relMachinedImg },
      { name: "Special Engineering Components", category: "Customized", slug: "special-components", image: relSpecialImg },
      { name: "Mechanical Assemblies & Sub-Units", category: "Assemblies", slug: "mechanical-assemblies", image: relAssembliesImg }
    ]}
  />
);
