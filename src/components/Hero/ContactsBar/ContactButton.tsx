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
			className={`p-2 w-fit text-3xl bg-[var(--app-fg)] hover:bg-[var(--hover-color)] text-[var(--app-bg)] rounded cursor-pointer transition-all duration-300`}
		>
			<Icon icon={icon} />
		</a>
	)
}
