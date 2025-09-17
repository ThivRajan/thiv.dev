import SectionCard from '@components/SectionCard/SectionCard'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-4xl">Experience</h1>
			<div className="flex flex-col gap-8">
				{EXPERIENCE_CONFIG.map((job) => (
					<SectionCard key={job.title} {...job} />
				))}
			</div>
		</div>
	)
}
