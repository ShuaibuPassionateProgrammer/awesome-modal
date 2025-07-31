import React from 'react';
import ModalWrapper from './ModalWrapper';

export default function SignupModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
      </form>
      <div className="mt-4 text-sm text-center">
        <button onClick={() => onSwitch('login')} className="text-blue-600 hover:underline">Already have an account?</button>
      </div>
    </ModalWrapper>
  );
}
