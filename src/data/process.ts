export interface ProcessStepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const processStepsData: ProcessStepItem[] = [
  {
    number: "01",
    title: "Customer Drawing",
    subtitle: "Your Requirement",
    description: "Receipt and review of client 2D CAD drawings, 3D models, technical specifications, GD&T tolerances, and batch volume requirements."
  },
  {
    number: "02",
    title: "Engineering Review",
    subtitle: "Technical Evaluation",
    description: "Detailed manufacturability study, machining sequence planning, tooling & fixture assessment, and optimization for cycle time and quality."
  },
  {
    number: "03",
    title: "Material Selection",
    subtitle: "Right Material for the Job",
    description: "Sourcing verified raw materials (SS, Alloy Steel, Aluminium, Brass, Copper, Hardox) with chemical & mechanical test certifications."
  },
  {
    number: "04",
    title: "Manufacturing",
    subtitle: "Precision Machining & Fabrication",
    description: "Execution on CNC turning centers, Jyoti VMC milling machines, and fabrication lines with stage-wise in-process dimensional control."
  },
  {
    number: "05",
    title: "Inspection",
    subtitle: "Quality Verification",
    description: "Comprehensive QA inspection covering dimensional tolerances, surface roughness, concentricity, and client-specified parameters."
  },
  {
    number: "06",
    title: "Finished Component",
    subtitle: "Ready for Assembly",
    description: "Deburring, cleaning, surface finishing, anti-rust preservation, and export-grade protective packaging."
  },
  {
    number: "07",
    title: "Delivery",
    subtitle: "On-Time to Your Location",
    description: "Safe dispatch and dependable logistics delivery to domestic industrial clients across India and global export destinations."
  }
];
