import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//PAGES
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import KnowUs from "./pages/KnowUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/acerca" element={<KnowUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
