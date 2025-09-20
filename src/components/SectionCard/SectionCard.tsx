import { Icon } from '@iconify/react/dist/iconify.js'

interface SectionCardProps {
	title: string
	description: string
	link: string
	years?: string
	role?: string
	hoverColor?: string
}
export default function SectionCard({
	title,
	description,
	link,
	years,
	role,
	hoverColor,
}: SectionCardProps) {
	return (
		<a
			className="flex flex-col justify-center gap-1 hover:text-[var(--hover-color)] transition-all duration-500"
			style={{ '--hover-color': hoverColor } as React.CSSProperties}
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			{!!years && <i className="text-xs text-[var(--app-fg)]">{years}</i>}
			<h2 className="font-semibold">
				{!!role && <span>{role} &#x2022; </span>}
				{title}
				<Icon
					icon="material-symbols:arrow-outward"
					className="align-middle inline-block ml-1"
				/>
			</h2>
			<span className="text-sm text-[var(--app-fg)]">{description}</span>
		</a>
	)
}
