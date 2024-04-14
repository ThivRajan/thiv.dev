import type { CSSProperties } from 'react'
import './Header.css'

export default function Header({
	title,
	animateDuration,
	color,
}: {
	title: string
	animateDuration: number
	color: string
}) {
	const totalLength = title.replaceAll(' ', '').length
	const titleSegments = title.split(' ')

	return (
		<span
			className="header flex gap-2"
			style={{ '--text-color': color } as CSSProperties}
		>
			{titleSegments.map((segment, idx) => {
				const duration = (segment.length / totalLength) * animateDuration
				const delay =
					(titleSegments.slice(0, idx).join('').length / totalLength) *
					animateDuration

				return (
					<h1
						key={idx}
						className="text-5xl title"
						style={
							{
								'--duration': `${duration}s`,
								'--delay': `${delay}s`,
							} as CSSProperties
						}
						data-text={segment}
					>
						{segment}
					</h1>
				)
			})}
		</span>
	)
}
