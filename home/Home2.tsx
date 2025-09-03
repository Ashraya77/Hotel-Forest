import Link from "next/link";
import React from "react";

const Home2 = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-justify">
     
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        <div className="border-l-4 border-green-700 pl-6">
          <h2 className="text-3xl font-extrabold mb-4">Luxury Refined</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            possimus, maxime atque repellat esse error blanditiis doloribus
            quam? Accusamus voluptates sint tenetur expedita? Neque ipsum
            blanditiis sunt quis necessitatibus corrupti?
          </p>
          <Link
            href="/rooms"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            Explore
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/room1.webp"
            alt="Luxury Room"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
       

        {/* Text */}
        <div className="border-l-4 border-green-700 pl-6">
          <h2 className="text-3xl font-extrabold mb-4">Experience Elegance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            possimus, maxime atque repellat esse error blanditiis doloribus
            quam? Accusamus voluptates sint tenetur expedita? Neque ipsum
            blanditiis sunt quis necessitatibus corrupti?
          </p>
          <Link
            href="/rooms"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            Explore
          </Link>
        </div>

         {/* Image */}
        <div className="flex justify-center order-1 ">
          <img
            src="/banner.jpg"
            alt="Luxury Banner"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;
