export interface HomeStats {
  icon: string
  number: string
  label: string
  color: string
}

export interface MissionStep {
  number: string
  title: string
  description: string
  color: string
}

export interface QuickLink {
  icon: string
  title: string
  description: string
  link: string
  color: string
}

export interface PhotoCarouselItem {
  id: number
  image: string
  title: string
  description: string
}

export const homeStats: HomeStats[] = [
  { icon: "Users", number: "500+", label: "Amazing Women", color: "from-[#42F5C3] to-[#16E7B4]" },
  { icon: "Code", number: "50+", label: "Tech Events", color: "from-[#6CD0F2] to-[#4FC3F7]" },
  { icon: "Heart", number: "100%", label: "Love & Support", color: "from-[#03BDA3] to-[#24CC9C]" },
]

export const missionSteps: MissionStep[] = [
  {
    number: "1",
    title: "Learn & Grow",
    description: "Access workshops, mentorship, and resources to advance your tech career.",
    color: "#16E7B4",
  },
  {
    number: "2",
    title: "Connect & Network",
    description: "Build meaningful relationships with like-minded women in tech.",
    color: "#4FC3F7",
  },
  {
    number: "3",
    title: "Make Impact",
    description: "Use your skills to create positive change in your community and beyond.",
    color: "#03BDA3",
  },
]

export const quickLinks: QuickLink[] = [
  {
    icon: "Calendar",
    title: "Upcoming Events",
    description: "Join our workshops, conferences, and networking sessions",
    link: "/events",
    color: "from-[#42F5C3] to-[#16E7B4]",
  },
  {
    icon: "BookOpen",
    title: "Latest Blogs",
    description: "Read inspiring stories and technical insights from our community",
    link: "/blogs",
    color: "from-[#6CD0F2] to-[#4FC3F7]",
  },
  {
    icon: "Award",
    title: "Our Team",
    description: "Meet the amazing women leading our community",
    link: "/team",
    color: "from-[#03BDA3] to-[#24CC9C]",
  },
]

export const groupPhotos: PhotoCarouselItem[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=800",
    title: "Tech Conference 2024",
    description: "Our amazing team at the annual tech conference",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=800",
    title: "React Workshop",
    description: "Participants from our React fundamentals workshop",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=800",
    title: "Networking Night",
    description: "Building connections at our monthly networking event",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=800",
    title: "Hackathon Winners",
    description: "Celebrating our hackathon champions",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=800",
    title: "Mentorship Program",
    description: "Mentors and mentees from our program",
  },
]
