import { useState } from 'react'
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
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			className="square-wrapper cursor-pointer"
			style={{
				filter:
					selected || isHovered ? `drop-shadow(0 -4px 10px ${color})` : '',
			}}
			onClick={setSelected}
		>
			<div className="square bg-slate-800">
				<div
					className="light-wrapper"
					style={{
						filter: selected ? `drop-shadow(0 0 3px ${color})` : '',
					}}
				>
					<div
						className="light shadow-md"
						style={{ background: selected ? color : 'rgb(30 41 59)' }}
					></div>
				</div>
			</div>
		</div>
	)
}
