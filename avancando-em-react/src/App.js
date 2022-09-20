//components
import ManageData from "./components/ManageData.js"
import ListRender from "./components/ListRender.js"
import ConditionalRender from "./components/ConditionalRender.js"
import ShowUserName from "./components/ShowUserName.js"
import CarDetails from "./components/CarDetails.js"
import Fragment from "./components/Fragment.js"
import Container from "./components/Container.js"
import ExecuteFunction from "./components/ExecuteFunction.js"
import Message from "./components/Message.js"
import ChangeMessageState from "./components/ChangeMessageState.js"
import { useState } from "react"

//styles
import './App.css';



function App() {
	const cars = [
		{id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
		{id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34546},
		{id: 3, brand: "Renault", color: "Azul", newCar: false, km: 3242},
		{id: 4, brand: "Volskwagen", color: "Preto", newCar: true, km: 0}
	]

	function showMessage() {
		console.log("Evento do componente pai!")
	}

	const [message, setMessage] = useState("")

	const handleMessage = (msg) => {
		setMessage(msg)
	}
	
	return (
		<div className="App">
			<h1>Avançando em ReactJS</h1>
			{/* Imagem em public */}
			<div>
				<img src="https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="New York city" />
			</div>
			<ManageData></ManageData>
			<ListRender></ListRender>
			<ConditionalRender></ConditionalRender>
			{/* props */}
			<ShowUserName name="Marcelo"></ShowUserName>
			{/* destructuring */}
			<CarDetails brand="VW" km={100000} color="Azul" newCar={false}></CarDetails>
			{/* reaproveitando */}
			<CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}></CarDetails>
			<CarDetails brand="Fiat" km={4500} color="Prata" newCar={false}></CarDetails>
			<hr></hr>
			{/* loop em array de objetos */}
			{cars.map((car)=> (
				<CarDetails
					key={car.id}
					brand={car.brand} 
					km={car.km} 
					color={car.color} 
					newCar={car.newCar} >
				</CarDetails>
			))}
			<hr></hr>
			
			{/* fragment */}
			<Fragment propFragment="teste"></Fragment>

			{/* Children */}
			<Container>
				<p>E este é o conteúdo</p>
			</Container>

			{/* executar função em props */}
			<ExecuteFunction myFunction={showMessage}></ExecuteFunction>

			{/* state lift */}
			<Message msg={message}></Message>
			<ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
		</div>
	);
}

export default App;
