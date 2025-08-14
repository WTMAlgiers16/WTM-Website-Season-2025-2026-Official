"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const groupPhotos = [
  {
    id: 1,
    image: "/general-images/hachcode.jpg",
    title: "Hash code",
    description: "Celebrating teamwork and innovation with GDG and WTM Algiers after the Hash Code competition.",
  },
  {
    id: 2,
    image: "/general-images/iwd24.jpg",
    title: "IWD'24",
    description: "A vibrant IWD 2024 celebration with GDG and WTM Algiers, empowering women in technology.",
  },
  {
    id: 3,
    image: "/general-images/uxcamp-group-pic.jpg",
    title: "UXCamp",
    description: "A joyful moment with GDG and WTM Algiers at the close of the UCCamp events.",
  },
  {
    id: 4,
    image: "/general-images/wtmWinners-dubai-hackathon.jpg",
    title: "Women's online safety Hackathon - Dubai",
    description: "WTM ambassadors shining on the podium with a third-place victory at the first women's online safety hackathon in Dubai.",
  }
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
              <img src={photo.image || "/placeholder.svg"} alt={photo.title} className="w-[100vw]" />
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
