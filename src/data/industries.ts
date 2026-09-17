import miningImg from '../assets/industries/mining.jpg';
import coolingTowersImg from '../assets/industries/cooling_towers.jpg';
import pumpsValvesImg from '../assets/industries/pumps_valves.jpg';
import automobileImg from '../assets/industries/automobile.jpg';
import dairyImg from '../assets/industries/dairy.jpg';
import generalEngineeringImg from '../assets/industries/general_engineering.jpg';

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  keyComponents: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "mining",
    name: "Mining",
    tagline: "Heavy-duty wear-resistant components",
    description: "Precision-machined structural and mechanical parts engineered to withstand abrasive environments and high mechanical stresses in mineral processing equipment.",
    image: miningImg,
    keyComponents: ["Heavy pinions & shafts", "Wear plates & liners", "Crusher components", "Structural brackets"]
  },
  {
    id: "cooling-towers",
    name: "Cooling Towers",
    tagline: "Corrosion-resistant drive & structural parts",
    description: "Precision hubs, drive shafts, fan support assemblies, and specialized stainless steel hardware engineered for continuous duty in humid industrial cooling towers.",
    image: coolingTowersImg,
    keyComponents: ["Fan hub assemblies", "Drive shaft couplings", "Support brackets", "Corrosion-resistant fasteners"]
  },
  {
    id: "pumps-valves",
    name: "Pumps & Valves",
    tagline: "High-pressure fluid handling components",
    description: "Tight-tolerance valve bodies, pump impellers, shafts, and sealing flanges manufactured with precision finishes to prevent leakage under pressure.",
    image: pumpsValvesImg,
    keyComponents: ["Impellers & rotors", "Valve spindles & stems", "Flanged bodies", "Precision sleeves"]
  },
  {
    id: "automobile",
    name: "Automobile",
    tagline: "High-precision powertrain & transmission parts",
    description: "High-repeatability turned and milled automotive components, drive linkages, bushings, and customized brackets meeting strict dimensional tolerances.",
    image: automobileImg,
    keyComponents: ["Transmission shafts", "Precision bushings", "Linkages & pins", "Mounting flanges"]
  },
  {
    id: "dairy-machinery",
    name: "Dairy Machinery",
    tagline: "Sanitary stainless steel precision parts",
    description: "Ultra-clean stainless steel turned and milled components with high surface smoothness designed for hygienic food and dairy processing equipment.",
    image: dairyImg,
    keyComponents: ["Sanitary fittings", "Agitator shafts", "Valve manifolds", "Polished stainless housings"]
  },
  {
    id: "general-engineering",
    name: "General Engineering",
    tagline: "Custom components for diverse machinery",
    description: "Comprehensive manufacturing of customized machine parts, specialized tooling, precision fixtures, and mechanical sub-assemblies for varied industrial equipment.",
    image: generalEngineeringImg,
    keyComponents: ["Custom machined parts", "Tooling fixtures", "Specialized hardware", "Assembly sub-units"]
  }
];
