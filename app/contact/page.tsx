import { Mail, Phone, MapPin, MessageCircle, Clock, Users, Send } from "lucide-react"
import { AnimatedElement, StaggeredAnimation } from "@/components/animations"
import { contactMethods } from "@/data/contact-data"
import { faqs } from "@/data/contact-data"
const iconMap: Record<string, React.ElementType> = {
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
  MessageCircle: MessageCircle,
}


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="gradient-animate text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="fade-in">
            <div className="floating mb-6">
              <MessageCircle className="w-16 h-16 mx-auto text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions, want to join our community, or just want to say hi
              - we're here and excited to connect! 
              {/* 💬 */}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <StaggeredAnimation staggerDelay={150}>
              {contactMethods.map((method, index) => {
                const Icon = iconMap[method.icon]
                return(
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className="text-white"/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-[#03BDA3] font-semibold">{method.contact}</p>
                </div>
                )
              })}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Send className="w-12 h-12 text-[#16E7B4] mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible!
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-[#42F5C3]/20 focus:border-[#16E7B4] transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-[#42F5C3]/20 focus:border-[#16E7B4] transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-[#42F5C3]/20 focus:border-[#16E7B4] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-[#42F5C3]/20 focus:border-[#16E7B4] transition-all">
                    <option>Select a topic</option>
                    <option>Join the Community</option>
                    <option>Event Information</option>
                    <option>Mentorship Program</option>
                    <option>Partnership Inquiry</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-[#42F5C3]/20 focus:border-[#16E7B4] transition-all"
                    placeholder="Tell us what's on your mind! We'd love to hear from you..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-5 h-5 text-[#16E7B4] border-gray-300 rounded focus:ring-[#42F5C3]/20"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    I'd like to receive updates about WTM events and news
                  </label>
                </div>

                <div className="text-center">
                  <button type="submit" className="fun-button text-lg px-12 py-4">
                    Send Message 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">Visit us at our community space or join us at one of our events!</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977!2d3.170886!3d36.705827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzZCsDQ0JzQ2LjYiTiAzwrAwNicwMi4wIlc!5e0!3m2!1sen!2sdz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WTM Location"
                />
              </div>
              <div className="p-8 bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <MapPin className="w-8 h-8 text-[#03BDA3] mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm">
                      Higher National School of Computer Science, Ecole Nationale Supérieure d'Informatique (ESI ex.INI), Alger, Oued Smar 16309
                    </p>
                  </div>
                  <div>
                    <Clock className="w-8 h-8 text-[#03BDA3] mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Sun-Thu: 9 AM - 6 PM
                      <br />
                      Weekends: By appointment
                    </p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-[#03BDA3] mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-800 mb-1">Community Space</h3>
                    <p className="text-gray-600 text-sm">
                      Open for events
                      <br />& co-working sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-animate rounded-3xl text-white p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Clock className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Office Hours & Response Times</h2>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#42F5C3] rounded-full"></span>
                    <strong>Email:</strong> We respond within 24 hours
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#6CD0F2] rounded-full"></span>
                    <strong>Phone:</strong> Sun-Thu, 9 AM - 6 PM
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#16E7B4] rounded-full"></span>
                    <strong>Social Media:</strong> Daily monitoring
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Users className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Our Team is Here for You!</h3>
                <p className="opacity-90">
                  We're a friendly bunch who love connecting with our community. Don't hesitate to reach out! 
                  {/* 💜 */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions. Don't see yours? Just ask! 
              {/* 🤔 */}
              </p>
          </div>

          <div className="space-y-6">
            <StaggeredAnimation staggerDelay={150}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10 rounded-2xl p-6 card-hover"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </StaggeredAnimation>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Still have questions? We're here to help! Reach us out on our socials</p>
            {/* <button className="fun-button px-8 py-3" >Ask Us Anything</button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
