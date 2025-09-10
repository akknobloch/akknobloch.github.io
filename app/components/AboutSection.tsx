'use client'

import { useState, useRef, useEffect } from 'react'
import GolfDashboard from './GolfDashboard'

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    
    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    
    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    // Only reset hover state if button is not being hovered
    if (!isButtonHovered) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(false)
      }, 200) // Longer delay to prevent jumpiness
    }
  }

  const handleClick = () => {
    // Handle clicks on mobile/touch devices (below lg breakpoint)
    setIsExpanded(!isExpanded)
  }

  const handleExternalLink = () => {
    window.open('https://golftripstats.aknobloch.com', '_blank')
  }

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true)
    setIsHovered(true) // Also trigger golf dashboard hover state
  }

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false)
    // Set a timeout to reset golf dashboard hover state after button is no longer hovered
    setTimeout(() => {
      if (!isButtonHovered) {
        setIsHovered(false)
      }
    }, 100)
  }

  return (
    <div 
      className="bg-[#f7f7f9] box-border flex flex-col gap-4 items-center justify-between overflow-clip pt-[32px] px-[32px] relative rounded-[32px] h-full min-h-[250px]"
    >
      <div 
        className="flex flex-col gap-4 w-full"
      >
        <div className="font-graphik font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px]">
          <p className="leading-[normal]">A little about me</p>
        </div>
        
        <div className="font-graphik font-normal leading-[28px] not-italic relative text-[#595959] text-[18px] tracking-[-0.27px] w-full">
          <p className="mb-0">
            I'm a product designer obsessed with how digital experiences work. I download every interesting app (as long as my iPhone storage allows it) just to dissect and learn from their design choices.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            My favorite part is building something that genuinely improves people's lives. Nothing beats hearing that your design saved someone time or reduced their stress.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            When I'm not designing, I'm outside with my family or getting a round of golf in.<br/><br/>
          </p>
           <p className="mb-0 p-4 bg-blue-50 rounded-lg text-black text-sm border border-blue-200">
             Take a look at a fun vibe coded project I built at the intersection of my two passions: 👨🏼‍💻 design and ⛳️ golf 
           </p>
        </div>
      </div>
      
      {/* External Link Arrow Icon - positioned relative to about card */}
      <div 
        className={`absolute z-10 cursor-pointer transition-opacity duration-200 ${(isHovered || isButtonHovered) ? 'lg:opacity-100' : 'lg:opacity-0'} opacity-100`}
        style={{ bottom: '1.5rem', right: '1.5rem' }}
        onClick={handleExternalLink}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="99" height="33" rx="16.5" fill="white"/>
          <rect x="0.5" y="0.5" width="99" height="33" rx="16.5" stroke="#DDDDDD"/>
          <text x="12" y="18" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500" fill="#595959" textAnchor="start" dominantBaseline="central">Visit Site</text>
          <path d="M78 12H88M88 12V22M88 12L78 22" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* GolfDashboard - responsive positioning and animation */}
      <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 group">
        <div 
          className={`relative w-full transition-all duration-500 ease-in-out overflow-visible cursor-pointer lg:cursor-default ${isExpanded ? 'h-[600px]' : 'h-[275px]'} ${isHovered ? 'lg:h-[650px]' : 'lg:h-[275px]'}`}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`transition-transform duration-500 ease-in-out scale-100 rotate-3 ${isExpanded ? 'scale-75 rotate-0' : 'scale-100 rotate-3'} ${isHovered ? 'lg:scale-75 lg:rotate-0' : 'lg:scale-100 lg:rotate-3'}`}>
            <GolfDashboard />
          </div>
        </div>
      </div>
      
    </div>
  )
}
