import ContactButton from './ContactButton'
import { CONTACT_CONFIG } from './contact.config'

export default function ContactsBar() {
	return (
		<div className="flex lg:flex-col gap-4">
			{CONTACT_CONFIG.map((contact, idx) => (
				<ContactButton key={idx} {...contact} />
			))}
		</div>
	)
}
