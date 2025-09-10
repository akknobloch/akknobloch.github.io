'use client'

import Navigation from './Navigation'
import WorkProject from './WorkProject'
import { projects } from '../data/projects'

// Image assets from Figma
const imgRectangle4 = "/assets/2d2f86056ae9e4d3fec601f1233dd143d7e2e197.png";

export default function WorkPage() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[72px] items-center justify-start pb-6 pt-32 px-6 relative min-h-screen w-full">
      {/* Background Pattern */}
      <div 
        className="absolute bg-repeat bg-[length:400px_400px] bg-top-left h-[691px] left-0 opacity-40 top-0 w-full max-w-[1440px]" 
        style={{ backgroundImage: `url('${imgRectangle4}')` }} 
      />
      
      {/* Navigation */}
      <Navigation activeTab="work" />
      
      {/* Work Projects */}
      <div className="flex flex-col gap-8 grow items-center max-w-4xl mx-auto px-6 pb-16">
        {projects.map((project) => (
          <WorkProject
            key={project.id}
            title={project.title}
            tags={project.tags}
            description={project.description}
            impact={project.impact}
            imagePosition={project.imagePosition}
            projectId={project.id}
            icon={project.icon}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}
