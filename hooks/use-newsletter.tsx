"use client"

import type React from "react"

import { useState } from "react"

export function useNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Store email (in a real app, this would be sent to your backend)
    const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]")
    if (!subscribers.includes(email)) {
      subscribers.push(email)
      localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers))
    }

    setIsSubscribed(true)
    setIsSubscribing(false)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return {
    email,
    setEmail,
    isSubscribing,
    isSubscribed,
    handleSubscribe,
  }
}
