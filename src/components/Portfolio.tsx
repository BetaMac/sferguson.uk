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
  const [lastScrollTime, setLastScrollTime] = useState(0)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (currentSection !== 0 && e.deltaY < 0) {
        e.preventDefault()
      }

      const now = Date.now()
      if (isScrolling || now - lastScrollTime < 500) return
      
      const scrollThreshold = 20
      
      if (Math.abs(e.deltaY) > scrollThreshold) {
        setIsScrolling(true)
        setLastScrollTime(now)
        
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          setCurrentSection(currentSection + 1)
        } else if (e.deltaY < 0 && currentSection > 0) {
          setCurrentSection(currentSection - 1)
        }
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      // Get the touch target
      const target = e.target as HTMLElement
      const header = document.querySelector('header')
      const mobileMenu = document.querySelector('nav.mobile-menu')
      const contactLinks = document.querySelectorAll('a')
      
      // Allow touch events if we're interacting with the header/menu or links
      if (header?.contains(target) || 
          mobileMenu?.contains(target) || 
          Array.from(contactLinks).some(link => link.contains(target))) {
        return
      }

      // Prevent pull-to-refresh on other pages
      if (currentSection !== 0) {
        e.preventDefault()
      }
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      // Get the touch target
      const target = e.target as HTMLElement
      const header = document.querySelector('header')
      const mobileMenu = document.querySelector('nav.mobile-menu')
      const contactLinks = document.querySelectorAll('a')
      
      // Allow touch events if we're interacting with the header/menu or links
      if (header?.contains(target) || 
          mobileMenu?.contains(target) || 
          Array.from(contactLinks).some(link => link.contains(target))) {
        return
      }

      // Prevent pull-to-refresh on other pages
      if (currentSection !== 0) {
        e.preventDefault()
      }
      
      if (isMobileMenuOpen) return
      
      const now = Date.now()
      if (now - lastScrollTime < 500) return

      const touchEndY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchEndY
      
      const touchThreshold = 80
      
      if (Math.abs(deltaY) > touchThreshold) {
        setIsScrolling(true)
        setLastScrollTime(now)
        
        if (deltaY > 0 && currentSection < sections.length - 1) {
          setCurrentSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          setCurrentSection(currentSection - 1)
        }
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      container.addEventListener('touchstart', handleTouchStart, { passive: false })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [currentSection, isScrolling, lastScrollTime, isMobileMenuOpen])

  const handleMenuClick = (index: number) => {
    setIsMenuNavigating(true)
    setCurrentSection(index)
    setIsMobileMenuOpen(false)
    setTimeout(() => setIsMenuNavigating(false), 1000)
  }

  useEffect(() => {
    // Trigger initial hyperspace effect
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 800) // Match this with the motion.div animation duration

    return () => clearTimeout(timer)
  }, []) // Empty dependency array is fine here as this is intentionally only run once

  return (
    <div className="relative min-w-[320px] h-screen overflow-hidden bg-[#000106] text-white" ref={containerRef}>
      <Starfield isScrolling={isScrolling || isMenuNavigating || isInitialLoad} />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-black bg-opacity-10">
          <h1 className="text-sm sm:text-xl font-bold">
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
          <div className="fixed inset-0 z-40 sm:hidden" onClick={(e) => e.stopPropagation()}>
            <div 
              className="absolute inset-0 bg-black bg-opacity-10" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            <nav className="absolute right-0 top-0 h-fit bg-[#000106] bg-opacity-10 backdrop-blur-sm shadow-lg p-4 pt-16 mobile-menu">
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

        <div className="perspective-[1000px] h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              // Starting position - content appears from even further away
              initial={{ 
                z: 3000,        // Increased from 2000 for more dramatic entrance
                opacity: 0,      
                scale: 0.1,      // Back to smaller scale for more dramatic entrance
                rotateX: 5       
              }}
              // Middle position - content in view
              animate={{ 
                z: 0,           
                opacity: 1,      
                scale: 1,        
                rotateX: 0       
              }}
              // Exit animation - content flies past viewer
              exit={{ 
                z: -2000,       
                opacity: 0.3,    
                scale: 3.5,      
                rotateX: -15     
              }}
              // Animation timing and easing
              transition={{ 
                type: "easeInOut",
                duration: 0.5,    
                opacity: {
                  duration: 0.35,  
                  ease: "easeOut"
                },
                scale: {
                  duration: 0.5,   // Back to faster scale for snappier movement
                  ease: "easeIn"   // Back to easeIn for more dramatic exit
                },
                z: {
                  duration: 0.5,   // Matching other durations
                  ease: "easeIn"   // Back to easeIn for more dramatic exit
                },
                rotateX: {
                  duration: 0.5,   
                  ease: "easeIn"   // Back to easeIn for more dramatic exit
                }
              }}
              // 3D transformation settings
              style={{
                position: 'fixed',
                inset: 0,
                transformStyle: 'preserve-3d',    // Enable 3D transformations
                perspective: 1000,                // Add depth to the 3D space
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="h-screen flex items-center justify-center bg-[#000106] bg-opacity-10 p-4 sm:p-8 rounded-3xl w-full max-w-4xl mx-auto">
                {currentSection === 0 && <HomeSection />}
                {currentSection === 1 && <BioSection />}
                {currentSection === 2 && <PortfolioSection />}
                {currentSection === 3 && <ContactSection />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* New footer section */}
        <footer className="fixed bottom-0 left-0 right-0 z-20 flex justify-center pb-2">
          {currentSection < sections.length - 1 && (
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="text-white opacity-50" />
            </motion.div>
          )}
        </footer>
      </div>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4">Welcome</h2>
      <p className="text-xl">I&apos;m Steve Ferguson, a Senior Technical Solutions Specialist with 20 years&apos; experience delivering solutions for top consultancies. <br/><br/>I&apos;ve honed my skills leading teams, developing business-critical applications, and engineering innovative survey solutions that leverage cutting-edge technology. <br/><br/>Collaborating with researchers, analysts, finance teams or end-clients, I turn complex requirements into intuitive systems that drive insights and innovation.</p>
    </div>
  )
}

function BioSection() {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Me</h2>
      <p className="text-lg sm:text-xl mb-4 sm:mb-6">
        Seasoned technical consultant with 20 years in market research, specializing in data and web technologies.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex flex-col items-center">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400" />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Industry</h3>
          <p className="text-xs sm:text-sm">
            STRAT7 Incite (strategic research and planning) and Dynata (global data solutions leader).
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400" />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Leadership</h3>
          <p className="text-xs sm:text-sm">
            Led 10+ member teams and outsource resources in survey programming and data collection.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400" />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Technical</h3>
          <p className="text-xs sm:text-sm">
            Developed full-stack and stand-alone applications for financial reporting and project management, and automation tasks.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BarChart className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400" />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Data</h3>
          <p className="text-xs sm:text-sm">
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
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 bg-opacity-10 p-2 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
      <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-sm sm:text-base">
        <a href="mailto:thestevefergie@gmail.com" className="flex items-center">
          <Mail className="mr-2" /> thestevefergie@gmail.com
        </a>
        <a href="tel:+447846378964" className="flex items-center">
          <Phone className="mr-2" /> +447846378964
        </a>
        <a href="https://github.com/BetaMac" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Github className="mr-2" /> GitHub
        </a>
        <a href="https://twitter.com/thestevefergie" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Twitter className="mr-2" /> Twitter
        </a>
      </div>
    </div>
  )
}

