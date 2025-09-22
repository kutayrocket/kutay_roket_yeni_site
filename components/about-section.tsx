"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Target, Rocket, Trophy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card/80 rounded-2xl shadow-lg border border-accent/30 flex flex-col lg:flex-row items-stretch overflow-hidden">
          {/* Sol: Takım Fotoğrafı */}
          <div className="lg:w-1/2 w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-4 lg:p-8">
            {/* Kullanıcı buraya takım fotoğrafını ekleyecek */}
            <img src="/aboutphoto.jpg" alt="Kutay Rocket Team" className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-xl" />
          </div>
          {/* Sağ: Başlık ve Açıklama */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center p-6 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent drop-shadow-lg" style={{fontFamily:'inherit'}}>
              Süleyman Demirel Üniversitesi Kutay <br />Roket Takımı
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed" style={{fontFamily:'inherit'}}>
              Uzay ve havacılık teknolojilerine ilgi duyan, mühendislik ve bilim alanlarında kendini geliştirmek isteyen Süleyman Demirel Üniversitesi Mühendislik ve Doğa Bilimleri Fakültesi öğrencileri tarafından 2024 yılında kurulmuştur. Takımımız, ülkemizin uzay çalışmalarına katkıda bulunmayı hedefleyen genç ve dinamik bir ekipten oluşmaktadır. Takımımız, üyelerinin farklı disiplinlerdeki bilgi birikimlerini bir araya getirerek ve özellikle mekanik tasarım, aviyonik sistemler, uçuş sistemleri ve aerodinamik alanlarında çalışmalar yürüterek TEKNOFEST Roket Yarışmasına hazırlanmaktadır. Hazırlık sürecimizde, teorik bilgiyi pratiğe dökerek gerçek mühendislik deneyimleri kazanıyor ve uzay teknolojileri alanında ilerlemeyi hedefliyoruz. Vizyonumuz, Türkiye'nin uzay çalışmalarına katkı sağlayacak nitelikli mühendisler olarak kendimizi geliştirmek ve gelecekte daha büyük projelere imza atarak uluslararası arenada rekabet edebilecek seviyeye ulaşmaktır. Sürekli öğrenmeye ve gelişime açık bir ekip olarak, sadece yarışmalara katılmakla kalmayıp aynı zamanda ülkemizin uzay alanındaki potansiyelini artıracak çalışmalar yürütmeyi de hedefliyoruz. Kutay Roket Takımı olarak, bilgiye ve bilime olan inancımızla, her geçen gün daha büyük hedeflere ulaşmak için çalışmaya devam edeceğiz!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
