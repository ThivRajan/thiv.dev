import { useEffect, useState, type CSSProperties } from 'react'
import type { Job } from '../experience.config'
import './JobInfo.scss'

export default function JobInfo(job: Job) {
	const [animationName, setAnimationName] = useState('fadeIn')

	// Restart animation on job change
	useEffect(() => {
		setAnimationName(
			`fadeIn${animationName.includes('Restart') ? '' : 'Restart'}`,
		)
	}, [job])

	return (
		<div
			className="flex flex-col gap-2 job-info"
			style={
				{
					animationName,
					animationDuration: '3s',
					'--color': job.color,
				} as CSSProperties
			}
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
