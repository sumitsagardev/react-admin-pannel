import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import back icon

const RegistrationPage = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          {/* Back Icon */}
          <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            className="text-secondary hover:text-primary mr-2"
          >
            <FaArrowLeft />
          </button>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-primary ml-2">Register</h2>
        </div>
        <p className="text-gray text-md font-semibold mb-4">
          Create a new account
        </p>

        <form>
          <div className="mb-6 relative">
            <input
              type="text"
              id="username"
              className="peer w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-secondary"
              placeholder="Username"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type="email"
              id="email"
              className="peer w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-secondary"
              placeholder="Email"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type="password"
              id="password"
              className="peer w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-secondary"
              placeholder="Password"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type="password"
              id="confirm-password"
              className="peer w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-secondary"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 border-gray-300 rounded focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <label htmlFor="terms" className="ml-2 text-primary text-sm">
              I accept the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
