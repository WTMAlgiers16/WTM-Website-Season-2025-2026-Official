export interface ContactMethod {
  icon: string
  title: string
  description: string
  contact: string
  color: string
}

export interface FAQ {
  question: string
  answer: string
}

export const contactMethods: ContactMethod[] = [
  {
    icon: "Mail",
    title: "Email Us",
    description: "Drop us a line anytime!",
    contact: "wtm.algiers@esi.dz",
    color: "from-[#42F5C3] to-[#16E7B4]",
  },
  {
    icon: "Phone",
    title: "Call Us",
    description: "Let's have a chat!",
    contact: "+1 (555) 123-4567",
    color: "from-[#6CD0F2] to-[#4FC3F7]",
  },
  {
    icon: "MapPin",
    title: "Visit Us",
    description: "Come say hi in person!",
    contact: "ESI Algiers, Algeria",
    color: "from-[#03BDA3] to-[#24CC9C]",
  },
  {
    icon: "MessageCircle",
    title: "Social Media",
    description: "Follow our journey!",
    contact: "@WomenTechmakers",
    color: "from-[#32A2CC] to-[#2B6ED1]",
  },
]

export const faqs: FAQ[] = [
  {
    question: "How can I join the WTM community?",
    answer:
      "Simply fill out our contact form or join one of our upcoming events! We welcome women at all stages of their tech journey.",
  },
  {
    question: "Do you offer mentorship programs?",
    answer:
      "Yes! We have an active mentorship program that pairs experienced professionals with those looking to grow in their careers.",
  },
  {
    question: "Are your events beginner-friendly?",
    answer: "We design our events to be inclusive and welcoming to everyone, regardless of experience level.",
  },
  {
    question: "How can my company partner with WTM?",
    answer: "Check out our Partners page for detailed information about partnership opportunities and benefits!",
  },
]

export const officeInfo = {
  address: {
    street: "123 Tech Street",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  },
  hours: {
    weekdays: "Mon-Fri: 9 AM - 6 PM",
    weekends: "Weekends: By appointment",
  },
  responseTime: {
    email: "We respond within 24 hours",
    phone: "Mon-Fri, 9 AM - 6 PM PST",
    social: "Daily monitoring",
  },
}
