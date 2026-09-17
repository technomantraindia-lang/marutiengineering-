import qualityImg from '../assets/quality/quality_inspection.jpg';

export interface QualityPolicy {
  heading: string;
  tagline: string;
  principles: string[];
  image: string;
}

export const qualityData: QualityPolicy = {
  heading: "Quality Is Built In.",
  tagline: "Skill and consistency are the basic guidelines of our quality mission.",
  principles: [
    "Achieving customer satisfaction through quality products and timely delivery.",
    "Building quality into every aspect of our work.",
    "Adopting appropriate technology and continuous improvement practices.",
    "Developing employee skills and competence.",
    "Working as a team to achieve organizational objectives."
  ],
  image: qualityImg
};

export interface WhyChooseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: "since-1996",
    title: "Since 1996",
    subtitle: "Long-term manufacturing experience",
    description: "More than three decades of proven engineering expertise, institutional manufacturing knowledge, and long-term client trust."
  },
  {
    id: "custom-engineered",
    title: "Custom Engineered",
    subtitle: "Drawing-based manufacturing",
    description: "Every part is manufactured precisely according to customer drawings, CAD specifications, tolerances, and batch sizes."
  },
  {
    id: "multi-industry",
    title: "Multi-Industry",
    subtitle: "Diverse sector experience",
    description: "Deep domain experience across Mining, Cooling Towers, Pumps & Valves, Automobile, Dairy Machinery, Transformers, and General Engineering."
  },
  {
    id: "material-expertise",
    title: "Material Expertise",
    subtitle: "Wide range of materials",
    description: "Specialized machining capabilities in Stainless Steel, Alloy Steel, Aluminium, Brass, Copper, Hardox, and other engineering materials."
  },
  {
    id: "integrated-support",
    title: "Integrated Support",
    subtitle: "Machining + Tooling + Fabrication",
    description: "End-to-end contract manufacturing partner offering CNC turning, VMC milling, fabrication, laser cutting, tooling, and fixtures under one roof."
  },
  {
    id: "quality-focus",
    title: "Quality Focus",
    subtitle: "Inspection & dimensional verification",
    description: "Dedicated measurement and stage-wise QA inspection ensuring strict adherence to dimensional tolerances and defect-free delivery."
  }
];
