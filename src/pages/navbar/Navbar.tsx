import { useState } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";
import CadicientLogo from "../../assets/CADICIENT-LOGO.png";
import constants from "../../constants/constants.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top navbar container (always on top) */}
      <div className="bg-primary-accent-color sticky top-0 z-50">
        <div className="bg-neutral-950 h-[100px] w-full lg:px-[100px] md:px-[20px] px-6 flex items-center justify-between relative">
          {/* Logo */}
          <img src={CadicientLogo} alt="Logo" className="h-[50px] z-50" />

          {/* Desktop Menu */}
          <div className="hidden md:flex text-white text-l space-x-6 font-semibold justify-start">
            {constants.navbar.map((navbarItem, index) => (
              <a
                href={`#${navbarItem?.route}`}
                className="navbar-items underline-hover"
                key={index}
              >
                {navbarItem?.key}
              </a>
            ))}
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden text-white z-50">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Drawer (below top bar) */}
      <div
        className={`fixed top-[50px] left-0 h-full w-[75%] max-w-sm bg-neutral-950 text-white transform transition-transform duration-500 ease-in-out z-40 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 text-xl font-semibold mt-20 px-[30px]">
          {constants.navbar.map((navbarItem, index) => (
            <a
              href={`#${navbarItem?.route}`}
              className="navbar-items text-left"
              key={index}
              onClick={() => setIsOpen(false)}
            >
              {navbarItem?.key}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
