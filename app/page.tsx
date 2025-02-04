import EventCard from "./components/EventBody";
import InputRange from "./components/InputRange";


export default function Home() {
  return (
    <div>
      The bass
      <InputRange />
      <div className="container mx-auto p-4 flex gap-4">
      {eventData.map((item,i)=><EventCard {...item} key={i} />)}
      </div>
    </div>
  );
}


  const eventData = [
    {
      image: "event_center.jpg", // Replace with actual image URL
      title: "Oniru Event Center",
      rating: "9.2",
      reviews: "832",
      location: "0.4 km from Oniru Beach",
      facilities: [
        "Free packing space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 35, // Add price
    },
    {
      image: "event_center.jpg", // Replace with actual image URL
      title: "Oniru Event Center",
      rating: "9.2",
      reviews: "832",
      location: "0.4 km from Oniru Beach",
      facilities: [
        "Free packing space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 35,
    },
    {
      image: "event_center.jpg", // Replace with actual image URL
      title: "Oniru Event Center",
      rating: "9.2",
      reviews: "832",
      location: "0.4 km from Oniru Beach",
      facilities: [
        "Free packing space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 35,
    },
    {
      image: "event_center.jpg", // Replace with actual image URL
      title: "Oniru Event Center",
      rating: "9.2",
      reviews: "832",
      location: "0.4 km from Oniru Beach",
      facilities: [
        "Free packing space",
        "Changing Room",
        "Toilet",
        "1000 Seat and Table",
        "Air-Condition",
        "Audio-Visual Equipment",
      ],
      price: 35,
    },
  ];

//   return (
//     <div className="container mx-auto p-4 flex gap-4">
//       {" "}
//       {/* Center container and add gap */}
//       <EventCard {...eventData} />
//       <EventCard {...eventData} /> {/* Render another card */}
//     </div>
//   );
// };

// export default App;