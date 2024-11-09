"use client"
import { useState } from "react";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg h-screen p-5 pt-8 transition-transform duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={20} />
        </button>

        <div className="flex flex-col items-start space-y-6 mt-10">
          {/* Sidebar Content */}
          <h1
            className={`text-gray-900 font-bold text-2xl transition-all duration-300 ${
              !isOpen && "opacity-0"
            }`}
          >
            Dashboard
          </h1>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-3">
              <FaHome />
              <span className={`${!isOpen && "hidden"} transition-all duration-300`}>Home</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaUser />
              <span className={`${!isOpen && "hidden"} transition-all duration-300`}>Profile</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCog />
              <span className={`${!isOpen && "hidden"} transition-all duration-300`}>Settings</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 h-screen ml-${isOpen ? 64 : 20} p-8 bg-gray-100`}>
        <h2 className="text-3xl font-semibold text-gray-800">Main Content</h2>
        <p className="mt-4 text-gray-600">
          Welcome to your dashboard! Use the sidebar to navigate.
        </p>
      </div>
    </div>
  );
}
