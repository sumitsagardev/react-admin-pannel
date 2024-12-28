import React, { useState } from "react";
import { TfiDashboard } from "react-icons/tfi";
import { LuUsers } from "react-icons/lu";
import { RiChat1Line } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import { FaFile } from "react-icons/fa"; // Import FaFile from the correct icon set (FontAwesome)

function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  // Function to handle active state change
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full md:flex-[15] bg-primary text-heading">
      <div className="p-4 space-y-6">
        {/* Payment Gateway Section */}
        <div className="border-b pb-4">
          <div className="flex items-center space-x-2">
            <img
              src="src/assets/payment-gateway.png"
              alt="Payment Gateway"
              className="h-6 w-6"
            />
            <h1 className="text-sm font-medium">Payment Gateway</h1>
          </div>
        </div>

        {/* Dashboard Section */}
        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            activeItem === "dashboard" ? "text-primary-500" : "text-gray-500"
          }`}
          onClick={() => handleClick("dashboard")}
        >
          <TfiDashboard className="text-lg" />
          <h1 className="text-sm font-medium">Dashboard</h1>
        </div>

        {/* Components Section */}
        <div className="space-y-2">
          <h1 className="text-md opacity-55 font-semibold text-gray-400">
            COMPONENTS
          </h1>
          <div
            className={`flex items-center space-x-2 cursor-pointer ${
              activeItem === "users" ? "text-primary-500" : "text-gray-500"
            }`}
            onClick={() => handleClick("users")}
          >
            <LuUsers className="text-lg" />
            <h1 className="text-sm font-medium">Users</h1>
          </div>
        </div>

        {/* Extras Section */}
        <div className="space-y-4">
          <h1 className="text-md opacity-55 font-semibold text-gray-400">
            EXTRA
          </h1>
          <div className="space-y-2">
            {/* FAQs */}
            <div
              className={`flex items-center space-x-2 cursor-pointer ${
                activeItem === "faqs" ? "text-primary-500" : "text-gray-500"
              }`}
              onClick={() => handleClick("faqs")}
            >
              <RiChat1Line className="text-lg" />
              <li className="text-sm font-medium">FAQs</li>
            </div>

            {/* Privacy Policy */}
            <div
              className={`flex items-center space-x-2 cursor-pointer ${
                activeItem === "privacy" ? "text-primary-500" : "text-gray-500"
              }`}
              onClick={() => handleClick("privacy")}
            >
              <MdOutlinePolicy className="text-lg" />
              <li className="text-sm font-medium">Privacy Policy</li>
            </div>

            {/* Terms & Conditions */}
            <div
              className={`flex items-center space-x-2 cursor-pointer ${
                activeItem === "terms" ? "text-primary-500" : "text-gray-500"
              }`}
              onClick={() => handleClick("terms")}
            >
              <FaFile className="text-lg" />
              <li className="text-sm font-medium">Terms & Conditions</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
