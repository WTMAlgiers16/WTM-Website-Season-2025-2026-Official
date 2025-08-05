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

export const currentYear = 2024

export const teamData: TeamData = {
  year: currentYear,
  members: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "President",
      bio: "Leading WTM with passion for building inclusive tech communities. 5+ years in developer relations.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        github: "https://github.com/sarahjohnson",
        email: "sarah@wtm.com",
      },
      isPresident: true,
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Vice President & Events Director",
      bio: "Expert event organizer with a love for bringing people together through technology.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/in/mariarodriguez",
        twitter: "https://twitter.com/mariarodriguez",
        email: "maria@wtm.com",
      },
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      role: "Technical Director",
      bio: "AI researcher and advocate for women in STEM. PhD in Computer Science.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/in/aishapatell",
        github: "https://github.com/aishapatell",
        email: "aisha@wtm.com",
      },
    },
    {
      id: 4,
      name: "Jessica Kim",
      role: "Mentorship Manager",
      bio: "Connecting experienced professionals with emerging talent in tech.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/in/jessicakim",
        twitter: "https://twitter.com/jessicakim",
        email: "jessica@wtm.com",
      },
    },
    {
      id: 5,
      name: "Emily Chen",
      role: "Communications Manager",
      bio: "Storyteller and content creator passionate about amplifying women's voices in tech.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/in/emilychen",
        twitter: "https://twitter.com/emilychen",
        email: "emily@wtm.com",
      },
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Partnership Manager",
      bio: "Building bridges between WTM and industry partners to create opportunities.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/in/lisawang",
        email: "lisa@wtm.com",
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
