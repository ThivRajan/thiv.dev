interface Job {
	tags: string[]
	title: string
	description: string
	link: string
	years: string
	role: string
}
export const EXPERIENCE_CONFIG: Job[] = [
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Cisco Meraki',
		description: 'Better networking through the cloud',
		link: 'https://meraki.cisco.com/',
		years: '2024 - Present',
		role: 'Software Engineer',
	},
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Environment & Climate Change Canada',
		description: 'Mission-critical web applications for meteorological data',
		link: 'https://www.canada.ca/en/environment-climate-change.html',
		years: '2020 - 2024',
		role: 'Software Developer',
	},
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Cion Studio',
		description: 'Enabling creators to build and scale their businesses',
		link: 'https://www.cionstudio.com/',
		years: '2021 - 2022',
		role: 'Web Developer',
	},
]
