import { Routes, Route } from "react-router-dom";

import NavbarComp from "./components/NavbarComp";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Report from "./pages/Report";

function App() {
  return (
    <div>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;