import Image from "next/image";
import React from "react";

interface eventDetails{
  image: string,
  title: string,
  rating: string,
  reviews: string,
  location: string,
  facilities: string[],
  price: number
}
const EventCard = ({
  image,
  title,
  rating,
  reviews,
  location,
  facilities,
  price,
}:eventDetails) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-[396px] h-[381px] font-sans">
      {" "}
      {/* Fixed width */}
      <Image
      width={400}
      height={200}
        src={image}
        alt={title}
        className="w-[370.8px] h-[171.86px] object-cover rounded-t-lg mb-4"
      />
      <div className="flex flex-col flex-grow">
        {" "}
        {/* Ensure details take up space */}
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
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
        <div className="list-disc pl-5 text-sm text-gray-600 mb-4">
          {facilities.map((facility:string, index:number) => (
            <p key={index}>{facility}</p>
          ))}
        </div>
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


