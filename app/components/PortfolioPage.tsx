'use client'

import Navigation from './Navigation'
import AboutSection from './AboutSection'
import WorkSection from './WorkSection'
import ToolsSection from './ToolsSection'
import CertificationSection from './CertificationSection'

// Image assets from Figma
const imgRectangle4 = "/assets/2d2f86056ae9e4d3fec601f1233dd143d7e2e197.png";
const imgVector = "/assets/53174ae8ea4f99c564838144ee905c1db9729c12.svg";

export default function PortfolioPage() {
  return (
    <div className="bg-white box-border flex flex-col gap-16 items-center justify-start px-6 pt-32 pb-16 relative min-h-screen w-full">
      {/* Background Pattern */}
      <div 
        className="absolute bg-repeat bg-[length:400px_400px] bg-top-left h-[691px] left-0 opacity-40 top-0 w-full max-w-[1440px]" 
        style={{ backgroundImage: `url('${imgRectangle4}')` }} 
      />
      
      {/* Navigation */}
      <Navigation activeTab="about" />
      
      {/* Main Content Grid */}
      <div className="gap-8 lg:gap-4 grid grid-cols-1 lg:grid-cols-4 w-full max-w-[1280px] items-stretch flex-1 grid-rows-[1fr] min-h-0">
        {/* About Section - Spans 2 columns, full height */}
        <div className="lg:col-span-2 lg:row-span-1 flex flex-col gap-4">
          <AboutSection />
        </div>

        {/* Subgrid */}
        <div className="grid grid-cols-subgrid lg:col-span-2 lg:row-span-1 grid-rows-[1fr_1fr_1fr] h-full gap-8 lg:gap-4">

          {/* Work Section - Spans 1 column, 2 rows (full height) */}
          <div className="lg:col-span-1 lg:row-span-2">
            <WorkSection title="Peak Coach" subtitle="AI Coach for Engagement Data" workUrl="/work/ai-coach" />
          </div>

          {/* Tools Section - Spans 1 column, 1 row */}
          <div className="lg:col-span-1 lg:row-span-1">
            <ToolsSection />
          </div>

          {/* Certification Section - Spans 1 column, 1 row */}
          <div className="lg:col-span-1 lg:row-span-1">
            <CertificationSection />
          </div>

          {/* Work 2 Section - Spans 2 columns, 1 row */}
          <div className="lg:col-span-2 lg:row-span-1">
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
