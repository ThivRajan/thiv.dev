import { type CSSProperties } from 'react'
import './Light.scss'

export default function Light({
	selected,
	color,
}: {
	selected?: boolean
	color: string
}) {
	return (
		<div
			className={`frame-wrapper ${selected && 'selected'} cursor-pointer`}
			style={
				{
					'--light-bg': color,
				} as CSSProperties
			}
		>
			<div className="light-wrapper">
				<div className="light shadow-md diamond" />
			</div>
		</div>
	)
}
