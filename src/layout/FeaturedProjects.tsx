import Project from '@/components/Project'
import { projects } from '@/mocks/projects'

export default function FeaturedProjects() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2">
        Projetos legais que criei ou participei
      </h2>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-normal items-start">
        {projects.map((item) => (
          <Project project={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
