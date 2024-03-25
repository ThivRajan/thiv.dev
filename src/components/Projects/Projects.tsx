import ProjectCard from './ProjectCard'
import { PROJECTS_CONFIG } from './projects.config'

export default function Projects() {
	return (
		<div className="text-white flex flex-col gap-4">
			<h1 className="font-medium text-white text-3xl">Projects</h1>
			{PROJECTS_CONFIG.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</div>
	)
}
