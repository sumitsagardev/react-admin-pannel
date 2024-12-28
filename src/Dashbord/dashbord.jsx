import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSunny, MdOutlineAutorenew } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import Sidebar from "../components/Sidebar"; // Import Sidebar component

function Dashboard() {
  const [colorMode, setColorMode] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Profile dropdown state
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar visibility state
  const dropdownRef = useRef(null); // Reference for the dropdown menu

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
      <div className="flex flex-col md:flex-row min-h-screen">
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
                  {/* Show only the icon for the current theme */}
                  {colorMode === "dark" ? (
                    <IoMoon size={24} />
                  ) : colorMode === "auto" ? (
                    <MdOutlineAutorenew size={24} />
                  ) : (
                    <MdSunny size={24} />
                  )}
                </button>
                {/* Show all icons and names on hover */}
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ul className="py-2 text-sm">
                    {/* Light Theme Option */}
                    <li
                      className={`px-4 py-2 cursor-pointer flex items-center space-x-2 ${
                        colorMode === "light" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setColorMode("light")}
                    >
                      <MdSunny className="mr-2" />
                      <span>Light</span>
                    </li>

                    {/* Dark Theme Option */}
                    <li
                      className={`px-4 py-2 cursor-pointer flex items-center space-x-2 ${
                        colorMode === "dark" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setColorMode("dark")}
                    >
                      <IoMoon className="mr-2" />
                      <span>Dark</span>
                    </li>

                    {/* Auto Theme Option */}
                    <li
                      className={`px-4 py-2 cursor-pointer flex items-center space-x-2 ${
                        colorMode === "auto" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setColorMode("auto")}
                    >
                      <MdOutlineAutorenew className="mr-2" />
                      <span>Auto</span>
                    </li>
                  </ul>
                </div>
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
          <div>Page Content</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
