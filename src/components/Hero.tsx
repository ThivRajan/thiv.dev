import Typewriter, { type Options } from 'typewriter-effect'
import avatar from '../assets/Avatar.png'

const ROLES = [
	'Full Stack Software Developer',
	'Fantasy/Sci-fi Junkie',
	'Plotting world domination',
].map((role) => `// ${role}`)

export default function Hero() {
	return (
		<div className="flex flex-col items-center sm:flex-row gap-8">
			<img src={avatar.src} alt="avatar" className="w-1/3" />
			<div className="flex flex-col gap-4 w-full">
				<h1 className="drop-shadow-glow text-5xl font-medium bg-gradient-to-r from-neutral-200  to-red-800 text-transparent bg-clip-text max-w-fit">
					Thiv Rajan
				</h1>
				<div className="bg-slate-800 rounded p-4 min-w-[35ch] max-w-full sm:w-[35ch]">
					<code className="text-gray-400 italic">
						<Typewriter
							options={
								{
									strings: ROLES,
									autoStart: true,
									loop: true,
									delay: 40,
									pauseFor: 800,
									deleteSpeed: 40,
								} as Partial<Options>
							}
						/>
					</code>
				</div>
			</div>
		</div>
	)
}
