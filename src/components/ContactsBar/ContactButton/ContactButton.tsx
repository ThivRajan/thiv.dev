import { Icon } from '@iconify/react'
import type { CSSProperties } from 'react'
import type { Contact } from '../contact.config'
import './ContactButton.scss'

export default function ContactButton({ link, icon, color }: Contact) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="contact-button block p-3 rounded-md w-fit border-4 text-3xl shadow-md transition-all duration-700 text-slate-600 border-slate-600 hover:bg-slate-800"
			style={
				{
					'--fg': color,
				} as CSSProperties
			}
		>
			<Icon
				icon={icon}
				style={{ textShadow: '5px 0px 2px rgba(128, 0, 0, 1)' }}
			/>
		</a>
	)
}
