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
			className={`square-wrapper ${selected && 'selected'} cursor-pointer`}
			style={
				{
					'--light-bg': color,
				} as CSSProperties
			}
			onClick={setSelected}
		>
			<div className="square bg-slate-800">
				<div className={`light-wrapper ${selected && 'selected'}`}>
					<div className="light shadow-md" />
				</div>
			</div>
		</div>
	)
}
