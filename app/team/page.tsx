import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { AnimatedElement, StaggeredAnimation } from "@/components/animations"
import { teamData, getSortedTeamMembers } from "@/data/team-data"

// Replace the teamMembers array with:
const teamMembers = getSortedTeamMembers()

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="gradient-animate text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our {teamData.year} Team</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The amazing women leading Women Techmakers in {teamData.year}! We're passionate about empowering women in
              technology and building an inclusive community.
               {/* 💜 */}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredAnimation staggerDelay={150}>
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-[#03BDA3] font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                    <div className="flex gap-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 bg-gradient-to-r from-[#42F5C3] to-[#16E7B4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-10 h-10 bg-gradient-to-r from-[#6CD0F2] to-[#4FC3F7] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-10 h-10 bg-gradient-to-r from-[#03BDA3] to-[#24CC9C] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-gradient-to-r from-[#32A2CC] to-[#2B6ED1] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="scale-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate individuals who want to make a difference in the tech community!
            </p>
            <button className="fun-button text-lg px-8 py-4">View Open Positions</button>
          </AnimatedElement>
        </div>
      </section>

      {/* Add a note about yearly updates: */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="fade-in">
            <div className="bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Leadership Transitions</h3>
              <p className="text-gray-600 mb-6">
                Our leadership team is elected annually to bring fresh perspectives and ideas to our community. Each
                year brings new opportunities for growth and innovation!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="fun-button px-6 py-3">Apply for Leadership</button>
                <button className="bg-white text-[#03BDA3] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-[#03BDA3]">
                  View Past Teams
                </button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
