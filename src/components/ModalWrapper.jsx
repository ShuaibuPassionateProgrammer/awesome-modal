// components/ModalWrapper.jsx
import React from 'react';

export default function ModalWrapper({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
