import type { CSSProperties } from 'react'
import type { Project } from '../project.config'
import './ProjectCard.scss'

export default function ProjectCard({
	tags,
	title,
	description,
	img,
	link,
	colors,
}: Project) {
	// TODO: add drop shadow on hover
	return (
		<a
			className={`card flex gap-4 rounded p-4 cursor-pointer border group h-20`}
			href={link}
			target="_blank"
			rel="noreferrer"
			style={{ '--card-bg': colors.bg } as CSSProperties}
		>
			<img src={img} alt={`${title} Icon`} className="w-15 h-15" />
			<div className="flex flex-col">
				<h3
					className={`description font-semibold ${colors.text} transition-all duration-[900ms]`}
				>
					{title}
				</h3>
				<span className={`${colors.text} transition-all duration-[900ms]`}>
					{description}
				</span>
			</div>
		</a>
	)
}
