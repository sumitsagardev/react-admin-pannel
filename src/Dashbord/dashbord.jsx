import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSunny, MdOutlineAutorenew } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import { Bar } from "react-chartjs-2"; // Import Bar chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Sidebar from "../components/Sidebar"; // Import Sidebar component

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [colorMode, setColorMode] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Profile dropdown state
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar visibility state
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  const cardData = [
    {
      title: "Users",
      value: "26K",
      percentageChange: -12.4,
      color: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$8K",
      percentageChange: 5.6,
      color: "bg-green-500",
    },
    {
      title: "Orders",
      value: "1.2K",
      percentageChange: -3.2,
      color: "bg-yellow-500",
    },
    {
      title: "Visits",
      value: "15K",
      percentageChange: 7.8,
      color: "bg-red-500",
    },
  ];

  // Chart data
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Expenses",
        data: [8000, 15000, 2000, 4000, 18000, 25000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue and Expenses",
      },
    },
  };

  // Toggle the profile dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown if click is outside
      }
    };

    // Listen for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="flex  flex-col md:flex-row min-h-screen">
        {/* Sidebar Component - Visible/Hidden based on state */}
        <Sidebar isVisible={isSidebarVisible} />

        {/* Main Content */}
        <div
          className={`w-full ${
            isSidebarVisible ? "md:flex-[85]" : "w-full"
          } bg-gray-100 p-4`}
        >
          {/* Header */}
          <header className="sticky top-0 bg-white border-b mb-4 p-4 flex items-center justify-between">
            {/* Sidebar Toggle and Greeting */}
            <div className="flex items-center gap-2">
              {/* Menu Icon to toggle sidebar visibility */}
              <AiOutlineMenu
                size={24}
                className="text-gray-500 cursor-pointer"
                onClick={toggleSidebar}
              />
              <span className="text-gray-500 text-md">Hello Admin 👋</span>
            </div>

            {/* Notification Icon and Theme Dropdown */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Dropdown */}
              <div className="relative group">
                {/* Add 'group' class for hover effect */}
                <button
                  onClick={() => {
                    // Toggle between themes when clicked
                    const nextMode =
                      colorMode === "light"
                        ? "dark"
                        : colorMode === "dark"
                        ? "auto"
                        : "light";
                    setColorMode(nextMode); // Set the new theme
                  }}
                  className="flex items-center text-gray-500"
                >
                  {colorMode === "dark" ? (
                    <IoMoon size={24} />
                  ) : (
                    <MdSunny size={24} />
                  )}
                </button>
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <FaUserCircle size={24} className="text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef} // Ref added here
                    className="absolute right-0 mt-2 w-48 bg-white border shadow-md rounded-md"
                  >
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Profile
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Change Password
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-lg shadow-lg text-white ${card.color}`}
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-2xl">{card.value}</p>
                  <p
                    className={`text-sm ${
                      card.percentageChange > 0
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {card.percentageChange}% Change
                  </p>
                </div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Performance Chart</h2>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
