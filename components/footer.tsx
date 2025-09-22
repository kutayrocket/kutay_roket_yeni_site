"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-accent mb-4">KUTAY</div>
            <p className="text-card-foreground leading-relaxed mb-6 max-w-md">
              Teknofest Yüksek İrtifa yarışmasında yıldızlara uzanıyoruz. Havacılık ve uzay mühendisliğinin sınırlarını zorlama yolculuğumuzda bize katılın.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0" asChild>
                <a href="https://www.linkedin.com/company/kutayroket/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0" asChild>
                <a href="https://www.instagram.com/kutayroket" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0" asChild>
                <a href="https://www.youtube.com/@kutayroket1" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-card-foreground transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#team" className="text-card-foreground transition-colors">
                  Takımımız
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-card-foreground transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#news" className="text-card-foreground transition-colors">
                  Gündem
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-accent mr-3" />
                <a href="mailto:kutayrocket@gmail.com" className="text-card-foreground transition-colors">
                  kutayrocket@gmail.com
                </a>
              </li>
              
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-accent mr-3 mt-1" />
                <span className="text-card-foreground">
                  Mühendislik Fakültesi
                  <br />
                  Süleman Demirel University
                  <br />
                  Isparta, 32260
                  <br />
                  Turkey
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Misyonumuzu Desteklemeye Hazır mısınız?
          </h3>
          <p className="text-card-foreground mb-6 max-w-2xl mx-auto">
            Yeni zirvelere ulaşmak için bize katılın. Sponsorluğunuz, havacılık ve uzay mühendisliğinin sınırlarını zorlamamıza ve yeni nesil yenilikçilere ilham vermemize yardımcı oluyor.
          </p>

          <a
            href="mailto:kutayrocket@gmail.com?subject=Sponsor%20Olmak%20İstiyorum&body=Merhaba%20Kutay%20Roket%20Takımı,"
          >
            <Button className="glow">
              <Mail className="mr-2 h-4 w-4" />
              Sponsorumuz Olun
            </Button>
          </a>
        </div>


        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 KUTAY Rocket Team. All rights reserved. | Reaching for the stars since 2024.
          </p>
        </div>
      </div>
    </footer>
  )
}
