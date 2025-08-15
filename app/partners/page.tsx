"use client"

import { Building2, Handshake, Star, Users, Trophy, Heart, Mail, Phone, MapPin } from "lucide-react"
import { PartnersCarousel } from "@/components/partners-carousel"
import { SponsorshipModal } from "@/components/sponsorship-modal"
import { useState } from "react"

const partnerBenefits = [
  {
    icon: Users,
    title: "Access to Talent",
    description: "Connect with skilled women developers, designers, and tech professionals in our community.",
  },
  {
    icon: Star,
    title: "Brand Visibility",
    description: "Showcase your commitment to diversity and inclusion to our engaged community of 500+ members.",
  },
  {
    icon: Trophy,
    title: "Event Sponsorship",
    description: "Sponsor our workshops, conferences, and networking events to reach your target audience.",
  },
  {
    icon: Handshake,
    title: "Collaboration Opportunities",
    description: "Partner with us on initiatives that make a real impact in the tech community.",
  },
]

export default function PartnersPage() {
  // Add state for modal at the top of the component
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedSponsorship, setSelectedSponsorship] = useState("")

  const handleLearnMore = (sponsorshipType: string) => {
    setSelectedSponsorship(sponsorshipType)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="floating mb-6">
            <Building2 className="w-16 h-16 mx-auto text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Become Our Partner</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join us in empowering women in technology! Partner with WTM to make a meaningful impact while connecting
            with amazing talent and growing your brand. 
            {/* 🤝 */}
          </p>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you partner with Women Techmakers, you're not just supporting diversity, you're investing in the
              future of technology! 
              {/* 🚀 */}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Sponsorship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Support our mission and gain visibility in the tech community through various sponsorship opportunities!
              {/* 🤝 */}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Event Sponsorship",
                description: "Sponsor our workshops, conferences, and networking events",
                features: ["Logo placement", "Speaking opportunities", "Booth space", "Direct attendee access"],
                color: "from-[#42F5C3] to-[#16E7B4]",
                icon: "🎯",
              },
              {
                title: "Community Sponsorship",
                description: "Support our ongoing community initiatives and programs",
                features: ["Website recognition", "Social media mentions", "Newsletter inclusion", "Community access"],
                color: "from-[#6CD0F2] to-[#4FC3F7]",
                icon: "🌟",
              },
              {
                title: "Scholarship Sponsorship",
                description: "Fund scholarships for women entering tech programs",
                features: ["Named scholarships", "Mentorship programs", "Graduate networking", "Impact reports"],
                color: "from-[#03BDA3] to-[#24CC9C]",
                icon: "🎓",
              },
            ].map((opportunity, index) => (
              <div
                key={index}
                className={`card-hover bg-gradient-to-br ${opportunity.color} p-8 rounded-3xl text-white`}
              >
                <div className="text-4xl mb-4">{opportunity.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{opportunity.title}</h3>
                <p className="opacity-90 mb-6">{opportunity.description}</p>
                <ul className="space-y-2 mb-8">
                  {opportunity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleLearnMore(opportunity.title)}
                  className="w-full bg-white/20 backdrop-blur-sm py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Amazing Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with these incredible organizations who share our mission! 
              {/* 🌟 */}
            </p>
          </div>

          <PartnersCarousel />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let's Partner Together!</h2>
                <p className="text-lg text-gray-600">
                  Ready to make an impact? Fill out the form below and let's start the conversation!
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                      placeholder="Your awesome company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                      placeholder="hello@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 transition-all">
                    <option>Select partnership tier</option>
                    <option>Community Partner</option>
                    <option>Event Sponsor</option>
                    <option>Strategic Partner</option>
                    <option>Custom Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your goals</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 transition-all"
                    placeholder="What would you like to achieve through this partnership? How can we work together to make an impact?"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="fun-button text-lg px-12 py-4">
                    Start Our Partnership Journey! 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions? We'd love to hear from you! Reach out through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">wtm.algiers@esi.dz</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">ESI Algiers</p>
            </div>
          </div>
        </div>
      </section>
      <SponsorshipModal isOpen={modalOpen} onClose={() => setModalOpen(false)} sponsorshipType={selectedSponsorship} />
    </div>
  )
}
