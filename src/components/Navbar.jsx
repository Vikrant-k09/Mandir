// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FFB71B] p-4 shadow-md select-none">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white text-3xl font-bold">
          <Link to="/">Mandir</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <span className="material-icons">menu</span> {/* Hamburger Icon */}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex space-x-6">
          <NavbarLink to="/" label="Home" />
          <NavbarLink to="/about" label="About" />
          <NavbarLink to="/services" label="Services" />
          <NavbarLink to="/events" label="Events" />
          <NavbarLink to="/contact" label="Contact" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#FFB71B] p-4`}
      >
        <NavbarLink to="/" label="Home" />
        <NavbarLink to="/about" label="About" />
        <NavbarLink to="/services" label="Services" />
        <NavbarLink to="/events" label="Events" />
        <NavbarLink to="/contact" label="Contact" />
      </div>
    </nav>
  );
};

// NavbarLink component to avoid repetition
const NavbarLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white text-lg py-2 px-4 rounded-lg hover:bg-[#DC143C] hover:text-[#FFD700] transition duration-200 block"
  >
    {label}
  </Link>
);

export default Navbar;
