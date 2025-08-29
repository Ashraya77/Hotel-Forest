import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='absolute top-20 left-40 overflow-hidden w-400 h-200 rounded-2xl flex items-center justify-center'>
        <img src="/gallery/11.jpeg" alt="" />
      </div>
      <div className='absolute top-100 left-150 text-center'> 
        <h1 className='text-white text-4xl font-extrabold'>Hotel Forest: Where Your Journey Comes Alive</h1>
        <h1 className='text-white text-1xl pt-5 pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, fugit!</h1>
        <Link className='bg-amber-400 p-2 rounded-3xl hover:bg-black hover:text-white' href="/gallery">
            Explore Gallery
        </Link>
      </div>
    </div>
  )
}

export default page