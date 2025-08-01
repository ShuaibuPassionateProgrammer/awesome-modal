import React from 'react';

const Navbar = ({ setIsLoginModal, setIsSignUpModal }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50">
      <div className="flex justify-between items-center mx-auto p-4 max-w-7xl">
        <a href="#home" className="text-2xl font-bold italic">
          Passionate Programmer
        </a>
        <div className="space-x-4">
          <ul className="flex gap-6">
            <li><a href="#home" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => {
              setIsLoginModal(true);
              setIsSignUpModal(false);
            }}
          >
            Login
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            onClick={() => {
              setIsSignUpModal(true);
              setIsLoginModal(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
