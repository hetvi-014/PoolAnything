import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faCar,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./component/Header";
import { Link } from "react-router-dom";

const MyRides = () => {
  const [rides, setRides] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(Cookies.get("user"));
        const response = await axios.get(
          `http://localhost:3000/rides/user/${user.email}`
        );
        setRides(response.data);
        setUserName(user.name);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header userName={userName} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-black text-start">
          DriveDiary
        </h1>
        <hr className="text-black bg-black w-[100%] h-[0.1rem] mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded p-4 shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-blue-500 text-3xl mr-2"
                />
                <h2 className="text-xl font-bold">
                  {ride.origin} to {ride.destination}
                </h2>
              </div>
              <p className="text-gray-600 flex items-center mb-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {ride.date.split("T")[0]} {/* Displaying only the date */}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <FontAwesomeIcon icon={faRupeeSign} className="mr-2" />
                Price: {ride.price}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Seats Available: {ride.availableSeats}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Driver: {ride.driver}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                User Name: {ride.user_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRides;
