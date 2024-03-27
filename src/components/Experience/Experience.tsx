import { useEffect, useState } from 'react'
import './Experience.css'
import Light from './Light/Light'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	const [animationName, setAnimationName] = useState('slideDown')
	const [selectedJobIdx, setSelectedJobIdx] = useState(0)
	const selectedJob = EXPERIENCE_CONFIG[selectedJobIdx]

	useEffect(() => {
		setAnimationName(
			animationName === 'slideDown' ? 'slideDownRestart' : 'slideDown',
		)
	}, [selectedJobIdx])

	return (
		<div className="text-white flex flex-col gap-4 ">
			<h1 className="font-medium text-3xl">Experience</h1>
			<div className="flex gap-4">
				<div className="h-[15rem] w-8 relative">
					<div className="h-[90%] left-2.5 top-[5%] w-1 bg-slate-800 absolute" />
					<div className="flex flex-col h-full justify-between">
						{EXPERIENCE_CONFIG.map((exp, idx) => (
							<Light
								selected={idx === selectedJobIdx}
								key={idx}
								setSelected={() => setSelectedJobIdx(idx)}
								color={exp.color}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-1 relative w-full overflow-hidden">
					<div
						className="absolute h-full"
						style={{
							animationName,
							animationDuration: '1s',
						}}
					>
						<h3 className="font-semibold text-lg">{selectedJob.title}</h3>
						<p>{selectedJob.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
