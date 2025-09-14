import Card from '@components/Card'
import { Icon } from '@iconify/react'
import type { Contact } from '../contact.config'
import './ContactButton.scss'

export default function ContactButton({ link, icon, color }: Contact) {
	return (
		<Card>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="contact-button block p-3 w-fit text-3xl"
			>
				<Icon
					icon={icon}
					style={{ textShadow: '5px 0px 2px rgba(128, 0, 0, 1)' }}
				/>
			</a>
		</Card>
	)
}
