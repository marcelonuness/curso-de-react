import './App.css';
import MyComponent from './components/MyComponent';
import Title from "./components/Title.js"


function App() {
	const n = 9
	const redTitle = true
	
  return (
    <div className="App">
      <h1>React com CSS </h1>
      <MyComponent></MyComponent>
      
		{/* CSS inline */}
      <p style={{color: "blue", padding: "25px", marginTop: "100px", backgroundColor: "black"}}>este é o CSS inline!</p>

		{/* CSS inline dinâmico */}
		<h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

		{/* Classe dinâmica */}
		<h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

		{/* CSS modules */}
		<Title></Title>
		
    </div>
  );
}

export default App;
