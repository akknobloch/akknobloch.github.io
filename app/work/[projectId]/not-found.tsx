import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation activeTab="work" />
      
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
        <h1 className="font-graphik text-[48px] font-semibold text-black mb-6 tracking-tight antialiased">
          Project Not Found
        </h1>
        
        <p className="font-graphik font-normal text-[20px] text-[#595959] leading-relaxed mb-8 antialiased">
          The project you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/work"
          className="inline-flex items-center gap-2 bg-[#7791D1] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6a7bc4] transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Work
        </Link>
      </div>
    </div>
  )
}
