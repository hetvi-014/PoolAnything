import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex pattern
    const passwordPattern = /^\d{6,}$/; // Minimum 6 digits

    // Check if email is valid
    if (!emailPattern.test(userName)) {
      setError("Invalid email address");
      return;
    }

    // Check if password is valid
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userName, password, name }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const data = await response.json();
      const token = data.token;
      Cookies.set("token", token, { expires: 7, secure: true });
      Cookies.set("user", JSON.stringify(data.user), {
        expires: 7,
        secure: false,
      });
      Cookies.set("user_name", userName, { expires: 7, secure: false });

      window.location.href = "/";
      console.log("Sign Up successful");
    } catch (error) {
      console.error("Sign UP failed:", error.message);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="w-full flex-col h-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600">
      {/* logo left */}
      <div className="flex justify-center items-center mb-8">
        <img
          className="w-[120px] mt-10 animate-bounce"
          src="/pngegg.png"
          alt="Logo"
        ></img>
        <h3 className="font-bold text-white text-4xl ml-4 ">Pool Anything</h3>
      </div>
      <div className="flex z-10 justify-center items-center h-full max-w-[400px] px-3 flex-col ">
        <div className="flex flex-col items-center shadow-lg p-10 rounded-lg gap-6 hover:shadow-2xl transition-all duration-200 bg-white">
          <h2 className="font-bold text-start text-3xl text-purple-800">
            Join Us!
          </h2>
          <p className="text-center text-gray-600">
            Sign up to access the pool of possibilities!
          </p>
          <div className="flex flex-col w-full gap-4">
            <TextField
              className="bg-gray-100"
              id="fullname"
              label="Full Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className="bg-gray-100"
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              className="bg-gray-100"
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              className="bg-gray-100"
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="rounded-full overflow-hidden">
            <button
              onClick={() => handleSignup()}
              className="bg-purple-600 hover:bg-purple-700 rounded-full text-white px-10 py-3 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-700 font-bold hover:underline"
            >
              <a href="#" className="text-purple-700 font-bold hover:underline">
                Log in here!
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
