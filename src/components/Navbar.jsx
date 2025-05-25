import { useNavigate, useLocation } from "react-router-dom";
import logo from "/assets/denvy.logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target) => {
    const path = target === "home" ? "/" : `/${target}`;
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <header className="bg-[#1d293d] shadow-md h-24 sticky top-0 z-50">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex items-center pl-6">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center"
          >
            <img src={logo} alt="Denvy Logo" className="h-20 object-contain" />
          </button>
        </div>
        <nav
          className="hidden md:flex justify-evenly items-center w-2/3 gap-4 text-lg"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="text-[#e5e7eb]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-[#e5e7eb]"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick("portfolio")}
            className="text-[#e5e7eb]"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className="text-[#e5e7eb]"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className="text-[#e5e7eb]"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
