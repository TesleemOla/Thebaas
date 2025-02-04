"use client"
import React, { useState } from "react";

const FilterComponent = () => {
  const [minPrice, setMinPrice] = useState(123);
  const [maxPrice, setMaxPrice] = useState(123);
  const [guestRating, setGuestRating] = useState("Any");

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleGuestRatingChange = (event) => {
    setGuestRating(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {" "}
      {/* Container */}
      <div className="mb-4">
        {" "}
        {/* Price Range */}
        <h3 className="text-lg font-medium mb-2">Price Range</h3>
        <div className="flex space-x-4">
          {" "}
          {/* Input Group */}
          <div className="w-1/2">
            {" "}
            {/* Min Price */}
            <label
              htmlFor="min-price"
              className="block text-sm font-medium text-gray-700"
            >
              Min Price
            </label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="w-1/2">
            {" "}
            {/* Max Price */}
            <label
              htmlFor="max-price"
              className="block text-sm font-medium text-gray-700"
            >
              Max Price
            </label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
      <div>
        {" "}
        {/* Guest Rating */}
        <h3 className="text-lg font-medium mb-2">Guest Rating</h3>
        <div className="space-y-2">
          {" "}
          {/* Radio Group */}
          <div className="flex items-center">
            {" "}
            {/* Any */}
            <input
              type="radio"
              id="any"
              value="Any"
              checked={guestRating === "Any"}
              onChange={handleGuestRatingChange}
              className="mr-2"
            />
            <label htmlFor="any" className="text-sm font-medium text-gray-700">
              Any
            </label>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Excellent */}
            <input
              type="radio"
              id="excellent"
              value="Excellent"
              checked={guestRating === "Excellent"}
              onChange={handleGuestRatingChange}
              className="mr-2"
            />
            <label
              htmlFor="excellent"
              className="text-sm font-medium text-gray-700"
            >
              Excellent
            </label>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Very Good */}
            <input
              type="radio"
              id="very-good"
              value="Very good"
              checked={guestRating === "Very good"}
              onChange={handleGuestRatingChange}
              className="mr-2"
            />
            <label
              htmlFor="very-good"
              className="text-sm font-medium text-gray-700"
            >
              Very good
            </label>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Good */}
            <input
              type="radio"
              id="good"
              value="Good"
              checked={guestRating === "Good"}
              onChange={handleGuestRatingChange}
              className="mr-2"
            />
            <label htmlFor="good" className="text-sm font-medium text-gray-700">
              Good
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
