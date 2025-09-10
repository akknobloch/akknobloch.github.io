'use client'

import Navigation from './Navigation'
import AboutSection from './AboutSection'
import WorkSection from './WorkSection'
import ToolsSection from './ToolsSection'
import CertificationSection from './CertificationSection'

// Image assets from Figma
const imgVector = "/assets/53174ae8ea4f99c564838144ee905c1db9729c12.svg";

export default function PortfolioPage() {
  return (
    <div className="bg-white box-border flex flex-col gap-8 items-center justify-start px-6 pt-32 pb-16 relative w-full h-full">
      
      {/* Navigation */}
      <Navigation activeTab="about" />
      
      {/* Main Content - Two Column Layout */}
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-6 min-h-[600px] h-full">
        
        {/* Left Column - Single About Card */}
        <div className="w-full lg:w-1/2">
          <AboutSection />
        </div>

        {/* Right Column - Mobile Stack / Desktop 2x3 Subgrid */}
        <div className="w-full lg:w-1/2 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:h-full">
          
          {/* Peak Coach - Mobile: stacked, Desktop: Top left (spans 1x2) */}
          <div className="lg:col-span-1 lg:row-span-2 h-full">
            <WorkSection title="Peak Coach" subtitle="AI Coach for Engagement Data" workUrl="/work/ai-coach" />
          </div>

          {/* Tools - Mobile: stacked, Desktop: Top right (spans 1x1) */}
          <div className="lg:col-span-1 lg:row-span-1 h-full">
            <ToolsSection />
          </div>

          {/* Certification - Mobile: stacked, Desktop: Middle right (spans 1x1) */}
          <div className="lg:col-span-1 lg:row-span-1 h-full">
            <CertificationSection />
          </div>

          {/* Executive Insights - Mobile: stacked, Desktop: Bottom (spans 2x1) */}
          <div className="lg:col-span-2 lg:row-span-1 h-full">
            <WorkSection 
              title="Executive Insights" 
              subtitle="Strategic Level view for the C Suite" 
              workUrl="/work/executive-insights" 
              showImage={true}
              fixedHeight={true}
              imageSrc="/assets/insights/Macbook-exec.png"
            />
          </div>

        </div>
        
      </div>
    </div>
  )
}
