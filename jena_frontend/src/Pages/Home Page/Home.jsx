'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Bot, Sparkles, MessageSquare, Brain, Lock } from 'lucide-react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      speed: number
      size: number
      alpha: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.5
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.speed
        if (particle.x > canvas.width) {
          particle.x = 0
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45, 212, 191, ${particle.alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsAppVideo2024-11-09at8.10.52PM-ezgif.com-video-to-webp-converter-9ReKFQK1nPNdKbHkfwMg1Orx5P9JT0.webp")'
        }}
      />

      {/* Particle Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <header className="fixed w-full top-0 bg-gray-900/50 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Jena AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
              <Button className="bg-cyan-500 hover:bg-cyan-600">Get Started</Button>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="min-h-screen flex items-center">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-3xl">
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Your Personal AI Assistant
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Experience the future of productivity with Jena AI. Intelligent conversations, 
                  task management, and personalized assistance all in one place.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6">
                    Try Jena AI Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 text-lg px-8 py-6">
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gray-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Powerful Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MessageSquare className="h-8 w-8 text-cyan-400" />,
                    title: "Natural Conversations",
                    description: "Chat naturally with advanced language processing capabilities."
                  },
                  {
                    icon: <Brain className="h-8 w-8 text-cyan-400" />,
                    title: "Smart Learning",
                    description: "Adapts to your preferences and improves over time."
                  },
                  {
                    icon: <Lock className="h-8 w-8 text-cyan-400" />,
                    title: "Secure & Private",
                    description: "Your data is encrypted and protected at all times."
                  }
                ].map((feature, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Experience the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of users who are already benefiting from Jena AI's 
                  intelligent assistance.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6">
                  Get Started for Free
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Bot className="h-6 w-6 text-cyan-400" />
                <span className="text-white font-bold">Jena AI</span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 Jena AI. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
