import { useEffect, useState } from 'react'
import './Experience.css'
import Light from './Light/Light'
import { EXPERIENCE_CONFIG } from './experience.config'

export default function Experience() {
	const [animationName, setAnimationName] = useState('fadeIn')
	const [selectedJobIdx, setSelectedJobIdx] = useState(0)
	const selectedJob = EXPERIENCE_CONFIG[selectedJobIdx]

	// Restart animation on job change
	useEffect(() => {
		setAnimationName(
			`fadeIn${animationName.includes('Restart') ? '' : 'Restart'}`,
		)
	}, [selectedJobIdx])

	return (
		<div className="text-white flex flex-col gap-4 ">
			<h1 className="font-medium text-3xl">Experience</h1>
			<div className="flex gap-4">
				<div className="h-[13rem] w-8 relative">
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
				<div
					className="flex flex-col gap-2"
					style={{
						animationName,
						animationDuration: '3s',
					}}
				>
					<h3 className="font-semibold text-lg">{selectedJob.title}</h3>
					<ul className="flex flex-col gap-4">
						{selectedJob.jobPoints.map((jobPoint, idx) => (
							<li key={idx} className="list-disc list-inside">
								{jobPoint}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
