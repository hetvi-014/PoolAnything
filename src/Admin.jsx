import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEye,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./component/Header";
import Cookies from "js-cookie";
import axios from "axios";
// Modal component

const Modal = ({ isOpen, onClose, selectedUser }) => {
  if (!isOpen) return null;
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(selectedUser);
      try {
        const response = await axios.get(
          `http://localhost:3000/rides/user/${selectedUser}`
        );
        setRides(response.data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchData();
  }, [selectedUser]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
      <div className="relative w-11/12 max-w-3xl bg-white rounded-lg shadow-lg max-h-screen">
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-lg">
          <h2 className="text-lg font-semibold">User Rides</h2>
          <button onClick={onClose} className="text-white">
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <table className="min-w-full">
            {/* Table Body */}
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Origin</th>
                <th className="py-2 px-4">Destination</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Available Seats</th>
                <th className="py-2 px-4">Booked Seats</th>
                <th className="py-2 px-4">Driver</th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride) => (
                <tr key={ride.id} className="border-b border-gray-300">
                  <td className="py-2 px-4">{ride.origin}</td>
                  <td className="py-2 px-4">{ride.destination}</td>
                  <td className="py-2 px-4">
                    {new Date(ride.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">{ride.time}</td>
                  <td className="py-2 px-4">{ride.availableSeats}</td>
                  <td className="py-2 px-4">{ride.bookedSeats}</td>
                  <td className="py-2 px-4">{ride.driver.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AdminPanel = () => {
  // Define dummy data
  const [user, setUser] = useState();

  useEffect(() => {
    if (Cookies.get("Admin")) {
      setUser(JSON.parse(Cookies.get("Admin")));
      getAllUsers();
    } else {
      window.location.href = "/adminLogin"; // Replace '/home' with your actual home page URL
    }
  }, []);

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      rides: [
        {
          id: 1,
          origin: "A",
          destination: "B",
          date: new Date("2024-03-16"),
          time: "10:00 AM",
          availableSeats: 4,
          bookedSeats: 0,
          driver: { id: 1, name: "John Doe" },
        },
        {
          id: 2,
          origin: "C",
          destination: "D",
          date: new Date("2024-03-17"),
          time: "11:00 AM",
          availableSeats: 3,
          bookedSeats: 1,
          driver: { id: 1, name: "John Doe" },
        },
      ],
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      rides: [
        {
          id: 3,
          origin: "E",
          destination: "F",
          date: new Date("2024-03-18"),
          time: "12:00 PM",
          availableSeats: 2,
          bookedSeats: 0,
          driver: { id: 2, name: "Jane Doe" },
        },
        {
          id: 4,
          origin: "G",
          destination: "H",
          date: new Date("2024-03-19"),
          time: "1:00 PM",
          availableSeats: 3,
          bookedSeats: 2,
          driver: { id: 2, name: "Jane Doe" },
        },
      ],
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice@example.com",
      rides: [
        {
          id: 5,
          origin: "I",
          destination: "J",
          date: new Date("2024-03-20"),
          time: "2:00 PM",
          availableSeats: 1,
          bookedSeats: 0,
          driver: { id: 3, name: "Alice Smith" },
        },
        {
          id: 6,
          origin: "K",
          destination: "L",
          date: new Date("2024-03-21"),
          time: "3:00 PM",
          availableSeats: 5,
          bookedSeats: 0,
          driver: { id: 3, name: "Alice Smith" },
        },
      ],
    },
  ];

  const [usersWithRides, setUsersWithRides] = useState(data);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to get all users
  async function getAllUsers() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsersWithRides(response?.data);
      return response?.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  // Function to delete a user by ID
  async function deleteUser(userId) {
    console.log(userId);
    try {
      const response = await axios.delete(
        `http://localhost:3000/users/${userId}`
      );
      await getAllUsers();

      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  }

  // Function to delete a ride
  const deleteRide = (userId, rideId) => {
    const updatedUsers = usersWithRides.map((user) => {
      if (user.id === userId) {
        const updatedRides = user.rides.filter((ride) => ride.id !== rideId);
        return { ...user, rides: updatedRides };
      }
      return user;
    });
    setUsersWithRides(updatedUsers);
  };

  // Function to open modal
  const openModal = (user) => {
    setSelectedUser(user);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedUser(null);
  };
  const handleSignout = () => {
    Cookies.remove("Admin");
    window.location.reload();
  };
  // Function to filter users by name
  const filteredUsers = usersWithRides.filter((user) =>
    user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-gradient-to-r flex-1 flex flex-col h-[100vh] from-violet-200 to-pink-200 p-10">
        <div className="container mx-auto bg-white p-10 rounded-lg shadow-2xl ml-30">
          <div className="container mx-auto bg-white p-10 rounded-lg shadow-2xl ml-30">
            <div className="bg-white mx-auto mb-10">
              <h1 className="font-extrabold flex justify-center mb-10 px-7 text-green-950 text-4xl">
                Welcome, {user?.name}
              </h1>
              <div
                onClick={() => {
                  handleSignout();
                }}
                className="bg-red-500 p-2 max-w-[150px] cursor-pointer flex justify-center text-white rounded-lg mx-auto"
              >
                Logout
              </div>
            </div>
            <div className="mb-10 flex w-full items-center">
              <label htmlFor="search" className="sr-only">
                Search Users
              </label>
              <div className="relative w-full">
                <input
                  id="search"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 pl-10 w-full"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers?.map((user) => (
                  <React.Fragment key={user?._id}>
                    <tr key={user.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4">{user?.name}</td>
                      <td className="py-2 px-4">{user?.email}</td>
                      <td className="py-2 flex items-center justify-center px-4">
                        <button
                          onClick={() => {
                            deleteUser(user?._id);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mr-2"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                        <button
                          onClick={() => openModal(user?.email)}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <Modal
            isOpen={selectedUser !== null}
            onClose={closeModal}
            selectedUser={selectedUser}
          />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
