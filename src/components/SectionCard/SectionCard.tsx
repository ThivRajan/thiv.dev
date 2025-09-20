import { Icon } from '@iconify/react/dist/iconify.js'

interface SectionCardProps {
	title: string
	description: string
	link: string
	years?: string
	role?: string
}
export default function SectionCard({
	title,
	description,
	link,
	years,
	role,
}: SectionCardProps) {
	return (
		<a
			className="project flex gap-4"
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<div className="flex flex-col justify-center gap-1">
				{!!years && <i className="text-xs text-[var(--app-fg)]">{years}</i>}
				<span className="flex items-center gap-2 hover:underline">
					<h2 className="text-base font-semibold">
						{!!role && <span className="text-sm">{role} - </span>}
						{title}
					</h2>
					<Icon icon="material-symbols:arrow-outward" />
				</span>
				<span className="text-sm text-[var(--app-fg)]">{description}</span>
			</div>
		</a>
	)
}
