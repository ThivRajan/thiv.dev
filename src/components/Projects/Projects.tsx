import ProjectCard from './ProjectCard'
import { PROJECT_CONFIG } from './project.config'

export default function Projects() {
	return (
		<div className="text-white flex flex-col gap-4">
			<h1 className="font-medium text-white text-3xl">Projects</h1>
			{PROJECT_CONFIG.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</div>
	)
}
