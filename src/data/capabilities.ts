import cncTurningImg from '../assets/capabilities/cnc_turning.jpg';
import vmcMillingImg from '../assets/capabilities/vmc_milling.jpg';
import precisionMachiningImg from '../assets/capabilities/precision_machining.jpg';
import fabricationImg from '../assets/capabilities/fabrication.jpg';
import laserCuttingImg from '../assets/capabilities/laser_cutting.jpg';
import toolingImg from '../assets/capabilities/tooling.jpg';
import jigsFixturesImg from '../assets/capabilities/jigs_fixtures.jpg';
import customComponentsImg from '../assets/capabilities/custom_components.jpg';

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "cnc-turning",
    number: "01",
    title: "CNC Turning",
    subtitle: "Precision turning solutions",
    description: "High-accuracy turning of complex cylindrical components with tight concentricity and smooth surface finishes on high-performance CNC turning centers.",
    image: cncTurningImg,
    features: ["Precision shaft turning", "Boring & internal profiling", "Threading & grooving", "High repeatability"]
  },
  {
    id: "vmc-milling",
    number: "02",
    title: "VMC Milling",
    subtitle: "High-precision 3-axis & multi-axis milling",
    description: "Advanced vertical machining center operations utilizing Siemens 828D control for intricate contours, pockets, precision face milling and 3D geometric shapes.",
    image: vmcMillingImg,
    features: ["Complex profile milling", "Precision hole matrices & tapping", "Tight positional tolerances", "High surface finish"]
  },
  {
    id: "precision-machining",
    number: "03",
    title: "Precision Machining",
    subtitle: "Tolerances built to exact specs",
    description: "End-to-end component machining with meticulous measurement checks to ensure exact conformity to customer drawings and international engineering standards.",
    image: precisionMachiningImg,
    features: ["Micron-level dimensional checks", "Multi-stage machining operations", "Batch & continuous manufacturing", "Drawing compliance"]
  },
  {
    id: "fabrication",
    number: "04",
    title: "Fabrication",
    subtitle: "Custom structural fabrication",
    description: "Quality metal fabrication encompassing precision cutting, forming, welding, and structural assembly for heavy-duty industrial machinery applications.",
    image: fabricationImg,
    features: ["MIG & specialized welding", "Plate & structural fabrication", "Stress-relieved assemblies", "Rugged load capacity"]
  },
  {
    id: "laser-cutting",
    number: "05",
    title: "Laser Cutting",
    subtitle: "Accurate & clean cutting",
    description: "High-speed precision laser cutting for diverse sheet metal thicknesses with burr-free edges, narrow kerf, and minimal heat-affected zones.",
    image: laserCuttingImg,
    features: ["Clean edge quality", "Complex 2D profiles", "Minimal material wastage", "High-speed cycle time"]
  },
  {
    id: "tooling",
    number: "06",
    title: "Tooling",
    subtitle: "Tooling solutions & dies",
    description: "Design and manufacturing of custom tooling, specialized cutters, die inserts, and precision punches engineered for extended industrial operating life.",
    image: toolingImg,
    features: ["Custom tool holders", "Wear-resistant materials", "Precision punch & die assemblies", "Enhanced tool life"]
  },
  {
    id: "jigs-fixtures",
    number: "07",
    title: "Jigs & Fixtures",
    subtitle: "Precision jigs & fixtures",
    description: "Custom manufacturing and machining fixtures engineered to ensure repeatability, rigid part clamping, and high productivity across batch runs.",
    image: jigsFixturesImg,
    features: ["Pneumatic & manual clamping fixtures", "Inspection jigs", "Welding & machining fixtures", "Repeatable accuracy"]
  },
  {
    id: "customized-components",
    number: "08",
    title: "Customized Components",
    subtitle: "As per customer drawings",
    description: "Tailored engineering parts manufactured strictly according to client blueprints, technical specifications, and application-specific operating requirements.",
    image: customComponentsImg,
    features: ["Drawing-based customization", "Diverse alloy compatibility", "Prototypes to volume runs", "Complete traceability"]
  }
];
