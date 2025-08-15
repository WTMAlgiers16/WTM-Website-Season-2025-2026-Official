import { Target, Users, Award, Heart, Lightbulb, Globe } from "lucide-react"
import { AnimatedElement, StaggeredAnimation } from "@/components/animations"

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "We believe everyone deserves a place in tech, regardless of background or experience level.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and support innovative solutions to real-world problems.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build strong connections and support networks that last beyond our events.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We strive to create positive change in the tech industry and broader community.",
  },
]

const milestones = [
  { year: "2019", event: "WTM Chapter Founded", description: "Started by a few passionate women determined to empower the tech community." },
  { year: "2020", event: "First International Women Day celebration + ideathon", description: "+10 mentors and trainers, +50 participants" },
  { year: "2021", event: "Collaborating with GDG Algiers in DevFest 2021", description: "+20 mentors and speakers, +100 participants" },
  { year: "2022", event: "Qiskit Fall Fest Algiers", description: "featuring 5 expert talks and 2 advanced workshops, along with intellectual challenges, +100 attendees" },
  { year: "2023", event: "She shares", description: "+100 attendees" },
  { year: "2024", event: "Reaching +200 members", description: "Proudly crossing the 200-member milestone, marking a new chapter in our community's growth." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="gradient-animate text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Women Techmakers</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Empowering women in technology through community, education, and mentorship since 2020. Learn about our
              journey, values, and vision for the future! 
              {/* 🚀 */}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Women Techmakers began as a small group of passionate women who saw the need for more representation
                    and support in the technology industry. What started as informal meetups has grown into a thriving
                    community of 200+ members.
                  </p>
                  <p>
                    We believe that diversity drives innovation, and when women are empowered to participate fully in
                    technology, everyone benefits. Our community provides the support, resources, and connections needed
                    to help women at all stages of their tech journey.
                  </p>
                  <p>
                    From coding bootcamp graduates to seasoned CTOs, our members represent the full spectrum of the tech
                    industry. Together, we're not just changing careers, we're changing the face of technology itself.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-right">
              <div className="relative">
                <img
                  src="/general-images/aboutPage.png"
                  alt="Women Techmakers community"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#16E7B4] to-[#4FC3F7] rounded-full flex items-center justify-center floating">
                  <Heart className="w-16 h-16 text-white" />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape the culture of our community.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggeredAnimation staggerDelay={150}>
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#42F5C3] to-[#16E7B4] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to a thriving community, here are the key milestones in our story.
              </p>
            </div>
          </AnimatedElement>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#42F5C3] to-[#2B6ED1] rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedElement key={index} animation="fade-in" delay={index * 200}>
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <div className="text-2xl font-bold text-[#03BDA3] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#16E7B4] to-[#4FC3F7] rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-animate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedElement animation="slide-in-left">
              <div className="text-center md:text-left">
                <Target className="w-16 h-16 mb-6 mx-auto md:mx-0" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  To create an inclusive and supportive community where women in technology can learn, grow, and thrive.
                  We provide resources, mentorship, and opportunities that empower women to advance their careers and
                  make meaningful contributions to the technology industry.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-right">
              <div className="text-center md:text-left">
                <Award className="w-16 h-16 mb-6 mx-auto md:mx-0" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  A world where women are equally represented in all areas of technology, where diverse perspectives
                  drive innovation, and where every woman has the support and resources she needs to succeed in her tech
                  journey.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="scale-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Join Our Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of the next chapter in our journey. Together, we can continue to break barriers and create
              opportunities for women in tech!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="fun-button text-lg px-8 py-4">Become a Member</button>
              <button className="bg-gray-100 text-[#03BDA3] px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button> */}
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
