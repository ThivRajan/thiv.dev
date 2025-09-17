import { Icon } from '@iconify/react'
import type { Contact } from '../contact.config'

export default function ContactButton({ link, icon }: Contact) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="contact-button block p-2 w-fit text-2xl border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:border-white hover:text-white rounded cursor-pointer shadow-md transition-all duration-700"
		>
			<Icon
				className=""
				icon={icon}
				style={{ textShadow: '5px 0px 2px rgba(128, 0, 0, 1)' }}
			/>
		</a>
	)
}
