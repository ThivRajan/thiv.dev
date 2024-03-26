import hltbIcon from '../../assets/hltb-lite-icon.png'
import museIcon from '../../assets/muse-icon.png'

export const PROJECT_CONFIG = [
	{
		tags: ['TypeScript', 'React', 'Nextjs'],
		title: 'HLTB Lite',
		description:
			'Quickly visualize video game completion data from HowLongToBeat.com',
		img: hltbIcon.src,
		link: 'https://hltb-lite.vercel.app/',
		colors: {
			bg: '#bad7f5',
			text: 'group-hover:text-blue-800',
			tags: 'group-hover:bg-blue-800',
		},
	},
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Muse',
		description: 'Generate AI cover letters in one click',
		img: museIcon.src,
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		colors: {
			bg: '#d1d1d1',
			text: 'group-hover:text-gray-800',
			tags: 'group-hover:bg-red-800',
		},
	},
]
