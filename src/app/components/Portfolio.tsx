'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail, Phone, Linkedin, Github, Briefcase, Users, Code, BarChart, Twitter } from 'lucide-react'

const sections = ['Home', 'Bio', 'Portfolio', 'Contact']

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuNavigating, setIsMenuNavigating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      setIsScrolling(true)
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1)
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(currentSection - 1)
      }
      setTimeout(() => setIsScrolling(false), 1000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [currentSection, isScrolling])

  return (
    <div className="relative h-screen overflow-hidden bg-[#000106] text-white" ref={containerRef}>
      <Starfield isScrolling={isScrolling || isMenuNavigating} />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black bg-opacity-50">
          <h1 className="text-2xl font-bold">Stephen Ferguson</h1>
          <nav>
            {sections.map((section, index) => (
              <button
                key={section}
                className={`mx-2 ${currentSection === index ? 'text-blue-400' : 'text-white'}`}
                onClick={() => {
                  setIsMenuNavigating(true)
                  setCurrentSection(index)
                  setTimeout(() => setIsMenuNavigating(false), 1000)
                }}
              >
                {section}
              </button>
            ))}
          </nav>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="h-screen flex items-center justify-center"
          >
            <div className="bg-[#000106] bg-opacity-80 p-8 rounded-3xl w-full max-w-4xl mx-auto">
              {currentSection === 0 && <HomeSection />}
              {currentSection === 1 && <BioSection />}
              {currentSection === 2 && <PortfolioSection />}
              {currentSection === 3 && <ContactSection />}
            </div>
          </motion.div>
        </AnimatePresence>

        {currentSection < sections.length - 1 && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold mb-4">Welcome</h2>
      <p className="text-2xl">I'm Stephen Ferguson, a passionate developer and creative problem solver.</p>
    </div>
  )
}

function BioSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-xl mb-6">
        Seasoned freelance technical consultant with 20 years in market research, specializing in data and web technologies.
      </p>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col items-center">
          <Briefcase className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Industry Experience</h3>
          <p className="text-sm">
            Worked with Dynata and STRAT7, leaders in market research.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Leadership</h3>
          <p className="text-sm">
            Led 10+ member teams, driving innovation in data projects.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Code className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Technical Expertise</h3>
          <p className="text-sm">
            Developed full-stack apps for financial reporting and project management.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BarChart className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Data Analysis</h3>
          <p className="text-sm">
            Transform complex data into actionable insights for clients.
          </p>
        </div>
      </div>
      <p className="text-lg">
        Bridging data collection, analysis, and application to drive growth and solve complex business challenges.
      </p>
    </div>
  )
}

function PortfolioSection() {
  const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack online store with real-time inventory.' },
    { title: 'Social Media Dashboard', description: 'Analytics tool for managing multiple social accounts.' },
    { title: 'Mobile Fitness App', description: 'React Native app for tracking workouts and nutrition.' },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-center">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <div className="flex flex-col items-center space-y-4">
        <a href="mailto:thestevefergie@gmail.com" className="flex items-center">
          <Mail className="mr-2" /> thestevefergie@gmail.com
        </a>
        <a href="tel:+447846378964" className="flex items-center">
          <Phone className="mr-2" /> +447846378964
        </a>
        <a href="https://github.com/BetaMac" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Github className="mr-2" /> GitHub
        </a>
        <a href="https://twitter.com/LondonFerg" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Twitter className="mr-2" /> Twitter
        </a>
      </div>
    </div>
  )
}

function Starfield({ isScrolling }: { isScrolling: boolean }) {
  const starCount = 1620 // Reduced by another 10% from 1800
  const stars = useRef<{ x: number; y: number; z: number; px: number; py: number; size: number }[]>([])
  const speed = useRef(0)
  const targetSpeed = useRef(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = document.getElementById('starfield') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    const initStars = () => {
      stars.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000,
        px: 0,
        py: 0,
        size: 0.07 + Math.random() * 1.33, // Reduced by 30% (was 0.1 + Math.random() * 1.9)
      }))
    }

    const moveStar = (star: { x: number; y: number; z: number; px: number; py: number; size: number }) => {
      star.z -= speed.current
      if (star.z <= 0) {
        star.z = 2000
        star.x = Math.random() * 2000 - 1000
        star.y = Math.random() * 2000 - 1000
      }
    }

    const drawStar = (star: { x: number; y: number; z: number; px: number; py: number; size: number }) => {
      const x = star.x / (star.z * 0.001)
      const y = star.y / (star.z * 0.001)
      if (x < -canvas.width / 2 || x > canvas.width / 2 || y < -canvas.height / 2 || y > canvas.height / 2) return

      const baseSize = (1 - star.z / 2000) * 2.8 // Reduced by 30% from 4
      const size = baseSize * star.size
      const shade = Math.floor((1 - star.z / 2000) * 255)

      if (ctx) {
        ctx.beginPath()
        ctx.fillStyle = `rgb(${shade}, ${shade + 15}, ${shade + 30})`
        ctx.arc(x + canvas.width / 2, y + canvas.height / 2, size < 0.1 ? 0.1 : size, 0, Math.PI * 2)
        ctx.fill()

        if (speed.current > 2.5) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(${shade}, ${shade + 15}, ${shade + 30}, ${(1 - star.z / 2000) * 0.8})`
          ctx.lineWidth = size * 0.6
          ctx.moveTo(star.px + canvas.width / 2, star.py + canvas.height / 2)
          ctx.lineTo(x + canvas.width / 2, y + canvas.height / 2)
          ctx.stroke()
        }

        star.px = x
        star.py = y
      }
    }

    const animate = () => {
      if (ctx) {
        ctx.fillStyle = 'rgba(0, 2, 10, 0.2)' // Slightly bluer background
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        speed.current += (targetSpeed.current - speed.current) * 0.05

        stars.current.forEach((star) => {
          moveStar(star)
          drawStar(star)
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initStars()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    targetSpeed.current = isScrolling ? 100 : 2.5
  }, [isScrolling])

  return <canvas id="starfield" className="fixed inset-0 z-0" />
}