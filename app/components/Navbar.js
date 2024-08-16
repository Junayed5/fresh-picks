"use client";
import { useState } from "react";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center py-5 px-2">
            <a href="#" className="flex items-center text-gray-700">
              <svg
                className="h-6 w-6 mr-1 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6l4 2"
                />
              </svg>
              <span className="font-bold">ShopLogo</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <input
              type="text"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Search products..."
            />
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaHeart className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaShoppingCart className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Services
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Contact
        </a>
        <div className="block py-2 px-4 text-sm">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search products..."
          />
        </div>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Favorites
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Cart
        </a>
      </div>
    </nav>
  );
}
