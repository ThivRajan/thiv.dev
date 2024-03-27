import { useState } from 'react'
import Light from './Light/Light'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	const [selectedJob, setSelectedJob] = useState(0)

	return (
		<div className="text-white flex flex-col gap-4">
			<h1 className="font-medium text-3xl">Experience</h1>
			<div className="flex gap-4">
				<div className="h-[250px] w-8 relative">
					<div className="h-[90%] left-2.5 top-[5%] w-1 bg-slate-800 absolute"></div>
					<div className="flex flex-col h-full justify-between">
						{EXPERIENCE_CONFIG.map((exp, idx) => (
							<Light
								selected={idx === selectedJob}
								key={exp.title}
								setSelected={() => setSelectedJob(idx)}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="font-semibold text-lg">
						{EXPERIENCE_CONFIG[selectedJob].title}
					</h3>
					<p>{EXPERIENCE_CONFIG[selectedJob].description}</p>
				</div>
			</div>
		</div>
	)
}
