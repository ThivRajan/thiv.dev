export const CONTACT_CONFIG = [
	{
		icon: 'basil:linkedin-solid',
		link: 'https://www.linkedin.com/in/thiv-rajan',
	},
	{
		icon: 'codicon:github',
		link: 'https://github.com/ThivRajan',
	},
	{
		icon: 'codicon:mail',
		link: 'mailto:thiv.rajan@gmail.com',
	},
]

export type Contact = (typeof CONTACT_CONFIG)[number]
