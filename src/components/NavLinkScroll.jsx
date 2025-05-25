import { useLocation, useNavigate } from "react-router-dom";

const NavLinkScroll = ({ to, label }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById(to.replace("#", ""));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(to.replace("#", ""));
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-[#e5e7eb] cursor-pointer"
    >
      {label}
    </a>
  );
};

export default NavLinkScroll;
