import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#74C69D] w-full h-[123px] fixed z-50 top-0 flex justify-center">
      <div className="flex items-center justify-between w-full h-full px-5 xl:px-0 lg:max-w-[1175px]">
        {/* Logo */}
        <Link className="flex items-center gap-[18px]" to="/">
          <img
            className="w-[45px] h-[31.057px] lg:w-[70px] lg:h-[48.311px]"
            src="/logo.svg"
            alt="Logo"
          />
          <span className="font-WorkSans font-medium text-white text-3xl lg:text-[40px]">
            Start
          </span>
        </Link>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row md:gap-[30px] md:items-center font-WorkSans text-xl text-white leading-[25px] absolute md:static top-[123px] left-0 md:top-auto md:left-auto w-full md:w-auto bg-[#74C69D] md:bg-transparent z-40 px-5 md:px-0`}
        >
          {["Home", "Portfolio", "Services", "Contact"].map((item) => (
            <li key={item} className="py-2 md:py-0">
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <img src="/burgerIcon.svg" alt="Menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}
