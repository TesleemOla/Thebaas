"use client"
import React, { useState } from "react";
import Button from "./Button";
import RangeSlider from "./Slider";
import { redirect } from "next/navigation";

const FilterComponent = () => {
  const [price, setPrice] = useState([0,100000]);

  const [guestRating, setGuestRating] = useState("Any");
  const [popFilter, setPopFilter] = useState("None")

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPrice([Number(event.target.value), price[1]]);
  };
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    setPrice([price[0], Number(event.target.value)])
  }
    const handleChange = (event: Event, newValue: number | number[]) => {
      setPrice(newValue as number[]);
    };


  const handleGuestRatingChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setGuestRating(event.target.value);
  };
  const handlePopFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPopFilter(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[424px] hidden lg:block">
      <div className="bg-white rounded-lg p-6 shadow-md w-80">
        {" "}
        {/* Card container */}
        <h2 className="text-lg font-medium mb-4">Your Search</h2>
        {/* Event Type */}
        <div className="mb-4">
          <label
            htmlFor="eventType"
            className="block text-sm font-medium text-gray-700"
          >
            Event Type
          </label>
          <input
            type="text"
            id="eventType"
            className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Wedding"
          />
        </div>
        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Lagos"
          />
        </div>
        {/* Price Range */}
        <div className="mb-4">
          <label
            htmlFor="priceRange"
            className="block text-sm font-medium text-gray-700"
          >
            Price Range
          </label>
          <input
            type="text"
            id="priceRange"
            className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="#20k - #40k"
          />
        </div>
        {/* Rating */}
        <div className="mb-6">
          {" "}
          {/* Increased margin bottom */}
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="text"
            id="rating"
            className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Excellent"
          />
        </div>
        {/* Search Button */}
        <Button click={()=> redirect("/Listing")} details="search" moreStyles="rounded-xl w-full h-[42px]" />
      </div>
      <div>
        {" "}
        {/* Guest Rating */}
        <h3 className="text-lg font-medium my-5">Popular filters</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            {" "}
            {/* Any */}
            <input
              type="checkbox"
              id="any"
              value="Wedding"
              checked={popFilter === "Wedding"}
              onChange={handlePopFilterChange}
              className="mr-2"
            />
            <label htmlFor="any" className="text-sm font-medium text-gray-700">
              Wedding
            </label>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Excellent */}
            <input
              type="checkbox"
              id="Dinner"
              value="Dinner Parties"
              checked={popFilter === "Dinner"}
              onChange={handlePopFilterChange}
              className="mr-2"
            />
            <label
              htmlFor="Dinner"
              className="text-sm font-medium text-gray-700"
            >
              Dinner
            </label>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Very Good */}
            <input
              type="checkbox"
              id="Meeting"
              value="Meeting"
              checked={popFilter === "Meeting"}
              onChange={handlePopFilterChange}
              className="mr-2"
            />
            <label
              htmlFor="Meeting"
              className="text-sm font-medium text-gray-700"
            >
             Meeting
            </label>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Good */}
            <input
              type="checkbox"
              id="network"
              value="Network"
              checked={popFilter === "Network"}
              onChange={handlePopFilterChange}
              className="mr-2"
            />
            <label htmlFor="good" className="text-sm font-medium text-gray-700">
              Network
            </label>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="mb-4">
        {/* Price Range */}
        <h3 className="text-lg font-medium mb-2">Price Range</h3>

        <RangeSlider handleRangeChange={handleChange} value={price} />
        <div className="flex space-x-4">
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
              value={price[0]}
              max={10000}
              onChange={handleMinPriceChange}
              className="mt-1 p-2 border rounded-md w-2/3 focus:ring focus:ring-blue-300"
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
              value={price[1]}
              max={10000}
              onChange={handleMaxPriceChange}
              className="mt-1 p-2 border rounded-md w-2/3 focus:ring focus:ring-blue-300"
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
              type="checkbox"
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
              type="checkbox"
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
              type="checkbox"
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
              type="checkbox"
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
