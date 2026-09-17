import cncMachineImg from '../assets/infrastructure/machine_cnc_turning.jpg';
import vmcMachineImg from '../assets/infrastructure/machine_vmc.jpg';
import droMillingImg from '../assets/infrastructure/machine_milling.jpg';
import latheImg from '../assets/infrastructure/machine_lathe.jpg';
import drillingImg from '../assets/infrastructure/machine_drilling.jpg';
import weldingImg from '../assets/infrastructure/machine_welding.jpg';
import supportingImg from '../assets/infrastructure/machine_supporting.jpg';

export interface MachineItem {
  id: string;
  category: string;
  name: string;
  quantity?: string;
  specs: string;
  description: string;
  image: string;
}

export const infrastructureData: MachineItem[] = [
  {
    id: "vmc-jyoti",
    category: "VMC (Vertical Machining)",
    name: "Jyoti CNC VMC 1260P with Siemens 828D",
    quantity: "2 Nos",
    specs: "Siemens 828D CNC Controller | Heavy-duty Column | High Spindle Torque",
    description: "High-precision vertical machining centers delivering exceptional geometric accuracy, complex 3D contouring, and rapid cycle times for intricate engineering components.",
    image: vmcMachineImg
  },
  {
    id: "cnc-lmw",
    category: "CNC Turning",
    name: "LMW CNC Turning Centre",
    quantity: "1 Nos",
    specs: "High Precision Chucking | Rigid Slant Bed | Micro-accuracy Positioning",
    description: "Rigid CNC turning centre designed for continuous precision turning, boring, facing, and profiling with micron-level consistency.",
    image: cncMachineImg
  },
  {
    id: "dro-milling",
    category: "Milling",
    name: "DRO Milling Machine",
    specs: "Digital Readout (DRO) Multi-Axis Display | Universal Milling Head",
    description: "Versatile milling machine equipped with precision Digital Readout systems for accurate face milling, slotting, keyway cutting, and pocketing.",
    image: droMillingImg
  },
  {
    id: "lathe-conventional",
    category: "Conventional Turning",
    name: "Lathe Machines",
    specs: "Heavy-duty Bed | Precision Chuck & Tool Post | Multiple Size Capacities",
    description: "Robust conventional lathe machines for specialized manual turning, rough turning, threading, facing, and customized prototype turning jobs.",
    image: latheImg
  },
  {
    id: "pillar-drilling",
    category: "Drilling",
    name: "Pillar Drilling Machines",
    specs: "Heavy Pillar Column | Multi-speed Gearbox | Precision Depth Stop",
    description: "Industrial pillar drills for clean, accurate hole drilling, counterboring, countersinking, and reaming operations across varying material thicknesses.",
    image: drillingImg
  },
  {
    id: "mig-welding",
    category: "Welding",
    name: "MIG Welding Machine",
    specs: "Continuous Wire Feed | Shielding Gas Control | High-integrity Weld Penetration",
    description: "Precision MIG welding systems delivering strong, defect-free weld joints for structural fabrications and engineering assemblies.",
    image: weldingImg
  },
  {
    id: "supporting-equipment",
    category: "Supporting Equipment",
    name: "Shop-Floor Supporting Equipment",
    specs: "Hand Drills | Industrial Grinders | Hand Press | Tool Post Grinders",
    description: "Complete complement of shop-floor supporting tools ensuring smooth post-machining deburring, polishing, fitting, and pre-assembly preparation.",
    image: supportingImg
  }
];
