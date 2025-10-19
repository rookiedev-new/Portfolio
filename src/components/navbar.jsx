import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed  top-0 w-full z-40  opacity-85 ">
      <nav className="flex text-center bg-neutral-900   md:justify-between  text-2xl text-white py-3 px-4">
        <h1>Rookie Dev</h1>
        <span
          className="w-7   fixed  md:hidden z-50 right-1 top-2 cursor-pointer  "
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "☰"}
        </span>

        <ul className="hidden md:flex gap-6 ">
          <li>
            <a
              href="#home"
              className="hover:text-orange-400  ease-in inline-block hover:scale-110 transition-all transform duration-200"
              onClick={() => setOpen(!open)}
            >
              Home
            </a>
          </li>
           <li>
            <a
              href="#about"
              className="hover:text-orange-400  ease-in inline-block hover:scale-110 transition-all transform duration-200"
              onClick={() => setOpen(!open)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
               className="hover:text-orange-400  ease-in inline-block hover:scale-110 transition-all transform duration-200"
              onClick={() => setOpen(!open)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skill"
               className="hover:text-orange-400  ease-in inline-block hover:scale-110 transition-all transform duration-200"
              onClick={() => setOpen(!open)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
               className="hover:text-orange-400  ease-in inline-block hover:scale-110 transition-all transform duration-200"
              onClick={() => setOpen(!open)}
            >
              Contact
            </a>
          </li>
        </ul>

        <div
          className={`absolute right-0 top-0  w-[50vw] md:hidden  pt-[25%]  h-screen
         ${
           open ? "translate-x-0" : "translate-x-full"
         } bg-neutral-900  transition-transform ease-in-out duration-500
         `}
        >
          <ul className="flex flex-col items-center gap-5 text-xl ">
            <li>
              <a
                href="#home"
                className="hover:text-orange-400 transition-all transform inline-block hover:scale-125 duration-300"
                onClick={() => setOpen(!open)}
              >
                Home
              </a>
            </li>
             <li>
            <a
              href="#about"
              className="hover:text-orange-400  ease-in inline-block hover:scale-110 transition-all transform duration-200"
              onClick={() => setOpen(!open)}
            >
              About
            </a>
          </li>
            <li>
              <a
                href="#project"
                     className="hover:text-orange-400 transition-all transform inline-block hover:scale-125 duration-300"
                onClick={() => setOpen(!open)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skill"
                     className="hover:text-orange-400 transition-all transform inline-block hover:scale-125 duration-300"
                onClick={() => setOpen(!open)}
              >
              Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                     className="hover:text-orange-400 transition-all transform inline-block hover:scale-125 duration-300"
                onClick={() => setOpen(!open)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
