import Card from '@components/Card'
import type { Project } from '../project.config'
import './ProjectCard.scss'

export default function ProjectCard({
	title,
	description,
	img,
	link,
	years,
}: Project) {
	return (
		<Card>
			<a
				className={`flex gap-4 p-4`}
				href={link}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={img}
					alt={`${title} Icon`}
					className="w-[13%] project-img-colored"
				/>
				<div className="flex flex-col justify-center">
					<h2 className={`text-base font-semibold`}>{title}</h2>
					{!!years && <i className="text-xs">{years}</i>}
					<span className={`text-sm`}>{description}</span>
				</div>
			</a>
		</Card>
	)
}
