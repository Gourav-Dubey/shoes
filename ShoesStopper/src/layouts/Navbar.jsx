// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// function Navbar() {
//   return (
//     <header className="bg-black text-white w-full shadow-md sticky top-0 z-50">
//       <div className="max-w-8xl mx-auto px-6 py-2 flex items-center justify-between">
//         <div className="text-4xl font-bold">𝙎𝙝𝙤𝙚𝙨𝙎𝙩𝙤𝙥𝙥𝙚𝙧</div>
//         <nav className="space-x-9 text-xl font-normal">
//           <Link to ="/home" className="hover:text-gray-300 transition">Home</Link>
//           <Link to="/men" className="hover:text-gray-300 transition">Men</Link>
//           <Link to="/womens" className="hover:text-gray-300 transition">Womens</Link>
//           <Link to="/collection" className="hover:text-gray-300 transition">Collections</Link>
//           <Link to="/sale" className="hover:text-gray-300 transition">Sale</Link>
//         </nav>
//         <div className="space-x-4 text-lg">
//           <button className="hover:text-gray-300">🔍</button>
//           <button className="hover:text-gray-300">👤</button>
//           <button className="hover:text-gray-300">🛒</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 shadow-lg" : "bg-black"}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Changed text color to white */}
          <div className="flex-shrink-0">
            <Link to="/home" className="text-2xl md:text-3xl font-bold text-white hover:text-gray-300 transition-colors">
              𝙎𝙝𝙤𝙚𝙨𝙎𝙩𝙤𝙥𝙥𝙚𝙧
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink to="/home" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/men" onClick={closeMobileMenu}>Men</NavLink>
            <NavLink to="/womens" onClick={closeMobileMenu}>Women</NavLink>
            <NavLink to="/collection" onClick={closeMobileMenu}>Collections</NavLink>
            <NavLink to="/sale" onClick={closeMobileMenu}>Sale</NavLink>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <IconButton icon={<Search size={20} />} />
            <IconButton icon={<User size={20} />} />
            <IconButton icon={<ShoppingCart size={20} />} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
          <MobileNavLink to="/home" onClick={closeMobileMenu}>Home</MobileNavLink>
          <MobileNavLink to="/men" onClick={closeMobileMenu}>Men</MobileNavLink>
          <MobileNavLink to="/womens" onClick={closeMobileMenu}>Women</MobileNavLink>
          <MobileNavLink to="/collection" onClick={closeMobileMenu}>Collections</MobileNavLink>
          <MobileNavLink to="/sale" onClick={closeMobileMenu}>Sale</MobileNavLink>
          
          <div className="flex justify-center space-x-6 pt-4">
            <IconButton icon={<Search size={20} />} />
            <IconButton icon={<User size={20} />} />
            <IconButton icon={<ShoppingCart size={20} />} />
          </div>
        </div>
      </div>
    </header>
  );
}

// Reusable NavLink component
const NavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-gray-300 transition-colors duration-200 text-sm lg:text-base"
  >
    {children}
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 transition-colors duration-200"
  >
    {children}
  </Link>
);

// Reusable IconButton component
const IconButton = ({ icon }) => (
  <button className="text-white hover:text-gray-300 transition-colors duration-200 p-1">
    {icon}
  </button>
);

export default Navbar;