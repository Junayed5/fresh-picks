"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import CartModal from "./CartModal";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hidden md:block bg-primary">
        <div className="flex justify-between text-white py-3 max-w-7xl mx-auto">
          <div className="flex gap-x-4">
            <div>
              <div className="flex gap-x-3 items-center">
                <BsTruck />
                <p>Free Delivery</p>
              </div>
            </div>
            <div>
              <div className="flex gap-x-3 items-center">
                <GiWorld />
                <p>Return Policy</p>
              </div>
            </div>
            <div className="flex gap-x-3 items-center">
              <p>Follow Us</p>
              <div className="flex gap-x-3">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>

          <div>
            <p>Login</p>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center py-5 px-2">
              <Link href="/" className="flex items-center text-gray-700">
                <img className="h-12 md:h-16" src="fresh-picks.png" alt="" />
              </Link>
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
              <button onClick={toggleModal} className="text-gray-700 hover:text-gray-900">
                <FaShoppingCart className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="pr-3">Login</button>

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
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </Link>
          <Link href="/products" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Products
          </Link>
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
          <button onClick={toggleModal} className="block py-2 px-4 text-sm hover:bg-gray-200" >
            Cart
          </button>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <button className="bg-primary text-2xl text-white px-16 py-2">
              All Category
            </button>

            <div>
              <Link href="/" className="py-2 px-4 text-lg hover:bg-gray-200">
                Home
              </Link>
              <Link href="/products" className="py-2 px-4 text-lg hover:bg-gray-200">
                Products
              </Link>
              <a href="#" className="py-2 px-4 text-lg hover:bg-gray-200">
                Services
              </a>
              <a href="#" className="py-2 px-4 text-lg hover:bg-gray-200">
                Contact
              </a>
            </div>
            <button className="bg-secondary text-2xl text-white px-16 py-2">
              <span className="">Black Friday</span> <br />
              <span className="text-sm">Get 45% Off</span>
            </button>
          </div>
        </div>
        {cartOpen ? <CartModal toggleModal={toggleModal}/> : null}
      </nav>
    </>
  );
}
