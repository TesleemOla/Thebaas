import EventCard from "./components/EventCard";
import InputRange from "./components/InputRange";


export default function Home() {
  return (
    <div className="container mx-auto flex h-fit my-10">
      <InputRange />
      <div className=" p-4 grid lg:grid-cols-2 justify-center gap-9">
        {eventData.map((item, i) => (
          <EventCard {...item} key={i} />
        ))}
      </div>
    </div>
  );
}


  const eventData = [
    {
      image: "/oniru.png", // Replace with actual image URL
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
      image: "/faster.png", // Replace with actual image URL
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
      image: "/portland.png", // Replace with actual image URL
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
      image: "/dreamy.png", // Replace with actual image URL
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



// export default App;