"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Star, ArrowRight, Heart } from "lucide-react"
import { AnimatedElement } from "@/components/animations"
import { getAllEventsWithStatus } from "@/data/events-data"

// Get event by ID
const getEventById = (id: string) => {
  const allEvents = getAllEventsWithStatus()
  return allEvents.find((event) => event.id === Number.parseInt(id)) || null
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <Link href="/events" className="fun-button">
            Back to Events
          </Link>
        </div>
      </div>
    )
  }

  const handleRegister = () => {
    alert("Registration functionality would be implemented here!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="relative">
        <div className="h-96 relative overflow-hidden">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-8 left-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedElement animation="slide-in-left">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      event.isPast
                        ? "bg-gray-500 text-white"
                        : event.isRegistrationOpen
                          ? "bg-[#16E7B4] text-white"
                          : "bg-orange-500 text-white"
                    }`}
                  >
                    {event.isPast
                      ? "Event Completed"
                      : event.isRegistrationOpen
                        ? "Registration Open"
                        : "Registration Closed"}
                  </span>
                  <div className="flex items-center text-white/80 text-sm gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title} · {event.theme}</h1>
                <p className="text-xl text-white/90 mb-6">{event.mission}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-5 h-5" />
                    <span>
                      {event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ""} attendees
                    </span>
                  </div>
                  {!event.isPast && event.isRegistrationOpen && (
                    <button onClick={handleRegister} className="fun-button px-6 py-3">
                      Register Now
                    </button>
                  )}
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedElement animation="fade-in">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
                  <h2 className="text-3xl font-bold gradient-text mb-6">About This Event</h2>
                  <div
                    className="prose prose-lg max-w-none prose-headings:gradient-text prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#03BDA3]"
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  />
                </div>
              </AnimatedElement>

              {/* Event Images */}
              {event.images && event.images.length > 0 && (
                <AnimatedElement animation="fade-in" delay={200}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Event Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.images.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${event.title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Agenda */}
              {event.agenda && (
                <AnimatedElement animation="fade-in" delay={300}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Event Agenda</h3>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10 rounded-xl"
                        >
                          <div className="bg-[#16E7B4] text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <AnimatedElement animation="fade-in" delay={400}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Featured Speakers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <img
                            src={speaker.image || "/placeholder-user.jpg"}
                            alt={speaker.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800">{speaker.name}</h4>
                            <p className="text-[#03BDA3] font-semibold text-sm">{speaker.role}</p>
                            <p className="text-gray-600 text-sm">{speaker.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}
              {/* Mentors */}
              {event.mentors && event.mentors.length > 0 && (
                <AnimatedElement animation="fade-in" delay={400}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Featured Mentors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.mentors.map((mentor, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <img
                            src={mentor.image || "/placeholder-user.jpg"}
                            alt={mentor.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800">{mentor.name}</h4>
                            <p className="text-[#03BDA3] font-semibold text-sm">{mentor.role}</p>
                            <p className="text-gray-600 text-sm">{mentor.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}
              {/* Trainers */}
              {event.trainers && event.trainers.length > 0 && (
                <AnimatedElement animation="fade-in" delay={400}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Featured Trainers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.trainers.map((trainer, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <img
                            src={trainer.image || "/placeholder-user.jpg"}
                            alt={trainer.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800">{trainer.name}</h4>
                            <p className="text-[#03BDA3] font-semibold text-sm">{trainer.role}</p>
                            <p className="text-gray-600 text-sm">{trainer.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Impact Results (for past events) */}
              {event.isPast && event.impact && (
                <AnimatedElement animation="fade-in" delay={500}>
                  <div className="bg-white rounded-3xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Event Impact & Results</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#16E7B4] mb-2">{event.impact.participants}</div>
                        <div className="text-sm text-gray-600">Participants</div>
                      </div>
                      {event.impact.totalProjectsSubmitted && (
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#2B6ED1] mb-2">{event.impact.totalProjectsSubmitted}</div>
                          <div className="text-sm text-gray-600">Submitted projects</div>
                        </div>
                      )}
                      {event.impact.newConnections && (
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#4FC3F7] mb-2">{event.impact.newConnections}</div>
                          <div className="text-sm text-gray-600">New Connections</div>
                        </div>
                      )}
                      {event.impact.careerPivots && (
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#03BDA3] mb-2">{event.impact.careerPivots}</div>
                          <div className="text-sm text-gray-600">Career Pivots</div>
                        </div>
                      )}
                      {event.impact.mentorshipPairs && (
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#2B6ED1] mb-2">{event.impact.mentorshipPairs}</div>
                          <div className="text-sm text-gray-600">Mentorship Pairs</div>
                        </div>
                      )}
                    </div>

                    {event.impact.feedback && (
                      <div className="bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10 p-6 rounded-xl">
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-800">
                            {event.impact.feedback.rating}/5.0 Average Rating
                          </span>
                        </div>
                        <div className="space-y-3">
                          {event.impact.feedback.testimonials.map((testimonial, index) => (
                            <blockquote key={index} className="text-gray-700 italic">
                              "{testimonial}"
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedElement>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Event Details Card */}
                <AnimatedElement animation="slide-in-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#16E7B4]" />
                        <div>
                          <p className="font-semibold text-gray-800">{new Date(event.date).toLocaleDateString()}</p>
                          <p className="text-sm text-gray-600">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#16E7B4]" />
                        <div>
                          <p className="font-semibold text-gray-800">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-[#16E7B4]" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ""} attendees
                          </p>
                          {!event.isPast && event.maxAttendees && (
                            <p className="text-sm text-gray-600">
                              {event.maxAttendees - event.attendees} spots remaining
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {!event.isPast && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        {event.isRegistrationOpen ? (
                          <button onClick={handleRegister} className="w-full fun-button py-3">
                            Register Now
                          </button>
                        ) : (
                          <div className="text-center">
                            <p className="text-orange-600 font-semibold mb-2">Registration Closed</p>
                            <p className="text-sm text-gray-600">
                              Registration deadline:{" "}
                              {event.registrationDeadline && new Date(event.registrationDeadline).toLocaleDateString()}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </AnimatedElement>

                {/* Partners */}
                {event.partners && event.partners.length > 0 && (
                  <AnimatedElement animation="slide-in-right" delay={200}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Event Partners</h3>
                      <div className="space-y-4">
                        {event.partners.map((partner, index) => (
                          <div key={index} className="border border-gray-200 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <img
                                src={partner.logo || "/placeholder.svg"}
                                alt={`${partner.name} logo`}
                                className="w-12 h-8 object-contain"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-800">{partner.name}</h4>
                                <p className="text-sm text-[#03BDA3] font-medium">{partner.role}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{partner.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedElement>
                )}

                {/* Highlights */}
                {event.highlights && (
                  <AnimatedElement animation="slide-in-right" delay={300}>
                    <div className="bg-gradient-to-br from-[#16E7B4] to-[#4FC3F7] rounded-2xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">Event Highlights</h3>
                      <div className="space-y-3">
                        {event.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Heart className="w-4 h-4 fill-current" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedElement>
                )}

                {/* Share Event */}
                <AnimatedElement animation="slide-in-right" delay={400}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Share This Event</h3>
                    <button className="w-full bg-gray-100 text-[#03BDA3] py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                      Share Event
                    </button>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">More Events</h2>
              <p className="text-lg text-gray-600">Discover other amazing events in our community</p>
            </div>
          </AnimatedElement>

          <div className="text-center">
            <Link href="/events" className="fun-button px-8 py-4 inline-flex items-center gap-2">
              View All Events <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
