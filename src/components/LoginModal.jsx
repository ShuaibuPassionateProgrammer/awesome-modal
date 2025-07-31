import React from 'react';
import ModalWrapper from './ModalWrapper';

export default function LoginModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <div className="mt-4 text-sm text-center">
        <button onClick={() => onSwitch('signup')} className="text-blue-600 hover:underline">Create an account</button> | 
        <button onClick={() => onSwitch('forgot')} className="text-blue-600 hover:underline ml-1">Forgot Password?</button>
      </div>
    </ModalWrapper>
  );
}
