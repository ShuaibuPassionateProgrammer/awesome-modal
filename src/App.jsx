import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

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
        <LoginModal 
          setIsLoginModal={setIsLoginModal}
          setIsSignUpModal={setIsSignUpModal}
          setIsForgotPasswordModal={setIsForgotPasswordModal}
        />
      )}
      {isSignUpModal && (
        <SignupModal 
          setIsSignUpModal={setIsSignUpModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}
      {isForgotPasswordModal && (
        <ForgotPasswordModal 
          setIsForgotPasswordModal={setIsForgotPasswordModal}
        />
      )}
    </div>
  );
};

export default App;