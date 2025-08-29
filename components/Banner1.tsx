import React from 'react';
import BannerCard from './BannerCard';
import Link from 'next/link';
function Banner1() {
  return (
    <div className="flex items-center px-4 bg-stone-100 lg:px-24">
      <img className='absolute top-0 left-0 right-0 z-0 w-full overflow-hidden h-220' src="banner2.jpg" alt="" />
      <div className="flex flex-col items-center justify-between w-full gap-12 py-24 md:flex-row pl-40">
        {/* Left Side */}
        <div className="h-full space-y-8 md:w-1/2">
          <h2 className="text-4xl font-bold leading-snug sm:text-5xl text-zinc-800 relative">
            Get Best Experiences <br />
            <span className="text-teal-800">for your stay here</span>
          </h2>
          <p className="md:w-4/5 text-zinc-600 relative">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci necessitatibus <br /> eveniet fugit unde, in id looking for the next read, we make it easy and affordable.
          </p>

          {/* Search bar */}
          <div>
           <Link href="/all-books" className='relative'  >
            <button className="px-6 py-2 font-semibold text-white transition bg-teal-800 cursor-pointer hover:bg-black rounded-xl">
                Book Now
            </button> 
           </Link>
           
          </div>
        </div>

        {/* Right Side - Banner Card */}
        <div className='pr-50 relative z-0'>
            <h1 className='text-2xl text-white text-center font-extrabold relative'>OUR GALLERY</h1>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner1;