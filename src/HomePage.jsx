import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import CarPool from "./component/CarPool";
import Footer from "./component/Footer";
import Cookies from "js-cookie";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    try {
      const token = Cookies.get("token");
      const { name } = JSON.parse(Cookies.get("user"));
      setUserName(name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="w-full h-auto ">
      {/* Header */}
      <Header userName={userName} />
      <h1 className="text-center font-extrabold text-6xl mt-14 mb-[-5%] ">
        Your pick of rides at low prices
      </h1>
      {/* main */}
      <CarPool />

      {/* footer */}
      <Footer />
    </main>
  );
};

export default HomePage;
