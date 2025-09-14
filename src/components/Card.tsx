import './Card.scss'

export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="card rounded cursor-pointer border-2 shadow-md transition-all duration-700">
			{children}
		</div>
	)
}
