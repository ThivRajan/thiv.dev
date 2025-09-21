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
		<div className="flex flex-col justify-center gap-1">
			{!!years && <i className="text-sm text-[var(--app-fg)]">{years}</i>}
			<a
				className="text-lg font-semibold hover:text-[var(--hover-color)] transition-all duration-500"
				style={{ '--hover-color': hoverColor } as React.CSSProperties}
				href={link}
				target="_blank"
				rel="noreferrer"
			>
				{!!role && <span>{role} &#x2022; </span>}
				{title}
				<Icon
					icon="material-symbols:arrow-outward"
					className="align-middle inline-block ml-1"
				/>
			</a>
			<span className="text-[var(--app-fg)]">{description}</span>
		</div>
	)
}
