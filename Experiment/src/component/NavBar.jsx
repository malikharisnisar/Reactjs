import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

const navLinks = [
{ name: "Home", path: "/" },
{ name: "Your Booking", path: "/yourbooking" },
];

return ( 
<nav className="bg-white shadow-md fixed w-full z-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
   <div className="flex justify-between items-center h-16">

```
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 tracking-wide"
      >
        RentalCar 🚗
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium transition duration-300 ${
              location.pathname === link.path
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  <div className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
      isOpen ? "max-h-40 py-3" : "max-h-0"
    }`}
  >
    <div className="flex flex-col space-y-3 px-6">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={`text-base font-medium ${
            location.pathname === link.path
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
</nav>
);
}

export default Navbar;
