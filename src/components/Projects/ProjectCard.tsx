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

	return (
		<a
			className={`flex gap-4 rounded p-4 cursor-pointer border border-slate-600 ${colors.bg} transition-all duration-1000 group`}
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<img
				src={img}
				alt={`${title} Icon`}
				className="w-1/5 max-w-1/4 object-scale-down"
			/>
			<div className="flex flex-col justify-between gap-2">
				<h3 className={`font-semibold ${colors.text}`}>{title}</h3>
				<p className={colors.text}>{description}</p>
				<div className="flex gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className={`rounded bg-slate-800 p-2 ${colors.tags}`}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	)
}
