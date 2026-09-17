export interface MaterialItem {
  id: string;
  name: string;
  code: string;
  description: string;
  characteristics: string[];
  applications: string;
}

export const materialsData: MaterialItem[] = [
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    code: "SS 304, 316, 316L, 410, 420",
    description: "Exceptional corrosion resistance, high tensile strength, and superior thermal durability for demanding sanitary and chemical environments.",
    characteristics: ["Corrosion Resistant", "Sanitary Grade", "High Strength", "Heat Tolerant"],
    applications: "Dairy machinery, pumps & valves, marine, chemical processing components."
  },
  {
    id: "alloy-steel",
    name: "Alloy Steel",
    code: "EN8, EN9, EN19, EN24, EN31, 20MnCr5",
    description: "High mechanical toughness, excellent wear resistance, and high load-bearing capacity tailored for heavy-duty drive mechanisms.",
    characteristics: ["High Toughness", "Wear Resistant", "Heat Treatable", "High Load Capacity"],
    applications: "Power transmission gears, shafts, pinions, heavy engineering assemblies."
  },
  {
    id: "aluminium",
    name: "Aluminium",
    code: "6061-T6, 6082-T6, 7075, Cast Aluminium",
    description: "Lightweight, excellent thermal conductivity, and high machinability ideal for rapid cycle times and weight-critical engineering assemblies.",
    characteristics: ["Lightweight", "High Machinability", "Thermal Conductivity", "Anodizable"],
    applications: "Automotive brackets, cooling tower housings, fixtures, precision casings."
  },
  {
    id: "brass",
    name: "Brass",
    code: "IS 319, CuZn39Pb3, High Tensile Brass",
    description: "Low friction coefficient, superior corrosion resistance in non-acidic environments, and clean thread machinability.",
    characteristics: ["Low Friction", "Anti-Corrosive", "High Precision Threads", "Spark Resistant"],
    applications: "Fluid fittings, bushings, threaded inserts, valve spindles, electrical contacts."
  },
  {
    id: "copper",
    name: "Copper",
    code: "Electrolytic Tough Pitch (ETP), Oxygen-Free (OFC)",
    description: "Outstanding electrical and thermal conductivity with high ductility for specialized electrical and transformer applications.",
    characteristics: ["Superb Conductivity", "High Ductility", "Thermal Efficiency", "Corrosion Resistant"],
    applications: "Transformer components, busbars, electrical terminals, cooling heat sinks."
  },
  {
    id: "hardox",
    name: "Hardox",
    code: "Hardox 400, Hardox 450, Hardox 500",
    description: "Extreme abrasion-resistant and high-impact wear steel designed to withstand intense sliding and impact wear in severe operating conditions.",
    characteristics: ["Extreme Abrasion Resistance", "High Impact Toughness", "Structural Durability", "Extended Lifespan"],
    applications: "Mining equipment liners, wear plates, crusher components, heavy material handling."
  }
];
