import { type CSSProperties } from 'react'
import './Light.css'

export default function Light({
	selected,
	setSelected,
	color,
}: {
	selected?: boolean
	setSelected: any
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
			onClick={setSelected}
		>
			<div className="frame bg-slate-800 diamond">
				<div className="light-wrapper">
					<div className="light shadow-md diamond" />
				</div>
			</div>
		</div>
	)
}
