"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, Mail, Github, Workflow, Webhook, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Global } from "recharts"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  instagram?: string
  website?: string
  email?: string
  github?: string
}

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  // Sample team members - replace with actual team data
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Mehmet Alper Demiray",
      role: "Akademik Danışman",
      bio: "Süleyman Demirel Üniversitesi Makine Mühendisliği Bölümü Öğretim Üyesi. Kutay Roket Takımı'nın akademik danışmanı olarak, takımın mühendislik tasarım ve analiz süreçlerine rehberlik etmektedir.",
      image: "/Mehmet Alper Demiray - Akdemik Danışman.jpeg",
      linkedin: "https://linkedin.com/in/alexchen",
      instagram: "https://instagram.com/alexchen_rockets",
      email: "alex@kutayteam.com",
    },
    {
      name: "Bora Cüneyt Akçakın",
      role: "Takım Kaptanı",
      bio: "Süleyman Demirel Üniversitesi Makine Mühendisliği öğrencisi. Takımın lideri olarak, proje yönetimi, stratejik planlama ve takım koordinasyonundan sorumludur.",
      image: "/Bora Cüneyit akçakın.jpeg",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      instagram: "https://instagram.com/sarah_avionics",
      github: "https://github.com/sarahjohnson",
    },
    {
      name: "Muzaffer Şen",
      role: "Mekanik Takım Lideri",
      bio: "Süleyman Demirel Üniversitesi Makine Mühendisliği öğrencisi. Roketin mekanik tasarım ve yapısal analizlerinde aktif rol üstlenmiştir.",
      image: "/Muzaffer şen.jpeg",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      instagram: "https://instagram.com/marcus_designs",
      email: "marcus@kutayteam.com",
    },
    {
      name: "Hüdaverdi Furkan Demirci",
      role: "Aviyonik Kaptanı",
      bio: "Süleyman Demirel Üniversitesi Elektrik-Elektronik Mühendisliği öğrencisi. Takımın aviyonik sistemlerinin tasarımı, entegrasyonu ve test süreçlerinden sorumludur.",
      image: "/Hüdaverdi Furkan Demirci.jpeg",
      linkedin: "https://linkedin.com/in/emmathompson",
      instagram: "https://instagram.com/emma_recovery",
      github: "https://github.com/emmathompson",
    },
    {
      name: "Yağız Muhammed Tan",
      role: "Mekanik Takım üyesi",
      bio: "Pamukkale Üniversitesi Makine Mühendisliği öğrencisi. Roketin aerodinamik tasarımı ve üretim aşamasında aktif rol üstlenmiştir.",
      image: "/profile.jpg",
      linkedin: "https://www.linkedin.com/in/ya%C4%9F%C4%B1z-muhammed-tan-1b0154322?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWvmQyPRuQHuAr7pRZpWP2g%3D%3D",
      website: "https://www.yagizmtan.tech/",
      email: "yagizmuhammedtan@gmail.com",
    },
    {
      name: "Burak Dokuzlar",
      role: "Mekanik Takım üyesi",
      bio: "Süleyman Demirel Üniversitesi Makine Mühendisliği öğrencisi. Roketin yapısal tasarımı ve analiz süreçlerinde aktif rol üstlenmiştir.",
      image: "/Burak Dokuzlar .jpeg",
      linkedin: "https://linkedin.com/in/lisawang",
      instagram: "https://instagram.com/lisa_manufacturing",
      github: "https://github.com/lisawang",
    },
    {
      name: "Arzu Sümeyye Çiftçi",
      role: "Aviyonik Takım üyesi",
      bio: "Sületayman Demirel Üniversitesi Elektrik-Elektronik Mühendisliği öğrencisi. Takımın aviyonik sistemlerinin tasarım ve entegrasyon süreçlerinde aktif rol üstlenmiştir.",
      image: "/Arzu Sümeyye çiftçi.jpeg",
      linkedin: "https://linkedin.com/in/lisawang",
      instagram: "https://instagram.com/lisa_manufacturing",
      github: "https://github.com/lisawang",
    },
  ]

  return (
    <section ref={sectionRef} id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Takımımız
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`group bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-all duration-500 hover:glow hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-accent transition-colors duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-card-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-10 w-10 p-0 hover:bg-accent/20 hover:text-accent"
                      asChild
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.instagram && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-10 w-10 p-0 hover:bg-accent/20 hover:text-accent"
                      asChild
                    >
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.website && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-10 w-10 p-0 hover:bg-accent/20 hover:text-accent"
                      asChild
                    >
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-10 w-10 p-0 hover:bg-accent/20 hover:text-accent"
                      asChild
                    >
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.email && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-10 w-10 p-0 hover:bg-accent/20 hover:text-accent"
                      asChild
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-accent/30">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Misyonumuza Katılmak İster misiniz?</h3>
            <p className="text-card-foreground mb-6 max-w-2xl mx-auto">
              Havacılık ve uzay mühendisliğinin sınırlarını zorlama vizyonumuzu paylaşan tutkulu bireyleri her zaman arıyoruz. İster öğrenci, ister profesyonel, ister meraklı olun, ekibimizde size yer var.
            </p>
            <Button className="glow">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
