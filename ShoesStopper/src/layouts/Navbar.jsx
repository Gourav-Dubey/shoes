// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
// import AIButton from "../components/ui/AIButton";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMobileMenu = () => {
//     setIsOpen(false);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//       setSearchQuery("");
//       closeMobileMenu();
//     }
//   };

//   // const handleCartClick = () => {
//   //   navigate("/cart");
//   //   closeMobileMenu();
//   // };

//   const handleLoginClick = () => {
//     navigate("/login");
//     closeMobileMenu();
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 shadow-lg" : "bg-black"}`}>
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo - Changed text color to white */}
//           <div className="flex-shrink-0">
//             <Link to="/home" className="text-2xl md:text-3xl font-bold text-white hover:text-gray-300 transition-colors">
//               𝙎𝙝𝙤𝙚𝙨𝙎𝙩𝙤𝙥𝙥𝙚𝙧
//             </Link>
//           </div> 

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             <NavLink to="/home" onClick={closeMobileMenu}>Home</NavLink>
//             <NavLink to="/men" onClick={closeMobileMenu}>Men</NavLink>
//             <NavLink to="/womens" onClick={closeMobileMenu}>Women</NavLink>
//             <NavLink to="/collection" onClick={closeMobileMenu}>Collections</NavLink>
//             <NavLink to="/sale" onClick={closeMobileMenu}>Sale</NavLink>
//             <AIButton closeMobileMenu={closeMobileMenu} />


//           </nav>

//           {/* Desktop Icons
//           <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
//             <form onSubmit={handleSearch} className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="px-2 py-1 text-sm text-white bg-gray-800 rounded-l-md focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="p-1 bg-gray-700 rounded-r-md hover:bg-gray-600 transition-colors"
//               >
//                 <Search size={20} className="text-white" />
//               </button>
//             </form>
//             <IconButton 
//               icon={<User size={20} />} 
//               onClick={handleLoginClick}
//             />
            
//           </div> */}

//           {/* Desktop & Mobile Right Icons */}
// <div className="flex items-center space-x-4 lg:space-x-6">
//   {/* Show AI Button always */}
//   <div className="hidden md:block">
//     <AIButton closeMobileMenu={closeMobileMenu} />
//   </div>
//   <form onSubmit={handleSearch} className="hidden md:flex items-center">
//     <input
//       type="text"
//       placeholder="Search..."
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       className="px-2 py-1 text-sm text-white bg-gray-800 rounded-l-md focus:outline-none"
//     />
//     <button
//       type="submit"
//       className="p-1 bg-gray-700 rounded-r-md hover:bg-gray-600 transition-colors"
//     >
//       <Search size={20} className="text-white" />
//     </button>
//   </form>
//   <IconButton icon={<User size={20} />} onClick={handleLoginClick} />
//   {/* <IconButton icon={<ShoppingCart size={20} />} onClick={handleCartClick} /> */}

//   {/* Mobile AI Button */}
//   <div className="md:hidden">
//     <AIButton closeMobileMenu={closeMobileMenu} />
//   </div>

//   {/* Mobile menu toggle */}
//   <div className="md:hidden flex items-center">
//     <button
//       onClick={() => setIsOpen(!isOpen)}
//       className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors"
//       aria-label="Toggle menu"
//     >
//       {isOpen ? <X size={24} /> : <Menu size={24} />}
//     </button>
//   </div>
// </div>


//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
//           <MobileNavLink to="/home" onClick={closeMobileMenu}>Home</MobileNavLink>
//           <MobileNavLink to="/men" onClick={closeMobileMenu}>Men</MobileNavLink>
//           <MobileNavLink to="/womens" onClick={closeMobileMenu}>Women</MobileNavLink>
//           <MobileNavLink to="/collection" onClick={closeMobileMenu}>Collections</MobileNavLink>
//           <MobileNavLink to="/sale" onClick={closeMobileMenu}>Sale</MobileNavLink>
//             <AIButton closeMobileMenu={closeMobileMenu} />
          
//           <div className="pt-4">
//             <form onSubmit={handleSearch} className="flex mb-4">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="flex-1 px-3 py-2 text-white bg-gray-800 rounded-l-md focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="px-3 bg-gray-700 rounded-r-md hover:bg-gray-600 transition-colors"
//               >
//                 <Search size={20} className="text-white" />
//               </button>
//             </form>
            
//             <div className="flex justify-center space-x-6">
//               <IconButton 
//                 icon={<User size={20} />} 
//                 onClick={handleLoginClick}
//               />
//               {/* <IconButton 
//                 icon={<ShoppingCart size={20} />} 
//                 onClick={handleCartClick}
//               /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// // Reusable NavLink component
// const NavLink = ({ to, onClick, children }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="text-white hover:text-gray-300 transition-colors duration-200 text-sm lg:text-base"
//   >
//     {children}
//   </Link>
// );

// // Reusable MobileNavLink component
// const MobileNavLink = ({ to, onClick, children }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 transition-colors duration-200"
//   >
//     {children}
//   </Link>
// );

// // Updated IconButton component with onClick prop
// const IconButton = ({ icon, onClick }) => (
//   <button 
//     onClick={onClick}
//     className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
//   >
//     {icon}
//   </button>
// );

// export default Navbar;  

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import AIButton from "../components/ui/AIButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeMobileMenu();
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
    closeMobileMenu();
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 shadow-lg" : "bg-black"}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop & Mobile Right Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {/* AI Button always visible */}
            <AIButton closeMobileMenu={closeMobileMenu} />

            

            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={10} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

     
<div
  className={`md:hidden bg-black/95 transition-all duration-300 ease-in-out overflow-hidden ${
    isOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
  }`}
>
  <div className="px-4 space-y-3">
    <MobileNavLink to="/home" onClick={closeMobileMenu}>Home</MobileNavLink>
    <MobileNavLink to="/men" onClick={closeMobileMenu}>Men</MobileNavLink>
    <MobileNavLink to="/womens" onClick={closeMobileMenu}>Women</MobileNavLink>
    <MobileNavLink to="/collection" onClick={closeMobileMenu}>Collections</MobileNavLink>
    <MobileNavLink to="/sale" onClick={closeMobileMenu}>Sale</MobileNavLink>

    {isOpen && (
  <div className="flex justify-center pt-2 md:hidden ">
    <IconButton icon={<User size={20} />} onClick={handleLoginClick} />
  </div>
)}

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

// Icon Button reusable
const IconButton = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
  >
    {icon}
  </button>
);

export default Navbar;
