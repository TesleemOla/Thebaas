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
    <div className="rounded-lg p-4 w-[396px] h-fit font-sans">
      {" "}
      {/* Fixed width */}
      <Image
        width={400}
        height={200}
        src={image}
        alt={title}
        className="w-[370.8px] h-[171.86px] object-cover rounded-t-lg mb-4"
      />
      <div className="flex">
        <div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
            <div className="flex items-center justify-between mb-2">
              {" "}
              {/* Rating and price */}
            </div>
            <p className="text-sm text-gray-600 mb-3">{location}</p>

            <div className="text-sm text-gray-600 mb-4">
              <p className="text-sm font-semibold text-black">Facilities</p>
              {facilities.map((facility: string, index: number) => (
                <p key={index}>{facility}</p>
              ))}
            </div>
          </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-end">
              <span className="font-bold text-base mr-1">{rating}</span>
              <span className="text-sm text-gray-600">({reviews} reviews)</span>
            </div>
            <div>
            {price && (
              <span className="text-lg font-bold self-center justify-self-end">
                <span className="decoration-double line-through">N</span>
                {price}
              </span>
            )}{" "}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full self-end mt-auto">
              See booking options
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default EventCard;


