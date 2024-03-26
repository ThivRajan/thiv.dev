export default function About() {
	return (
		<div className="text-white flex flex-col gap-4">
			<h1 className="font-medium text-3xl">About</h1>
			<p>
				Hi there! Welcome to my portfolio. I&apos;m currently working at{' '}
				<a
					className="text-link"
					href="https://www.canada.ca/en/environment-climate-change.html"
					target="_blank"
					rel="noreferrer"
				>
					Environment & Climate Change Canada
				</a>
				. I love to get lost in a problem almost as much as finding my way out
				of one. Outside of work you&apos;ll find me engrossed in a book or a
				show.
			</p>
		</div>
	)
}
