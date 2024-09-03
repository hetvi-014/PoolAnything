import React from "react";

const CongratulationsPopup = ({ onClose }) => {
  const redirectToMyRides = () => {
    // Redirect to /my-rides
    window.location.href = "/my-rides";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Popup Content */}
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 flex flex-col justify-center md:mx-auto z-50 text-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-600">
            Congratulations!
          </h2>
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <p className="text-gray-800">
          Your ride has been successfully created.
        </p>
        <button
          className="bg-purple-500 text-white px-4 py-2  mt-4 hover:bg-purple-600 rounded-xl focus:outline-none"
          onClick={redirectToMyRides}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CongratulationsPopup;
