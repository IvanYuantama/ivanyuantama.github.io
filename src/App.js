import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Project from "./routes/Project";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Navbar />
    </div>
  );
}
