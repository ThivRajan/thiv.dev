import ProjectCard from '@components/Projects/ProjectCard/ProjectCard'
import { useState } from 'react'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	const [selectedJobIdx, setSelectedJobIdx] = useState(0)
	const selectedJob = EXPERIENCE_CONFIG[selectedJobIdx]

	return (
		<div className="text-white flex flex-col gap-4">
			<h1 className="font-medium text-white text-3xl">Experience</h1>
			{EXPERIENCE_CONFIG.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</div>
	)
}
