export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
    email: string
  }
  isPresident?: boolean
}

export interface TeamData {
  year: number
  members: TeamMember[]
}

export const currentYear = 2025

export const teamData: TeamData = {
  year: currentYear,
  members: [
    {
      id: 1,
      name: "Sarah Sid Ahmed",
      role: "Lead",
      bio: "Leading WTM Algiers with a passion for building inclusive tech communities, backed by expertise in data analysis, Android development, and mentorship.",
      image: "/core-team-pictures/sarah.png",
      social: {
        linkedin: "https://www.linkedin.com/in/sarah-sidmobdev",
        github: "https://github.com/SarahSidAhmed",
        email: "ms_sidahmed@esi.dz",
      },
      isPresident: true,
    },
    {
      id: 2,
      name: "Sarra Bouchama",
      role: "Co-lead",
      bio: "Driving initiatives that empower women in tech while fostering an inclusive and inspiring community.",
      image: "/core-team-pictures/sarra.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/bouchama-sarra-480174260/",
        github: "https://github.com/sarrashine",
        email: "ls_bouchama@esi.dz",
      },
    },
    {
      id: 3,
      name: "Fatima Zouhra Senouci",
      role: "Human Ressources",
      bio: "Managing Human Resources with a commitment to empowering women in tech, while pursuing studies in computer science at ESI Algiers",
      image: "/core-team-pictures/fatima-zahra.jpg",
      social: {
        linkedin: "https://linkedin.com/in/aishapatell",
        github: "https://github.com/aishapatell",
        email: "mf_senouci@esi.dz",
      },
    },
    {
      id: 4,
      name: "Meriem Boussaid",
      role: "Dev & Technical Manager",
      bio: "Responsible for leading and overseeing technical development at WTM Algiers, while being a 4th-year student at ESI Algiers, with strong skills in frontend development.",
      image: "/core-team-pictures/boussaid-meriem.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/meriemboussaid",
        github: "https://github.com/Meriem1551",
        email: "mm_boussaid@esi.dz",
      },
    },
    {
      id: 5,
      name: "Meriem Belaid",
      role: "Dev & Technical Manager",
      bio: "Development Manager, passionate about technology and innovation. 4th-year Computer Science student at ESI Algiers with expertise in frontend technologies.",
      image: "/core-team-pictures/belaid-meriem.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/meriem-belaid-8a2b31278/",
        github: "https://github.com/belaid1meriem",
        email: "mm_belaid@esi.dz",
      },
    },
    {
      id: 6,
      name: "Malak Boukabous",
      role: "Content Creation Manager",
      bio: "Responsible for creating impactful and inspiring content for WTM Algiers, while also pursuing studies as a 4th-year Computer Science student. Skilled as a front-end Android developer.",
      image: "/core-team-pictures/malak.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mm-malekboukabous?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/slaygirlycoder",
        email: "mm_boukabous@esi.dz",
      },
    },
    {
      id: 7,
      name: "Chaima Bounab",
      role: "Content Creation Manager",
      bio: "Passionate about crafting immersive and responsive 3D web interfaces as a Content Creation Manager.",
      image: "/core-team-pictures/chaima.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/chaima-bouneb-986543308",
        github: "https://github.com/chaimabouneb",
        email: "lc_bounab@esi.dz",
      },
    },
    {
      id: 8,
      name: "Yasmine Haouas",
      role: "Events Manager",
      bio: "Leveraging expertise as a Digital Marketer, UGC Creator, and Social Media Strategist to deliver impactful, data-driven events.",
      image: "/core-team-pictures/yasmine.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/haouas-yasmine-102a1825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/yasmine3457 ",
        email: "my_haouas@esi.dz",
      },
    },
    {
      id: 9,
      name: "Sonia Saibi",
      role: "Events Manager",
      bio: "Dedicated to designing and coordinating impactful tech events that inspire, connect, and empower the community.",
      image: "/core-team-pictures/sonia.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/sonia-saibi-547343257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/sonia1828",
        email: "Ms_saibi@esi.dz ",
      },
    },
    {
      id: 10,
      name: "Laetitia Meziani",
      role: "Relex & Sponsor Manager",
      bio: "Building bridges between WTM and industry partners to create opportunities.",
      image: "/core-team-pictures/laetitia.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/laetitia-meziani-1ab327373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/IaniLaetitia",
        email: "ll_meziani@esi.dz",
      },
    },
    {
      id: 11,
      name: "Sara Iratni",
      role: "Communication Manager",
      bio: "Driving clear and engaging messaging to connect, inspire, and grow the community.",
      image: "/core-team-pictures/sara.jpg",
      social: {
        linkedin: " https://www.linkedin.com/in/sara-iratni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/sarairatni",
        email: "ms_iratni@esi.dz",
      },
    },
    {
      id: 12,
      name: "Romaisa Djoghlal",
      role: "Communication Manager",
      bio: "Fostering strong connections and ensuring impactful outreach within the tech community.",
      image: "/core-team-pictures/romaisa.png",
      social: {
        linkedin: "https://www.linkedin.com/in/romaisa-djoghlal-55580b32b/    https://romaisadjoghlal.github.io/my-portfolio/",
        github: "https://github.com/RomaisaDjoghlal",
        email: "mr_djoghlal@esi.dz",
      },
    },
    {
      id: 13,
      name: "Ania Meziane",
      role: "Design Manager",
      bio: "Bringing creativity and visual harmony to every project to inspire and engage the community.",
      image: "/core-team-pictures/ania.jpg",
      social: {
        linkedin: "www.linkedin.com/in/ania-meziane-b05a95323",
        github: "https://github.com/ania6600",
        email: "la_meziane@esi.dz",
      },
    },
    {
      id: 14,
      name: "Jazia Abdelkrim",
      role: "Design Manager",
      bio: "Leveraging 4+ years of UI/UX and graphic design expertise to craft impactful and user-centered visuals for the community.",
      image: "/core-team-pictures/jazia.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/j-abdelkrim",
        github: "https://github.com/jazia-abdelkrim",
        email: "aj.abdelkrim@ensta.edu.dz",
      },
    },
    {
      id: 15,
      name: "Imene Agal",
      role: "Design Manager",
      bio: "Combining a passion for graphic and UI/UX design with hands-on experience gained through active participation in community events.",
      image: "/core-team-pictures/agal-imene.jpg",
      social: {
        linkedin: "www.linkedin.com/in/imene-agal",
        github: "https://github.com/agal04imene",
        email: "mi_agal@esi.dz",
      },
    },
  ],
}

// Helper functions for API integration
export const getTeamMemberById = (id: number): TeamMember | null => {
  return teamData.members.find((member) => member.id === id) || null
}

export const getSortedTeamMembers = (): TeamMember[] => {
  const roleOrder = [
    "President",
    "Vice President & Events Director",
    "Technical Director",
    "Mentorship Manager",
    "Communications Manager",
    "Partnership Manager",
  ]

  return teamData.members.sort((a, b) => {
    const aIndex = roleOrder.findIndex((role) => a.role.includes(role.split(" ")[0]))
    const bIndex = roleOrder.findIndex((role) => b.role.includes(role.split(" ")[0]))
    return aIndex - bIndex
  })
}

export const getTeamMembersByRole = (role: string): TeamMember[] => {
  return teamData.members.filter((member) => member.role.toLowerCase().includes(role.toLowerCase()))
}
