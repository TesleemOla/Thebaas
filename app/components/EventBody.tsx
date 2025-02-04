import React from "react";

const EventCard = ({
  image,
  title,
  rating,
  reviews,
  location,
  facilities,
  price,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-80 font-sans">
      {" "}
      {/* Fixed width */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-lg mb-4"
      />
      <div className="flex flex-col flex-grow">
        {" "}
        {/* Ensure details take up space */}
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          {" "}
          {/* Rating and price */}
          <div className="flex items-center">
            <span className="font-bold text-base mr-1">{rating}</span>
            <span className="text-sm text-gray-600">({reviews} reviews)</span>
          </div>
          {price && <span className="text-lg font-bold">#{price}</span>}{" "}
          {/* Conditionally render price */}
        </div>
        <p className="text-sm text-gray-600 mb-3">{location}</p>
        <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
          {facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-auto">
          {" "}
          {/* Push button to bottom */}
          See booking options
        </button>
      </div>
    </div>
  );
};

export default EventCard;


