import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // Assuming you have a Navbar

function App() {
  return (
    <div>
      <Navbar /> {/* Navigation bar (if any) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
