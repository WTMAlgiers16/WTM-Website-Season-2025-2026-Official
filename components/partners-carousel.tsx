"use client"

import { useEffect, useState } from "react"

const partners = [
  { name: "TechCorp", logo: "/placeholder.svg?height=80&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=80&width=120" },
  { name: "CodeAcademy", logo: "/placeholder.svg?height=80&width=120" },
  { name: "StartupHub", logo: "/placeholder.svg?height=80&width=120" },
  { name: "DevTools Inc", logo: "/placeholder.svg?height=80&width=120" },
  { name: "CloudTech", logo: "/placeholder.svg?height=80&width=120" },
  { name: "DataFlow", logo: "/placeholder.svg?height=80&width=120" },
  { name: "AITech", logo: "/placeholder.svg?height=80&width=120" },
]

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Create a continuous loop by duplicating partners
  const extendedPartners = [...partners, ...partners, ...partners]

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 6}%)`,
          width: `${(extendedPartners.length * 100) / 6}%`,
        }}
      >
        {extendedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 px-4"
            style={{ width: `${100 / extendedPartners.length}%` }}
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
