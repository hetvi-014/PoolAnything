import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userName, password }), // Assuming 'userName' corresponds to 'email' in the backend
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      // Assuming the token is returned as 'token' in the response
      const token = data.token;
      if (!data.user.isAdmin) {
        console.log(data);
        throw error("You Don't have Admin Access"); // Set error message for wrong password
      }
      // Store the token in local storage or state variable
      Cookies.set("token", token, { expires: 7, secure: true });
      Cookies.set("Admin", JSON.stringify(data.user), {
        expires: 7,
        secure: false,
      });

      // Redirect to home page upon successful login
      window.location.href = "/admin"; // Replace '/home' with your actual home page URL
      console.log("Login successful");
    } catch (error) {
      setError("You Don't have Admin Access"); // Set error message for wrong password
    }
  };
  return (
    <div className="w-full flex-col h-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-bg-gradient-to-r bg-gradient-to-r bg-gradient-to-r from-teal-400 to-yellow-200">
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
            Admin Login
          </h2>
          <p className="text-center text-gray-600">
            Log in to access the Admin panel ! Unlock Limitless Possibilities
            with Admin Access.
          </p>
          <div className="flex flex-col w-full gap-4">
            <TextField
              className="bg-gray-100"
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setUserName(e?.target?.value)}
              value={userName}
            />
            <TextField
              className="bg-gray-100"
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e?.target.value)}
              value={password}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <div className="rounded-full overflow-hidden">
            <button
              onClick={() => handleLogin()}
              className="bg-purple-600 hover:bg-purple-700 rounded-full text-white px-10 py-3 transition-colors duration-300"
            >
              Gain Admin Powers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
