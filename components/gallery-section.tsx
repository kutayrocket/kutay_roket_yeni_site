"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface GalleryImage {
  id: number
  src: string
  title: string
  description: string
  category: "competition" | "workshop" | "testing" | "team"
}

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState<string>("all")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Sample gallery images - replace with actual team photos
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/1.png",
      title: "Teknofest Launch Day",
      description: "Our rocket KUTAY ready for launch at the Teknofest competition grounds.",
      category: "competition",
    },
    {
      id: 2,
      src: "/2.png",
      title: "Fırlatma Aşaması",
      description: "Roketimizin rampada fırlatma anı.",
      category: "workshop",
    },
    {
      id: 3,
      src: "/3.png",
      title: "Kurtarma Operasyonu",
      description: "Aksaray Atış alanında roketimizin kurtarma operasyonu.",
      category: "testing",
    },
    {
      id: 4,
      src: "/20250903_073104.jpg",
      title: "Team at Teknofest",
      description: "Teknofest yarışma alanında tam kadro KUTAY ekibi.",
      category: "team",
    },
    {
      id: 5,
      src: "/0905 (1).jpg",
      title: "Roketin Rampaya Yerleştirilmesi",
      description: "Alp roketimizin fılatmak üzere rampaya yerleştirilme anı.",
      category: "testing",
    },
    {
      id: 6,
      src: "/0905(1).jpg",
      title: "Teknofest Launch Day",
      description: "Roketimiz KUTAY Teknofest yarışma alanında fırlatılmaya hazır.",
      category: "workshop",
    },
    {
      id: 7,
      src: "/kutay2.jpg",
      title: "Competition Prep",
      description: "Final preparations before the competition launch.",
      category: "competition",
    },
    {
      id: 8,
      src: "/kutay3.jpg",
      title: "Fırlatma Başarılı!",
      description: "Roketin fırlatılması ve başarıyla kurtarılması.",
      category: "team",
    },
  ]

  const categories = [
    { key: "all", label: "All Photos" },
    { key: "competition", label: "Competition" },
    { key: "workshop", label: "Workshop" },
    { key: "testing", label: "Testing" },
    { key: "team", label: "Team" },
  ]

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    setCurrentIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") closeModal()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, currentIndex])

  return (
    <section ref={sectionRef} id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
           Galerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Teknofest yarışmasından görüntüler, atölye çalışmaları, test aşamaları ve takım anları ile yolculuğumuzu keşfedin.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={filter === category.key ? "default" : "outline"}
              onClick={() => setFilter(category.key)}
              className={`${
                filter === category.key
                  ? "bg-accent text-accent-foreground glow"
                  : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className={`group cursor-pointer bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-all duration-500 hover:glow overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openModal(image)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                  <p className="text-sm text-card-foreground line-clamp-2">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
