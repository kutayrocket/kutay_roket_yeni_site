"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef, useState, Suspense } from "react"
import { useGLTF } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, RotateCcw } from "lucide-react"

function RocketModel() {
  const { scene } = useGLTF("/models/rocket.glb") // 🚀 Harici GLB model dosyası
  const meshRef = useRef<any>()

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 6
    }
  }, [])

  return <primitive ref={meshRef} object={scene} scale={1} />
}

useGLTF.preload("/models/rocket.glb")

export function Rocket3DSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [controlsEnabled, setControlsEnabled] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const resetCamera = () => {
    setControlsEnabled(false)
    setTimeout(() => setControlsEnabled(true), 100)
  }

  return (
    <section ref={sectionRef} id="rocket-3d" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            ALP ROKETİ İLE TANIŞIN
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Roketimizi 3 boyutlu olarak keşfedin. Döndürün, yakınlaştırın ve Teknofest Yüksek İrtifa kategorisinde yarışacak mühendislik harikasını keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Model Viewer */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[500px] w-full bg-gradient-to-b from-space-dark to-black rounded-lg overflow-hidden">
                  <Canvas camera={{ position: [5, 5, 5], fov: 50 }} className="w-full h-full">
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} />

                    <Suspense fallback={null}>
                      <RocketModel />
                    </Suspense>

                    <OrbitControls
                      enabled={controlsEnabled}
                      enablePan
                      enableZoom
                      enableRotate
                      autoRotate
                      autoRotateSpeed={1}
                    />
                  </Canvas>

                  {/* Controls Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={resetCamera}
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Instructions */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm text-center">
                        🖱️ Drag to rotate • 🔍 Scroll to zoom • 📱 Touch to interact
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rocket Specifications */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Rocket className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Roket Özellikleri</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Name</span>
                    <span className="text-accent font-semibold">ALP</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Category</span>
                    <span className="text-foreground">Yüksek İrtifa</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Length</span>
                    <span className="text-foreground">2.7 meters</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Diameter</span>
                    <span className="text-foreground">13 cm</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="text-foreground">30 kg</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Target Altitude</span>
                    <span className="text-foreground">7000+ meters</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Recovery</span>
                    <span className="text-foreground">Dual Parachute</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Propulsion</span>
                    <span className="text-foreground">Solid Motor</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm text-card-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Advanced flight computer
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Real-time telemetry
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      GPS tracking system
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Scientific payload bay
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Glass fiber structure
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
