// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, Phone, Calendar, Briefcase } from "lucide-react"; // Importing icons

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#FFB71B] p-4 shadow-md select-none relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Brand Name */}
        <div className="text-white text-3xl font-bold">
          <Link to="/">🚩 जय बाबा वीर बुलाकी जी</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-6">
          <NavbarLink to="/" label="होम" Icon={Home} closeMenu={closeMobileMenu} />
          {/* <NavbarLink to="/services" label="सेवाएँ" Icon={Briefcase} closeMenu={closeMobileMenu} /> */}
          <NavbarLink to="/events" label="आयोजन" Icon={Calendar} closeMenu={closeMobileMenu} />
          <NavbarLink to="/contact" label="संपर्क करें" Icon={Phone} closeMenu={closeMobileMenu} />
          <NavbarLink to="/about" label="हमारे बारे में" Icon={Info} closeMenu={closeMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-16 left-0 w-full bg-[#FFB71B] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'}`}>
        <div className="flex flex-col space-y-3 p-4">
          <NavbarLink to="/" label="होम" Icon={Home} closeMenu={closeMobileMenu} />
          {/* <NavbarLink to="/services" label="सेवाएँ" Icon={Briefcase} closeMenu={closeMobileMenu} /> */}
          <NavbarLink to="/events" label="आयोजन" Icon={Calendar} closeMenu={closeMobileMenu} />
          <NavbarLink to="/contact" label="संपर्क करें" Icon={Phone} closeMenu={closeMobileMenu} />
          <NavbarLink to="/about" label="हमारे बारे में" Icon={Info} closeMenu={closeMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

// NavbarLink Component
const NavbarLink = ({ to, label, Icon, closeMenu }) => (
  <Link
    to={to}
    className="text-white text-lg py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#DC143C] hover:text-[#FFD700] transition duration-200"
    onClick={closeMenu} // Close menu on click
  >
    {Icon && <Icon size={20} />} {label}
  </Link>
);

export default Navbar;
