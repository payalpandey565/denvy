import { useNavigate, useLocation } from "react-router-dom";
import logo from "/assets/denvy-interiors-updated.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target) => {
    const path = target === "home" ? "/" : `/${target}`;
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const isActive = (path) => {
    return location.pathname === (path === "home" ? "/" : `/${path}`);
  };

  const navItems = ["home", "about", "portfolio", "services", "contact"];

  return (
    <header className="bg-[#1d293d] shadow-md h-24 sticky top-0 z-50">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex items-center pl-6">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Denvy Logo"
              className="h-24 w-auto object-contain max-w-[180px]"
            />
          </button>
        </div>

        <nav
          className="hidden md:flex justify-evenly items-center w-2/3 gap-4 text-lg"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-[#e5e7eb] px-4 py-2 transition duration-300 ${
                isActive(item) ? "bg-[#374151] rounded-xl" : ""
              }`}
            >
              {item === "home"
                ? "Home"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
