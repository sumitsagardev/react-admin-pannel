import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Login</h2>
          <p className="text-gray text-md font-semibold mb-4">
            Sign In to your account
          </p>
          <form>
            <div className="mb-6">
              <input
                type="text"
                value={usernameValue}
                onChange={handleUsernameChange}
                placeholder="Username"
                className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                value={passwordValue}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
              >
                Login
              </button>
              <Link
                to="/forgot-password"
                className="text-blue-500 text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-secondary text-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Sign up</h2>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Link
            to="/register"
            className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-600"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
