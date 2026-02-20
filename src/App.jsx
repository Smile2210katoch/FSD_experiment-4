import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";   // NEW

import NavbarComp from "./components/NavbarComp";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";   // NEW PAGE

function App() {
  return (
    <AppProvider>   {/* Wrap entire app */}
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} /> {/* NEW */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;