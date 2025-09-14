import ProjectCard from '@components/Projects/ProjectCard/ProjectCard'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-medium text-3xl">Experience</h1>
			{EXPERIENCE_CONFIG.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</div>
	)
}
