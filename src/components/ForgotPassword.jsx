import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import back icon

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // For navigation

  const handleSendOtp = (event) => {
    event.preventDefault();

    // Validation: Check if the email field is empty or invalid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    if (!email) {
      setError("Email is required.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear errors and simulate OTP sent action
    setError("");
    setOtpSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        {/* Heading with Back Button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            className="flex items-center text-sm text-secondary hover:text-primary"
          >
            <FaArrowLeft className="mr-2" />
          </button>
          <h2 className="text-2xl font-bold text-secondary ml-16 flex-1">
            Forgot Password
          </h2>
        </div>

        <form onSubmit={handleSendOtp}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full py-2 px-3 border-2 ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500 rounded-md`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
          >
            Send OTP
          </button>
        </form>
        {otpSent && (
          <p className="mt-4 text-green-600 text-center">
            OTP has been sent to <span className="font-bold">{email}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
