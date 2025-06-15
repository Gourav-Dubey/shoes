import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <header className="bg-black text-white w-full shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-4xl font-bold">𝙎𝙝𝙤𝙚𝙨𝙎𝙩𝙤𝙥𝙥𝙚𝙧</div>
        <nav className="space-x-9 text-xl font-normal">
          <Link to ="/home" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/men" className="hover:text-gray-300 transition">Men</Link>
          <Link to="/womens" className="hover:text-gray-300 transition">Womens</Link>
          <Link to="/collection" className="hover:text-gray-300 transition">Collections</Link>
          <Link to="/sale" className="hover:text-gray-300 transition">Sale</Link>
        </nav>
        <div className="space-x-4 text-lg">
          <button className="hover:text-gray-300">🔍</button>
          <button className="hover:text-gray-300">👤</button>
          <button className="hover:text-gray-300">🛒</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
