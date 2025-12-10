import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Explorer</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/recipes">Recipes</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routing Logic */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
