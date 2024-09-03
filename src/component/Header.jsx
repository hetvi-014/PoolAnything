import React, { useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ userName }) {
  // State to control dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleSignout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <div className="border-b-2 bg-purple-700 text-white">
      <div className="h-16 flex items-center px-4 justify-between max-w-6xl mx-auto">
        {/* logo left  */}
        <Link to="/" className="text-white  hover:text-pink-400 font-bold ">
          <div className="flex justify-center items-center">
            <img className="w-[50px]" src="/pngegg.png" alt="Logo"></img>
            <h3 className="font-bold text-xl ml-2">Pool Anything</h3>
          </div>
        </Link>
        <div className="flex gap-8">
          {/* searchbar */}
          {userName && (
            <>
              <Link
                to="/my-rides"
                className="text-white  hover:text-pink-400 font-bold "
              >
                <div className="flex gap-3 font-semibold hover:text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h2>My Rides</h2>
                </div>
              </Link>
              {/* publish */}
              <div className="flex gap-3 font-semibold hover:text-pink-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  to="/publish"
                  className="text-white  hover:text-pink-400 font-bold "
                >
                  <h2>Publish</h2>
                </Link>
              </div>
            </>
          )}
          {/* userbutton */}
          <div className="flex relative font-bold">
            {userName && <p className="mr-2">{`hello, ${userName}`}</p>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleDropdown}
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            {/* Dropdown */}
            {dropdownVisible && (
              <>
                <div className="absolute top-[100%] right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-[100]">
                  <ul>
                    {!userName ? (
                      <>
                        <Link
                          to="/login"
                          className="text-purple-700 font-bold "
                        >
                          <li className="px-4 py-2 text-gray-800 cursor-pointer hover:text-white rounded-lg hover:bg-pink-400">
                            Login
                          </li>
                        </Link>
                        <Link
                          to="/signup"
                          className="text-purple-700 font-bold "
                        >
                          <li className="px-4 py-2 text-gray-800 cursor-pointer hover:text-white rounded-lg hover:bg-pink-400">
                            Sign Up
                          </li>
                        </Link>
                      </>
                    ) : (
                      <Link to="/" className="text-purple-700 font-bold ">
                        <li
                          onClick={() => handleSignout()}
                          className="px-4 py-2 text-gray-800 cursor-pointer hover:text-white rounded-lg hover:bg-pink-400"
                        >
                          Sign Out
                        </li>
                      </Link>
                    )}
                  </ul>
                </div>
                <div
                  className="fixed bg-black opacity-15 w-full h-full top-0 left-0 z-[90] "
                  onClick={toggleDropdown}
                ></div>
              </>
            )}
          </div>

          {/* your rides */}
        </div>
      </div>
    </div>
  );
}

export default Header;
