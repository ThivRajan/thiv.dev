import { useState } from 'react'
import JobInfo from './JobInfo/JobInfo'
import Light from './Light/Light'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	const [selectedJobIdx, setSelectedJobIdx] = useState(0)
	const selectedJob = EXPERIENCE_CONFIG[selectedJobIdx]

	return (
		<div className="text-white flex flex-col gap-4">
			<h1 className="font-medium text-3xl">Experience</h1>
			<div className="flex gap-4 h-[17rem]">
				<div className="w-8 relative">
					<div className="h-[90%] left-2.5 top-[5%] w-1 bg-slate-800 absolute" />
					<div className="flex flex-col h-full justify-between">
						{EXPERIENCE_CONFIG.map((exp, idx) => (
							<div key={idx} onClick={() => setSelectedJobIdx(idx)}>
								<Light selected={idx === selectedJobIdx} color={exp.color} />
							</div>
						))}
					</div>
				</div>
				<JobInfo {...selectedJob} />
			</div>
		</div>
	)
}
