export interface CompanyInfo {
  name: string;
  tagline: string;
  supportingTagline: string;
  established: number;
  location: string;
  fullAddress: string;
  contacts: {
    name: string;
    phone: string;
    displayPhone: string;
  }[];
  email: string;
  description: string;
  corePillars: {
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Maruti Engineering",
  tagline: "From Drawing to Delivery — Precision You Can Trust.",
  supportingTagline: "Precision Engineered. Quality Assured. Customer Focused.",
  established: 1996,
  location: "Vadodara, Gujarat, India",
  fullAddress: "875/6, G.I.D.C. Estate, Makarpura, Vadodara, Gujarat, India – 390010",
  contacts: [
    {
      name: "Mr. Jitendra Bhai Patel",
      phone: "+919924116740",
      displayPhone: "+91 99241 16740"
    },
    {
      name: "Mr. Jayesh Patel",
      phone: "+918401734944",
      displayPhone: "+91 84017 34944"
    }
  ],
  email: "agola.marutiengg@yahoo.com",
  description: "Maruti Engineering is a precision engineering and contract manufacturing company based in Vadodara, Gujarat, India, specializing in the manufacturing of high-precision machined components, assemblies, tooling, fixtures and customized engineering parts as per customer drawings and specifications. Established in 1996, we combine experienced technical expertise, modern CNC/VMC machining capabilities and a strong commitment to quality to deliver reliable engineering solutions for diverse industrial applications.",
  corePillars: [
    {
      title: "Precision Manufacturing",
      description: "State-of-the-art CNC and VMC machining delivering micron-level tolerances strictly as per engineering drawings."
    },
    {
      title: "Wide Material Expertise",
      description: "Extensive machining experience across Stainless Steel, Alloy Steel, Aluminium, Brass, Copper, and Hardox."
    },
    {
      title: "Customer-Centric Approach",
      description: "Dedicated partnership approach with flexibility, responsive communication, and tailored manufacturing workflows."
    },
    {
      title: "On-Time Delivery",
      description: "Streamlined production planning and stage-wise tracking ensuring dependable delivery schedules for domestic and export clients."
    }
  ]
};
