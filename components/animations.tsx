"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in" | "bounce-in"
  delay?: number
  className?: string
}

export function AnimatedElement({ children, animation = "fade-in", delay = 0, className = "" }: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef} className={`${animation} ${className}`}>
      {children}
    </div>
  )
}

export function StaggeredAnimation({
  children,
  staggerDelay = 100,
}: {
  children: React.ReactNode[]
  staggerDelay?: number
}) {
  return (
    <>
      {children.map((child, index) => (
        <AnimatedElement key={index} delay={index * staggerDelay}>
          {child}
        </AnimatedElement>
      ))}
    </>
  )
}
