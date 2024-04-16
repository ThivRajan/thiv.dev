import avatar from '@assets/avatar.png'
import ContactsBar from '@components/ContactsBar/ContactsBar'
import Typewriter, { type Options } from 'typewriter-effect'
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
					color="var(--app-highlight)"
				/>
				<div
					className="rounded p-4 min-w-[35ch] w-full max-w-full"
					style={{
						background: 'var(--app-highlight)',
					}}
				>
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
