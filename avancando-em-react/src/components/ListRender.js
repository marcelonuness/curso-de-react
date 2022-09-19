import {useState} from "react"

const ListRender = () => {
	const [list] = useState(["Marcelo", "José", "Caio", "Werr"])
	
	const [users, setUsers] = useState([
		{id: 1, nome: "Marcelo", idade: 44},
		{id: 2, nome: "vanessa", idade: 31},
		{id: 3, nome: "rodrigo", idade: 12},		
	])

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4)

		setUsers((prevUsers) => {
			return prevUsers.filter((user) => randomNumber !== user.id)
		})
	}

	return (
				
		<div>
			<ul>
				{list.map((item, i)=>(
					<li key={i}>{item}</li>
				))}
			</ul>
			<ul>
				{users.map((user)=>(
					<li key={user.id}>{user.nome} - {user.idade}</li>
				))}
			</ul>
			<button onClick={deleteRandom}>Delete random user!</button>
		</div>
	)
}

export default ListRender