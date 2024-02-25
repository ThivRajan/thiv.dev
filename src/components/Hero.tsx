import Typewriter, { type Options } from 'typewriter-effect'
import avatar from '../assets/Memoji Avatar.png'

// For code-block styles: https://www.codiga.io/blog/tag/coding-assistant/

const ROLES = [
	'Full Stack Software Developer',
	'Fantasy/sci-fi Junkie',
	'Plotting world domination',
].map((role) => `// ${role}`)

export default function Hero() {
	return (
		<div className="flex gap-8">
			<img src={avatar.src} alt="avatar" className=" w-1/3" />
			<div className="flex flex-col gap-4 justify-center">
				<h1 className="drop-shadow-glow text-5xl font-medium bg-gradient-to-r from-neutral-200  to-red-800 text-transparent bg-clip-text max-w-fit">
					Thiv Rajan
				</h1>
				<div className="bg-slate-800 rounded p-4 w-[35ch]">
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
