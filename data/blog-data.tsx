export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  likes: number
  comments: number
  tags?: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
}

export const blogCategories: BlogCategory[] = [
  { id: "all", name: "All", slug: "all" },
  { id: "career", name: "Career", slug: "career" },
  { id: "technical", name: "Technical", slug: "technical" },
  { id: "leadership", name: "Leadership", slug: "leadership" },
  { id: "mentorship", name: "Mentorship", slug: "mentorship" },
  { id: "personal-growth", name: "Personal Growth", slug: "personal-growth" },
  { id: "ai-future", name: "AI & Future", slug: "ai-future" },
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Breaking Barriers: My Journey from Bootcamp to Tech Lead",
    excerpt:
      "How I navigated the tech industry as a career changer and what I learned along the way. Spoiler: it's all about community and never giving up! 💪",
    content: `
      <p>When I first decided to make the leap into tech, I never imagined I'd be where I am today. The journey from a coding bootcamp graduate to a tech lead has been filled with challenges, victories, and countless learning moments that have shaped not just my career, but who I am as a person.</p>

      <h2>The Beginning: Taking the Leap</h2>
      <p>Like many women in tech, my path wasn't traditional. I started my career in marketing, but I always felt drawn to the technical side of things. When I finally decided to enroll in a coding bootcamp, I was terrified but excited. The imposter syndrome was real – I constantly questioned whether I belonged in this space.</p>

      <p>The bootcamp was intense. Twelve weeks of non-stop learning, building projects, and pushing myself beyond what I thought was possible. But what made the biggest difference wasn't just the technical skills I learned – it was the community I found.</p>

      <h2>Finding My Tribe</h2>
      <p>One of the most transformative moments in my journey was discovering Women Techmakers. Here was a community of women who understood the unique challenges I faced, who celebrated my victories, and who lifted me up when I doubted myself.</p>

      <p>Through WTM, I found mentors who guided me through my first job search, peers who became lifelong friends, and eventually, mentees who reminded me how far I'd come. The power of community cannot be overstated – it's what turned a scary career change into an incredible adventure.</p>

      <h2>The Climb: From Junior to Lead</h2>
      <p>My first job as a junior developer was both exciting and overwhelming. I was the only woman on my team, and while my colleagues were supportive, I often felt like I had to prove myself twice as hard. But I was determined to succeed.</p>

      <p>I threw myself into learning everything I could. I volunteered for challenging projects, asked questions (even when I was afraid they might sound stupid), and slowly but surely, I began to find my confidence. Each small victory built upon the last, and before I knew it, I was being recognized as a valuable team member.</p>

      <h2>Leadership Lessons</h2>
      <p>When I was promoted to tech lead, I realized that technical skills were only part of the equation. Leadership in tech means:</p>
      
      <ul>
        <li><strong>Empowering others:</strong> Creating an environment where everyone can do their best work</li>
        <li><strong>Clear communication:</strong> Translating complex technical concepts for different audiences</li>
        <li><strong>Continuous learning:</strong> Staying curious and adaptable in a rapidly changing field</li>
        <li><strong>Building inclusive teams:</strong> Ensuring diverse voices are heard and valued</li>
      </ul>

      <h2>Paying It Forward</h2>
      <p>Now, as a tech lead, I'm passionate about creating opportunities for other women in tech. I mentor bootcamp graduates, speak at conferences, and work to build more inclusive teams. Every time I help another woman break into tech or advance in her career, I'm reminded of why this work matters.</p>

      <p>The tech industry needs diverse perspectives to solve complex problems. When we create space for women to thrive in technology, we're not just changing individual lives – we're building a better future for everyone.</p>

      <h2>Advice for Your Journey</h2>
      <p>If you're just starting your journey in tech, or if you're looking to advance your career, here's what I wish I had known:</p>

      <ol>
        <li><strong>Embrace the discomfort:</strong> Growth happens outside your comfort zone</li>
        <li><strong>Find your community:</strong> Surround yourself with people who believe in you</li>
        <li><strong>Celebrate small wins:</strong> Every step forward is progress worth acknowledging</li>
        <li><strong>Ask for help:</strong> No one succeeds alone – lean on your network</li>
        <li><strong>Trust yourself:</strong> You belong here, and your perspective matters</li>
      </ol>

      <p>The journey from bootcamp to tech lead wasn't always easy, but it was absolutely worth it. Every challenge taught me something new, every setback made me stronger, and every victory reminded me that with determination and community support, anything is possible.</p>

      <p>To all the women reading this who are considering a career in tech or looking to advance: you've got this. The industry needs you, and we're here to support you every step of the way. 💪</p>
    `,
    author: "Sarah Chen",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Career",
    image: "/placeholder.svg?height=400&width=800",
    likes: 124,
    comments: 18,
    tags: ["Career Growth", "Leadership", "Bootcamp", "Women in Tech", "Mentorship"],
  },
  {
    id: 2,
    title: "The Power of Mentorship in Tech",
    excerpt:
      "Why having a mentor changed everything for me and how you can find yours too. Plus, tips on becoming a mentor yourself! 🌟",
    author: "Maria Rodriguez",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Mentorship",
    image: "/placeholder.svg?height=250&width=400",
    likes: 89,
    comments: 12,
    tags: ["Mentorship", "Career Growth", "Community"],
  },
  {
    id: 3,
    title: "Building Inclusive Tech Teams",
    excerpt:
      "Practical strategies for creating diverse and inclusive engineering teams that actually work. Let's make tech better for everyone! 🤝",
    author: "Dr. Aisha Patel",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Leadership",
    image: "/placeholder.svg?height=250&width=400",
    likes: 156,
    comments: 24,
    tags: ["Leadership", "Diversity", "Team Building"],
  },
  {
    id: 4,
    title: "React Hooks: A Beginner's Guide",
    excerpt:
      "Demystifying React Hooks with fun examples and practical tips. Perfect for developers just starting their React journey! ⚛️",
    author: "Jessica Kim",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Technical",
    image: "/placeholder.svg?height=250&width=400",
    likes: 203,
    comments: 31,
    tags: ["React", "JavaScript", "Frontend", "Tutorial"],
  },
  {
    id: 5,
    title: "Overcoming Imposter Syndrome",
    excerpt:
      "That little voice in your head saying you don't belong? Let's silence it together. You ARE good enough, and here's why! 💜",
    author: "Emily Johnson",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Personal Growth",
    image: "/placeholder.svg?height=250&width=400",
    likes: 178,
    comments: 42,
    tags: ["Personal Growth", "Mental Health", "Confidence"],
  },
  {
    id: 6,
    title: "The Future of Women in AI",
    excerpt:
      "Exploring the exciting opportunities and challenges for women in artificial intelligence. The future is bright, and it's female! 🚀",
    author: "Dr. Lisa Wang",
    date: "February 25, 2024",
    readTime: "8 min read",
    category: "AI & Future",
    image: "/placeholder.svg?height=250&width=400",
    likes: 267,
    comments: 38,
    tags: ["AI", "Machine Learning", "Future Tech", "Women in Tech"],
  },
  {
  id: 7,
  title: "Online Safety Week — WTM Algiers",
  excerpt:
    "A deep dive into WTM Algiers' Online Safety Week, including personal chronicles, expert panels, awareness tips, and practical tools to help protect women online.",
  content: `
    <p><strong>The announcement’s video:</strong><br>
    Online harassment targeting women is increasing on different platforms on the internet. Our goal is to bring women from the local community together and give them more information about online safety, in order to prevent harassment and raise awareness — especially for women.</p>

    <h2>Chronicles’ Video Teaser</h2>
    <p>To raise awareness and provide a deeper view of online harassment, we shared chronicles of female victims:</p>
    <ul>
      <li><strong>Esrae:</strong> A young CS student who was hacked by someone she trusted. Despite the betrayal, she pursued her passion for security and shared her story.</li>
      <li><strong>Murooj:</strong> A victim of both online and real-life harassment who bravely spoke out about her experience.</li>
    </ul>
    <p>Sadly, they’re not alone — many women worldwide face this daily. To end this phenomenon, we must stand together.</p>

    <h2>Participant Video</h2>
    <p>We posted a 6-minute video featuring IDEATHON participants from WTM Algiers. They shared innovative ideas to tackle these issues.</p>

    <h2>Comics for Awareness</h2>
    <p>We published comics that depict real problems like body shaming, hacking, and outing. Each comic offers context and helpful advice or solutions for victims.</p>

    <h2>Online Safety Week Panel</h2>
    <p>Held on <strong>September 26, 2020 at 5 PM</strong>, hosted online by the WTM Algiers team. The panel aimed to address online safety challenges and raise awareness.</p>

    <h3>Panel Guests:</h3>
    <ul>
      <li><strong>Amel Sellami</strong>: ML GDE and online safety hackathon participant</li>
      <li><strong>Amine Rahmani</strong>: Cybersecurity expert, GeCoDe Lab researcher, university lecturer</li>
      <li><strong>Abir Hammache</strong>: Software engineer and WTM Ambassador</li>
    </ul>

    <h3>Key Q&A Highlights</h3>
    <p><strong>What does “online safety” mean?</strong></p>
    <p>Amine Rahmani explained that it's more about privacy than security. Privacy links personal data to identity, making it even more sensitive.</p>

    <p><strong>Is online safety only an issue for celebrities?</strong></p>
    <p>All panelists agreed it affects everyone. Abir and Amel stressed that oversharing increases vulnerability.</p>

    <p><strong>How to identify online harassment?</strong></p>
    <p>According to Amine, it depends on context and devices used. There are subtle signs and varied types of harassment.</p>

    <p><strong>Why is it important to care?</strong></p>
    <p>Because online activity affects all aspects of our lives. Social media makes users — especially women — more exposed.</p>

    <p><strong>Why are women targeted more?</strong></p>
    <p>Abir shared a personal story of backlash after speaking on TV. Amel noted that cultural norms contribute to this inequality and pressure.</p>

    <p><strong>Difference between cyberbullying and bullying?</strong></p>
    <p>Cyberbullying is harder to avoid and leaves digital footprints, whereas regular bullying is often more visible and direct.</p>

    <p><strong>How can ML help with online safety?</strong></p>
    <p>Tools like speech recognition and computer vision can detect hate speech, offensive content, and help reduce harm from shared content.</p>

    <h2>Tips for Staying Safe Online</h2>
    <ul>
      <li>Use strong and unique passwords</li>
      <li>Read privacy policies</li>
      <li>Install VPN extensions for browsers</li>
      <li>Use antivirus and secure tools</li>
      <li>Browse with <strong>Tor</strong> for anonymity</li>
      <li>Use <strong>Privacy Badger</strong> or <strong>Ghostery</strong> to block trackers</li>
    </ul>
    <p>You don’t have to apply all tips at once — pick what suits your situation. Staying safe is a long-term commitment that starts with awareness.</p>
  `,
  author: "Women Techmakers Algiers",
  date: "October  14, 2020",
  readTime: "7 min read",
  category: "Online Safety",
  image: "/placeholder.svg?height=400&width=800", // You can update this
  likes: 76,
  comments: 0,
  tags: ["Online Safety", "Women In Tech", "Privacy", "Cybersecurity", "Awareness"]
},

]

// Helper functions for API integration
export const getBlogPostById = (id: number): BlogPost | null => {
  return blogPosts.find((post) => post.id === id) || null
}

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === "all") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export const getRelatedPosts = (currentCategory: string, currentId: number, limit = 3): BlogPost[] => {
  return blogPosts.filter((post) => post.category === currentCategory && post.id !== currentId).slice(0, limit)
}

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0] // First post is featured
}
