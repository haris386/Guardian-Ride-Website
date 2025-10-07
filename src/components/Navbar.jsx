"use client"
import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Features", "Solutions", "App"];

  return (
    <nav className="w-full top-0 left-0">
      <div className="w-[95%] mx-auto flex justify-between items-center h-16 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
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

        {/* Download Button */}
        <div className="hidden md:flex">
          <button className="px-5 py-2 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
            Download App <FiArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full py-6 flex flex-col items-center space-y-6 bg-white/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item) => (
              <li
                key={item}
                className="text-gray-900 hover:text-gray-700 font-medium cursor-pointer text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              Download App <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
