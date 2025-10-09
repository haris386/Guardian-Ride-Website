"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Features", "Solutions", "App"];

  return (
    <nav className="w-full top-0 left-0">
      <div className="w-[95%] mx-auto flex justify-between items-center h-16 px-6 lg:px-12">
        {/* Logo */}
        <div id="navbar-logo" className="flex items-center">
          <img
            src="/logos/gr-logo.png"
            alt="Guardian Ride Logo"
            className="w-auto object-contain"
            style={{height:"65px"}}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="text-gray-900 hover:text-gray-700 font-medium cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Download Button (Desktop) */}
        <div className="hidden md:flex">
          <button className="px-5 py-2 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
            Download App <RiArrowRightSLine size={16} />
          </button>
        </div>

        {/* Mobile Icons (Key Button + Hamburger) */}
        <div className="md:hidden flex items-center gap-3">
          {/* Black Circle Key Icon */}
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <img
              src="/icons/key.png"
              alt="Key Icon"
              className="w-5 h-5 object-contain"
            />
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mb-5 md:hidden w-full py-6 flex flex-col items-center space-y-6 bg-black backdrop-blur-sm"
          style={{ borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}
        >
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item) => (
              <li
                key={item}
                className="text-white hover:text-gray-700 font-medium cursor-pointer text-lg"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
              Download App <RiArrowRightSLine size={28} className="flex-none" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
