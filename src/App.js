
import './App.css';
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Weather defaultCity="New York"/>
        <a href="https://github.com/JannaShen/reactweatherapp">Open Source Code</a>
      </header>
      
    </div>
  );
}

export default App;
