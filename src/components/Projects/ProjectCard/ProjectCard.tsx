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
			className={`card flex gap-4 rounded p-4 cursor-pointer border group`}
			href={link}
			target="_blank"
			rel="noreferrer"
			style={{ '--card-bg': colors.bg } as CSSProperties}
		>
			<img
				src={img}
				alt={`${title} Icon`}
				className="w-1/5 max-w-1/4 object-scale-down"
			/>
			<div className="flex flex-col justify-between gap-2">
				<h3
					className={`description font-semibold ${colors.text} transition-all duration-[900ms]`}
				>
					{title}
				</h3>
				<span className={`${colors.text} transition-all duration-[900ms]`}>
					{description}
				</span>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className={`tag rounded p-2 ${colors.tags} transition-all duration-[900ms]`}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	)
}
