import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faChair,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie"; // Import the Cookies library

const SearchCard = ({ result, index }) => {
  const [userDetails, setUserDetails] = useState("");

  const handleGetDriverDetails = (username) => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setUserDetails(`Driver: ${username}`);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <li key={index} className="bg-white rounded-lg shadow-md mb-4 p-4">
      <div className="text-lg font-semibold mb-2">
        {result.origin} - {result.destination}
      </div>
      <div className="flex items-center text-sm text-gray-800 mb-2">
        <FontAwesomeIcon icon={faUser} className="mr-2" /> Driver:{" "}
        {result.driver}
      </div>
      <div className="flex items-center text-sm text-gray-800 mb-2">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Date:{" "}
        {result.date}
      </div>
      <div className="flex items-center text-sm text-gray-800 mb-2">
        <FontAwesomeIcon icon={faChair} className="mr-2" /> Available Seats:{" "}
        {result.availableSeats}
      </div>
      <div className="flex items-center text-sm text-gray-800 mb-2">
        <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" /> Price: Rs 550
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={() => handleGetDriverDetails(result.user_name)}
      >
        {userDetails || "Get Driver Details"}
      </button>
    </li>
  );
};

export default SearchCard;
