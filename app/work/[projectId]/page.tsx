import ProjectDetail from '../../components/ProjectDetail'
import { projects } from '../../data/projects'

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectDetail projectId={params.projectId} />
}
