import avatar from '@assets/favicon.png'
import Typewriter, { type Options } from 'typewriter-effect'
import ContactsBar from './ContactsBar/ContactsBar'

const ROLES = ['Fullstack Software Engineer'].map((role) => `// ${role}`)

export default function Hero() {
	return (
		<div className="flex flex-col items-center sm:flex-row justify-between gap-6">
			<img src={avatar.src} alt="avatar" className="w-1/3 float-wrapper" />
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-center sm:items-start gap-2 w-full">
					<h1 className="text-5xl font-bold">Thiv Rajan</h1>
					<div className="min-w-[33ch] w-full max-w-full ">
						<code className="italic align-center text-gray-400">
							<Typewriter
								options={
									{
										strings: ROLES[0],
										autoStart: true,
										loop: false,
										delay: 40,
									} as Partial<Options>
								}
							/>
						</code>
					</div>
				</div>
				<ContactsBar />
			</div>
		</div>
	)
}
