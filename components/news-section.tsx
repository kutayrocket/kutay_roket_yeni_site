"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface NewsItem {
  id: number
  title: string
  date: string
  category: "team" | "competition" | "aerospace" | "national"
  summary: string
  content: string
  link?: string
  image?: string
}

export function NewsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
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

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  // Sample news items - replace with actual news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "KUTAY Takımı Teknofest 2025 Yüksek İrtifa Kategorisine Seçildi",
      date: "21/09/2025",
      category: "team",
      summary:
        "Teknofest Yüksek İrtifa kategorisinde yarışacak olan roket takımımız 2025 yılında ilk kez atış hakkı kazanmıştır. Takımımızın bu başarısı, uzun süren hazırlık ve titiz başvuru sürecinin ardından gelmiştir.",
      content:
        "Farklı mühendislik disiplinlerinden öğrencilerin bir araya gelerek oluşturduğu takım, mekanik tasarım, aviyonik sistemler, uçuş sistemleri ve aerodinamik alanlarındaki bilgi birikimini TEKNOFEST 2025 Roket Yarışması'nda Yüksek İrtifa kategorisinde ortaya koydu. Yaklaşık 9 aylık yoğun raporlama süreci ve ROKETSAN iş birliği ile gerçekleştirilen hazırlıklar sonucunda takım, Türkiye'nin önemli teknoloji yarışmalarından biri olan TEKNOFEST'te finale kalma başarısı gösterdi.",
      image: "/kutay3.jpg",
      link: "https://www.bomba32.com/kutay-roket-takimi-dinamik-katki-sunuyor",
    },
    {
      id: 2,
      title: "Kutay Roket Takımı TEKNOFEST 2025 Roket Yarışmasında Atış Hakkı Kazandı",
      date: "07/07/2025",
      category: "team",
      summary:
        "2025 Teknofest Roket yarışmasına, Yüksek İrtifa Kategorisinde katılan ve mühendislik öğrencilerimizden oluşan Kutay Roket Takımı, Kritik Tasarım Raporu (KTR)aşamasını geçmiştir. Kendilerini ve danışmanları Sayın Dr. Öğr. Üyesi Mehmet Alper Demiray'ı tebrik eder, atış aşamasında başarılar dileriz.",
      content:
        "2025 Teknofest Roket yarışmasına, Yüksek İrtifa Kategorisinde katılan ve mühendislik öğrencilerimizden oluşan Kutay Roket Takımı, Kritik Tasarım Raporu (KTR)aşamasını geçmiştir. Kendilerini ve danışmanları Sayın Dr. Öğr. Üyesi Mehmet Alper Demiray'ı tebrik eder, atış aşamasında başarılar dileriz.",
      link: "https://muhendislik.sdu.edu.tr/tr/haber/kutay-roket-takimi-teknofest-2025-roket-yarismasinda-atis-hakki-kazandi-53350h.html",
      image: "/aboutphoto.jpg",

    },
   
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "team":
        return "text-accent"
      case "competition":
        return "text-primary"
      case "aerospace":
        return "text-secondary"
      case "national":
        return "text-muted-foreground"
      default:
        return "text-foreground"
    }
  }

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "team":
        return "bg-accent/20"
      case "competition":
        return "bg-primary/20"
      case "aerospace":
        return "bg-secondary/20"
      case "national":
        return "bg-muted/20"
      default:
        return "bg-card/20"
    }
  }

  return (
    <section ref={sectionRef} id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
           Gündem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En son başarılarımız, havacılık sektörü haberlerimiz ve uzay teknolojisindeki ulusal gelişmelerden haberdar olun.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background glow"></div>

              {/* Content Card */}
              <div className="ml-20">
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-all duration-300 hover:glow">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryBg(item.category)} ${getCategoryColor(item.category)}`}
                          >
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-card-foreground leading-relaxed">{item.summary}</p>
                      </div>
                    </div>

                    {/* Image */}
                    {item.image && (
                      <div className="mb-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* Expanded Content */}
                    {expandedItems.has(item.id) && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-card-foreground leading-relaxed mb-4">{item.content}</p>
                        {item.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                            asChild
                          >
                            
                          </Button>
                        )}
                      </div>
                    )}

                    {/* Haber Linki Butonu */}
                    {item.link && (
                      <div className="flex justify-center mt-4">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                        >
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Haberin Linki
                          </a>
                        </Button>
                      </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <div className="flex justify-center mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(item.id)}
                        className="text-accent hover:text-accent-foreground hover:bg-accent/20"
                      >
                        {expandedItems.has(item.id) ? (
                          <>
                            <ChevronUp className="mr-2 h-4 w-4" />
                            Daha Az Göster
                          </>
                        ) : (
                          <>
                            <ChevronDown className="mr-2 h-4 w-4" />
                            Daha Fazla Oku
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
