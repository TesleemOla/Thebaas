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
    <div className="rounded-lg py-4 w-[370.8px] h-fit font-sans container mx-auto">
      <Image
        width={400}
        height={200}
        src={image}
        alt={title}
        className="w-[370.8px] h-[171.86px] object-cover rounded-t-lg mb-4"
      />
      <div className="flex">
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-black">{title}</h3>

          <p className="text-sm text-gray-600">{location}</p>

          <div className="text-xs font-semibold space-y-1 text-[#A2A2A2]  mb-4">
            <p className="text-sm font-semibold text-black">Facilities</p>
            {facilities.map((facility: string, index: number) => (
              <p key={index}>{facility}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start space-y-10 items-end">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col place-self-end">
              <span className="text-[#0166FF] font-semibold text-xs">
                Very Good
              </span>
              <span className="text-[10px] text-[#A2A2A2] ">
                {reviews} reviews
              </span>
            </div>
            <span className="font-bold text-base w-[54.03px] h-[32.02px] bg-[#E1EAFC] rounded-2xl p-1 px-4">
              {rating}
            </span>
          </div>
          <div className="mt-20">
            {price && (
              <span className="text-lg font-bold self-baseline">
                <span className="decoration-double line-through my-10">N</span>
                {price}
              </span>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-xs py-[11.08px] px-[33.06px] rounded-full justify-self-end mt-auto">
            See booking options
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;


