'use client'

import { useRouter } from 'next/navigation'

interface WorkSectionProps {
  title: string
  subtitle?: string
  workUrl?: string
  backgroundColor?: string
  description?: string
  customContent?: React.ReactNode
  showImage?: boolean
  fixedHeight?: boolean
  imageSrc?: string
}

export default function WorkSection({ 
  title, 
  subtitle, 
  workUrl, 
  backgroundColor, 
  description, 
  customContent,
  showImage = true,
  fixedHeight = false,
  imageSrc
}: WorkSectionProps) {
  const router = useRouter()

  const handleCardClick = () => {
    if (workUrl) {
      router.push(workUrl)
    }
  }

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click when clicking the icon
    if (workUrl) {
      router.push(workUrl)
    }
  }

  // Default background styles
  const defaultBackground = 'linear-gradient(90deg, rgba(5, 107, 161, 0.20) 0%, rgba(56, 136, 158, 0.20) 50%, rgba(106, 164, 154, 0.20) 100%)'
  const backgroundStyle = backgroundColor || defaultBackground

  return (
    <div 
      className={`box-border flex flex-col gap-4 items-start justify-start pl-[32px] pt-[32px] pb-[32px] relative rounded-[32px] overflow-hidden ${
        fixedHeight ? 'h-[250px]' : 'h-full min-h-[250px]'
      } ${workUrl ? 'cursor-pointer' : ''}`}
      style={{ background: backgroundStyle }}
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-2 w-full pr-[32px]">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-graphik font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.36px] m-0">
            <span className="leading-[32px]">{title}</span>
          </h2>
          {workUrl && (
            <button 
              onClick={handleIconClick}
              className="flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity z-10"
              aria-label={`View ${title} work`}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" fill="white"/>
                <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#DDDDDD"/>
                <path d="M12 12H22M22 12V22M22 12L12 22" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
        {(subtitle || description) && (
          <div className="font-graphik font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-[#595959] tracking-[-0.24px] w-full">
            <p className="leading-[24px]">{subtitle || description}</p>
            <div className="w-full h-px bg-[#DDDDDD] mt-6"></div>
          </div>
        )}
      </div>
      
      {/* Custom content or default content */}
      <>
        {customContent ? (
          customContent
        ) : showImage ? (
          <div className={` ${
            fixedHeight ? '' : 'lg:justify-start'
          }`}>
            <img 
              src={imageSrc || "/assets/peak-coach/promo-image.svg"} 
              alt={`${title} promo`} 
              className={`w-full object-cover ${
                fixedHeight 
                  ? 'h-full object-center pr-[32px]' 
                  : 'h-[300px] object-center lg:object-left'
              }`}
            />
          </div>
        ) : null}
      </>
    </div>
  )
}
