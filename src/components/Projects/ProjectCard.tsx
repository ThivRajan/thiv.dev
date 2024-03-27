import type { CSSProperties } from 'react'

export default function ProjectCard(props: {
	tags: string[]
	title: string
	description: string
	img: string
	link: string
	colors: {
		text: string
		bg: string
		tags: string
	}
}) {
	const { tags, title, description, img, link, colors } = props

	// TODO: add drop shadow on hover
	return (
		<a
			className={`card flex gap-4 rounded p-4 cursor-pointer border border-slate-600 group`}
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
				<div className="flex gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className={`rounded bg-slate-600 p-2 ${colors.tags} transition-all duration-[900ms]`}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	)
}
