'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail, Phone, Github, Briefcase, Users, Code, BarChart, Twitter, Menu, X } from 'lucide-react'

const sections = ['Home', 'Bio', 'Portfolio', 'Contact']

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuNavigating, setIsMenuNavigating] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)

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

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return
      const touchEndY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchEndY
      if (deltaY > 50 && currentSection < sections.length - 1) {
        setIsScrolling(true)
        setCurrentSection(currentSection + 1)
      } else if (deltaY < -50 && currentSection > 0) {
        setIsScrolling(true)
        setCurrentSection(currentSection - 1)
      }
      setTimeout(() => setIsScrolling(false), 1000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel)
      container.addEventListener('touchstart', handleTouchStart)
      container.addEventListener('touchmove', handleTouchMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [currentSection, isScrolling])

  const handleMenuClick = (index: number) => {
    setIsMenuNavigating(true)
    setCurrentSection(index)
    setIsMobileMenuOpen(false)
    setTimeout(() => setIsMenuNavigating(false), 1000)
  }

  return (
    <div className="relative min-w-[320px] h-screen overflow-hidden bg-[#000106] text-white" ref={containerRef}>
      <Starfield isScrolling={isScrolling || isMenuNavigating} />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-black bg-opacity-10">
          <h1 className="text-base sm:text-xl font-bold">
            <span className="hidden xs:inline">Stephen Ferguson</span>
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            {sections.map((section, index) => (
              <button
                key={section}
                className={`mx-2 ${currentSection === index ? 'text-blue-400' : 'text-white'}`}
                onClick={() => handleMenuClick(index)}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2 hover:text-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 sm:hidden">
            <div 
              className="absolute inset-0 bg-black bg-opacity-10" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            <nav className="absolute right-0 top-0 h-fit bg-[#000106] bg-opacity-10 backdrop-blur-sm shadow-lg p-4 pt-16">
              {sections.map((section, index) => (
                <button
                  key={section}
                  className={`block w-full text-left px-4 py-2 mb-2 rounded ${
                    currentSection === index 
                      ? 'bg-blue-900 bg-opacity-50 text-blue-400' 
                      : 'hover:bg-gray-900 hover:bg-opacity-50'
                  }`}
                  onClick={() => handleMenuClick(index)}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-screen flex items-center justify-center bg-[#000106] bg-opacity-10 p-8 rounded-3xl w-full max-w-4xl mx-auto">
              {currentSection === 0 && <HomeSection />}
              {currentSection === 1 && <BioSection />}
              {currentSection === 2 && <PortfolioSection />}
              {currentSection === 3 && <ContactSection />}
            </div>
          </motion.div>
        </AnimatePresence>

        {currentSection < sections.length - 1 && (
          <motion.div
            style={{
              position: 'absolute',
              bottom: '4px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20,
            }}
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
      <h2 className="text-5xl font-bold mb-4">Welcome</h2>
      <p className="text-xl">I&apos;m Steve Ferguson, a Senior Technical Solutions Specialist with 20 years&apos; experience delivering solutions for top consultancies. <br/><br/>I&apos;ve honed my skills leading teams, developing business-critical applications, and engineering innovative survey solutions that leverage cutting-edge technology. <br/><br/>Collaborating seamlessly with researchers, analysts, finance teams or end-clients, I turn complex requirements into intuitive systems that drive insights and innovation.</p>
    </div>
  )
}

function BioSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6">Me</h2>
      <p className="text-xl mb-6">
        Seasoned technical consultant with 20 years in market research, specializing in data and web technologies.
      </p>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col items-center">
          <Briefcase className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Industry</h3>
          <p className="text-sm">
            STRAT7 Incite (strategic research and planning) and Dynata (global data solutions leader).
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Leadership</h3>
          <p className="text-sm">
            Led 10+ member teams and outsource resources in survey programming and data collection.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Code className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Technical</h3>
          <p className="text-sm">
            Developed full-stack and stand-alone applications for financial reporting and project management, and automation tasks.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BarChart className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-lg font-semibold mb-1">Data</h3>
          <p className="text-sm">
            Collection, analysis and reporting of complex data into actionable insights for hundreds of clients.
          </p>
        </div>
      </div>
      <p className="text-xl">
        Bridging data collection, analysis, and development to drive growth and solve business challenges.
      </p>
    </div>
  )
}

function PortfolioSection() {
  const projects = [
    { title: 'PIP', description: 'A full-stack project management and financial reporting tool.' },
    { title: 'ConRed', description: 'A batch search/replace tool to automate redaction and parsing for ML.' },
    { title: 'XML-converter', description: 'A trained LLM to produce survey software XML output.' },
    { title: 'excel-translator', description: 'A survey translation excel output tool utilising Google\'s API.' },
    { title: 'brand-analyser', description: 'A web scraper with rudimentary analysis for brand mentions (PR).' },
    { title: 'Taiten', description: 'An AI Agent that helps with my personsal tasks.' },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-center">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`bg-gray-800 bg-opacity-10 p-2 rounded-lg backdrop-blur-sm
              ${index === projects.length - 1 ? 'hidden xs:block' : ''}`}
          >
            <h3 className="text-xl font-semibold mb-2 items-center">{project.title}</h3>
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
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = document.getElementById('starfield') as HTMLCanvasElement
    const ctx = canvas?.getContext('2d')

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