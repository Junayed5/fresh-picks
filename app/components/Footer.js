import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-gray-800 text-xl font-bold mb-4 md:mb-0">
          YourBrand
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/">
            <p className="hover:text-white transition-colors duration-300">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-white transition-colors duration-300">About</p>
          </Link>
          <Link href="/services">
            <p className="hover:text-white transition-colors duration-300">Services</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-white transition-colors duration-300">Contact</p>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692V11.24h3.129V8.413c0-3.102 1.894-4.796 4.66-4.796 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.465h-3.121V24h6.116C23.408 24 24 23.408 24 22.675V1.325C24 .592 23.408 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.941 13.941 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.897 4.897 0 01.96 9.57v.062a4.914 4.914 0 003.941 4.814 4.899 4.899 0 01-2.212.084 4.919 4.919 0 004.588 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.785-.023-1.17-.067a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.853-3.039-1.853 0-2.137 1.45-2.137 2.948v5.66H9.35V9.7h3.414v1.469h.049c.476-.9 1.637-1.853 3.37-1.853 3.602 0 4.27 2.37 4.27 5.455v5.681zM5.337 8.432a2.07 2.07 0 01-2.07-2.07c0-1.142.928-2.07 2.07-2.07 1.143 0 2.07.928 2.07 2.07a2.07 2.07 0 01-2.07 2.07zm-1.777 12.02h3.554V9.7H3.56v10.752zM22.225 0H1.771C.792 0 0 .785 0 1.75v20.504C0 23.215.792 24 1.771 24h20.451c.978 0 1.778-.785 1.778-1.746V1.75C24 .785 23.203 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
