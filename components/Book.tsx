import Link from 'next/link'
import React from 'react'

const Book = () => {
  return (
    <div className="-mt-10 relative z-10 w-350 mx-auto">
      <div className="bg-teal-500 shadow-xl rounded-2xl p-6 text-center flex justify-between px-20" >
        <h2 className="text-2xl font-semibold">Booking Datepicker here</h2>
        <div className=''>
            <Link className='bg-amber-300 p-2 rounded-2xl hover:bg-amber-500' href="/about">
            Check Availability
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Book
