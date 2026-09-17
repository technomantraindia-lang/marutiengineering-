import machinedImg from '../assets/products/product_machined.jpg';
import assembliesImg from '../assets/products/product_assemblies.jpg';
import toolingImg from '../assets/products/product_tooling.jpg';
import fixturesImg from '../assets/products/product_fixtures.jpg';
import customImg from '../assets/products/product_custom.jpg';
import specialImg from '../assets/products/product_special.jpg';

export interface ProductGroupItem {
  id: string;
  category: "all" | "machined" | "assemblies" | "tooling" | "fixtures" | "customized";
  categoryLabel: string;
  name: string;
  subtitle: string;
  description: string;
  materials: string[];
  features: string[];
  image: string;
  detailSlug: string; // Phase 2: URL slug for product detail page
}

export const productGroupsData: ProductGroupItem[] = [
  {
    id: "machined-components",
    category: "machined",
    categoryLabel: "Machined Components",
    name: "Precision Machined Components",
    subtitle: "Turned & milled parts as per drawings",
    description: "High-precision cylindrical and prismatic machined parts including shafts, flanges, bushings, housings, and precision connectors with tight micron-level tolerances.",
    materials: ["Stainless Steel", "Alloy Steel", "Aluminium", "Brass"],
    features: ["CNC Turned & VMC Milled", "Tolerances up to ±0.01mm", "Smooth surface finish", "Batch consistency"],
    image: machinedImg,
    detailSlug: "precision-machined-components"
  },
  {
    id: "precision-assemblies",
    category: "assemblies",
    categoryLabel: "Assemblies",
    name: "Mechanical Assemblies & Sub-Units",
    subtitle: "Complex engineered assemblies",
    description: "Sub-assemblies and integrated mechanical units built from precision components, fasteners, pins, and custom housings ready for customer line assembly.",
    materials: ["Alloy Steel", "Stainless Steel", "Hardox"],
    features: ["Pre-assembled & tested", "Precision alignment", "Integrated mechanical fit", "Drawing-based testing"],
    image: assembliesImg,
    detailSlug: "mechanical-assemblies"
  },
  {
    id: "tooling-components",
    category: "tooling",
    categoryLabel: "Tooling",
    name: "Tooling Components & Die Parts",
    subtitle: "Durable & precise tooling",
    description: "Specialized tool holders, punches, die components, inserts, and wear parts engineered for extended operational life under repetitive industrial impact.",
    materials: ["Tool Steel", "Alloy Steel", "Hardox"],
    features: ["Heat treated durability", "High wear resistance", "Custom tool profiles", "Strict dimensional control"],
    image: toolingImg,
    detailSlug: "tooling-components"
  },
  {
    id: "jigs-and-fixtures",
    category: "fixtures",
    categoryLabel: "Fixtures",
    name: "Custom Jigs & Fixtures",
    subtitle: "Machining & welding fixtures",
    description: "Tailored manufacturing fixtures, clamping assemblies, checking gauges, and positioning jigs designed for high-efficiency repetitive batch manufacturing.",
    materials: ["Mild Steel", "Alloy Steel", "Aluminium"],
    features: ["Rigid part holding", "Pneumatic/Manual clamping", "High repeatability", "Ergonomic operation"],
    image: fixturesImg,
    detailSlug: "jigs-and-fixtures"
  },
  {
    id: "customized-parts",
    category: "customized",
    categoryLabel: "Customized Components",
    name: "Customized Engineering Parts",
    subtitle: "As per client drawing & specs",
    description: "Custom-manufactured components engineered to client-specific drawings and operating parameters across diverse heavy-engineering and process industries.",
    materials: ["Stainless Steel", "Aluminium", "Copper", "Brass"],
    features: ["Drawing-based customization", "Multiple alloy options", "Surface treatments available", "Complete material traceability"],
    image: customImg,
    detailSlug: "customized-parts"
  },
  {
    id: "special-components",
    category: "customized",
    categoryLabel: "Customized Components",
    name: "Special Engineering Components",
    subtitle: "For critical industrial applications",
    description: "Specialized components requiring multi-axis machining, precision tapping, intricate cross-holes, and specialized alloy fabrication for critical industrial machinery.",
    materials: ["Hardox", "Alloy Steel", "Stainless Steel"],
    features: ["Complex geometry", "High load-bearing capacity", "Critical application design", "Thorough inspection"],
    image: specialImg,
    detailSlug: "special-components"
  }
];
