import { useState } from "react";
import './navbar.css';
import { Menu, X } from "lucide-react"; 
import CadicientLogo from '../../assets/CADICIENT.png';
import constants from '../../constants/constants.json'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return <>
        <div className="bg-primary-accent-color sticky top-0 z-50">
      <div className="bg-primary-dark-color h-[100px] w-full lg:px-[100px] md:px-[20px] px-6 flex items-center justify-between">
        {/* Logo */}
        <img src={CadicientLogo} alt="Logo" className="h-[50px]" />

        {/* Desktop Menu */}
        <div className="hidden md:flex text-white text-l space-x-6 font-semibold justify-start">
            {constants.navbar.map((navbarItem, index) => (
                <span className="navbar-items underline-hover" key={index}>{navbarItem}</span>
            ))}
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark-color text-white flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
          {constants.navbar.map((navbarItem, index) => (
                <span className="navbar-items w-full text-left px-[30px]" key={index}>{navbarItem}</span>
            ))}
        </div>
      )}
    </div>
    </>
};

export default Navbar;