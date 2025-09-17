import SectionCard from '../SectionCard/SectionCard'
import { PROJECT_CONFIG } from './project.config'

export default function Projects() {
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
