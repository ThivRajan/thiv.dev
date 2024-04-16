export const EXPERIENCE_CONFIG = [
	{
		title: 'Environment & Climate Change Canada',
		jobPoints: [
			'Led a cross-functional team in an Agile Environment to deliver a weather station editor',
			'Developed reusable dashboards and grids to allow for remote sensor viewing',
			'Built an end-to-end solution to query a meteorological database by creating an innovative user interface and RESTful API, allowing millions of payloads to be fetched at once',
			'Conducted bi-monthly data validation via manual and automated regression testing for back-end components and web applications while coordinating with the DevOps team, ensuring smooth releases across multiple federal departments',
			'Provided post-production support for multiple web applications by regularly addressing client feedback',
			'Mentored interns on code review, version control, and writing documentation, fostering both technical and communication skills',
		],
		color: '#bd5c5c',
	},
	{
		title: 'Cion Studio',
		jobPoints: [
			'Transformed the user experience of a skate-sharpening e-commerce store by re-building login, ordering, and checkout pages, allowing users to quickly place finely-tuned sharpening orders',
			'Crafted custom static sites for small businesses across various platforms and strategically optimized SEO to boost online reach and expand their client base',
			'Created on-boarding information architecture for new developers, including API and UI documentation, flow diagrams and code review guidelines',
		],
		color: '#44a67d',
	},
	{
		title: 'IT Collaborative Inc.',
		jobPoints: [
			'Built login, home, and settings pages for both the cross-platform and iOS implementations of a mobile app that allows users to securely access their private documents',
			"Engineered server-less functions to support new features and  metrics integrations of the company's iOS and Android applications",
		],
		color: '#4463a6',
	},
	{
		title: 'Canadian Institutes of Health Research',
		jobPoints: [
			"Streamlined the workflow of the organization's CRM tool by building custom plugins",
			'Accelerated legacy CRM retirement timelines by completing QA testing on CRM prototype weeks ahead of schedule',
		],
		color: '#919191',
	},
]

export type Job = (typeof EXPERIENCE_CONFIG)[number]
