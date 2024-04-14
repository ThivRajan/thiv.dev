import Typewriter, { type Options } from 'typewriter-effect'
import avatar from '../../assets/avatar.png'
import ContactsBar from '../ContactsBar/ContactsBar'
import Header from './Header/Header'

const ROLES = [
	'Full Stack Software Developer',
	'Fantasy/Sci-fi Junkie',
	'Plotting world domination',
].map((role) => `// ${role}`)

export default function Hero() {
	return (
		<div className="flex flex-col items-center sm:flex-row gap-8">
			<img src={avatar.src} alt="avatar" className="w-1/3" />
			<div className="flex flex-col items-center sm:items-start gap-4 w-full">
				<Header
					title="THIV RAJAN"
					animateDuration={3}
					color="rgb(107, 61, 61)"
				/>
				<div className="bg-slate-800 rounded p-4 min-w-[35ch] w-full max-w-full">
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
				<div className="lg:hidden block">
					<ContactsBar />
				</div>
			</div>
		</div>
	)
}
