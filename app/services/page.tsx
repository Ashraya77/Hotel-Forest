import React from "react";

const page = () => {
  const services = [
    { id: 1, img: "/7.jpg", name: "BARBEQUE" },
    { id: 2, img: "/1.jpg", name: "TREKKING SUPPORT" },
    { id: 3, img: "/banner.jpg", name: "LODGING" },
    { id: 4, img: "/6.jpg", name: "CAT" },
    { id: 5, img: "/3.jpg", name: "GOOD ENVIRONMENT" },
    { id: 6, img: "/9.jpg", name: "NATURAL ENVIORNMENT" }
  ];
  return (
    <div>
      <div className="text-justify pt-25 pb-25 w-full pl-100  pr-100 bg-green-200">
        <h1 className="text-7xl font-extrabold">
          Unleash your potential <br /> of the journey with{" "}
          <span className="text-teal-400">
            {" "}
            <br /> our unmatched and <br /> finest services
          </span>{" "}
        </h1>
        <p className="py-10 text-2xl text-gray-500">
          Your Experience, Our Expertise, services that makes the difference
        </p>
      </div>

      <h1 className="text-2xl text-center font-extrabold p-5">
        Our Facilities
      </h1>

      <div className="flex flex-col gap-10 items-center ">
        {services.map((service) => (
          <div key={service.id} className="relative w-[1200] hover:scale-110 transition-transform duration-300">
            <img 
            className="w-full h-[600px] object-cover shadow-lg"
            src={service.img} alt="" />

            <div className="absolute bg-white bottom-0 left-1/2 -translate-x-1/2 px-20 py-3 shadow-md">
              <h1>{service.name}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white h-10">

      </div>
    </div>
  );
};

export default page;

{
  /* <div className="flex flex-col gap-10 items-center">
        {facilities.map((facility) => (
          <div key={facility.id} className="relative w-[1200px]">
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-md">
              <h1 className="text-2xl font-bold text-center">{facility.name}</h1>
            </div>
          </div>
        ))}
      </div> */
}
