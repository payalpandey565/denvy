import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FreeConsultationPopup from "./components/Free";
import { useEffect, useState } from "react";

// Wrapper to access location outside <Router>
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  return (
    <div className="bg-lightgray text-charcoal min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Show popup only on non-home pages */}
      {!isHome && <FreeConsultationPopup mode="popup" />}

      <Footer />
    </div>
  );
}

export default AppWrapper;
