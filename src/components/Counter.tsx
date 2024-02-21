import { useState } from 'react'

export default function Counter() {
	const [counter, setcounter] = useState(0)
	return (
		<>
			<div className="bg-blue-400">
				<h1>HELLO</h1>
				<h3>{counter}</h3>

				<div>
					<button onClick={() => setcounter((prev) => prev + 1)}>+</button>
					<button onClick={() => setcounter((prev) => prev - 1)}>-</button>
				</div>
			</div>
		</>
	)
}
