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
          <button className="bg-blue-500 text-center px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={() => setIsLoginModal(!isLoginModal)}>Login</button>
          <button className="bg-green-500 text-center px-4 py-2 rounded hover:bg-green-600 cursor-pointer">Sign Up</button>
        </div>
      </div>
      {isLoginModal && (
        <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-black/50 fixed top-0 letft-0">
          <div className="max-width-[400px] bg-white p-4 space-x-10 shadow rounded relative">
            <div className="flex justify-between">
              <div className="mb-4">
                <h1>Login Information</h1>
                <IoClose size={20} onClick={() => setIsLoginModal(false)} className="cursor-pointer absolute top-5 right-5" />
              </div>
            </div>
            <div className="flex justify-center flex-col">
              <div className="mb-4">
                <input type="text" placeholder="Username" className="rounded shadow px-4 py-2" />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" className="rounded px-4 py-2" />
              </div>
              <div className="mb-4">
                <button className="bg-blue-500 text-center px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;