"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  return (
    <div className="min-h-screen text-gray-800 p-6">
      {/* Header */}
      <div className="flex justify-center mb-20 mt-10">
        <h1 className="text-4xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
          CONTACT US
        </h1>
      </div>

      {/* Info */}
      <div className=" max-w-2xl mx-60 mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          WE ARE HERE FOR YOU
        </h2>
        <p className="text-gray-600">
          At <span className="font-semibold text-green-800">Forest Hotel</span>,
          we take our customers seriously. Do you have any enquiries, complaints,
          or requests? Please forward it to our support desk and we will get back
          to you as soon as possible.
        </p>
      </div>

      
      <h1 className="text-center text-3xl font-extrabold text-green-700">Enquiry Form</h1>

      <div className="flex justify-center items-start gap-10 px-4 mx-50 shadow-md">
        <div className="bg-white rounded-2xl p-6 w-full text-center pt-30">
          <h2 className="text-xl font-bold text-green-700 mb-4">
            Visit Us
          </h2>
          <p className="text-gray-700">Pokhara, Kaski, Hotel Forest</p>
          <p className="text-gray-700">Phone: +977 981123343</p>
          <p className="text-gray-700">Email: forest_hotel@gmail.com</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 w-full ">
          <form
          onSubmit={()=> toast.success("Form Submitted")}
          className="flex flex-col gap-4">
            <label className="text-sm font-semibold text-green-800">
              Name
            </label>
            <input
              type="text"
              className="border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="text-sm font-semibold text-green-800">
              Email
            </label>
            <input
              type="email"
              className="border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="text-sm font-semibold text-green-800">
              Message
            </label>
            <textarea
              rows={4}
              className="border border-green-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 w-50 flex justify-center mx-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
