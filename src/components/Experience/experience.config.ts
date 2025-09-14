import cionIcon from '@assets/cion-icon.png'
import ecccIcon from '@assets/eccc-icon.png'
import merakiIcon from '@assets/meraki-icon.png'

export type Job = {
	title: string
	jobPoints: string[]
	color: string
}

export const EXPERIENCE_CONFIG = [
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Cisco Meraki',
		description: 'Better networking through the cloud',
		img: merakiIcon.src,
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		colors: {
			bg: '#d1d1d1',
			text: 'group-hover:text-gray-800',
			tags: 'group-hover:bg-gray-800',
		},
	},
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Environment & Climate Change Canada',
		description: 'Mission-critical web applications for meteorological data',
		img: ecccIcon.src,
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		colors: {
			bg: '#d1d1d1',
			text: 'group-hover:text-gray-800',
			tags: 'group-hover:bg-gray-800',
		},
	},
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Cion Studio',
		description: 'Enabling creators to build and scale their businesses',
		img: cionIcon.src,
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		colors: {
			bg: '#d1d1d1',
			text: 'group-hover:text-gray-800',
			tags: 'group-hover:bg-gray-800',
		},
	},
]
