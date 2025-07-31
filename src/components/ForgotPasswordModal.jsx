import React from 'react';
import ModalWrapper from './ModalWrapper';

export default function ForgotPasswordModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-yellow-600 text-white p-2 rounded">Send Reset Link</button>
      </form>
      <div className="mt-4 text-sm text-center">
        <button onClick={() => onSwitch('login')} className="text-blue-600 hover:underline">Back to Login</button>
      </div>
    </ModalWrapper>
  );
}
