import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import DateSelector from "./component/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import AutoComplete from "./component/AutoComplete";
import Cookies from "js-cookie";
import CongratulationsPopup from "./CongratulationsPopup";
import ErrorPopup from "./ErrorPopup";

const Publish = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seats, setSeats] = useState(1);
  const [price, setPrice] = useState(1);

  const handleSeatsChange = (event) => {
    // Update the seats state with the new value from the input
    setSeats(parseInt(event.target.value)); // Parse the input value to an integer
  };
  const [showCongratulationsPopup, setShowCongratulationsPopup] =
    useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const createRide = async () => {
    console.log("creating ride");
    const user = JSON.parse(Cookies.get("user"));
    const token = Cookies.get("token");
    const requestBody = {
      origin: from,
      destination: to,
      date: "2024-03-18", // Example date format (YYYY-MM-DD)
      time: "10:00 AM",
      availableSeats: seats,
      driver: user.name,
      user_name: user.email,
      price: price,
    };

    try {
      const response = await fetch("http://localhost:3000/rides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        setShowCongratulationsPopup(true);
      } else {
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error("Error creating ride:", error);
      setShowErrorPopup(true);
    }
  };

  return (
    <div className="w-full flex-col h-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-violet-400 to-white">
      {/* logo left  */}
      <Link to="/" className="text-purple-700 font-bold ">
        <div className="flex justify-center items-center mb-8">
          <img
            className="w-[120px] animate-bounce"
            src="/pngegg.png"
            alt="Logo"
          ></img>
          <h3 className="font-bold text-white text-4xl ml-4">Pool Anything</h3>
        </div>
      </Link>
      <div className="flex z-10 justify-center items-center w-full max-w-[400px] px-4 flex-col ">
        <div className="flex flex-col items-center shadow-lg p-10 rounded-lg gap-6 hover:shadow-2xl transition-all duration-200 bg-white">
          <h2 className="font-bold text-start text-3xl text-purple-800">
            Share, Save, Drive
          </h2>
          <p className="text-center text-gray-600">
            Share the Ride, Save the Cost, Drive Together
          </p>

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
          <div className="flex flex-col w-full gap-4">
            <div className="flex items-center w-full gap-4">
              {/* Date Selector */}
              <div className="relative">
                {/* Placeholder for Date Picker Component */}
                <DateSelector></DateSelector>
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
            <input
              className="bg-white pl-10 w-full rounded-lg py-3 px-4 border border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out"
              placeholder={"Price"}
              type="text"
              value={price}
              onChange={(e) => {
                const newValue = e.target.value.trim(); // Trim whitespace from input value
                const isValidPrice = /^\d+(\.\d{1,2})?$/.test(newValue); // Validate price format
                if (isValidPrice || newValue === "") {
                  // Update price state only if it's a valid price format or empty
                  setPrice(newValue);
                }
              }}
            />
          </div>

          <div className="rounded-full overflow-hidden">
            <button
              onClick={() => createRide()}
              className="bg-red-600 hover:bg-purple-700 rounded-full text-white px-10 py-3 transition-colors duration-300"
            >
              Publish A ride
            </button>
          </div>
        </div>
      </div>
      {showCongratulationsPopup && (
        <CongratulationsPopup
          onClose={() => setShowCongratulationsPopup(false)}
        />
      )}

      {showErrorPopup && (
        <ErrorPopup onClose={() => setShowErrorPopup(false)} />
      )}
    </div>
  );
};

export default Publish;
