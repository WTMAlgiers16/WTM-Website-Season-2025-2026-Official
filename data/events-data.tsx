export interface EventPartner {
  name: string
  logo: string
  role: string
  description: string
}

export interface EventSpeaker {
  name: string
  role: string
  bio: string
  image: string
}

export interface EventAgendaItem {
  time: string
  activity: string
}

export interface EventImpact {
  participants: number
  skillsLearned?: string[]
  connections?: number
  newConnections?: number
  careerAdvancement?: number
  careerPivots?: number
  mentorshipPairs?: number
  businessPartnerships?: number
  jobOffers?: number
  certificationsPursued?: number
  jobPlacements?: number
  feedback: {
    rating: number
    testimonials: string[]
  }
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  attendees: number
  maxAttendees?: number
  mission: string
  description: string
  fullDescription: string
  image: string
  images?: string[]
  highlights?: string[]
  registrationOpen: boolean
  registrationDeadline?: string
  partners?: EventPartner[]
  agenda?: EventAgendaItem[]
  speakers?: EventSpeaker[]
  impact?: EventImpact
}

export const eventsData = {
  featured: {
    id: 1,
    title: "Women in AI Summit 2024",
    date: "2024-12-15",
    time: "9:00 AM - 6:00 PM",
    location: "Tech Hub, San Francisco",
    attendees: 250,
    maxAttendees: 300,
    mission: "Empowering women to lead in artificial intelligence and machine learning",
    description:
      "Join us for a full-day summit featuring keynotes from leading women in AI, hands-on workshops, and networking opportunities. This is our biggest event of the year!",
    fullDescription: `
      <p>The Women in AI Summit 2024 is our flagship event, bringing together the brightest minds in artificial intelligence and machine learning. This comprehensive day-long summit is designed to inspire, educate, and connect women at all stages of their AI journey.</p>
      
      <h3>What to Expect</h3>
      <p>Our summit features a carefully curated program that balances technical depth with practical insights. You'll hear from industry leaders who are shaping the future of AI, participate in hands-on workshops that will enhance your skills, and network with like-minded professionals who share your passion for technology.</p>
      
      <h3>Key Highlights</h3>
      <ul>
        <li><strong>8 Keynote Speakers:</strong> Featuring CTOs, AI researchers, and startup founders</li>
        <li><strong>15 Technical Workshops:</strong> From beginner-friendly introductions to advanced deep learning</li>
        <li><strong>Startup Pitch Competition:</strong> Watch innovative AI startups compete for funding</li>
        <li><strong>Networking Lunch:</strong> Connect with 300+ attendees in a relaxed setting</li>
        <li><strong>Career Fair:</strong> Meet with top tech companies actively hiring</li>
        <li><strong>Panel Discussions:</strong> Ethics in AI, Future of Work, and Women Leadership</li>
      </ul>
      
      <h3>Who Should Attend</h3>
      <p>This event is perfect for software engineers, data scientists, product managers, researchers, students, and anyone interested in the intersection of AI and gender diversity in tech.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: ["8 Keynote Speakers", "15 Technical Workshops", "Startup Pitch Competition", "Networking Lunch"],
    registrationOpen: true,
    registrationDeadline: "2024-12-10",
    partners: [
      {
        name: "TechCorp AI",
        logo: "/placeholder.svg?height=80&width=120",
        role: "Title Sponsor",
        description: "Leading AI research company providing keynote speakers and workshop facilitators",
      },
      {
        name: "DataFlow Solutions",
        logo: "/placeholder.svg?height=80&width=120",
        role: "Venue Partner",
        description: "Providing the state-of-the-art venue and technical infrastructure",
      },
    ],
    agenda: [
      { time: "9:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "9:30 AM", activity: "Opening Keynote: The Future of AI" },
      { time: "10:30 AM", activity: "Workshop Session 1" },
      { time: "12:00 PM", activity: "Networking Lunch" },
      { time: "1:30 PM", activity: "Panel: Women Leading AI Innovation" },
      { time: "2:30 PM", activity: "Workshop Session 2" },
      { time: "4:00 PM", activity: "Startup Pitch Competition" },
      { time: "5:30 PM", activity: "Closing Remarks & Networking" },
    ],
    speakers: [
      {
        name: "Dr. Sarah Kim",
        role: "Chief AI Officer at TechCorp",
        bio: "Leading AI research with 15+ years experience",
        image: "/placeholder.svg?height=150&width=150",
      },
      {
        name: "Maria Santos",
        role: "Founder of AI Startup",
        bio: "Serial entrepreneur in the AI space",
        image: "/placeholder.svg?height=150&width=150",
      },
    ],
  },

  events: [
    {
  "id": 1,
  "title": "IWD’24 Algiers (International Women’s Day Hub)",
  "date": "2024-03-16",
  "time": "All day (multi‑day event)",
  "location": "École Nationale d’Informatique, Ouled Smar, Algiers, Algeria",
  "attendees": 150,
  "maxAttendees": 200,
  "mission": "Celebrating International Women’s Day through workshops and a hackathon for aspiring women in tech",
  "description": "Multi‑day workshops and a beginner-friendly hackathon to empower women in technology.",
  "fullDescription": `
    <p>Join us for IWD 2024 in Algiers: a three‑day sequence of hands‑on workshops covering topics like T3 Stack, Web Security, GitHub Actions, Generative Modelling, and Docker, plus a scalable hackathon designed for first‑time hackers.</p>
    <h3>Highlights</h3>
    <ul>
      <li>Hands‑on tech workshops</li>
      <li>Beginner‑friendly hackathon</li>
      <li>Networking with local women technologists</li>
    </ul>
    <h3>Ideal For</h3>
    <p>Women developers and students eager to learn and build real‑world projects in a supportive environment.</p>
  `,
  "image": "/images/iwd24.jpg",
  "images": ["/images/iwd24.jpg", "/images/iwd24_hackathon.jpg"],
  "registrationOpen": false,
  "registrationDeadline": "2024-03-10",
  "partners": [
    {
      "name": "GDG Algiers",
      "logo": "/images/gdg_logo.png",
      "role": "Organizer Partner",
      "description": "Local Google Developer Group that co‑organizes the event"
    }
  ],
  "agenda": [
    { "time": "10:00 AM", "activity": "Opening Ceremony & Keynotes" },
    { "time": "11:00 AM", "activity": "Workshop Sessions Begin" },
    { "time": "2:00 PM", "activity": "Hackathon Launch" },
    { "time": "5:00 PM", "activity": "Networking & Closing" }
  ],
  "speakers": [
    {
      "name": "Afaf Kelai",
      "role": "Full Stack Developer",
      "bio": "Experienced developer and speaker focusing on inclusive tech education",
      "image": "/images/afaf_kelai.jpg"
    }
  ]
    },

    {
  "id": 2,
  "title": "IoT Makers Series 2022‑23",
  "date": "2022-12-01",
  "time": "8:00 PM – 9:00 PM (UTC weekly)",
  "location": "Ecole Nationale d’Informatique, Ouled Smar, Algiers (online & onsite)",
  "attendees": 80,
  "maxAttendees": 120,
  "mission": "Introducing women to IoT through a combination of online talks and hands‑on workshops",
  "description": "Online and in‑person talks, sessions, and mini‑projects on IoT basics and applications.",
  "fullDescription": `
    <p>WTM Algiers kicked off a community‑wide IoT learning series from Dec 1, 2022 through Feb 28, 2023. We offered weekly evening talks on Discord and local workshops at the university campus to explore IoT fundamentals, sensors, connectivity, and prototyping.</p>
    <h3>Sessions Included</h3>
    <ul>
      <li>Intro to hardware and sensor modules</li>
      <li>Real‑world IoT use cases and projects</li>
      <li>Hands‑on prototyping workshops</li>
    </ul>
    <h3>Target Audience</h3>
    <p>Women interested in engineering, sensors, smart systems and embedded development with no prior IoT experience required.</p>
  `,
  "image": "/images/iot_series.jpg",
  "images": ["/images/iot_series.jpg", "/images/iot_workshop.jpg"],
  "registrationOpen": false,
  "registrationDeadline": "2022-11-25",
  "partners": [
    {
      "name": "ENP Algiers IEEE Student Branch",
      "logo": "/images/ieee_logo.png",
      "role": "Academic Partner",
      "description": "Provided facility and outreach support at Ecole Nationale d’Informatique"
    }
  ],
  "agenda": [
    { "time": "8:00 PM", "activity": "Weekly Online Talk (Discord)" },
    { "time": "9:00 PM", "activity": "Q&A & Discussion" }
  ],
  "speakers": [
    {
      "name": "Local Faculty & Experts",
      "role": "IoT Mentors",
      "bio": "Guest mentors from local universities and tech organizations guiding practical IoT projects",
      "image": "/images/iot_mentor.jpg"
    }
  ]
    },

    {
      "id": 3,
      "title": "Empowering Women in Tech: DataCamp Partnership",
      "date": "2024-03-04",
      "time": "Variable (self‑paced online)",
      "location": "Online via DataCamp platform",
      "attendees": 100,
      "maxAttendees": 150,
      "mission": "Equipping women with data science and AI skills through free access to DataCamp courses",
      "description": "Access to curated DataCamp coursework supplemented by community support and group projects.",
      "fullDescription": `
        <p>As part of a strategic collaboration, WTM Algiers provided access to DataCamp’s data science and AI courses throughout early 2024. Participants received curated learning paths, mentored group challenges, and opportunities to build portfolios that led to internships and research placements.</p>
        <h3>Included Topics</h3>
        <ul>
          <li>Python for Data Science</li>
          <li>Machine Learning (beginner to intermediate)</li>
          <li>Portfolio‑driven projects and peer reviews</li>
        </ul>
        <h3>Who Should Join</h3>
        <p>Women interested in building data science or AI skills, regardless of prior experience.</p>
      `,
      "image": "/images/datacamp.jpg",
      "images": ["/images/datacamp.jpg", "/images/datacamp_group.jpg"],
      "registrationOpen": false,
      "registrationDeadline": "2024-02-25",
      "partners": [
        {
          "name": "DataCamp",
          "logo": "/images/datacamp_logo.png",
          "role": "Educational Partner",
          "description": "Provided platform access and learning resources to participants"
        }
      ],
      "agenda": [
        { "time": "Flexible", "activity": "Complete assigned modules and quizzes" },
        { "time": "Weekly", "activity": "Community review and mentorship sessions" }
      ],
      "speakers": [
        {
          "name": "WTM Algiers Mentors",
          "role": "Community Guides",
          "bio": "Local volunteer mentors coordinating the learning groups",
          "image": "/images/mentor_team.jpg"
        }
      ]
    },

    {
      id: 5,
      title: "Networking Night: Women in Startups",
      date: "2024-09-20",
      time: "6:00 PM - 9:00 PM",
      location: "Startup Incubator, NYC",
      attendees: 120,
      maxAttendees: 120,
      mission: "Connecting women entrepreneurs and startup professionals",
      description: "Evening networking event focused on women in the startup ecosystem.",
      fullDescription: `
        <p>Our largest networking event of the year brought together women from across the startup ecosystem. From early-stage founders to seasoned executives, this event created meaningful connections that continue to drive innovation in the tech industry.</p>
        
        <h3>Event Highlights</h3>
        <ul>
          <li>Structured networking sessions with icebreaker activities</li>
          <li>Panel discussion on "Scaling Startups with Diverse Teams"</li>
          <li>Startup showcase featuring 8 women-led companies</li>
          <li>Mentorship speed-dating sessions</li>
          <li>Resource sharing and collaboration opportunities</li>
        </ul>
        
        <h3>Lasting Impact</h3>
        <p>The connections made at this event have led to new partnerships, job opportunities, and ongoing mentorship relationships that continue to benefit our community.</p>
      `,
      image: "/placeholder.svg?height=300&width=400",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      registrationOpen: false,
      impact: {
        participants: 120,
        newConnections: 45,
        mentorshipPairs: 25,
        businessPartnerships: 8,
        jobOffers: 12,
        feedback: {
          rating: 4.9,
          testimonials: [
            "Made connections that changed my career trajectory!",
            "Found my co-founder at this event!",
            "The mentorship matching was incredibly valuable.",
          ],
        },
      },
      partners: [
        {
          name: "NYC Startup Incubator",
          logo: "/placeholder.svg?height=60&width=100",
          role: "Venue Partner",
          description: "Provided the modern incubator space and networking facilities",
        },
        {
          name: "Women Founders Network",
          logo: "/placeholder.svg?height=60&width=100",
          role: "Community Partner",
          description: "Co-organized the event and provided speaker connections",
        },
        {
          name: "TechVenture Capital",
          logo: "/placeholder.svg?height=60&width=100",
          role: "Sponsor",
          description: "Sponsored refreshments and provided startup mentorship",
        },
      ],
      speakers: [
        {
          name: "Sarah Williams",
          role: "Founder & CEO of TechStartup",
          bio: "Serial entrepreneur with 3 successful exits",
          image: "/placeholder.svg?height=150&width=150",
        },
        {
          name: "Jennifer Lee",
          role: "Partner at Venture Capital Firm",
          bio: "Investor focused on women-led startups",
          image: "/placeholder.svg?height=150&width=150",
        },
      ],
    },
    {
      id: 6,
      title: "Cybersecurity Workshop",
      date: "2024-08-10",
      time: "1:00 PM - 5:00 PM",
      location: "Tech Campus, Denver",
      attendees: 60,
      maxAttendees: 70,
      mission: "Empowering women to enter the cybersecurity field",
      description: "Comprehensive workshop on cybersecurity basics and career paths.",
      fullDescription: `
        <p>With cybersecurity being one of the fastest-growing fields in tech, this workshop was designed to introduce women to the exciting opportunities in information security. From technical fundamentals to career pathways, participants gained comprehensive insights into this critical field.</p>
        
        <h3>Workshop Content</h3>
        <ul>
          <li>Introduction to cybersecurity principles and frameworks</li>
          <li>Hands-on exercises with security tools and techniques</li>
          <li>Career paths in cybersecurity (technical and non-technical)</li>
          <li>Industry certifications and learning resources</li>
          <li>Building a cybersecurity portfolio</li>
          <li>Networking with cybersecurity professionals</li>
        </ul>
        
        <h3>Career Impact</h3>
        <p>This workshop inspired many participants to pursue cybersecurity careers, with several making successful career transitions within months of attending.</p>
      `,
      image: "/placeholder.svg?height=300&width=400",
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      registrationOpen: false,
      impact: {
        participants: 60,
        careerPivots: 15,
        certificationsPursued: 25,
        newConnections: 30,
        jobPlacements: 8,
        feedback: {
          rating: 4.7,
          testimonials: [
            "Opened my eyes to cybersecurity opportunities!",
            "The hands-on exercises were incredibly valuable.",
            "Great introduction to a complex field.",
          ],
        },
      },
      partners: [
        {
          name: "CyberSec Solutions",
          logo: "/placeholder.svg?height=60&width=100",
          role: "Industry Partner",
          description: "Provided expert instructors and real-world case studies",
        },
        {
          name: "Denver Tech Campus",
          logo: "/placeholder.svg?height=60&width=100",
          role: "Venue Partner",
          description: "Hosted the event with state-of-the-art security lab facilities",
        },
      ],
      speakers: [
        {
          name: "Dr. Michelle Rodriguez",
          role: "Cybersecurity Consultant",
          bio: "Former NSA analyst, now independent security consultant",
          image: "/placeholder.svg?height=150&width=150",
        },
        {
          name: "Lisa Chang",
          role: "CISO at Fortune 500 Company",
          bio: "Leading cybersecurity executive with 15+ years experience",
          image: "/placeholder.svg?height=150&width=150",
        },
      ],
    },
  ] as Event[],
}

// Helper functions for API integration
export const isEventPast = (eventDate: string): boolean => {
  const today = new Date()
  const eventDateObj = new Date(eventDate)
  return eventDateObj < today
}

export const getEventStatus = (event: Event) => {
  if (isEventPast(event.date)) {
    return "past"
  }

  if (event.registrationDeadline && isEventPast(event.registrationDeadline)) {
    return "registration-closed"
  }

  return "upcoming"
}

export const getAllEventsWithStatus = () => {
  const allEvents = [eventsData.featured, ...eventsData.events]
  return allEvents.map((event) => ({
    ...event,
    computedStatus: getEventStatus(event),
    isPast: isEventPast(event.date),
    isRegistrationOpen: event.registrationOpen && !isEventPast(event.registrationDeadline || event.date),
  }))
}

export const getFeaturedEvent = () => {
  const allEvents = getAllEventsWithStatus()
  const upcomingEvents = allEvents.filter((event) => !event.isPast)

  if (upcomingEvents.length > 0) {
    return upcomingEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]
  } else {
    return allEvents
      .filter((event) => event.isPast)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  }
}

export const getEventById = (id: number): Event | null => {
  const allEvents = getAllEventsWithStatus()
  return allEvents.find((event) => event.id === id) || null
}

export const getUpcomingEvents = (): Event[] => {
  return getAllEventsWithStatus().filter((event) => !event.isPast)
}

export const getPastEvents = (): Event[] => {
  return getAllEventsWithStatus().filter((event) => event.isPast)
}
