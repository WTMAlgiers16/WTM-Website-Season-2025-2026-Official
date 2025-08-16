"use client"

import { useState } from "react"
import { X, Mail, Phone, Users, Trophy, GraduationCap } from "lucide-react"

interface SponsorshipModalProps {
  isOpen: boolean
  onClose: () => void
  sponsorshipType: string
}

const sponsorshipDetails = {
  "Event Sponsorship": {
    icon: Trophy,
    color: "from-[#42F5C3] to-[#16E7B4]",
    description: "Partner with us to sponsor our workshops, conferences, and networking events",
    benefits: [
      "Logo placement on all event materials",
      "Speaking opportunity at sponsored events",
      "Dedicated booth space at conferences",
      "Direct access to event attendees",
      "Social media promotion before, during, and after events",
      "Inclusion in event photography and videography",
      "Access to attendee contact information (with consent)",
      "Opportunity to distribute promotional materials",
    ],
    packages: [
      { name: "Bronze", price: "$2,500", events: "1-2 events per year" },
      { name: "Silver", price: "$5,000", events: "3-4 events per year" },
      { name: "Gold", price: "$10,000", events: "All events + premium placement" },
    ],
  },
  "Community Sponsorship": {
    icon: Users,
    color: "from-[#6CD0F2] to-[#4FC3F7]",
    description: "Support our ongoing community initiatives and programs",
    benefits: [
      "Logo on website homepage and all community materials",
      "Monthly social media mentions and features",
      "Inclusion in weekly newsletter (500+ subscribers)",
      "Access to community job board for posting positions",
      "Invitation to exclusive partner networking events",
      "Quarterly impact reports showing your contribution",
      "Co-branding opportunities on community initiatives",
      "Access to community surveys and insights",
    ],
    packages: [
      { name: "Community Friend", price: "$1,000", duration: "6 months" },
      { name: "Community Partner", price: "$2,000", duration: "1 year" },
      { name: "Community Champion", price: "$3,500", duration: "1 year + extras" },
    ],
  },
  "Scholarship Sponsorship": {
    icon: GraduationCap,
    color: "from-[#03BDA3] to-[#24CC9C]",
    description: "Fund scholarships for women entering tech programs and bootcamps",
    benefits: [
      "Named scholarship program recognition",
      "Direct mentorship opportunities with scholarship recipients",
      "Access to graduate networking events",
      "Detailed impact reports on scholarship outcomes",
      "Social media features highlighting scholarship impact",
      "Opportunity to participate in selection process",
      "First access to hire scholarship graduates",
      "Tax-deductible contribution documentation",
    ],
    packages: [
      { name: "Single Scholarship", price: "$2,500", recipients: "1 scholarship recipient" },
      { name: "Scholarship Program", price: "$7,500", recipients: "3 scholarship recipients" },
      { name: "Full Cohort Sponsor", price: "$15,000", recipients: "Full bootcamp cohort support" },
    ],
  },
}

export function SponsorshipModal({ isOpen, onClose, sponsorshipType }: SponsorshipModalProps) {
  const [selectedPackage, setSelectedPackage] = useState("")
  const details = sponsorshipDetails[sponsorshipType as keyof typeof sponsorshipDetails]

  if (!isOpen || !details) return null

  const IconComponent = details.icon

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`bg-gradient-to-r ${details.color} p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <IconComponent className="w-12 h-12" />
            <div>
              <h2 className="text-3xl font-bold">{sponsorshipType}</h2>
              <p className="opacity-90">{details.description}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Get</h3>
              <ul className="space-y-3">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#16E7B4] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Sponsorship Packages</h3>
              <div className="space-y-4">
                {details.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedPackage === pkg.name
                        ? "border-[#16E7B4] bg-[#16E7B4]/10"
                        : "border-gray-200 hover:border-[#16E7B4]/50"
                    }`}
                    onClick={() => setSelectedPackage(pkg.name)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-gray-800">{pkg.name}</h4>
                        <p className="text-sm text-gray-600">{pkg.events || pkg.duration || pkg.recipients}</p>
                      </div>
                      <div className="text-2xl font-bold text-[#03BDA3]">{pkg.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Started</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="99a0252d-028f-473e-8cd8-6964b33f416d"/>
              <input type="hidden" name="subject" value="New Sponsorship Proposal from WTM Website"/>
              <input
                name="companyName"
                type="text"
                placeholder="Company Name"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#16E7B4] focus:border-[#16E7B4]"
              />
              <input
              name="contactPerso"
                type="text"
                placeholder="Contact Person"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#16E7B4] focus:border-[#16E7B4]"
              />
              <input
              name="email"
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#16E7B4] focus:border-[#16E7B4]"
              />
              <input
              name="phone"
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#16E7B4] focus:border-[#16E7B4]"
              />
              <textarea
              name="message"
                placeholder="Tell us about your goals and how you'd like to partner with us..."
                rows={4}
                className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#16E7B4] focus:border-[#16E7B4]"
              ></textarea>
              <div className="md:col-span-2 md:flex grid gap-4">
                <button type="submit" className="text-sm md:text-base fun-button px-8 py-3 flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-5 h-5" />
                  Send Partnership Request
                </button>
                <button
                  type="button"
                  className="bg-gray-100 text-[#03BDA3] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
