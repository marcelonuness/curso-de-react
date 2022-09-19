import { useState } from "react"

const ManageData = () => {
	let someData = 10

	const [number, setNumber] = useState(22)
	  
	return (
		<div>
			<div>
				<h3>Valor: {someData}</h3>
				<button onClick={()=>(someData = 15)}>Mudar n°</button>
			</div>

			<div>
				<h3>Valor: {number} </h3>
				<button onClick={() => setNumber(15)}>Mudar state!</button>
			</div>
		</div>
	)
}

export default ManageData