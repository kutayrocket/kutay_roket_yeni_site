"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const starfieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const starfield = starfieldRef.current
    if (!starfield) return

    // Create stars
    const createStars = () => {
      const numStars = 100
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.width = `${Math.random() * 3 + 1}px`
        star.style.height = star.style.width
        star.style.animationDelay = `${Math.random() * 3}s`
        starfield.appendChild(star)
      }
    }

    createStars()

    return () => {
      if (starfield) {
        starfield.innerHTML = ""
      }
    }
  }, [])

  return <div ref={starfieldRef} className="starfield" />
}
