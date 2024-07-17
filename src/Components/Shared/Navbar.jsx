"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside of menu to close it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Add and remove event listener for clicking outside the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="bg-[#211C1D] relative z-10 font-raleway">
        <nav className="navbar z-50 text-[#E0D7C7] mx-auto py-2 font-montserrat px-4 max-w-screen-xl flex justify-between items-center">
          <div className="navbar-start">
            <a href="#home">
              <Image
                className=""
                height="43"
                width="130"
                src="https://i.ibb.co/7gc2gZJ/Group-168-2.png"
                alt="Logo"
              />
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4">
              {[
                "Home",
                "About Me",
                "Services",
                "Listing",
                "Guideline",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-[#E0D7C7] hover:text-white text-base xl:text-lg 2xl:text-xl font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end flex items-center">
            <a href="#contact">
              <button className="  xl:px-5 xl:py-2 2xl:px-6  text-accent xl:text-xl 2xl:text-2xl font-roboto bg-neutral px-4 md:px-5 py-2 md:py-2.5  rounded-lg  font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-primary hover:text-neutral hover:shadow-lg ">
                Contact Me
              </button>
            </a>
            <div className="lg:hidden relative" ref={menuRef}>
              <button
                className="bg-neutral text-primary p-2 rounded-xl focus:outline-none ml-4"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10"
                >
                  <path
                    className={!menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    className={menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {menuOpen && (
                <ul className="menu menu-compact absolute right-0 mt-4 z-[1] p-2 shadow-md rounded-box w-48 sm:w-56 md:w-60 bg-primary text-[#EBE0CF] -mr-3">
                  {[
                    "Home",
                    "About Me",
                    "Services",
                    "Listing",
                    "Guideline",
                    "Contact",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-[#EBE0CF] text-base sm:text-lg md:text-xl "
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
