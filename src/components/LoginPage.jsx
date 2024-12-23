import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Login Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Login</h2>
          <p className="text-gray text-md font-semibold mb-4">
            Sign In to your account
          </p>
          <form>
            <div className="mb-6 relative">
              <input
                type="text"
                id="username"
                className="peer w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-200"
              >
                Username
              </label>
            </div>

            <div className="mb-6 relative">
              <input
                type="password"
                id="password"
                className="peer w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-200"
              >
                Password
              </label>
            </div>

            <div className="flex justify-between items-center mb-4">
              <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                Login
              </button>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        {/* Sign Up Section */}
        <div className="w-full md:w-1/2 bg-secondary text-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Sign up</h2>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-600">
            Register Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
