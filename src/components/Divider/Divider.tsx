import './Divider.css'

const ANIMATION_STYLES = 'transition-all duration-500'

export default function Divider() {
	return (
		<div className="divider flex justify-center items-center gap-3">
			<StyledRuler />
			<div
				className={`square bg-slate-500 transition-all ${ANIMATION_STYLES}`}
			/>
			<StyledRuler />
		</div>
	)
}

const StyledRuler = () => (
	<hr className={`border-1px border-slate-500 w-1/5 ${ANIMATION_STYLES}`} />
)
