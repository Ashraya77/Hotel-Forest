"use client";
import React, { useState } from "react";

const Home3 = () => {
  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      city: "Pokhara",
      review:
        "The trip was well-organized, and I loved how friendly everyone was. Definitely coming back!",
      img: "/1.jpg",
    },
    {
      id: 2,
      name: "Sofia Martinez",
      city: "Kathmandu",
      review:
        "Beautiful views and unforgettable experiences. I enjoyed every single moment.",
      img: "/2.jpg",
    },
    {
      id: 3,
      name: "Liam Johnson",
      city: "Chitwan",
      review:
        "A perfect blend of adventure and relaxation. Highly recommend to travelers of all ages.",
      img: "/3.jpg",
    },
    {
      id: 4,
      name: "Maya Thapa",
      city: "Bhaktapur",
      review:
        "The cultural richness of this place was amazing. I felt so connected to the local traditions.",
      img: "/4.jpg",
    },
    {
      id: 5,
      name: "Ethan Wilson",
      city: "Butwal",
      review:
        "Everything from food to transport was smooth. Super impressed with the planning.",
      img: "/5.jpg",
    },
    {
      id: 6,
      name: "Isabella Rossi",
      city: "Dharan",
      review:
        "The people here made me feel so welcome. It’s one of the best trips I’ve ever had.",
      img: "/6.jpg",
    },
    {
      id: 7,
      name: "Noah Kim",
      city: "Lalitpur",
      review:
        "Amazing service, comfortable stay, and wonderful memories. Couldn’t ask for more!",
      img: "/7.jpg",
    },
    {
      id: 8,
      name: "Aanya Patel",
      city: "Janakpur",
      review:
        "Traveling here was a dream come true. The landscapes were absolutely stunning.",
      img: "/8.jpg",
    },
    {
      id: 9,
      name: "Oliver Brown",
      city: "Biratnagar",
      review:
        "I was impressed with the attention to detail. Every day felt like a new adventure.",
      img: "/9.jpg",
    },
    {
      id: 10,
      name: "Hana Suzuki",
      city: "Hetauda",
      review:
        "Such a refreshing experience! I met wonderful people and enjoyed every bit of it.",
      img: "/10.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }

  function handleBackClick() {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }

  return (
    <div className="flex justify-center items-center mt-20 mb-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">What People Say</h1>
        <h3 className="text-gray-500 mb-6">
          ({index + 1} of {reviews.length})
        </h3>

        <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
          “{reviews[index].review}”
        </p>

        <div className="flex justify-center items-center mb-6">
          <img
            className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-gray-200"
            src={reviews[index].img}
            alt={reviews[index].name}
          />
          <h2 className="px-4 font-semibold text-gray-800">
            <span className="italic">{reviews[index].name}</span>{" "}
            <span className="text-gray-500">from {reviews[index].city}</span>
          </h2>
        </div>

        <div className="flex justify-center gap-6">
          <button
            className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-xl hover:bg-gray-300 transition"
            onClick={handleBackClick}
          >
             Back
          </button>

          <button
            className="bg-green-700 text-white font-medium px-4 py-2 rounded-xl hover:bg-blue-600 transition"
            onClick={handleClick}
          >
            Next 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home3;
