'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users } from 'lucide-react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function WTMCountdown() {
  // Set target date - you can modify this to your actual event date
  const targetDate = new Date('2025-10-07T09:00:00').getTime() // to change
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="text-center mt-6">
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* Circular Countdown Container */}
            <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-border countdown-pulse">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 countdown-rotate opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-white">Welcome Day Countdown</h3>
                </div>

                {/* Circular Timer Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-[#03BDA3]">
                        {timeLeft.days.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-[#03BDA3] uppercase tracking-wide">Days</div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-[#53cbf3]">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-[#53cbf3] uppercase tracking-wide">Hours</div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-[#08e1a4]">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-[#08e1a4] uppercase tracking-wide">Min</div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-[#0fb4eb]">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-[#0fb4eb] uppercase tracking-wide">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}