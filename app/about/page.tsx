"use client"
import React from "react"

const About = () => {
  return (
    <div className="px-10 md:px-40 py-20 bg-white text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">
          About Hotel Forest
        </h1>
        <p className="text-lg text-gray-600">
          A place where comfort meets nature, and every stay feels like home.
        </p>
      </div>

      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/gallery/11.jpeg"
            alt="Hotel Forest front view"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            Nestled in the heart of nature, Hotel Forest was built with one idea
            in mind: to give travelers a place where they can breathe deeply,
            recharge, and feel inspired. Whether you’re here for a weekend
            escape, a family holiday, or a business trip, we make sure your
            experience is unforgettable.
          </p>
          <p className="leading-relaxed text-gray-700">
            With cozy rooms, fresh local cuisine, and views that remind you of
            life’s beauty, Hotel Forest is more than a stay—it’s a journey.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Comfort</h3>
            <p className="text-gray-600">
              From soft beds to warm lighting, we make sure every detail adds to
              your relaxation.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Nature</h3>
            <p className="text-gray-600">
              Surrounded by forests and fresh air, our hotel brings you closer
              to the beauty of the outdoors.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Hospitality</h3>
            <p className="text-gray-600">
              Our staff treats every guest like family, making your stay warm
              and memorable.
            </p>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Come Stay With Us
        </h2>
        <p className="text-gray-700 mb-6">
          Your adventure starts here. Whether it’s peace, fun, or inspiration
          you’re looking for—Hotel Forest has it all.
        </p>
        <a
          href="/gallery"
          className="bg-green-700 text-white px-6 py-3 rounded-3xl font-medium hover:bg-green-900 transition"
        >
          Explore Our Gallery
        </a>
      </div>
    </div>
  )
}

export default About
