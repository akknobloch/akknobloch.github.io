'use client'

import Image from 'next/image'


export default function ToolsSection() {
  return (
    <div className="bg-[#f7f7f9] box-border flex flex-col items-start justify-between overflow-clip pl-8 pr-0 py-8 relative rounded-[32px] h-full min-h-[250px]">
      <h2 className="font-graphik font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.36px] m-0">
        <span className="leading-[26px]">Tools I Use</span>
      </h2>
      
      <div className="flex flex-col gap-2.5 w-full flex-1 justify-center">
        <div className="bg-white box-border flex gap-2.5 items-center justify-start p-[16px] relative rounded-[16px] lg:rounded-tl-[16px] lg:rounded-tr-none lg:rounded-bl-[16px] lg:rounded-br-none shadow-[0px_4px_13px_0px_rgba(0,0,0,0.15)] w-fit lg:w-full overflow-x-auto scrollbar-hide">
          {/* Figma */}
          <div className="bg-gray-700 flex items-center justify-center p-[8px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16 overflow-hidden">
            <Image src="/assets/tools/Figma.svg" alt="Figma" width={32} height={32} className="w-8 h-8" />
          </div>
          
          {/* Cursor */}
          <div className="flex items-center justify-center relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16 overflow-hidden">
            <Image src="/assets/tools/Cursor Logo Icon.jpeg" alt="Cursor" width={64} height={64} className="w-16 h-16" />
          </div>
          
          {/* Webflow */}
          <div className="flex items-center justify-center relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16 overflow-hidden">
            <Image src="/assets/tools/Webflow Logo Brand Assets.jpeg" alt="Webflow" width={64} height={64} className="w-16 h-16" />
          </div>
          
          {/* Jitter */}
          <div className="flex items-center justify-center relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16 overflow-hidden">
            <Image src="/assets/tools/jitter.jpeg" alt="Jitter" width={64} height={64} className="w-16 h-16" />
          </div>
          
          {/* Git */}
          <div className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16">
            <Image src="/assets/tools/git.svg" alt="Git" width={32} height={32} className="w-8 h-8" />
          </div>
          
          {/* HTML */}
          <div className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16">
            <Image src="/assets/tools/html.svg" alt="HTML" width={32} height={32} className="w-8 h-8" />
          </div>
          
          {/* CSS */}
          <div className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] flex-shrink-0 size-16">
            <Image src="/assets/tools/css.svg" alt="CSS" width={32} height={32} className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
