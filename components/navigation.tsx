"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Hakkımızda", href: "#about" },
    { name: "Takımımız", href: "#team" },
    { name: "Galeri", href: "#gallery" },
    { name: "Gündem", href: "#news" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-accent">KUTAY</div>
          </div>

         {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-600"
                >
                  {item.name}
                </a>
              ))}
              <a
            href="mailto:kutayrocket@gmail.com?subject=Sponsor%20Olmak%20İstiyorum&body=Merhaba%20Kutay%20Roket%20Takımı,"
          >
              <Button className="ml-4 glow bg-transparent " style={{background:'transparent'}}>
                <span className="hover:bg-transparent">Sponsorumuz Olun</span>
              </Button>

          </a>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 glow bg-transparent " style={{background:'transparent'}}>
              <span className="hover:bg-transparent">Sponsor Us</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
