export interface Partner {
  id: number
  name: string
  logo: string
  website?: string
  description?: string
  partnershipLevel?: "Community" | "Silver" | "Gold" | "Platinum"
}

export interface PartnershipTier {
  name: string
  price: string
  duration?: string
  events?: string
  recipients?: string
  benefits: string[]
  color: string
  icon: string
}

export interface SponsorshipType {
  title: string
  description: string
  benefits: string[]
  packages: PartnershipTier[]
  color: string
  icon: string
}

export const currentPartners: Partner[] = [
  {
    id: 1,
    name: "ESI",
    logo: "/partners-images/ESI.png",
    website: "https://techcorp.com",//must change
    description: "Leading technology company supporting women in tech",//must change
    partnershipLevel: "Platinum",//must change
  },
  {
    id: 2,
    name: "Ooredoo",
    logo: "/partners-images/oredoo.png",
    website: "https://innovatelab.com",//must change
    description: "Innovation hub fostering diversity in technology",//must change
    partnershipLevel: "Gold",//must change
  },
  {
    id: 3,
    name: "Women Techmakers",
    logo: "/partners-images/wtm.png",
    website: "https://codeacademy.com",//must change
    description: "Online learning platform for coding education",//must change
    partnershipLevel: "Silver",//must change
  },
  {
    id: 4,
    name: "Datacamp",
    logo: "/partners-images/datacamp-logo.png",
    website: "https://startuphub.com",
    description: "Startup incubator supporting women entrepreneurs",
    partnershipLevel: "Gold",
  },
  {
    id: 5,
    name: "BEYN",
    logo: "/partners-images/beyn.png",
    website: "https://devtools.com",
    description: "Developer tools company promoting inclusive development",
    partnershipLevel: "Silver",
  },
  {
    id: 6,
    name: "Bit club",
    logo: "/partners-images/bitLogo.png",
    website: "https://cloudtech.com",
    description: "Cloud computing solutions with diversity focus",
    partnershipLevel: "Community",
  },
  {
    id: 7,
    name: "CGEA",
    logo: "/partners-images/cgea.jpeg",
    website: "https://dataflow.com",
    description: "Data analytics platform supporting women in data science",
    partnershipLevel: "Gold",
  },
  {
    id: 8,
    name: "CQTech",
    logo: "/partners-images/cqtechLogo.jpg",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 9,
    name: "Djezzy",
    logo: "/partners-images/djezzy.png",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 10,
    name: "GitHub-Education",
    logo: "/partners-images/gh-education.png",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 11,
    name: "GitHub",
    logo: "/partners-images/github.jpg",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 12,
    name: "LG",
    logo: "/partners-images/lg.png",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
    {
    id: 13,
    name: "Digital Ocean",
    logo: "/partners-images/ocean.png",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
   {
    id: 14,
    name: "Omes Algerie",
    logo: "/partners-images/omes.jpg",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 15,
    name: "QBraid",
    logo: "/partners-images/qbraidLogo.png",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 16,
    name: "Realistic",
    logo: "/partners-images/realistic.jpg",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 17,
    name: "School Of AI",
    logo: "/partners-images/soai.jpg",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
  {
    id: 18,
    name: "Techno Stationery",
    logo: "/partners-images/techno.png",
    website: "https://aitech.com",
    description: "AI research company advancing women in artificial intelligence",
    partnershipLevel: "Platinum",
  },
]

export const sponsorshipTypes: Record<string, SponsorshipType> = {
  "Event Sponsorship": {
    title: "Event Sponsorship",
    description: "Partner with us to sponsor our workshops, conferences, and networking events",
    benefits: [
      "Logo placement on all event materials",
      "Speaking opportunity at sponsored events",
      "Dedicated booth space at conferences",
      "Direct access to event attendees",
      "Social media promotion before, during, and after events",
      "Inclusion in event photography and videography",
      "Access to attendee contact information (with consent)",
      "Opportunity to distribute promotional materials",
    ],
    packages: [
      { name: "Bronze", price: "$2,500", events: "1-2 events per year", benefits: [], color: "", icon: "" },
      { name: "Silver", price: "$5,000", events: "3-4 events per year", benefits: [], color: "", icon: "" },
      { name: "Gold", price: "$10,000", events: "All events + premium placement", benefits: [], color: "", icon: "" },
    ],
    color: "from-[#42F5C3] to-[#16E7B4]",
    icon: "🎯",
  },
  "Community Sponsorship": {
    title: "Community Sponsorship",
    description: "Support our ongoing community initiatives and programs",
    benefits: [
      "Logo on website homepage and all community materials",
      "Monthly social media mentions and features",
      "Inclusion in weekly newsletter (500+ subscribers)",
      "Access to community job board for posting positions",
      "Invitation to exclusive partner networking events",
      "Quarterly impact reports showing your contribution",
      "Co-branding opportunities on community initiatives",
      "Access to community surveys and insights",
    ],
    packages: [
      { name: "Community Friend", price: "$1,000", duration: "6 months", benefits: [], color: "", icon: "" },
      { name: "Community Partner", price: "$2,000", duration: "1 year", benefits: [], color: "", icon: "" },
      { name: "Community Champion", price: "$3,500", duration: "1 year + extras", benefits: [], color: "", icon: "" },
    ],
    color: "from-[#6CD0F2] to-[#4FC3F7]",
    icon: "🌟",
  },
  "Scholarship Sponsorship": {
    title: "Scholarship Sponsorship",
    description: "Fund scholarships for women entering tech programs and bootcamps",
    benefits: [
      "Named scholarship program recognition",
      "Direct mentorship opportunities with scholarship recipients",
      "Access to graduate networking events",
      "Detailed impact reports on scholarship outcomes",
      "Social media features highlighting scholarship impact",
      "Opportunity to participate in selection process",
      "First access to hire scholarship graduates",
      "Tax-deductible contribution documentation",
    ],
    packages: [
      {
        name: "Single Scholarship",
        price: "$2,500",
        recipients: "1 scholarship recipient",
        benefits: [],
        color: "",
        icon: "",
      },
      {
        name: "Scholarship Program",
        price: "$7,500",
        recipients: "3 scholarship recipients",
        benefits: [],
        color: "",
        icon: "",
      },
      {
        name: "Full Cohort Sponsor",
        price: "$15,000",
        recipients: "Full bootcamp cohort support",
        benefits: [],
        color: "",
        icon: "",
      },
    ],
    color: "from-[#03BDA3] to-[#24CC9C]",
    icon: "🎓",
  },
}

// Helper functions for API integration
export const getPartnerById = (id: number): Partner | null => {
  return currentPartners.find((partner) => partner.id === id) || null
}

export const getPartnersByLevel = (level: string): Partner[] => {
  return currentPartners.filter((partner) => partner.partnershipLevel === level)
}

export const getSponsorshipTypeByName = (name: string): SponsorshipType | null => {
  return sponsorshipTypes[name] || null
}
