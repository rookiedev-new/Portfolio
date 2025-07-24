import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40  opacity-60 bg-neutral-800 backdrop:blur-lg">
      <div className="max-w-5xl mx-auto px-3">
        <div className=" text-center sm:flex justify-between items-center  py-2 sm:py-4">
          <p className="text-xl font-bold">
            <span className="text-purple-500  ">Rookie </span> Dev
          </p>

          <div
            className="w-7 h-5 relative  cursor-pointer z-40 sm:hidden ml-auto mr-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>

          <ul className={`sm:flex gap-8 text-lg 
  overflow-hidden transition-all duration-500 ease-in-out 
  ${open ? 'max-h-60' : 'max-h-0'} sm:max-h-full  `}>
            <li>
              <a
                href="#home"
                className="hover:text-orange-400 transition-colors"
                onClick={()=>setOpen(!open)}
              >
                Home
              </a>
            </li>
            <li>
              
              <a
                href="#project"
                className="hover:text-orange-400 transition-colors"
                 onClick={()=>setOpen(!open)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-400 transition-colors"
                 onClick={()=>setOpen(!open)}
              >
                About
              </a>
            </li>
            <li>
              
              <a
                href="#contact"
                className="hover:text-orange-400 transition-colors"
                 onClick={()=>setOpen(!open)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