function Starfield({ isScrolling }: { isScrolling: boolean }) {
  const starCount = 1782
  const stars = useRef<{ x: number; y: number; z: number; px: number; py: number; size: number }[]>([])
  const speed = useRef(0)
  const targetSpeed = useRef(0)
  const animationRef = useRef<number | undefined>(undefined)
  const quality = useRef(1)

  useEffect(() => {
    // Check device capabilities once on mount
    const pixelRatio = window.devicePixelRatio || 1
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile || pixelRatio > 2) {
      quality.current = 0.75
    }

    const canvas = document.getElementById('starfield') as HTMLCanvasElement
    const ctx = canvas?.getContext('2d')

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth * quality.current
        canvas.height = window.innerHeight * quality.current
        if (quality.current !== 1) {
          canvas.style.width = `${window.innerWidth}px`
          canvas.style.height = `${window.innerHeight}px`
        }
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

      const baseSize = (1 - star.z / 2000) * 2.8
      const size = baseSize * star.size
      
      // Create subtle prismatic color effect
      const time = Date.now() * 0.001
      const brightness = Math.floor((1 - star.z / 2000) * 255)
      
      // Reduced RGB variations for more subtle effect
      const r = brightness + Math.sin(time + star.x) * 8
      const g = brightness + Math.sin(time + star.y + 2) * 8
      const b = brightness + Math.sin(time + star.x + 4) * 12

      if (ctx) {
        // Draw diamond shape
        ctx.beginPath()
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        
        const centerX = x + canvas.width / 2
        const centerY = y + canvas.height / 2
        const innerSize = size * 0.4  // Size of inner points
        
        // Draw 8 points
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4
          
          // Outer point
          ctx.lineTo(
            centerX + Math.cos(angle) * size,
            centerY + Math.sin(angle) * size
          )
          
          // Inner point
          ctx.lineTo(
            centerX + Math.cos(angle + Math.PI / 8) * innerSize,
            centerY + Math.sin(angle + Math.PI / 8) * innerSize
          )
        }
        
        ctx.closePath()
        ctx.fill()

        // Only draw star trails when moving faster than cruising speed
        if (speed.current > 2.5) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(1 - star.z / 2000) * 0.8})`
          ctx.lineWidth = size * 0.6
          ctx.moveTo(star.px + canvas.width / 2, star.py + canvas.height / 2)
          ctx.lineTo(centerX, centerY)
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
    // Set target speed based on scrolling state
    targetSpeed.current = isScrolling ? 100 : 0.6  // 100 = hyperspace jump speed, 0.5 = idle cruising speed
  }, [isScrolling])

  return <canvas id="starfield" className="fixed inset-0 z-0" />
}