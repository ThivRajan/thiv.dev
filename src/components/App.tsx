import { useEffect, type ReactNode } from 'react'

export default function App({ children }: { children: ReactNode }) {
	useEffect(() => {
		document.addEventListener('mousemove', update)

		return () => {
			document.removeEventListener('mousemove', update)
		}
	}, [])

	return (
		<div className="flex flex-col w-full p-6 max-w-2xl gap-8">{children}</div>
	)
}

function update(e: MouseEvent) {
	const x = e.clientX
	const y = e.clientY
	document.documentElement.style.setProperty('--cursorX', x + 'px')
	document.documentElement.style.setProperty('--cursorY', y + 'px')
}
