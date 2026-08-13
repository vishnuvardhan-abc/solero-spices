// ============================================================================
// CAREERS DATA — edit job openings, benefits & HR contact here.
// All values are centralized so they can be updated easily later.
// ============================================================================

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    slug: "marketing-executive",
    title: "Marketing Executive",
    department: "Marketing",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Drive brand growth by promoting our spices and building strong dealer & distributor relationships.",
    responsibilities: [
      "Promote our products",
      "Dealer and distributor outreach",
      "Market research",
      "Brand awareness campaigns",
    ],
  },
  {
    slug: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Grow our online presence through social media, content and performance-driven campaigns.",
    responsibilities: [
      "Social media management",
      "Content creation",
      "Lead generation campaigns",
      "SEO and online marketing",
    ],
  },
  {
    slug: "sales-executive",
    title: "Sales Executive",
    department: "Sales",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Expand retail and wholesale sales while nurturing lasting customer relationships.",
    responsibilities: [
      "Retail and wholesale sales",
      "Distributor management",
      "Customer relationship building",
      "Territory development",
    ],
  },
  {
    slug: "production-supervisor",
    title: "Production Supervisor",
    department: "Production",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Oversee spice production processes and lead the floor team to consistent, quality output.",
    responsibilities: [
      "Manage spice production processes",
      "Ensure quality standards",
      "Team supervision",
      "Production planning",
    ],
  },
  {
    slug: "quality-control-executive",
    title: "Quality Control Executive",
    department: "Quality",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Safeguard product purity and food safety through rigorous inspection and testing.",
    responsibilities: [
      "Product quality inspections",
      "Food safety compliance",
      "Quality documentation",
      "Testing and monitoring",
    ],
  },
  
  {
    slug: "procurement-executive",
    title: "Procurement Executive",
    department: "Procurement",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Source premium raw spices and manage vendors to optimise quality and cost.",
    responsibilities: [
      "Raw spice sourcing",
      "Vendor management",
      "Purchase planning",
      "Cost optimization",
    ],
  },
  {
    slug: "warehouse-inventory-executive",
    title: "Warehouse & Inventory Executive",
    department: "Logistics",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Keep stock accurate and operations smooth across our warehouse and logistics flow.",
    responsibilities: [
      "Inventory tracking",
      "Stock management",
      "Logistics coordination",
      "Warehouse operations",
    ],
  },
  {
    slug: "machine-operator",
    title: "Machine Operator",
    department: "Production",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Operate manufacturing equipment safely and support reliable daily production.",
    responsibilities: [
      "Operate manufacturing equipment",
      "Routine maintenance checks",
      "Production support",
      "Safety compliance",
    ],
  },
  {
    slug: "accounts-administration-executive",
    title: "Accounts & Administration Executive",
    department: "Finance & Admin",
    location: "Hyderabad",
    type: "Full Time",
    description:
      "Support billing, accounting and office administration with accuracy and care.",
    responsibilities: [
      "Billing and accounting support",
      "Office administration",
      "Documentation management",
      "Vendor coordination",
    ],
  },
];

export const benefits = [
  {
    icon: "TrendingUp",
    title: "Growth Opportunities",
    desc: "Clear paths to advance your career as we expand across India.",
  },
  {
    icon: "GraduationCap",
    title: "Learning & Development",
    desc: "Continuous training to sharpen your skills and expertise.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe Working Environment",
    desc: "Hygienic, well-maintained facilities with strict safety standards.",
  },
  {
    icon: "Award",
    title: "Industry Leadership",
    desc: "Be part of a trusted, fast-growing premium spice brand.",
  },
  {
    icon: "Users",
    title: "Team-Oriented Culture",
    desc: "Collaborative, supportive teams that grow together.",
  },
  {
    icon: "Briefcase",
    title: "Long-Term Career Stability",
    desc: "Build a lasting future with a stable, established manufacturer.",
  },
] as const;

// Placeholder HR details — easily editable later.
export const hr = {
  email: "solerospices@gmail.com",
  phone: "+91 040 4852 8671",
  hours: "Mon – Sat: 9:30 AM – 6:00 PM",
} as const;
