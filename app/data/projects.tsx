import React from 'react'

export interface Project {
  id: string
  title: string
  tags: string[]
  description: string
  impact: string
  imagePosition: 'left' | 'right'
  icon?: string
  imageSrc?: string
  detailImageSrc?: string
  overview: React.ReactNode
  challenge: React.ReactNode
  approach: React.ReactNode
  solution: React.ReactNode
  impactDetails: React.ReactNode
  details: {
    who: string
    howLong: string
    tools: string
  }
}

export const projects: Project[] = [
  {
    id: 'ai-coach',
    title: 'AI Coach for Engagement Data',
    tags: ['Interaction Design', 'Prototyping', 'UI Design'],
    description: 'People were left with great self-awareness but no clear path forward.',
    impact: 'The feature helped bridge the gap between insights and action',
    imagePosition: 'right',
    icon: '/assets/peak-coach/chat-sparkles.svg',
    imageSrc: '/assets/peak-coach/Chat.svg',
    detailImageSrc: '/assets/peak-coach/chat.gif',
    overview: (
      <div>
        <p>employeeInsite helps companies understand what motivates their employees at work. The platform surveys employees on six key areas then gives both employees and managers personalized insights and concrete steps to improve the work experience.</p>
      </div>
    ),
    challenge: (
      <div>
        <p>Our personalized results were spot on. The results perfectly explained the feelings each employee had at work. We had someone tell us, "I knew these feelings subconsciously, but this report gave me the words I needed for my next one-on-one with my boss."</p>
        <br />
        <p>But that accuracy created a new problem: they felt overwhelmed with what to do next. We included suggested action items in the results, but making those recommendations truly personalized for every employee's unique situation was nearly impossible with static content.</p>
        <br />
        <p>People were left with great self-awareness but no clear path forward.</p>
      </div>
    ),
    approach: (
      <div>
        <p>Instead of throwing more charts at the problem, we realized people needed something more like talking to a coach. You know how you'd bounce ideas off someone who knows your situation? That's what was missing.</p>
        <br />
        <p>We brought in our consultants, who are in the room every week with employees, to help us figure out what resonated in person. Our team trained an AI that could access each person's results plus some high-level team patterns (anonymized, of course) so it could give advice that actually made sense for their specific situation.</p>
      </div>
    ),
    solution: (
      <div>
        <p>We built a chat feature where users could:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Ask questions about their results in plain English</li>
          <li>Get personalized advice based on their actual data and team context</li>
          <li>Practice tough conversations before having them in real life</li>
          <li>Figure out concrete next steps instead of just "be more collaborative" type advice</li>
        </ul>
      </div>
    ),
    impactDetails: (
      <div>
        <p>The results were encouraging, but not immediate. We learned that even with better tools, employees and leaders are busy with their day jobs—thinking about engagement and what motivates them at work often feels secondary to getting things done.</p>
        <br />
        <p>We also ran into the "blank slate" problem. People would open the chat and just stare at it, not knowing what to ask. This led us to explore guided prompts (similar to what current AI models use) to help users get started. Once they had that initial nudge, they could have meaningful conversations about their results and start making real changes to improve their work experience.</p>
        <br />
        <p>The feature helped bridge the gap between insights and action, but it taught us that good design means anticipating not just what users want to do, but also the barriers that keep them from doing it.</p>
      </div>
    ),
    details: {
      who: 'Designer (me) + 2 engineers (frontend/backend) + leadership consultants who helped train the AI',
      howLong: '2 months from idea to live feature',
      tools: 'Figma, v0, Cursor'
    }
  },
  {
    id: 'executive-insights',
    title: 'Executive Insights',
    tags: ['User Research', 'Prototyping', 'UI Design'],
    description: 'Executives were not sure of the takeaways after our assessment review.',
    impact: 'With summarized insights at a glance, executives self-confident making strategic decisions.',
    imagePosition: 'left',
    icon: '/assets/insights/exec-icon.svg',
    imageSrc: '/assets/insights/Macbook-exec.png',
    overview: (
      <div>
        <p>employeeInsite helps companies understand what motivates their employees at work. The platform surveys employees on six key areas then gives both employees and managers personalized insights and concrete steps to improve the work experience.</p>
        <br/>
        <p>Upon completion of the survey, executives get access to a data dashboard to view company level results.</p>
      </div>
    ),
    challenge: (
      <div>
        <p>The company's data visualizations were built for data engineers rather than end users. During data review meetings, executives weren't getting the value from these visuals that our team expected.</p>
        <br />
        <p>The complex, detailed charts and dashboards worked great for technical users, but they overwhelmed executives who just needed quick, actionable insights for strategic decisions, not tools for diving deep into data.</p>
        <br />
        <div 
          className="rounded-2xl p-8 mt-6 flex flex-col items-center justify-center min-h-[400px]"
          style={{ background: 'linear-gradient(90deg, rgba(5, 107, 161, 0.20) 0%, rgba(56, 136, 158, 0.20) 50%, rgba(106, 164, 154, 0.20) 100%)' }}
        >
          <img 
            src="/assets/insights/Dimensions.png" 
            alt="Complex data dashboard showing overwhelming charts and metrics for executives"
            className="max-w-full h-auto"
          />
          <p className="text-[#595959] text-sm mt-4 text-center max-w-2xl">
            Old visualization we decided to update for executives
          </p>
        </div>
      </div>
    ),
    approach: (
      <div>
        <p>We conducted user research specifically with executive users. We interviewed them to understand their key priorities and how they actually make decisions with data.
        </p>
        <br />
        <p>Rather than trying to simplify the existing dashboards for everyone, we realized we needed separate user paths. One optimized for high-level strategic insights, and another for detailed data exploration.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>We designed a dedicated executive summary page that highlighted the most critical metrics and trends in a simple, digestible format.
        </p>
        <br />
        <p>This created a clear separation: strategic insights for executives and detailed data exploration tools for HR teams and other users who needed full sorting and filtering capabilities. Both user types could access what they needed without compromise.
        </p>
      </div>
    ),
    impactDetails: (
      <div>
        <p>Executives started engaging more meaningfully with data during review meetings. They asked better strategic questions and made faster decisions based on the insights.
        </p>
        <br />
        <p>Overall product adoption increased because both user segments found clear value. Executives got their streamlined insights while HR teams kept their detailed analysis tools.
        </p>
        <br />
        <p>One size doesn't fit all when it comes to data visualization. Different user types need fundamentally different approaches to the same underlying data.
       </p>
      </div>
    ),
    details: {
      who: 'Designer (me) + 1 engineer (frontend)',
      howLong: '1 month',
      tools: 'Figma'
    }
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}
