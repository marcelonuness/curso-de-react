//components
//import ManageData from "./components/ManageData.js"
import ListRender from "./components/ListRender.js"

//styles
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Avançando em ReactJS</h1>
			{/* Imagem em public */}
			<div>
				<img src="https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="New York city" />
			</div>
			<ListRender></ListRender>
		</div>
	);
}

export default App;
