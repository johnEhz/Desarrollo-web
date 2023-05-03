import "./App.css";
import Navigation, { CustomButton } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h1>Helloo!</h1>
        <CustomButton />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
