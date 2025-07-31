import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const App = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);

  return (
    <div className="bg-gray-200">
      <div className="flex justify-between items-center mx-auto p-4">
        <a href="#" className="text-2xl font-bold italic">Passionate Programmer</a>
        <nav className="space-x-4">
          <ul className="flex gap-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-center px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={() => setIsLogin(true)}>Login</button>
          <button className="bg-green-500 text-center px-4 py-2 rounded hover:bg-green-600 cursor-pointer">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default App;