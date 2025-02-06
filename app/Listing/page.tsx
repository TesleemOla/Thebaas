
import React from 'react'
import ListCard from './ListCard'
import FilterComponent from '../components/InputRange'
import { Pagination } from '@mui/material'

const ListingPage = () => {
  return (
    <main>
   <div className="container mx-auto pt-[252px] lg:pt-[50px] px-[12px] pb-[10px] flex">
    <FilterComponent />
    <div className="flex flex-col gap-[23px]">
      {eventCenterData.map((eventCenter, index) => (
        <ListCard key={index} {...eventCenter} />
      ))}
      </div>
    </div>
    {/* <Pagination /> */}
    </main>
  )
}

export default ListingPage


  const eventCenterData = [
    {
      image: "/oniru.png", // Replace with your image path
      title: "Oniru Event Center",
      facilities: [
        "Free parking space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 39, // Example price
      rating: "Excellent",
      reviews: "1,920",
    },
    {
      image: "/faster.png", 
      title: "Oniru Event Center",
      facilities: [
        "Free parking space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 39, 
      rating: "Excellent",
      reviews: "1,920",
    },
    {
      image: "/portland.png", 
      title: "Oniru Event Center",
      facilities: [
        "Free parking space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 39, 
      rating: "Excellent",
      reviews: "1,920",
    },
    {
      image: "/dreamy.png", 
      title: "Oniru Event Center",
      facilities: [
        "Free parking space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 39, // Example price
      rating: "Excellent",
      reviews: "1,920",
    },

  ];

