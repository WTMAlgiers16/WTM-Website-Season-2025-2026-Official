"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const groupPhotos = [
  {
    id: 1,
    image: "/general-images/WTMLibMentors.png",
    title: "WTMLIB",
    description: "Mentors and mentees from our WTMLib event",
  },
  {
    id: 2,
    image: "/general-images/IWD'24Challenge.png",
    title: "IWD'24",
    description: "A memory from our prompt challenge, with participants fully immersed in the task.",
  },
  {
    id: 3,
    image: "/general-images/devFestPicture.png",
    title: "DevFest'22",
    description: "Together at DevFest, learning, sharing, and connecting.",
  },
  {
    id: 4,
    image: "/general-images/participants.jpg",
    title: "ARduino workshop",
    description: "Participants from our Arduino workshop",
  },
  {

    id: 5,
    image: "/general-images/firebase-summit.png",
    title: "Firebase Summit 2019",
    description: "Our amazing leads at firbase Summit Madrid 2019",
  },
]

export function PhotoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % groupPhotos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupPhotos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupPhotos.length) % groupPhotos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className="carousel-container relative h-96 md:h-[500px] shadow-2xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="carousel-track h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {groupPhotos.map((photo, index) => (
          <div key={photo.id} className="carousel-slide h-full">
            <div className="relative h-full">
              <img src={photo.image || "/placeholder.svg"} alt={photo.title} className="w-[100vw] h-[90vh]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{photo.title}</h3>
                <p className="text-lg opacity-90">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {groupPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#16E7B4] scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
