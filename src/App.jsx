import React, { useEffect, useState } from "react";

import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignUpPage";
import Publish from "./Publish";
import OfferAride from "./component/OfferAride";
import Search from "./component/Search";
import AdminPanel from "./Admin";
import AdminLogin from "./AdminLogin";
import MyRides from "./MyRides";
//2pcj20bg2J17CSbCOYjY
//O6YjcCwWMR0Dg1CllUlOcF7gzF1QDaNTz7WPU4s7RgA
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/my-rides" element={<MyRides />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
