import React from "react";

const SideNav = () => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-white">
        <div className="px-6 py-8">
          <h2 className="text-gray-900 text-xl font-semibold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-white"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-white"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h12v12H4V4z" />
                </svg>
                <span className="ml-3">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-white"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 6h8v8H6V6z" />
                </svg>
                <span className="ml-3">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-white"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 8h16M2 12h16" />
                </svg>
                <span className="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">This is where your main content goes.</p>
      </div>
    </div>
  );
};

export default SideNav;
