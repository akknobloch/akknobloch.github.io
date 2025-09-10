'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const imgVector = "/assets/logo.svg";

interface NavigationProps {
  activeTab?: string
}

export default function Navigation({ activeTab: propActiveTab }: NavigationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('about')

  // Update active tab based on current pathname
  useEffect(() => {
    if (propActiveTab) {
      setActiveTab(propActiveTab)
    } else if (pathname.startsWith('/work')) {
      setActiveTab('work')
    } else {
      setActiveTab('about')
    }
  }, [pathname, propActiveTab])

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white box-border content-stretch flex gap-6 items-center justify-start p-[4px] rounded-[999px] shrink-0">
      <div 
        aria-hidden="true" 
        className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)]" 
      />
      
      <button
        onClick={() => {
          setActiveTab('about')
          router.push('/')
        }}
        className={`box-border content-stretch flex gap-2.5 h-11 items-center justify-center px-12 py-4 relative rounded-[999px] shrink-0 w-28 transition-colors ${
          activeTab === 'about' 
            ? 'bg-[#f7f7f9] text-[#222222]' 
            : 'bg-white text-[#787575] hover:bg-gray-50'
        }`}
      >
        <div className="font-graphik font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.24px]">
          <p className="leading-[normal] whitespace-pre">About</p>
        </div>
      </button>
      
      <button
        onClick={() => {
          router.push('/')
        }}
        className="h-[37.5px] relative shrink-0 w-[44.093px] hover:opacity-80 transition-opacity cursor-pointer"
      >
        <img alt="Logo" className="block max-w-none size-full" src={imgVector} />
      </button>
      
      <button
        onClick={() => {
          setActiveTab('work')
          router.push('/work')
        }}
        className={`box-border content-stretch flex gap-2.5 h-11 items-center justify-center px-12 py-4 relative rounded-[999px] shrink-0 w-28 transition-colors ${
          activeTab === 'work' 
            ? 'bg-[#f7f7f9] text-[#222222]' 
            : 'bg-white text-[#787575] hover:bg-gray-50'
        }`}
      >
        <div className="font-graphik font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.24px]">
          <p className="leading-[normal] whitespace-pre">Work</p>
        </div>
      </button>
    </div>
  )
}
