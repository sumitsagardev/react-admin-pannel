import React from "react";

const Card = ({ title, value, percentageChange }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
      <p
        className={`text-sm ${
          percentageChange >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentageChange >= 0 ? "▲" : "▼"} {Math.abs(percentageChange)}%
      </p>
    </div>
  );
};

export default Card;
