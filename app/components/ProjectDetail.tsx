'use client'

import Navigation from './Navigation'
import { getProjectById } from '../data/projects'
import { notFound } from 'next/navigation'

interface ProjectDetailProps {
  projectId: string
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = getProjectById(projectId)
  
  if (!project) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <Navigation activeTab="work" />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Project Title */}
        <h1 className="font-graphik text-[48px] font-semibold text-black mb-6 tracking-tight antialiased">
          {project.title}
        </h1>
        
        {/* Tags */}
        <div className="flex gap-3 mb-12">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-[#7791D1] bg-opacity-20 border-2 border-[#7791D1] text-[#222222] px-4 py-2 rounded-full text-sm font-medium antialiased"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project Image */}
        <div 
          className="rounded-2xl p-8 mb-12 flex items-center justify-center min-h-[400px]"
          style={{ background: 'linear-gradient(90deg, rgba(5, 107, 161, 0.20) 0%, rgba(56, 136, 158, 0.20) 50%, rgba(106, 164, 154, 0.20) 100%)' }}
        >
          {project.detailImageSrc ? (
            <img 
              src={project.detailImageSrc} 
              alt={`${project.title} project image`} 
              className="max-w-full h-auto"
            />
          ) : project.imageSrc ? (
            <img 
              src={project.imageSrc} 
              alt={`${project.title} project image`} 
              className="max-w-full h-auto"
            />
          ) : (
            <span className="text-[#595959] text-lg">Project Image Coming Soon</span>
          )}
        </div>
        
        {/* Overview */}
        <div className="mb-12">
          <h2 className="font-graphik text-[32px] font-semibold text-black mb-4 antialiased">Overview</h2>
          <div className="font-graphik font-normal text-[20px] text-[#595959] leading-relaxed space-y-4 antialiased">
            {project.overview}
          </div>
        </div>
        
        {/* Project Summary */}
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="font-graphik text-[32px] font-semibold text-black mb-4 antialiased">Project Summary</h2>
            <div className="space-y-10">
              <div>
                <h3 className="font-graphik text-[24px] font-medium text-black mb-2 antialiased">Challenge</h3>
                <div className="font-graphik font-normal text-[20px] text-[#595959] leading-relaxed space-y-4 antialiased">{project.challenge}</div>
              </div>
              <div>
                <h3 className="font-graphik text-[24px] font-medium text-black mb-2 antialiased">Approach</h3>
                <div className="font-graphik font-normal text-[20px] text-[#595959] leading-relaxed space-y-4 antialiased">{project.approach}</div>
              </div>
              <div>
                <h3 className="font-graphik text-[24px] font-medium text-black mb-2 antialiased">Solution</h3>
                <div className="font-graphik font-normal text-[20px] text-[#595959] leading-relaxed antialiased">{project.solution}</div>
              </div>
              <div>
                <h3 className="font-graphik text-[24px] font-medium text-black mb-2 antialiased">Impact & Learnings</h3>
                <div className="font-graphik font-normal text-[20px] text-[#595959] leading-relaxed antialiased">{project.impactDetails}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Details */}
        <div>
          <h2 className="font-graphik text-[32px] font-semibold text-black mb-6 antialiased">Project Details</h2>
          <div className="space-y-4">
            <div>
              <span className="font-graphik font-medium text-black text-[20px] antialiased">Who: </span>
              <span className="font-graphik font-normal text-[20px] text-[#595959] antialiased">{project.details.who}</span>
            </div>
            <div>
              <span className="font-graphik font-medium text-black text-[20px] antialiased">How Long: </span>
              <span className="font-graphik font-normal text-[20px] text-[#595959] antialiased">{project.details.howLong}</span>
            </div>
            <div>
              <span className="font-graphik font-medium text-black text-[20px] antialiased">What Tools: </span>
              <span className="font-graphik font-normal text-[20px] text-[#595959] antialiased">{project.details.tools}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
