import { useState } from "react"

const ConditionalRender = () => {
	const [x] = useState(false)

	const [name, setName] = useState("Fahrid")
	
	return (
		<div>
			<h1>Isso será exibido?</h1>
			{x && <p>Se x for true, sim!</p>}
			{!x && <p>Agora x é verdadeiro!</p>}
			<h1>IF Ternário</h1>
			{name === "João" ? (
				<div>
					<p>O nome é realmente João.</p>
				</div>
			) : (
				<div>
					<p>O nome é outro :(</p>
				</div>
			)}
			<button onClick={() => setName("João")}>Clica aqui!</button>
		</div>
	)
}

export default ConditionalRender