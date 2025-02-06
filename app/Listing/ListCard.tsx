"use client"
import Image from 'next/image';
import React from 'react';

interface cardDetails{
    image: string,
    title: string,
    facilities: string[]
    price: number,
    rating: string,
    reviews: string
}

const ListCard = ({ image, title, facilities, price, rating, reviews }: cardDetails) => {
  return (
    <div className="flex border rounded-lg overflow-hidden mx-auto py-[6.56px] px-[7.57px] mb-4 w-[392.44px] h-[116.26px] lg:w-[909px] lg:h-[231px] 2xl:w-full">
      <div className="flex w-full space-x-4">
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
          className="w-[101.89px] h-[101.89px] lg:w-[202px] lg:h-[202px] object-cover rounded-xl"
        />

        <div>
          <h3 className="text-[10px] font-semibold mb-2 lg:text-xl">{title}</h3>
          <p className="font-semibold text-[7.57px] lg:text-[15px]">
            Facilities
          </p>
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="text-[#A2A2A2] font-semibold text-[7px] lg:text-base"
            >
              {facility}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between items-end lg:w-[207px] h-[205px]">
        <div className="flex items-center">
          <div className="flex items-center flex-col">
            <span className="text-yellow-500 mr-1">{rating}</span>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          </div>
          <span className="bg-[#E1FFD7] rounded-3xl p-2 px-4"> 9.6 </span>
        </div>
        <div>
          <span className="text-lg font-bold">
            <span className="decoration-double line-through my-10">N</span>
            {price}
          </span>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white
         py-2 px-4 rounded-full w-[104px] h-[21px] text-[6px] font-semibold lg:w-full lg:h-[42px] lg:text-sm"
        >
          See booking options
        </button>
      </div>
    </div>
  );
};

export default ListCard;