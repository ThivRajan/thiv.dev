import { useEffect, useState } from 'react'
import type { Job } from '../experience.config'
import './JobInfo.css'

export default function JobInfo({ job }: { job: Job }) {
	const [animationName, setAnimationName] = useState('fadeIn')

	// Restart animation on job change
	useEffect(() => {
		setAnimationName(
			`fadeIn${animationName.includes('Restart') ? '' : 'Restart'}`,
		)
	}, [job])

	return (
		<div
			className="flex flex-col gap-2"
			style={{
				animationName,
				animationDuration: '3s',
			}}
		>
			<h3 className="font-semibold text-lg">{job.title}</h3>
			<ul className="flex flex-col gap-4 overflow-auto">
				{job.jobPoints.map((jobPoint, idx) => (
					<li key={idx} className="list-disc list-inside">
						{jobPoint}
					</li>
				))}
			</ul>
		</div>
	)
}
