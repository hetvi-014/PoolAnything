import React from "react";

const ErrorPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Popup Content */}
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 md:mx-auto z-50 text-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-red-600">Error!</h2>
          <button
            className="text-gray-800 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <p className="text-gray-800">
          An error occurred while creating your ride. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorPopup;
