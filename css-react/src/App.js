import './App.css';
import MyComponent from './components/MyComponent';


function App() {
  return (
    <div className="App">
      <h1>React com CSS </h1>
      <MyComponent></MyComponent>
      {/* CSS inline */}
      <p style={{color: "blue", padding: "25px", marginTop: "100px", backgroundColor: "black"}}>este é o CSS inline!</p>
    </div>
  );
}

export default App;
