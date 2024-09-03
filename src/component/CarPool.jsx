import React, { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import DateSelector from "./DatePicker";
// import { Slide } from '@mui/material';
// import Slider from 'react-slick';
import axios from "axios";

import Carousel from "./Carousel";
import Advantages from "./Advantages";
import About from "./About";
import OfferAride from "./OfferAride";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUsers,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import AutoComplete from "./AutoComplete";
import Popup from "./Popup";

function CarPool() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State variable to store search results
  const [showPopup, setShowPopup] = useState(false); // State variable to manage popup visibility

  const [seats, setSeats] = useState(1);

  const handleSeatsChange = (event) => {
    // Update the seats state with the new value from the input
    setSeats(parseInt(event.target.value)); // Parse the input value to an integer
  };
  const handleSearch = async () => {
    try {
      const response = await searchRides(from, to, date, seats);
      setSearchResults(response); // Set the search results in state
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error("Error searching rides:", error);
    }
  };

  async function searchRides(origin, destination, date, availableSeats) {
    try {
      const response = await axios.get("http://localhost:3000/search/rides", {
        params: {
          origin: origin,
          destination: destination,
          date: date,
          availableSeats: seats,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      console.error("Error searching rides:", error.messege);
      throw error;
    }
  }
  return (
    <div className="flex flex-col ">
      <div className="flex">
        {/* Left Section */}
        <div className="relative w-[50%] h-[90vh] overflow-hidden">
          <div className="absolute inset-0 flex justify-end items-end pb-[10%] pt-[20%]">
            <div className="min-h-full min-w-full bottom-10">
              <Carousel />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[50%] px-4 flex items-center justify-center flex-col">
          <div className="flex flex-col items-center shadow-lg p-10 rounded-3xl gap-4 hover:shadow-2xl transition-all duration-200 bg-gradient-to-br ">
            <h2 className="font-bold text-start ">Find Your Ride</h2>
            <div className="flex flex-col w-full gap-4">
              {/* Enhance input fields with icons */}
              <AutoComplete
                label={"From"}
                address={from}
                setAddress={setFrom}
              ></AutoComplete>
              <AutoComplete
                label={"To"}
                address={to}
                setAddress={setTo}
              ></AutoComplete>
            </div>
            <div className="flex items-center w-full gap-4">
              {/* Date Selector */}
              <div className="relative">
                {/* Placeholder for Date Picker Component */}
                <DateSelector value={date} handleDateChange={setDate} />
              </div>
              {/* Add visual for selecting the number of seats */}
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">
                  <FontAwesomeIcon className="text-grey-400" icon={faUsers} />
                </span>
                <input
                  className="bg-white rounded-lg py-3 px-4 border border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out"
                  id="seat-input"
                  type="number"
                  value={seats} // Bind the value of the input to the seats state
                  onChange={handleSeatsChange} // Call handleSeatsChange function when input changes
                  min="1"
                  max="4"
                  placeholder=""
                />
              </div>
            </div>
            <div className="rounded-lg">
              {/* Add an animated car icon to the button */}
              <button
                onClick={() => handleSearch()}
                className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white px-10 py-3 hover:scale-105 transform transition-all duration-300 ease-in-out flex items-center"
              >
                <span className="mr-2">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* advantages */}
      <div>
        <Advantages />
      </div>

      {/* safety */}

      {/* offer a ride */}
      <div>
        <OfferAride />
      </div>
      {/* abput */}
      <div>
        <About />
      </div>
      {showPopup && (
        <Popup
          searchResults={searchResults}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default CarPool;
