"use client"
import { useEffect, useState } from "react"
import { currentPartners } from "@/data/partners-data"

const partners = currentPartners.map((partner) => ({
  name: partner.name,
  logo: partner.logo,
}))

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2) // default desktop

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2) // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3) // tablet
      } else {
        setItemsPerView(4) // desktop
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = partners.length - itemsPerView
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [itemsPerView])

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 px-4"
            style={{
              width: `${100 / itemsPerView}%`,
            }}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover flex items-center justify-center h-24">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
