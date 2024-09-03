import React from "react";
import { Link } from "@mui/material";
import {
  FaFacebook,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-sm font-semibold uppercase mb-2">Top Routes</h2>
          <ul className="text-gray-400">
            <li className="mb-2 ">
              <Link href="#" style={{ color: "white" }}>
                Vapi ~ Mumbai
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                Mumbai Vapi
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                Vapi Mumbai
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                Vapi Mumbai
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-sm font-semibold uppercase mb-2">About</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                How it works
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                Help Center
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" style={{ color: "white" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            <FaDiscord />
          </a>
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white mr-4">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaDribbble />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
