interface Project {
	tags: string[]
	title: string
	description: string
	link: string
	hoverColor: string
}
export const PROJECT_CONFIG: Project[] = [
	{
		tags: ['TypeScript', 'React', 'Node.js'],
		title: 'Muse',
		description: 'Generate AI cover letters in one click',
		link: 'https://chromewebstore.google.com/detail/muse-ai-cover-letters-in/bodebbnhcdimdjiakhoijjfoabdjlfop',
		hoverColor: 'var(--muse)',
	},
]
