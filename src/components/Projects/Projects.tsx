import SectionCard from '../SectionCard/SectionCard'
import { PROJECT_CONFIG } from './project.config'

export default function Projects() {
	if (PROJECT_CONFIG.length === 0) {
		return null
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-4xl">Projects</h1>
			<div className="flex flex-col gap-8">
				{PROJECT_CONFIG.map((project) => (
					<SectionCard key={project.title} {...project} />
				))}
			</div>
		</div>
	)
}
