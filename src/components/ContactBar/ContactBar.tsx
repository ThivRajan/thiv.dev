import ContactButton from './ContactButton'
import { CONTACT_CONFIG } from './contact.config'

export default function ContactBar() {
	return (
		<div className="flex flex-col gap-4">
			{CONTACT_CONFIG.map((contact, idx) => (
				<ContactButton key={idx} {...contact} />
			))}
		</div>
	)
}
