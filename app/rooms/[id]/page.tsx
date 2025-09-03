"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


interface Rooms {

    name: string;
    title: string;
    image1: string;
    image2: string;
    price: string;
    desc: string;
}

const rooms: Record<string, Rooms> = {
  1: {
    name: "Room 1",
    title: "Cozy room",
    image1: "/room1.webp",
    image2: "/room1.webp",
    price: "Rs 140",
    desc: "The Standard Forest View Room is a warm and welcoming retreat designed for travelers who value both comfort and simplicity. With a queen-sized bed, soft lighting, and modern amenities, this room offers the perfect base to unwind after a long day of exploring. Large windows frame calming views of the surrounding greenery, bringing a sense of peace and tranquility indoors.",
  },
  2: {
    name: "Room 2",
    title: "Spacious room",
    image1: "/room2.webp",
    image2: "/room2.webp",
    price: "Rs 200",
    desc: "Our Deluxe Twin Room is ideal for friends or family who prefer separate beds without compromising on style. Bright and spacious, the room features two plush single beds, a private bathroom, and earthy décor inspired by the natural beauty outside. With plenty of daylight and fresh air, it’s the perfect space to relax and recharge.",
  },
  3: {
    name: "Room 3",
    title: "Luxury suite",
    image1: "/room3.webp",
    image2: "/room3.webp",
    price: "Rs 300",
    desc: "For those seeking a little more luxury, the Superior King Room provides the perfect blend of elegance and comfort. The centerpiece is a soft king-sized bed complemented by warm wooden finishes, a private balcony, and sweeping views of the forest. Whether you’re enjoying a quiet evening or catching the morning sunrise, this room offers a memorable stay.",
  },
};

export default function Page() {
  const { id } = useParams();
  const room = rooms[id as keyof typeof rooms];

  if (!room) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Room not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 h-150">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-6">
            <h1 className="text-3xl font-bold text-gray-800">{room.name}</h1>
            <p className="mt-2 text-lg text-gray-600">{room.title}</p>
            <p className="mt-3 text-xl font-semibold text-green-700">
              {room.price}
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">{room.desc}</p>

            <div className="mt-6">
              <button className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-96 md:h-full">
            <Image
              src={room.image1}
              alt={room.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
