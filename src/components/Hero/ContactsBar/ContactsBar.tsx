import ContactButton from './ContactButton'
import { CONTACT_CONFIG } from './contact.config'

export default function ContactsBar() {
	return (
		<div className="flex gap-4 sm:justify-start justify-center">
			{CONTACT_CONFIG.map((contact, idx) => (
				<ContactButton key={idx} {...contact} />
			))}
		</div>
	)
}
