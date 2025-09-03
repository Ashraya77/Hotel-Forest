import Image from "next/image";
import Link from "next/link";

const rooms = [
  { id: 1, name: "Room 1", title: "Cozy room", image1: "/room1.webp", image2: "/room1.webp", price: "Rs 100" },
  { id: 2, name: "Room 2", title: "Spacious room", image1: "/room2.webp",image2: "/room2.webp", price:"Rs 200" },
  { id: 3, name: "Room 3", title: "Luxury suite", image1: "/room3.webp",image2: "/room3.webp", price:"Rs 300" },
];

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 mx-50 ">
      {rooms.map((room) => (

         <div key={room.id} className="p-5 border-stone-200 rounded-xl shadow-lg flex h-100 overflow-hidden hover:scale-110 transition-transform duration-300 pl-5">
          <div className="h-auto w-210 p-20">
          <h2 className="text-3xl font-semibold mt-3 text-center">{room.name}</h2>
          <p className="text-gray-600 text-center">{room.title}</p>
          <p className="text-gray-600 text-center">{room.price}</p>

          <div className="flex justify-center pt-10 gap-5">
            <Link 
            href={`/rooms/${room.id}`}
            className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg "
          >
            Book Now
          </Link>
            <Link 
            href={`/rooms/${room.id}`}
            className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg"
          >
            View Details
          </Link>
          </div>
          
          </div>

          <div className="flex justify-end p-5 ">
            <Image 
            src={room.image1} 
            alt={room.name} 
            width={400} 
            height={250} 
            className="object-fit h-80 w-300 overflow-hidden pr-5 rounded-2xl" 
          />
            <Image 
            src={room.image2} 
            alt={room.name} 
            width={400} 
            height={250} 
            className="object-fit h-80 w-300 overflow-hidden rounded-2xl "
          />
          </div>
          
        </div>
       
      ))}
    </div>
  );
}
