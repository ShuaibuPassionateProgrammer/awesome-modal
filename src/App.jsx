import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const App = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isForgotPasswordModal, setIsForgotPasswordModal] = useState(false);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-between items-center mx-auto p-4 bg-gray-100 shadow-md">
        <a href="#" className="text-2xl font-bold italic">Passionate Programmer</a>
        <nav className="space-x-4">
          <ul className="flex gap-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-center px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => {
              setIsLoginModal(true);
              setIsSignUpModal(false);
            }}
          >
            Login
          </button>
          <button
            className="bg-green-500 text-center px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
            onClick={() => {
              setIsSignUpModal(true);
              setIsLoginModal(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      {isLoginModal && (
        <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-black/50 fixed top-0 left-0">
          <div className="w-[400px] bg-white p-6 shadow rounded relative">
            <div className="flex justify-between">
              <div className="mb-4">
                <h1 className="text-xl font-semibold">Login Information</h1>
                <IoClose size={20} onClick={() => setIsLoginModal(false)} className="cursor-pointer absolute top-5 right-5" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Username" className="w-full rounded bg-gray-200 px-4 py-2" />
              <input type="password" placeholder="Password" className="w-full rounded bg-gray-200 px-4 py-2" />
              <p className="text-blue-500 hover:underline cursor-pointer">Forgot Password?</p>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</button>
              <p className="text-center text-sm text-gray-600">
                Don't have an Account?{" "}
                <button
                  className="text-blue-500 hover:underline cursor-pointer"
                  onClick={() => {
                    setIsSignUpModal(true);
                    setIsLoginModal(false);
                  }}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
      {isSignUpModal && (
        <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-black/50 fixed top-0 left-0">
          <div className="w-[400px] bg-white p-6 shadow rounded relative">
            <div className="flex justify-between">
              <div className="mb-4">
                <h1 className="text-xl font-semibold">Sign Up</h1>
                <IoClose size={20} onClick={() => setIsSignUpModal(false)} className="cursor-pointer absolute top-5 right-5" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Username" className="w-full rounded bg-gray-200 px-4 py-2" />
              <input type="email" placeholder="Email" className="w-full rounded bg-gray-200 px-4 py-2" />
              <input type="password" placeholder="Password" className="w-full rounded bg-gray-200 px-4 py-2" />
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</button>
              <p className="text-center text-sm text-gray-600">
                Already have and Account?{" "}
                <button
                  className="text-blue-500 hover:underline cursor-pointer"
                  onClick={() => {
                    setIsLoginModal(true);
                    setIsSignUpModal(false);
                  }}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;