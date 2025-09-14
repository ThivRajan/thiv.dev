import museIcon from '@assets/muse-icon.png'

export const PROJECT_CONFIG = [
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Muse',
		description: 'Generate AI cover letters in one click',
		img: museIcon.src,
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		colors: {
			bg: '#d1d1d1',
			text: 'group-hover:text-gray-800',
			tags: 'group-hover:bg-gray-800',
		},
	},
]

export type Project = {
	title: string
	description: string
	img: string
	link: string
	years?: string
}
