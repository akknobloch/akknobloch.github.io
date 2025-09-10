import ProjectDetail from '../../components/ProjectDetail'

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectDetail projectId={params.projectId} />
}
