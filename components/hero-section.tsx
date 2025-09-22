"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/kutay.mp4" // Videonun yolunu buraya koy
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Gradient overlay (yazıların okunabilirliği için) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Kullanıcı resmi */}
          <div className="flex justify-center mb-8">
            <img
              src="/kutay.png"
              alt="Hero Image"
              className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>

          {/* Başlık */}
          <h1 className="text-3xl md:text-5xl lg:text-3xl font-light text-white mb-7 drop-shadow-lg">
            İstikbal göklerdedir !
          </h1>

          
          

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Video playback speed controller */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", () => {
              const video = document.querySelector("video");
              if (video) {
                video.playbackRate = 1;
              }
            });
          `,
        }}
      />
    </section>
  )
}
