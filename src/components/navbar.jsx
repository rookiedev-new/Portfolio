import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const bar = ["home", "about", "skills", "projects", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {bar.map((itm,id) => (
              <button key={id}
                onClick={() => scrollToSection(itm)}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                {itm.charAt(0).toUpperCase() + itm.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
           
            {bar.map((itm,id) => (
              <button key={id}
                onClick={() => scrollToSection(itm)}
                className="block  w-full text-left px-3 py-2  text-gray-300 hover:text-purple-400 cursor-pointer"
              >
                {itm.charAt(0).toUpperCase() + itm.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
