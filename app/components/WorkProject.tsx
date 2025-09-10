'use client'

import { useRouter } from 'next/navigation'

interface WorkProjectProps {
  title: string
  tags: string | string[]
  description: string
  impact: string
  imagePosition: 'left' | 'right'
  projectId?: string
  icon?: string
  imageSrc?: string
}

export default function WorkProject({ 
  title, 
  tags, 
  description, 
  impact, 
  imagePosition,
  projectId,
  icon,
  imageSrc
}: WorkProjectProps) {
  const router = useRouter()

  const handleClick = () => {
    if (projectId) {
      router.push(`/work/${projectId}`)
    }
  }

  return (
    <div 
      className={`bg-[#f7f7f9] content-stretch flex gap-4 items-start justify-start relative rounded-[32px] shrink-0 w-full group ${
        projectId ? 'cursor-pointer hover:bg-[#f0f0f2] transition-colors duration-200' : ''
      }`}
      onClick={handleClick}
    >
      {/* Hover Arrow Icon */}
      {projectId && (
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" fill="white"/>
            <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#DDDDDD"/>
            <path d="M12 12H22M22 12V22M22 12L12 22" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      
      {/* Content Section */}
      <div className={`basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-[32px] relative shrink-0 ${
        imagePosition === 'right' ? 'order-1' : 'order-2'
      }`}>
        {/* Icon */}
        {icon ? (
          <div className="h-10 overflow-clip relative shrink-0 w-[42px]">
            <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]">
              <div className="absolute inset-[-4.5%_-4.29%]">
                <img alt="" className="block max-w-none size-full" src={icon} />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#d9d9d9] shrink-0 size-[50px] rounded-lg" />
        )}
        
        {/* Title */}
        <div className="font-graphik font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px]">
          <p className="leading-[normal]">{title}</p>
        </div>
        
        {/* Tags */}
        {Array.isArray(tags) ? (
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-[#7791D1] bg-opacity-20 border-2 border-[#7791D1] text-[#222222] px-4 py-2 rounded-full text-sm font-medium antialiased"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <div className="font-graphik font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.27px]">
            <p className="leading-[26px]">{tags}</p>
          </div>
        )}
        
        {/* Description */}
        <div className="font-graphik font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#595959] text-[18px] tracking-[-0.27px]">
          <p className="leading-[26px]">{description}</p>
        </div>
        
        {/* Impact */}
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-3 pr-0 py-3 relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-l-4 border-[#7791d1] border-solid inset-0 pointer-events-none" />
          <div className="basis-0 font-graphik font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#595959] text-[16px] tracking-[-0.24px]">
            <p className="leading-[25px]">{impact}</p>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className={`box-border content-stretch flex gap-2.5 items-center justify-start p-[16px] relative self-stretch shrink-0 ${
        imagePosition === 'right' ? 'order-2' : 'order-1'
      }`}>
        <div className="p-6 bg-white h-full rounded-[24px] shrink-0 w-[307px] flex items-center justify-center">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={`${title} project image`} 
              className="max-w-full h-auto"
            />
          ) : (
            <span className="text-[#595959] text-sm">Project Image</span>
          )}
        </div>
      </div>
    </div>
  )
}



