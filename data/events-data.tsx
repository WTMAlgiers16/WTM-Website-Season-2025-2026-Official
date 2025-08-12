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
  "title": "IWD’24 Algiers",
  "theme": "Impact the future",
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
      title: "IWD’23",
      theme: "Dare to create a perfect world",
      date: "2023-03-16",
      time: "9:00 AM - 5:00 PM",
      location: "ESI Algiers - Oued Smar",
      attendees: 60,
      maxAttendees: 70,
      mission: "Our 2023 edition aimed to equip participants with cutting-edge technical skills, spark creativity through a hackathon, and empower women to thrive as leaders and innovators in the tech industry.",
      description: "International Women’s Day (IWD) is a global initiative led by Women Techmakers chapters worldwide to celebrate women in technology, foster innovation, and create opportunities for learning and collaboration. ",
      fullDescription: `
        <p>The IWD 2023 Algiers edition brought together tech enthusiasts, developers, and innovators for a day filled with immersive workshops, a high-energy hackathon, and meaningful networking opportunities. Participants engaged with experts in web security, cloud technologies, AI, and software development while collaborating to solve real-world challenges during the hackathon. The event culminated in celebrating the winning teams whose innovative solutions showcased the talent and creativity of our community.</p>
        <h3><strong>Workshops</strong></h3>
        <ul>
          <li>How to Make a Secure Web App?</li>
          <li>Working with Containers: Docker</li>
          <li>GitHub Actions</li>
          <li>Introduction to Generative Modeling</li>
          <li>Build Your First Web Application with the T3 Stack</li>
        </ul>
        <p>Workshops ran in parallel morning and afternoon sessions, giving participants the chance to tailor their learning paths and explore topics from AI modeling to DevOps automation.</p>
        <h3><strong>Hackathon</strong></h3>
        <p>The hackathon challenged participants to design innovative solutions addressing real-world problems, fostering teamwork, problem-solving, and creativity under time constraints.
          Winners were announced at the closing ceremony, with prizes awarded to the most impactful and technically impressive projects, showcasing the diversity of thought and innovation within the community.</p>
        <h3><strong>Highlights</strong></h3>
        <ul>
          <li>Hands-on sessions with industry experts</li>
          <li>Real-world project building during the hackathon</li>
          <li>Networking opportunities with peers and professionals</li>
          <li>Diverse technical topics covering AI, DevOps, and secure web development</li>
        </ul>
        <h3><strong>Impact</strong></h3>
        <p>IWD 2023 empowered participants to expand their technical expertise, gain practical experience, and connect with like-minded innovators. The workshops provided skills immediately applicable to professional projects, while the hackathon fostered creative problem-solving and teamwork. Several participants reported continuing their hackathon projects beyond the event, with some considering startup development, a testament to the event’s lasting influence.</p>
          `
      ,
      image: "/general-images/iwd23.png",
      images: ["/general-images/iwd23-mem5.png", "/general-images/iwd23-mem1.png", "/general-images/iwd23-mem2.png", "/general-images/iwd23-mem3.png", "/general-images/iwd23-mem4.png"],
      registrationOpen: false,
      // impact: {
      //   participants: 60,
      //   careerPivots: 15,
      //   certificationsPursued: 25,
      //   newConnections: 30,
      //   jobPlacements: 8,
      //   feedback: {
      //     rating: 4.7,
      //     testimonials: [
      //       "Opened my eyes to cybersecurity opportunities!",
      //       "The hands-on exercises were incredibly valuable.",
      //       "Great introduction to a complex field.",
      //     ],
      //   },
      // },
      partners: [
        {
          name: "Datacamp",
          logo: "/partners-images/datacamp.png",
          role: "Community Partner and sponsor",
          description: "supports the event by providing resources, expertise, and outreach to help achieve its goals.",
        },
        {
          name: "BEYN",
          logo: "/partners-images/beyn.png",
          role: "Sponsor",
          description: "It highlights both their sponsorship status and their industry expertise.",
        },
        {
          name: "Tie Realistic Security",
          logo: "/partners-images/realistic.jpg",
          role: "Sponsor",
          description: "Hosted the event with state-of-the-art security lab facilities",
        },
      ],
      speakers: [
        {
          name: "Merouan Oussama Abdallah",
          role: "Cybersecurity enthusiast,",
          bio: "5th-year Cybersecurity student at Paris Cité. Passionate about security, active CTF player, and bug bounty hunter.",
          image: "/speakers-images/marouane.jpg",
        },
        {
          name: "Kawther Asma Mahboubi",
          role: "CTO at Emploitic",
          bio: "Software Backend Engineer",// to be changed
          image: "/speakers-images/kawther.png",
        },
        {
          name: "Nada HANAD",
          role: "PhD Student in Cybersecurity & AI, Software Engineer",
          bio: "Software Engineer and Full Stack Developer with a degree in Systems and Software Engineering. Passionate about building efficient, user-focused applications.",
          image: "/speakers-images/nada.jpg",
        },
        {
          name: "Samia Belhaddad",
          role: "Samsung innovation Campus Algeria", //to be changed
          bio: "Final year Master's student in Applied Statistics", // to be changed
          image: "/speakers-images/samia.png",
        },
        {
          name: "Afaf Kelai",
          role: "Software Engineer, Data Scientist, IT Mentor",
          bio: "Full Stack Software Engineer experienced in building high-quality applications with modern web technologies, cloud deployment, and collaborative development workflows.",
          image: "/speakers-images/afaf.png",
        },
      ],
      mentors: [
        {
          name: "Badla Moussaab",
          role: "Flutter developer, Freelancer",
          bio: "Computer science student",// to be changed
          image: "/speakers-images/badla.png",
        },
        {
          name: "Ahmed Yacine Bouchouareb",
          role: "AI & Software Development Engineer",
          bio: "A final-year Computer Science student with experience studying at two of Algeria’s top computer science schools, passionate about technology and software development.",
          image: "/speakers-images/yacine.jpg",
        },
      ]
    },


    {
      id: 7,
      title: "UXCAMP",
      theme: "",
      date: "2022-05-27",
      time: "The whole day (for two days)",
      location: "ESI Algiers - Oued Smar",
      attendees: 44,
      maxAttendees: 50,
      mission: "To inspire and empower emerging talent by providing real-world product challenges that foster creativity, innovation, and problem-solving skills.",
      description: "This competition invites aspiring innovators to tackle live, realistic product challenges in a collaborative and creative environment.",
      fullDescription: `
        <p>A dynamic UX competition where teams choose their own idea and transform it into an innovative, user-centered solution. The journey begins with a series of hands-on workshops led by experts, equipping participants with the skills and insights they need, from research and ideation to prototyping and testing. Teams then put their learning into action, collaborating to design impactful experiences and showcasing their creativity in the final challenge.</p>
        <h3><strong>Impact</strong></h3>
        <p>This competition empowers emerging UX talent to transform real-world challenges into user-centered solutions. It cultivates design thinking, empathy, and creative problem-solving, while fostering collaboration between aspiring designers and industry experts. Participants gain hands-on experience that strengthens their portfolios, sharpens their skills, and prepares them to shape the future of digital experiences.</p>
        `
      ,
      image: "/general-images/uxcamp2.png",
      images: ["/general-images/uxcamp-mem1.png", "/general-images/uxcamp-mem2.png", "/general-images/uxcamp-mem3.png", "/general-images/uxcamp-mem4.png", "/general-images/uxcamp-mem5.png"],
      registrationOpen: false,
      agenda: [
  {
    "time": "Day 1: 8:30am - 9:15am",
    "activity": "Check-in & opening ceremony"
  },
  {
    "time": "9:15am - 9:30am",
    "activity": "Team building & ice-breaker"
  },
  {
    "time": "9:30am - 10:15am",
    "activity": "The basics of UX/UI"
  },
  {
    "time": "10:15am - 10:45am",
    "activity": "Ideas brainstorming"
  },
  {
    "time": "10:45am - 11:15am",
    "activity": "Users needs & product goals workshop"
  },
  {
    "time": "11:15am - 12:00pm",
    "activity": "Reframe your user needs & product goals"
  },
  {
    "time": "12:00pm - 2:00pm",
    "activity": "Lunch break & prayer"
  },
  {
    "time": "2:00pm - 2:30pm",
    "activity": "Mentoring session"
  },
  {
    "time": "2:30pm - 3:00pm",
    "activity": "User journey workshop"
  },
  {
    "time": "3:00pm - 4:00pm",
    "activity": "Two user journey map + wireframing"
  },
  {
    "time": "4:00pm - 4:30pm",
    "activity": "Tea & coffee break"
  },
  {
    "time": "4:30pm - 5:00pm",
    "activity": "Start sketching"
  },
  {
    "time": "5:00pm - 5:30pm",
    "activity": "First day recap"
  },
  {
    "time": "9:00pm - 9:30pm",
    "activity": "First submission"
  },
  {
    "time": "Day 2: 8:30am - 9:00am",
    "activity": "Check-in"
  },
  {
    "time": "9:00am - 9:30am",
    "activity": "First day recap & second day program"
  },
  {
    "time": "9:30am - 11:00am",
    "activity": "Prototype & UI workshop"
  },
  {
    "time": "11:00am - 11:30am",
    "activity": "User testing best practices workshop"
  },
  {
    "time": "11:30am - 12:00pm",
    "activity": "Testing & reporting results"
  },
  {
    "time": "12:00pm",
    "activity": "Second submission deadline"
  },
  {
    "time": "12:00pm - 1:00pm",
    "activity": "Lunch break"
  },
  {
    "time": "1:00pm - 2:00pm",
    "activity": "Preparation of presentations"
  },
  {
    "time": "2:00pm - 2:15pm",
    "activity": "Presentations submissions"
  },
  {
    "time": "2:30pm - 4:30pm",
    "activity": "Pitching"
  },
  {
    "time": "4:30pm - 5:00pm",
    "activity": "Tea & coffee break"
  },
  {
    "time": "5:00pm - 5:30pm",
    "activity": "Judge deliberation & closing ceremony"
  }

],
      // impact: {
      //   participants: 60,
      //   careerPivots: 15,
      //   certificationsPursued: 25,
      //   newConnections: 30,
      //   jobPlacements: 8,
      //   feedback: {
      //     rating: 4.7,
      //     testimonials: [
      //       "Opened my eyes to cybersecurity opportunities!",
      //       "The hands-on exercises were incredibly valuable.",
      //       "Great introduction to a complex field.",
      //     ],
      //   },
      // },
      // partners: [],
      // speakers: [],
      mentors: [
        {
          name: "Belhimer Adel Abderrahmane",
          role: "Product designer at yassir",
          bio: "Senior Product Designer with 5+ years of experience creating user-centered digital products.",
          image: "/speakers-images/adel.jpg",
        },
        {
          name: "Yousra Farhani",
          role: "ESI student, quantum computing research intern",
          bio: "An ambitious Researcher with a research specialization in Quantum Computing focusing on Quantum Optimisation and QML",
          image: "/speakers-images/yousraFarhani.jpg"
        },
        {
          name: "Linda Yadroudj",
          role: "B2B Product Designer",
          bio: "A UI/UX Designer with 3 years of experience working with many companies here in Algeria",
          image: "/speakers-images/linda.jpg",
        },
        {
          name: "Mohamed Chakib Kerri",
          role: "IT and digital Projects Manager", 
          bio: "Passionate about the different strategies and culture of the business world, with experience in contributing to and shaping various aspects of this vast ecosystem",
          image: "/speakers-images/chakib.jpg",
        },
        {
          name: "Ayoub Khenfouf",
          role: "UI/UX designer",
          bio: "Graduate in information systems and technologies with experience in developing ERP solutions based on Odoo, demonstrating the ability to design tailored tools for industry needs.",
          image: "/speakers-images/ayoub.png",
        },
        {
          name: "Aymen Krioudj",
          role: "IT Production & DevOps Engineer",
          bio: "Computer Science Engineer with a passion for the practical application of technology, including significant experience in the development and delivery of high quality software product",
          image: "/speakers-images/aymen.png",
        },
        {
          name: "Asmaa Haidour",
          role: "Data Product Definition Analyst chez Amadeus",
          bio: "Enthusiastic about business needs analysis, dedicated to turning operational challenges into effective IT solutions.",
          image: "/speakers-images/asmaa.jpg",
        },
        {
          name: "Meriem Retiel",
          role: "Computer science engineer",
          bio: "Recently graduated from the Higher National School of Computer Science with a specialization in Information Systems and Technologies, I am passionate about creativity, analysis, and problem-solving.",
          image: "/speakers-images/meriem.jpg",
        },
      ],

    },



    {
      id: 8,
      title: "IWD’22",
      theme: "Progress Not Perfection",
      date: "2022-03-17",
      time: "The whole day (for two days)",
      location: "ESI Algiers - Oued Smar",
      attendees: 38,
      maxAttendees: 50,
      mission: "To celebrate International Women’s Day by creating an inclusive space where women can connect, learn, and grow—featuring engaging activities, inspiring conferences, and our very first hackathon, aimed at fostering innovation and promoting well-being.",
      description: "The second edition of International Women’s Day celebration, featuring fun activities, inspiring talks",
      fullDescription: `
        <p>IWD (International Women’s Day) is an international day celebrating women’s economic, political, and social achievements. To show our pride in the contributions women in technology make across the industry, WTM Algiers created a space for inclusive learning, networking, and professional development.
        For IWD’22, with the theme Progress Not Perfection: Striving for Well-being, the celebration included a variety of fun activities, inspiring conferences, and our first-ever hackathon. The event featured 7 talks that brought together ideas, stories, and insights from diverse voices, ensuring there was something for everyone.</p>
        `
      ,
      image: "/general-images/iwd22.png",
      images: ["/general-images/iwd22-mem1.png", "/general-images/iwd22-mem2.png", "/general-images/iwd22-mem3.png", "/general-images/iwd22-mem4.png"],
      registrationOpen: false,
      agenda: [

        {
    "time": " Day 1: 9:00am - 9:30am",
    "activity": "Opening ceremony"
  },
  {
    "time": "9:30am - 10:30am",
    "activity": "Lean Canvas"
  },
  {
    "time": "10:45am - 11:30am",
    "activity": "How Artificial Intelligence is impacting UX Design",
  },
  {
    "time": "2:00pm - 2:45pm",
    "activity": "Open discussion: Progress not perfection"
  },
  {
    "time": "Day 2: 9:00am - 9:30am",
    "activity": "Opening ceremony"
  },
  {
    "time": "9:30am - 10:30am",
    "activity": "Lean Canvas"
  },
  {
    "time": "10:45am - 11:30am",
    "activity": "How Artificial Intelligence is impacting UX Design",
  },
  {
    "time": "2:00pm - 2:45pm",
    "activity": "Open discussion: Progress not perfection"
  },
  {
    "time": "9:30am - 10:15am",
    "activity": "Kick start your SalesForce Journey",
  },
  {
    "time": "10:30am - 11:15am",
    "activity": "Privacy & Digital Security",
  },
  {
    "time": "11:30am - 12:15pm",
    "activity": "Applying Solid to React",
  },
  {
    "time": "2:30pm - 3:15pm",
    "activity": "Deepfake & its ethical side",
  }
],
      // impact: {
      //   participants: 60,
      //   careerPivots: 15,
      //   certificationsPursued: 25,
      //   newConnections: 30,
      //   jobPlacements: 8,
      //   feedback: {
      //     rating: 4.7,
      //     testimonials: [
      //       "Opened my eyes to cybersecurity opportunities!",
      //       "The hands-on exercises were incredibly valuable.",
      //       "Great introduction to a complex field.",
      //     ],
      //   },
      // },
      partners: [
        {
          name: "Github",
          logo: "/partners-images/github.jpg",
          role: "Sponsor",
          description: "supports the event by providing resources",
        },
        {
          name: "Digital Ocean",
          logo: "/partners-images/ocean.png",
          role: "Sponsor",
          description: "Cloud infrastructure provider",
        },
        {
          name: "LG",
          logo: "/partners-images/lg.png",
          role: "Sponsor",
          description: "Contributing to its success and encouraging innovations",
        },
        {
          name: "OMES Algerie",
          logo: "/partners-images/omes.jpg",
          role: "Sponsor",
          description: "Sponsored the event by leveraging their IT and telecom expertise ",
        },
      ],
      speakers: [
        {
          name: "Abir Hammache",
          role: "Software developer",
          bio: "Fullstack Engineer with a strong foundation in software development and over 5 years of professional experience designing and building consistent and scalable web applications.",
          image: "/speakers-images/abir.jpg",
        },
        {
          name: "Yousra Farhani",
          role: "ESI student, quantum computing research intern",
          bio: "An ambitious Researcher with a research specialization in Quantum Computing focusing on Quantum Optimisation and QML",
          image: "/speakers-images/yousraFarhani.jpg"
        },
        {
          name: "Elbatoul Mazighi",
          role: "Senior Salesforce Consultant",
          bio: "Computer engineer with experience as an ambassador at WTM.",
          image: "/speakers-images/elbatoul.png",
        },
        {
          name: "Noha Nekamiche",
          role: "PhD student at CIAD-LAB @UTBM",
          bio: "A PhD researcher at CIAD Lab, UTBM, France, specializing in domain generalization for semantic segmentation, with expertise in AI, deep learning, computer vision, and experience in leading projects, team management, and real-world problem-solving.",
          image: "/speakers-images/noha.jpg",
        },
        {
          name: "Aymen Krioudj",
          role: "IT Production & DevOps Engineer",
          bio: "Computer Science Engineer with a passion for the practical application of technology, including significant experience in the development and delivery of high quality software product",
          image: "/speakers-images/aymen.png",
        },
        {
          name: "Bilal Retiat",
          role: "Senior Offensive Security Engineer at Emirates",
          bio: "A perpetual learner who enjoys building and breaking things with an appetite for sharing and spreading knowledge.",
          image: "/speakers-images/bilal.jpg"
        },
        {
          name: "Amouri Mohammed Abdessamed",
          role: "Youth Delegate and Project Assistant at the United Nations Development Programme",
          bio: "Youth Development Delegate at 'PNUD' and a product develpment manager at 'Société Générale Algérie'",
          image: "/speakers-images/amouri.jpg",
        },
      ],
      mentors: [
        {
          name: "Abir Bourbia",
          role: "Business Analyst @Orange",
          bio: "State Engineer in Information Systems and Technologies, graduate of ESI, currently pursuing an M2 in MIAGE, Business Intelligence at Paris-Saclay; dynamic, committed, proactive, and organized, seeking a permanent position as an IT Consultant, Business Analyst, Data Analyst, or IT Architect.",
          image: "/speakers-images/abirB.png",
        },
        {
          name: "Ayoub Benaissa",
          role: "Senior Software Engineer at Zama",
          bio: "A polyglot software engineer with a strong background in the crypto and privacy domains, holding a Master's degree in Computer Science.",
          image: "/speakers-images/ayoubB.png"
        },
        {
          name: "Aymen Berriche",
          role: "Research Intern @Thales working on Unlearning",
          bio: "Graduated ESI student and Research Intern at Thales, exploring Unlearning, AI Privacy, and NeuroAI.",
          image: "/speakers-images/aymenB.jpg",
        },
        {
          name: "Bilal Retiat",
          role: "Senior Offensive Security Engineer at Emirates",
          bio: "A perpetual learner who enjoys building and breaking things with an appetite for sharing and spreading knowledge.",
          image: "/speakers-images/bilal.jpg"
        },
        {
          name: "Israa Hamdine",
          role: "Machine Learning Engineer",
          bio: "Graduated student from ESI and Machine Learning Engineer.",
          image: "/speakers-images/israa.png",
        },
        {
          name: "Ayoub Khenfouf",
          role: "UI/UX designer",
          bio: "Graduate in information systems and technologies with experience in developing ERP solutions based on Odoo, demonstrating the ability to design tailored tools for industry needs.",
          image: "/speakers-images/ayoub.png",
        },
        {
          name: "Aymen Krioudj",
          role: "IT Production & DevOps Engineer",
          bio: "Computer Science Engineer with a passion for the practical application of technology, including significant experience in the development and delivery of high quality software product",
          image: "/speakers-images/aymen.png",
        },
        {
          name: "Yousra Farhani",
          role: "ESI student, quantum computing research intern",
          bio: "An ambitious Researcher with a research specialization in Quantum Computing focusing on Quantum Optimisation and QML",
          image: "/speakers-images/yousraFarhani.jpg"
        },
         {
          name: "Redha Amirouche",
          role: "SAP Consultant at KPMG France",
          bio: "Experienced with ABAP, Fiori, CAP, SAP BTP, SAP HANA, JavaScript,",
          image: "/speakers-images/redha.jpg",
        },
        {
          name: "Souhaib Zouambia",
          role: "Software Engineer, Github Campus Expert ",
          bio: "A computer science student passionate about developing creative web applications, exploring data, and continuously learning software engineering and AI to enhance skills and knowledge.",
          image: "/speakers-images/sohaib.jpg",
        },
      ],

    },
    {
      id: 9,
      title: "Dev Fest 2021",
      theme: "",
      date: "2021-11-18",
      time: "Whole day (for 3 days)",
      location: "Fully Online",
      attendees: 38,
      maxAttendees: 50,
      mission: "To inspire and empower aspiring coders, especially women, by providing an engaging competitive programming environment that enhances skills, fosters creativity, and celebrates diversity in technology.",
      description: "WTM Algiers and GDG celebrate Ada Lovelace Day with a competitive programming event featuring workshops, talks, and a hackathon to inspire and empower the tech community.",
      fullDescription: `
        <p>WTM Algiers, in collaboration with GDG, co-organized DevFest, a major annual tech event that brought together developers, students, and professionals. As part of the program, they celebrated Ada Lovelace Day, an occasion dedicated to honoring the contributions of women in technology. The celebration featured a competitive programming competition, along with engaging workshops, insightful talks, and a hackathon, all aimed at enhancing programming skills, fostering creativity, and inspiring the community to explore the vast possibilities of computer science.</p>
        <h3><strong>What is Ada Lovelace Day?</strong></h3>
        <p>Ada Lovelace Day is an international celebration honoring Ada Lovelace, widely regarded as the first computer programmer. It highlights the achievements of women in STEM and encourages participation and recognition in technology and science fields.</p>
        <br>
        <h3><strong>Ada Lovelace Challenge: Ada Lovelace Track</strong></h3>
        <h4><strong>Date:</strong> 19 November 2021</h4>
        <h4><strong>Time:</strong> 5 PM - 11 PM</h4>
        <h4><strong>Location:</strong> On HackerRank</h4>
        <br>
      <h4><strong>Agenda workshops Ada Lovelace</strong></h4>
          <p><strong>november 19, 2021</strong></p>
          <div style="display:flex; gap:20px; align-items:center; margin-top:5px">
            <p style="background-color:#16E7B4; padding:5px; color:white; border-radius:10px">5:00 PM - 11:00 PM</p>
            <p>Launch of the Ada Lovelace challenge</p>
          </div>
          <div style="display:flex; gap:20px; align-items:center; margin-top:10px">
            <p style="background-color:#16E7B4; padding:3px; color:white; border-radius:10px">11:00 PM - 12:00 AM</p>
            <p>Solutions submission</p>
          </div>

        `
      ,
      image: "/general-images/devfest21.jpg",
      images: ["/general-images/devfest-mem1.png", "/general-images/devfest-mem2.png", "/general-images/devfest-mem3.png", "/general-images/devfest-mem4.png", "/general-images/devfest21.png"],
      registrationOpen: false,
      agenda: [
  { "time": "4:30 pm - 6:00 pm", "activity": "Check in" },
  { "time": "6:00 pm - 6:30 pm", "activity": "Opening ceremony" },
  { "time": "6:30 pm - 7:00 pm", "activity": "Hackathon’s presentation" },
  { "time": "7:00 pm - 7:30 pm", "activity": "Ice breaking" },
  { "time": "7:00 pm - 7:45 pm", "activity": "Future of the web platform" },
  { "time": "8:00 pm - 8:45 pm", "activity": "Developer Productivity engineering: apps for low end devices and low connectivity environment" },
  { "time": "8:00 pm - 9:00 pm", "activity": "Dinner" },
  { "time": "9:00 pm - 10:00 pm", "activity": "Introduction to AI applications with SalesForce Einstein" },
  { "time": "10:00 pm - 11:00 pm", "activity": "Mentoring session" },

  { "time": "8:00 am - 9:00 am", "activity": "Breakfast" },
  { "time": "9:00 am - 10:00 am", "activity": "Mentoring session" },
  { "time": "10:00 am - 12:30 pm", "activity": "Workshop: MLkit for developers" },
  { "time": "12:30 pm - 3:00 pm", "activity": "Prayer time + lunch" },
  { "time": "3:00 pm - 5:00 pm", "activity": "Workshop: from model to production" },
  { "time": "6:00 pm - 7:00 pm", "activity": "Reinforcement learning a new breed of ML project" },
  { "time": "6:00 pm - 7:00 pm", "activity": "Dive deep in flutter" },
  { "time": "6:00 pm - 7:00 pm", "activity": "How to navigate the ocean of UX" },
  { "time": "7:00 pm - 7:45 pm", "activity": "Auto ML - A new algorithmic age for ML" },
  { "time": "8:00 pm - 9:00 pm", "activity": "Impactful AI" },
  { "time": "8:30 pm - 9:30 pm", "activity": "Dinner" },
  { "time": "9:00 pm - 9:45 pm", "activity": "DevOps at Netflix" },
  { "time": "9:45 pm - 10:45 pm", "activity": "Distributed ML" },

  { "time": "8:00 am - 9:00 am", "activity": "Breakfast" },
  { "time": "9:00 am - 10:00 am", "activity": "Mentoring session: Public speaking" },
  { "time": "12:00 pm", "activity": "Deadline of submissions" },
  { "time": "12:00 pm - 1:30 pm", "activity": "Lunch break" },
  { "time": "1:30 pm - 4:30 pm", "activity": "Presentation of solutions" },
  { "time": "5:00 pm - 6:30 pm", "activity": "Closing ceremony" }
],
      impact: {
        participants: 36,
        totalProjectsSubmitted: 11,
        // careerPivots: 15,
        // certificationsPursued: 25,
        // newConnections: 30,
        // jobPlacements: 8,
        // feedback: {
        //   rating: 4.7,
        //   testimonials: [
        //     "Opened my eyes to cybersecurity opportunities!",
        //     "The hands-on exercises were incredibly valuable.",
        //     "Great introduction to a complex field.",
        //   ],
        // },
      },
      speakers: [
        {
          name: "Farhi Ayoub",
          role: "Digital marketing expert",
          bio: "Digital marketing expert and stem teacher",
          image: "/speakers-images/farhi.jpg",
        },
        {
          name: "Djamel Rassim Lamouri",
          role: "M.Sc Student in DS & AI @ INP-Ensimag",
          bio: "M.Sc. Student in Data Science & Artificial Intelligence at INP-Ensimag, passionate about solving real-world problems through machine learning, data-driven insights, and innovative AI solutions.",
          image: "/speakers-images/lamouri.jpg"
        },
        {
          name: "Asmaa Haidour",
          role: "Data Product Definition Analyst chez Amadeus",
          bio: "Enthusiastic about business needs analysis, dedicated to turning operational challenges into effective IT solutions.",
          image: "/speakers-images/asmaa.jpg",
        },
        {
          name: "Anis Rouane",
          role: "Java/JS Fullstack Engineer",
          bio: "Passionate about problem-solving through algorithms and turning ideas into programs across various languages and paradigms.",
          image: "/speakers-images/anis.jpg",
        },
        {
          name: "Melissa Boutata",
          role: "Computer Science engineer, Data Engineer, Building Big Data solutions",
          bio: "Computer Science Engineer and Data Engineer, building efficient Big Data solutions.",
          image: "/speakers-images/melissa.jpg",
        },
        {
          name: "Paul Kinlan",
          role: "Lead for Web and Chrome Developer Relations @ Google",
          bio: "An experienced Engineering and Developer Relations leader on Chrome. Passionate about the web the Web and enabling developers and businesses to create sites, apps and products that delight their users and push the capabilities of what we think is possible with technology today.",
          image: "/speakers-images/paul.jpg"
        },
        {
          name: "Justin Reock",
          role: "Deputy CTO at DX",
          bio: "Focused on transforming businesses through developer productivity theory, developer experience optimization, generative AI research, technical leadership, modern devops and platform engineering methodologies, writing, public speaking, training, and enablement.",
          image: "/speakers-images/justin.jpg",
        },
        {
          name: "Abdelghani Lahbib",
          role: "Salesforce Consultant",
          bio: "Salesforce Consultant",
          image: "/speakers-images/lahbib.jpg",
        },
        
        {
          name: "Amine Kerkeni",
          role: "Head of Engineering chez InstaDeep",
          bio: "YSpecialized in software team management, embedded systems design, and embedded Linux solutions.",
          image: "/speakers-images/amine.jpg",
        },
        {
          name: "Hadjer Benmeziane",
          role: "PhD in AutoML, Founder of School of AI Algiers, IBM Research Scientist",
          bio: "Passionate about AI, especially Deep Learning, I spend my free time exploring and building models, and sharing knowledge through workshops.",
          image: "/speakers-images/hadjerBenmeziane.jpg"
        },
        {
          name: "Karim Beguir",
          role: "Co-Founder & CEO at InstaDeep, Ex Google Machine Learning Developer Expert",
          bio: "Co-founder & CEO of InstaDeep, former Google ML Developer Expert.",
          image: "/speakers-images/karim.jpg"
        },
        {
          name: "Tejas Chopra",
          role: "Netflix | EnsolAI | Sustainability Advocate | 2x TEDx",
          bio: "Passionate advocate for sustainable computing, sharing knowledge and insights on AI, cloud, distributed storage, and engineering culture.",
          image: "/speakers-images/tejas.jpg"
        },
        {
          name: "Azzedine Chenine",
          role: "Senior Research Engineer @ InstaDeep, Google Developer Expert in ML, Google for Startups Accelerator Mentor",
          bio: "Applied AI Research Engineer with expertise in machine learning and scalable distributed systems, specializing in deep reinforcement learning for solving complex industry challenges.",
          image: "/speakers-images/chenine.jpg"
        }
      ],
      mentors: [
        {
          name: "Abdelmadjid Bouikken Bahi Amer",
          role: "Software Engineer",
          bio: "Software engineer with a Master's in Computer Software Engineering, experienced in developing mobile and web applications using Kotlin, Spring, Flutter, and React.",
          image: "/speakers-images/bahi.png",
        },
        {
          name: "Ayoub Benaissa",
          role: "Senior Software Engineer at Zama",
          bio: "A polyglot software engineer with a strong background in the crypto and privacy domains, holding a Master's degree in Computer Science.",
          image: "/speakers-images/ayoubB.png"
        },
        {
          name: "Mehdi Djought",
          role: "Artificial Intelligence & Data science engineer",
          bio: "",
          image: "/speakers-images/mehdi.png",
        },
        {
          name: "Nassim Meridja",
          role: "MEng in Computer Systems | Artificial Intelligence | ",
          bio: "Computer Scientist and Engineer, passionate about technology namely AI and Blockchain, looking forward to opportunities to apply my expertise and collaborate on impactful projects.",
          image: "/speakers-images/nassim.png"
        },
        {
          name: "Israa Hamdine",
          role: "Machine Learning Engineer",
          bio: "Graduated student from ESI and Machine Learning Engineer.",
          image: "/speakers-images/israa.png",
        },
        {
          name: "Riad Bensalem",
          role: "Senior IT Consultant at Octodet & Elastic",
          bio: "Senior IT Consultant at Elastic, specializing in Observability and Security projects, with expertise in consultancy, Elastic Stack implementation, and data ingestion pipeline development for varied business needs.",
          image: "/speakers-images/riad.jpg",
        },
        {
          name: "Jihed Hannachi",
          role: "Co-Founder @MajestEYE",
          bio: "Skilled in strategy, digital transformation, and advanced analytics, with experience driving impactful business and technology initiatives.",
          image: "/speakers-images/jihed.png"
        },
         {
          name: "Redha Amirouche",
          role: "SAP Consultant at KPMG France",
          bio: "Experienced with ABAP, Fiori, CAP, SAP BTP, SAP HANA, JavaScript,",
          image: "/speakers-images/redha.jpg",
        },
        {
          name: "Bachir Chahrour",
          role: "Job interview coaching, Business English training",
          bio: "Experienced coach and language tutor dedicated to helping individuals improve their communication skills and achieve professional growth.",
          image: "/speakers-images/bachir.png",
        },
        {
          name: "DjamalEddine Belilet",
          role: "Senior Software Engineer",
          bio: "Polyglot Senior Software Engineer with 7+ years of experience architecting and delivering scalable, high-performance software solutions. Led development of several fully greenfield web/mobile apps, specializing in TypeScript, React and NodeJS.",
          image: "/speakers-images/belilet.jpg",
        },
        {
          name: "Mohamed Habi",
          role: "Data Scientist @Amadeus, MSc Grenoble INP ENSIMAG, Eng ESI",
          bio: "Recent graduate in Computer Science, currently pursuing a Master's in Data Science and AI. Gaining hands-on experience through a Data Science internship in France.",
          image: "/speakers-images/habi.jpg",
        },
                {
          name: "Mohamed Aymen Bergadi",
          role: "Cloud Data Engineer @Keyrus, Azure & GCP Certified Data Engineer",
          bio: "Cloud Data Engineer @Keyrus | Azure & GCP Certified Data Engineer, Certified Snowflake, Databricks Experienced in the entire data lifecycle, skilled in programming, data manipulation, machine learning, and big data technologies.",
          image: "/speakers-images/bergadi.jpg",
        },
      ],
      highlights:[
        "12 mentor",
        "15 speaker",
        "36 student",
      ]
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
