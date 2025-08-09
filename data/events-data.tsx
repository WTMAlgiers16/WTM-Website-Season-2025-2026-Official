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
    id: 100,
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
  "date": "2024-05-24",
  "time": "9:00 AM - 4:00PM",
  "location": "École Nationale d’Informatique, Oued Smar, Algiers, Algeria",
  "attendees": 16,//has to change
  "maxAttendees": 200,//must change
  "mission": "Celebrating International Women’s Day through conferences, talks and a friendly challenge to spark creativity and collaboration.",
  "description": "A day of inspiring conferences, engaging panels, and a friendly challenge to celebrate women in technology.",
  "fullDescription": `
    <p>Join us for <strong>IWD’24 Algiers</strong>, a vibrant celebration of International Women’s Day dedicated to inspiring and empowering women in technology. Hosted at the École Nationale d’Informatique in Algiers, this full-day event blends insightful conferences, engaging discussions, and a creative challenge, all in a welcoming and collaborative environment.</p>

  <p>The day will feature a rich lineup of talks and discussions covering some of today’s most exciting fields in technology. You’ll explore the mathematical foundations that power modern AI in <em>Mathematics for Deep Learning</em>, dive into the fascinating possibilities of <em>Quantum Computing</em>, and discover how breakthroughs in <em>AI hardware</em> are shaping the future of artificial intelligence. We’ll also host an inspiring session on <em>Algerian Women in Tech: Opportunities, Obstacles, and Experience Sharing</em>, where accomplished women from the local tech community will share their journeys, insights, and advice.</p>
  <p>In addition to the talks, participants can join a friendly <strong>Prompt Engineering Challenge</strong>, putting their creativity and problem-solving skills to the test while working with others to design innovative AI prompts. Throughout the day, there will be plenty of opportunities to network, collaborate, and connect with like-minded students, developers, and professionals.</p>
    
  <h3><strong>Highlights</strong></h3>
    <ul>
      <li>A series of conference about the latest technologies</li>
      <li>Panels for you to network with like-minded professionals</li>
      <li>Challenge</li>
    </ul>
    <h3><strong>Ideal For</strong></h3>
    <p>Women developers and students eager to learn and build real‑world projects in a supportive environment.</p>
  `,
  "image": "/general-images/iwd24-index.png",
  "images": ["/general-images/iwdcheckin.png", "/general-images/iwdwelcome.png",  "/general-images/iwd-talk.png",  "/general-images/iwdQC-talk.png"],
  "registrationOpen": false,
  "registrationDeadline": "2024-03-10",//has to change
  "partners": [
    {
      "name": "Alphabit",
      "logo": "/partners-images/bitLogo.png",
      "role": "Organizer Partner",//has to change
      "description": "the scientific club of the Higher School of Computer Science at Sidi Bel Abbes (ESI SBA)."
    }
  ],
  "agenda": [
    { "time": "9:30 AM - 9:50 AM", "activity": "Mathematics for Deep Learning" },
    { "time": "10:00 AM - 10:30 AM", "activity": "Unveiling the mystery of Quantum Computing" },
    { "time": "10:30 AM - 11:30 AM", "activity": "Algerian Women in Tech: Opportunities, Obstacles and Experience sharing" },
    { "time": "1:00 PM - 1:45 PM", "activity": "The futur of AI: Hardware" },
    { "time": "1:50 PM - 2:50 PM", "activity": "Women TechMakers Ambassadors Panel" },
    { "time": "3:00 PM - 4:00 PM", "activity": "Challenge: Prompt Engineering" }
  ],
  "speakers": [
    {
      "name": "Imane Hamzaoui",
      "role": "ESI student, NYUAD research intern",
      "bio": "A research assistant at New York University Abu Dhabi. Holds an engineering and MSc degrees from École nationale Supérieure d'Informatique Algiers in Computer Science with a minor in Intelligent Systems and Data.",
      "image": "/speakers-images/imaneHamzaoui.jpg"
    },
    {
      "name": "Yousra Farhani",
      "role": "ESI student, quantum computing research intern",
      "bio": "An ambitious Researcher with a research specialization in Quantum Computing focusing on Quantum Optimisation and QML",
      "image": "/speakers-images/yousraFarhani.jpg"
    },
    {
      "name": "Lynda Said Lhadj",
      "role": "Information Retrieval and Access, NLP, LLMs, Information Systems Anlysis",
      "bio": "A Computer Science graduate with a focus on Information and Knowledge Systems, later specializing in Information Retrieval. ",
      "image": "/speakers-images/lyndaSaidLhadj.webp"
    },
    {
      "name": "Lina Ferrad",
      "role": "Co-founder of Fatoura App",
      "bio": "Driven to turn life’s struggles into business opportunities, transforming challenges into fuel for innovation and growth.",
      "image": "/speakers-images/linaFerrad.jpg"
    },
    {
      "name": "Hadjer Benmeziane",
      "role": "PhD in AutoML, Founder of School of AI Algiers || IBM Research Scientist",
      "bio": "Passionate about AI, especially Deep Learning, I spend my free time exploring and building models, and sharing knowledge through workshops.",
      "image": "/speakers-images/hadjerBenmeziane.jpg"
    }
  ]
    },

    {


  "id": 2,
  "title": "octoPink 2023",
  "date": "2023-10-27",
  "time": "Every evening (for 3 days)",
  "location": "Youtube and google meet (online)",
  "attendees": 80,
  "maxAttendees": 120,
  "mission": "To deepen awareness and understanding of breast cancer, promote prevention strategies, and showcase innovative technologies aiding in the fight against it.",
  "description": "This three-day event will bring together experts, innovators, and the community to raise awareness about breast cancer and explore how technology is transforming its prevention and treatment. Across the program, participants will attend three inspiring talks led by healthcare professionals and technology pioneers, as well as one interactive workshop designed to provide practical insights and tools.",
  "fullDescription": `
    <p>WTM Algiers organized a special breast cancer awareness and AI learning series from October 27 through November 4, 2023. The program featured insightful talks exploring the intersection of medical imaging and artificial intelligence, as well as a hands-on workshop to apply these concepts in practice.</p>
    <h3><strong>Highlights</strong></h3> 
    <ul>
    <li>Three inspiring talks</li>
    <li>One interactive workshop</li>
    <li>4 informative posts</li>
    </ul>
    `,
  "image": "/general-images/octopink.png",
  "images": [],
  "registrationOpen": false,
  "registrationDeadline": "2023-11-04",
  "partners": [],
  "agenda": [
    { "time": "October 27, 2023 7:30 PM", "activity": "Openeing ceremony" },
    { "time": "October 27, 8:00 PM", "activity": "Talk 1: Breast Cancer and AI: predective medecine" },
    { "time": "October 28, 8:00 PM", "activity": "Talk 2: The role of mammography, ultrasound, MRI, BiRADS system and AI in breast cancer screening" },
    { "time": "October 29, 8:00 PM", "activity": "Talk 3: Breast Cancer" },
    { "time": "November 4, 2023 8:00 PM", "activity": "workshop: Exploring AI for Breast Cancer Diagnosis" },
  ],
  "speakers": [
    {
      "name": "Mohamed El Amine Boudinar",
      "role": "Co-founder of MammaRate",
      "bio": " a skilled mobile developer and data scientist with a strong passion for harnessing technology to improve healthcare outcomes. Combining expertise in app development with advanced data analytics, he focuses on AI-powered predictive medicine, helping to detect and prevent breast cancer more effectively", // to be changed
      "image": "/speakers-images/mohamed-boudinar.png"
    },
    {
      "name": "Amel Bealib",
      "role": "3rd year medical Radiology resident",
      "bio": "Guest mentors from local universities and tech organizations guiding practical IoT projects",//to be changed
      "image": "/speakers-images/amel-bealib.png"
    },
    {
      "name": "Yasmina Lemkeddem",
      "role": "IoT Mentors",
      "bio": "Guest mentors from local universities and tech organizations guiding practical IoT projects",
      "image": ""
    },
    {
      "name": "Maroua BOUGUESSIR",
      "role": "CyberSecurity Engineer, AI Enthusiast",
      "bio": "Cybersecurity Engineer and AI enthusiast committed to advancing secure, intelligent systems.",
      "image": "/speakers-images/maroua.png"
    }
  ]
    },



    {
      "id": 3,
      "title": "Py Pong",
      "date": "2023-05-16",
      "time": "1:00 PM",
      "location": "ESI Algiers",
      "attendees": 100,
      "maxAttendees": 150,
      "mission": "Empowering women in tech by combining learning and recreation through unique, engaging experiences.",
      "description": "WTM Algiers, in collaboration with the Sports and Entertainment Club, presents a special girls-only event blending technology and sports!",
      "fullDescription": `
        <p> Join us for an exciting Python workshop followed by a fun and competitive ping pong tournament. Learn new skills, connect with like-minded peers, and enjoy an unforgettable day of learning and play.</p>
        <h3><strong>Includes</strong></h3>
        <ul>
          <li>A worshop: Introduction to OpenCV: Track the ping pong ball</li>
          <li>A ping pong competition</li>
        </ul>
      `,
      "image": "/general-images/pypong.png",
      "images": ["/general-images/pypong-mem1.png", "/general-images/pypong-mem2.png", "/general-images/pypong-mem3.png"],
      "registrationOpen": false,
      "registrationDeadline": "2024-02-25",
      "partners": [
        {
          "name": "Sports and Entertainment Club",
          "logo": "/general-images/secLogo.jpg",
          "role": "organization Partner",
          "description": "They hosted and managed the ping pong competition for participants."
        }
      ],
      "agenda": [
        { "time": "", "activity": "workshop: Introduction to OpenCV: Track the ping pong ball" },
        { "time": "", "activity": "A ping pong competition" }
      ],
      "speakers": [
        {
          "name": "Imane Hamzaoui",
          "role": "ESI student, NYUAD research intern",
          "bio": "A research assistant at New York University Abu Dhabi. Holds an engineering and MSc degrees from École nationale Supérieure d'Informatique Algiers in Computer Science with a minor in Intelligent Systems and Data.",
          "image": "/speakers-images/imaneHamzaoui.jpg"
        }
      ]
    },

    {
      id: 5,
      title: "QisKit | Fall Fest Algiers",
      date: "2022-10-22",
      time: "9:00 AM - 4:00 PM",
      location: "The 19 hubs of QisKit Fall Fest around the world",
      attendees: 200,
      maxAttendees: 250,
      mission: "Foster awareness, curiosity, and engagement in the field of quantum computing by bringing together students, researchers, and technology enthusiasts.",
      description: "Qiskit Fall Festival Algiers is a dynamic event dedicated to exploring the world of quantum computing",
      fullDescription: `
        <p>The event was a resounding success, leaving a lasting impact on all who attended. Throughout the day, participants engaged in insightful talks, interactive workshops, and networking sessions that sparked new ideas and collaborations. A thrilling competition brought out the best in creativity and innovation, with teams showcasing impressive projects and solutions. The atmosphere was electric as winners were announced and celebrated, their achievements inspiring others to aim higher. Beyond the prizes, the true reward was the sense of community, motivation, and shared passion that will continue to resonate long after the event.</p>
        <h3><strong>Event Highlights</strong></h3>
        <ul>
          <li>5 expert-led talks on quantum computing fundamentals, algorithms, cryptography, and industry use cases.</li>
          <li>2 interactive workshops with hands-on experience in Qiskit and quantum circuit simulation.</li>
          <li>Networking opportunities with students, researchers, and industry professionals.</li>
          <li>Real-world applications of quantum computing in various sectors.</li>
          <li>A competition: set of challenges</li>
          <li>Exclusive learning in a focused one-day format.</li>
        </ul>
        <h3><strong>Lasting Impact</strong></h3>
        <p>The competition brought together participants in a spirit of fun and friendly rivalry, leaving lasting memories and fostering stronger connections. The winners were celebrated, adding an extra touch of excitement to the event.</p>
      `,
      image: "/general-images/qiskit.png",
      images: [
        "/general-images/qiskit-mem1.png",
        "/general-images/qiskit-mem2.png",
        "/general-images/qiskit-mem3.png",
        "/general-images/qiskit-mem4.png"
      ],
      registrationOpen: false,
      // impact: {
      //   participants: 120,
      //   newConnections: 45,
      //   mentorshipPairs: 25,
      //   businessPartnerships: 8,
      //   jobOffers: 12,
      //   feedback: {
      //     rating: 4.9,
      //     testimonials: [
      //       "Made connections that changed my career trajectory!",
      //       "Found my co-founder at this event!",
      //       "The mentorship matching was incredibly valuable.",
      //     ],
      //   },
      // },
      "agenda": [
        {"time": "9:00 AM - 9:30 AM", "activity": "Opening ceremony"},
        {"time": "9:30 AM - 10:00 AM", "activity": "Quantum mechanical concepts for quantum computing"},
        {"time": "10:00 AM - 10:30 AM", "activity": "Intro to Quantum Computing using Qbraid"},
        {"time": "10:30 AM - 11:00 AM", "activity": " Let’s Discover Quantum Computing with Qiskit!"},
        {"time": "11:00 AM - 11:30 AM", "activity": "Industrial Applications of Quantum Computing"},
        {"time": "11:30 AM -  12:00 AM", "activity": "Cryptography in Quantum Computing"},
        {"time": "2:00 PM - 4:00 PM", "activity": "Workshop: Quantum Random Number Generation"},
        {"time": "2:00 PM - 4:00 PM", "activity": "Workshop: Quantum Key Distribution"},
      ],
      partners: [
        {
          name: "CQTech",
          logo: "/partners-images/cqtechLogo.jpg",
          role: " Community Partner",
          description: "Provided the modern incubator space and networking facilities",//to be changed
        },
        {
          name: "qBraid",
          logo: "/partners-images/qbraidLogo.png",
          role: "Sponsor",
          description: "Provides degital education plateform, python packages and learning material",
        },
      ],
      speakers: [
        {
          name: "Mohamed Rouabah",
          role: "ARISE fellow, Principal investigator at CQTech",
          bio: "Serial entrepreneur with 3 successful exits",//to be changed
          image: "/speakers-images/rouabah.png",
        },
        {
          name: "Ricky Young",
          role: "quantum software engineer",
          bio: "Currently studying QC/QI at Stanford",
          image: "/speakers-images/young.jpg",
        },
        {
          name: "Yousra Farhani",
          role: "ESI student, quantum computing research intern",
          bio: "An ambitious Researcher with a research specialization in Quantum Computing focusing on Quantum Optimisation and QML",
          image: "/speakers-images/yousraFarhani.jpg"
        },
                {
          name: "Vardaan Sahgal",
          role: "Quantum Strategy & Solutions Head, Building Global Deep Tech Ecosystems",
          bio: "Leading quantum solutions initiatives, driving enterprise adoption through strategic planning, collaborative research, and global community building.",
          image: "/speakers-images/sahgal.png",
        },
                {
          name: "Mohamed Amine Garrach",
          role: "Post-Quantum Cryptography, Project Lead @ Qubit Engineering",
          bio: "Exploring the intersection of quantum-inspired intelligence, cybersecurity, and energy resilience to shape secure and efficient future energy systems.",
          image: "/speakers-images/amineGarrach.jpg",
        },
      ],
      mentors: [
        {
          name: "Mohamed Messaoud Louamri",
          role: "Ph.D. Student @USTHB • Researcher @CQTech",
          bio: "Interested in the intersection of science and computing, exploring how scientific insights can inspire and advance computing methods.",
          image: "/speakers-images/louamri.png",
        },
        {
          name: "Nacereddine Belaloui",
          role: "PhD Student in Theoretical Physics",
          bio: "PhD Student in Theoretical Physics at costantine university",//ha
          image: "/speakers-images/belaloui.png",
        },
      ],
      trainers :[
        {
          name: "Abdellah Tounsi",
          role: "Phd Student in topological quantum computing at CQTech",
          bio: "Exploring the potentials of quantum algorithms, spanning from NISQ to fault-tolerant quantum computing. Collaborating on interdisciplinary projects",
          image: "/speakers-images/tounsi.jpg",
        },
        {
          name: "Noha Nekamiche",
          role: "PhD student at CIAD-LAB @UTBM",
          bio: "A PhD researcher at CIAD Lab, UTBM, France, specializing in domain generalization for semantic segmentation, with expertise in AI, deep learning, computer vision, and experience in leading projects, team management, and real-world problem-solving.",
          image: "/speakers-images/noha.jpg",
        },
      ]
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
