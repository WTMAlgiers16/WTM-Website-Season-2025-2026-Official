import Link from "next/link"
import { ArrowRight, Users, Code, Heart, Sparkles, Calendar, Award, BookOpen } from "lucide-react"
import { PhotoCarousel } from "@/components/photo-carousel"
import { AnimatedElement, StaggeredAnimation } from "@/components/animations"
import WTMCountdown from "@/components/countDown"

export default function HomePage() {
  const stats = [
    { icon: Users, number: "200+", label: "Amazing Women", color: "from-[#42F5C3] to-[#16E7B4]" },
    { icon: Code, number: "20+", label: "Events", color: "from-[#6CD0F2] to-[#4FC3F7]" },
    { icon: Heart, number: "100%", label: "Love & Support", color: "from-[#03BDA3] to-[#24CC9C]" },
  ]

  const missionSteps = [
    {
      number: "1",
      title: "Learn & Grow",
      description: "Access workshops, mentorship, and resources to advance your tech career.",
      color: "#16E7B4",
    },
    {
      number: "2",
      title: "Connect & Network",
      description: "Build meaningful relationships with like-minded women in tech.",
      color: "#4FC3F7",
    },
    {
      number: "3",
      title: "Make Impact",
      description: "Use your skills to create positive change in your community and beyond.",
      color: "#03BDA3",
    },
  ]

  return (
    <div className="min-h-screen">
      <WTMCountdown/>
      {/* Photo Carousel */}
      <section className="relative">
        <AnimatedElement animation="fade-in">
          <PhotoCarousel />
        </AnimatedElement>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-animate text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <AnimatedElement animation="bounce-in" delay={200}>
              <div className="floating mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-left" delay={400}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Women <span className="text-[#42F5C3]">Techmakers</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-right" delay={600}>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Empowering women in technology through community, mentorship, and amazing events! Join our vibrant
                community and let's code the future together! 
                {/* 🚀 */}
              </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="fun-button text-lg px-8 py-4">Join Our Community</button> */}
                <Link
                  href="/events"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Explore Events <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StaggeredAnimation staggerDelay={200}>
              {stats.map((stat, index) => (
                <div key={index} className={`card-hover bg-gradient-to-br ${stat.color} bg-opacity-10 p-8 rounded-3xl`}>
                  <stat.icon
                    className={`w-12 h-12 mx-auto mb-4 text-white`}
                    
                  />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#42F5C3]/10 to-[#4FC3F7]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to create an inclusive tech community where women can thrive, learn, and make a real
                impact in the world of technology! 
                {/* 💪 */}
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slide-in-left">
              <div className="space-y-6">
                {missionSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold bg-white shadow-xl"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-right">
              <div className="relative">
                <img
                  src="/general-images/about.png"
                  alt="WTM trophy"
                  className="h-96 w-full object-cover rounded-3xl"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Explore Our Community</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover all the amazing things happening in our community! 
                {/* 🌟 */}
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredAnimation staggerDelay={150}>
              {[
                {
                  icon: Calendar,
                  title: "Upcoming Events",
                  description: "Join our workshops, conferences, and networking sessions",
                  link: "/events",
                  color: "from-[#42F5C3] to-[#16E7B4]",
                },
                {
                  icon: BookOpen,
                  title: "Latest Blogs",
                  description: "Read inspiring stories and technical insights from our community",
                  link: "/blogs",
                  color: "from-[#6CD0F2] to-[#4FC3F7]",
                },
                {
                  icon: Award,
                  title: "Our Team",
                  description: "Meet the amazing women leading our community",
                  link: "/team",
                  color: "from-[#03BDA3] to-[#24CC9C]",
                },
              ].map((item, index) => (
                <Link key={index} href={item.link} className="block">
                  <div
                    className={`card-hover bg-gradient-to-br ${item.color} p-8 rounded-3xl text-white text-center h-full`}
                  >
                    <item.icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="opacity-90 mb-6">{item.description}</p>
                    <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                      Explore <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-animate text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="scale-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of an amazing community that's changing the face of technology, one woman at a time! 
              {/* 🌟 */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="fun-button text-lg px-8 py-4 bg-white text-[#03BDA3] hover:bg-gray-100">
                Get Started Today
              </Link>
              <Link
                href="/events"
                className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                View Upcoming Events
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
