import './Divider.css'

const ANIMATION_STYLES = 'transition-all duration-500'

export default function Divider() {
	return (
		<div className="divider flex justify-center items-center gap-4">
			<StyledRuler />
			<div
				className={`square bg-slate-500 transition-all ${ANIMATION_STYLES}`}
			/>
			<StyledRuler />
		</div>
	)
}

const StyledRuler = () => (
	<span className={`text-4xl text-slate-500 ${ANIMATION_STYLES}`}>~</span>
)
