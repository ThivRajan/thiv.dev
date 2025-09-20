import { Icon } from '@iconify/react'

export interface ContactButtonProps {
	link: string
	icon: string
	hoverColor: string
}
export default function ContactButton({
	link,
	icon,
	hoverColor,
}: ContactButtonProps) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			style={{ '--hover-color': hoverColor } as React.CSSProperties}
			className={`p-2 w-fit text-2xl border-2 border-[var(--app-fg)] text-[var(--app-fg)] hover:border-[var(--hover-color)] hover:text-[var(--hover-color)] rounded cursor-pointer shadow-md transition-all duration-500`}
		>
			<Icon icon={icon} />
		</a>
	)
}
