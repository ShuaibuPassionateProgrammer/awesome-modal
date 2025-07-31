import React from 'react';
import ModalWrapper from './ModalWrapper';

export default function ResetPasswordModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form className="space-y-4">
        <input type="password" placeholder="New Password" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">Reset Password</button>
      </form>
    </ModalWrapper>
  );
}
