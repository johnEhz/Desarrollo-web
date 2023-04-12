import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Footer nombre='Albert' age={23} />
      <Footer nombre='Juan' age={30} />
    </div>
  );
}

export default App;
