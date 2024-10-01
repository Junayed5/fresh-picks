"use client"
import { useState } from "react";
import SideNav from "./components/SideNav";



export default function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="flex">
        {/* Toggle Button */}
        <button 
          onClick={toggleSidebar} 
          className="p-4 text-white bg-gray-800 focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
  
        {/* Sidebar */}
        <aside className={`${isOpen ? "block" : "hidden"} w-64 h-screen bg-gray-800`}>
          <div className="px-6 py-8">
            <h2 className="text-white text-xl font-semibold mb-4">Dashboard</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h12v12H4V4z" />
                  </svg>
                  <span className="ml-3">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6h8v8H6V6z" />
                  </svg>
                  <span className="ml-3">Settings</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-base font-medium text-white rounded-lg hover:bg-gray-700">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8h16M2 12h16" />
                  </svg>
                  <span className="ml-3">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
  
        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="mt-4">This is where your main content goes.</p>
        </div>
      </div>
    );
}
