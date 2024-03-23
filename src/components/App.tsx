import { useEffect, type ReactNode } from 'react'

export default function App({ children }: { children: ReactNode }) {
	useEffect(() => {
		document.addEventListener('mousemove', update)
		document.addEventListener('touchmove', update)

		return () => {
			document.removeEventListener('mousemove', update)
			document.removeEventListener('touchmove', update)
		}
	}, [])

	return (
		<div className="flex flex-col w-full p-6 max-w-2xl gap-8">{children}</div>
	)
}

// TODO: update type
function update(e: any) {
	const x = e.clientX || e.touches[0].clientX
	const y = e.clientY || e.touches[0].clientY

	document.documentElement.style.setProperty('--cursorX', x + 'px')
	document.documentElement.style.setProperty('--cursorY', y + 'px')
}
