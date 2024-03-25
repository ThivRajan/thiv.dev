import hltbIcon from '../../assets/hltb-lite-icon.png'
import museIcon from '../../assets/muse-icon.png'

export const PROJECTS_CONFIG = [
	{
		tags: ['TypeScript', 'React', 'Nextjs'],
		title: 'HLTB Lite',
		description:
			'Data visualization tool to quickly view video-game completion data using React and Next.js',
		img: hltbIcon.src,
		link: 'https://hltb-lite.vercel.app/',
		colors: {
			bg: 'hover:bg-blue-100',
			text: 'group-hover:text-blue-800',
			tags: 'group-hover:bg-blue-800',
		},
	},
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Muse',
		description: 'Generate AI cover letters in one click.',
		img: museIcon.src,
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		colors: {
			bg: 'hover:bg-gray-100',
			text: 'group-hover:text-gray-800',
			tags: 'group-hover:bg-gray-800',
		},
	},
]
