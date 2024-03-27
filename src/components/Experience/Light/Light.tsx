import './Light.css'

export default function Light({
	selected,
	setSelected,
}: {
	selected?: boolean
	setSelected: any
}) {
	return (
		<div
			className="square-wrapper"
			style={selected ? { filter: 'drop-shadow(0 -4px 10px #1fa4e0)' } : {}}
			onClick={setSelected}
		>
			<div className="square bg-slate-800">
				<div
					className="liquid-wrapper"
					style={
						selected
							? {
									filter: 'drop-shadow(0 0 3px #1fa4e0)',
								}
							: {}
					}
				>
					<div className="liquid shadow-md"></div>
				</div>
			</div>
		</div>
	)
}
