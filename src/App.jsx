import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Registration Page Route */}
        <Route path="/register" element={<RegistrationPage />} />

        {/* Forgot Password Page Route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
