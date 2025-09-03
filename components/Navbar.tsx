"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const { user, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const notify = () => {
    toast.error("Please Login ");
  };

  const handleClick = () => {
    if (!user) {
      router.push("/login");
      notify();
    } else {
      router.push("/rooms");
    }
  };

  const profileClick = () => {
    router.push("/profile");
  };

  return (
    <nav
      className={`flex justify-between items-center p-5 px-65 sticky top-0 left-0 right-0 transition-colors duration-300 ${
        color
          ? "bg-green-950 text-white shadow-lg"
          : "bg-transparent text-black"
      } z-10`}
    >
      <div>
        <Link className="font-extrabold text-3xl" href="/">
          Hotel
        </Link>
      </div>

      <div className="flex gap-10 font-bold items-center">
        <Link className="" href="/">
          Home
        </Link>
        <Link className="" href="/about">
          About Us
        </Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </div>

      <div className="flex items-center pr-10">
        {user ? (
          <>
            <img
              src="1.jpg"
              alt="avatar"
              className="w-9 h-9 rounded-full mr-3"
              onClick={profileClick}
            />

            <button
              onClick={handleClick}
              className=" font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600"
            >
              Book Now
            </button>
          </>
        ) : (
          <>
            <Link
              className=" font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600 mr-3"
              href="/login"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className=" font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
