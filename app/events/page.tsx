"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, Clock, ArrowRight, Filter } from "lucide-react"
import { AnimatedElement, StaggeredAnimation } from "@/components/animations"
import { EventsService } from "@/services/api-service"
import type { Event } from "@/data/events-data"

export default function EventsPage() {
  const [filter, setFilter] = useState("all")
  const [events, setEvents] = useState<Event[]>([])
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        const [allEvents, featured] = await Promise.all([
          EventsService.getAllEvents(),
          EventsService.getFeaturedEvent(),
        ])
        setEvents(allEvents)
        setFeaturedEvent(featured)
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true
    if (filter === "upcoming") return !event.isPast
    if (filter === "past") return event.isPast
    return true
  })

  const handleRegister = async (eventId: number) => {
    try {
      await EventsService.registerForEvent(eventId, {})
      alert("Registration successful!")
    } catch (error) {
      console.error("Registration failed:", error)
      alert("Registration failed. Please try again.")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-dots text-2xl font-bold gradient-text">Loading</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="gradient-animate text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Events</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join us for workshops, conferences, and networking events that empower women in tech! 
              {/* 🎉 */}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement animation="scale-in">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative">
                  <img
                    src={featuredEvent.image || "/placeholder.svg"}
                    alt={featuredEvent.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#16E7B4] text-white px-4 py-2 rounded-full text-sm font-bold">
                      {featuredEvent.isPast ? "Recent Event" : "Featured Event"}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredEvent.title}</h2>
                    <div className="flex flex-wrap md:gap-6 gap-2 text-sm opacity-90 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredEvent.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredEvent.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {featuredEvent.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {featuredEvent.attendees} {featuredEvent.maxAttendees ? `/ ${featuredEvent.maxAttendees}` : ""}{" "}
                        attendees
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 text-lg mb-6">{featuredEvent.description}</p>

                  {featuredEvent.highlights && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {featuredEvent.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10 p-4 rounded-xl text-center"
                        >
                          <p className="text-sm font-semibold text-[#03BDA3]">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
                    {!featuredEvent.isPast && featuredEvent.isRegistrationOpen ? (
                      <button onClick={() => handleRegister(featuredEvent.id)} className="fun-button text-lg px-8 py-4">
                        Register Now - Free!
                      </button>
                    ) : featuredEvent.isPast ? (
                      <Link href={`/events/${featuredEvent.id}`} className="fun-button text-lg px-8 py-4">
                        View Results & Impact
                      </Link>
                    ) : (
                      <button className="bg-gray-300 text-gray-600 px-8 py-4 rounded-full font-semibold cursor-not-allowed">
                        Registration Closed
                      </button>
                    )}
                    <Link
                      href={`/events/${featuredEvent.id}`}
                      className="bg-gray-100 text-[#03BDA3] px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-[#03BDA3]" />
            <div className="flex justify-center gap-2">
              {[
                { key: "all", label: "All Events" },
                { key: "upcoming", label: "Upcoming" },
                { key: "past", label: "Past Events" },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-3 py-1 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                    filter === filterOption.key
                      ? "bg-[#16E7B4] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:text-[#16E7B4] hover:shadow-md"
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredAnimation staggerDelay={150}>
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          event.isPast
                            ? "bg-gray-500 text-white"
                            : event.isRegistrationOpen
                              ? "bg-[#16E7B4] text-white"
                              : "bg-orange-500 text-white"
                        }`}
                      >
                        {event.isPast ? "Past" : event.isRegistrationOpen ? "Open" : "Registration Closed"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ""} attendees
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                    {/* Show impact for past events */}
                    {event.isPast && event.impact && (
                      <div className="bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10 p-3 rounded-lg mb-4">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center">
                            <div className="font-bold text-[#03BDA3]">{event.impact.participants}</div>
                            <div className="text-gray-600">Participants</div>
                          </div>
                          {event.impact.totalProjectsSubmitted && (
                            <div className="text-center">
                              <div className="font-bold text-[#03BDA3]">{event.impact.totalProjectsSubmitted}</div>
                              <div className="text-gray-600">Projects submitted</div>
                            </div>
                          )}
                          {event.impact.newConnections && (
                            <div className="text-center">
                              <div className="font-bold text-[#03BDA3]">{event.impact.newConnections}</div>
                              <div className="text-gray-600">Connections</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {!event.isPast && event.isRegistrationOpen ? (
                        <button onClick={() => handleRegister(event.id)} className="flex-1 fun-button py-2 text-sm">
                          Register
                        </button>
                      ) : (
                        <Link
                          href={`/events/${event.id}`}
                          className="flex-1 bg-gray-100 text-[#03BDA3] py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm flex items-center justify-center gap-1"
                        >
                          {event.isPast ? "View Results" : "View Details"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
