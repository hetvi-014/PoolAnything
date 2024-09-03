import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faInfoCircle,
  faCalendarAlt,
  faUser,
  faChair,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import SearchCard from "./SearchCard";

function Popup({ searchResults, onClose }) {
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
          <h2 className="text-2xl font-bold">Search Results</h2>
          <button
            className="text-gray-200 hover:text-gray-300 focus:outline-none"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="overflow-y-auto max-h-96">
          {searchResults.length == 0 && (
            <p className="text-black text-center m-10"> Oops No Rides Found!</p>
          )}

          {searchResults.map((result, index) => (
            <SearchCard result={result} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Popup;
