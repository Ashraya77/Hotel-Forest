import Link from 'next/link'
import React from 'react'
import DatePicker1 from './DatePicker1'

const Book = () => {
  return (
    <div className="-mt-0 top-10 left-0 relative z-1 w-350 mx-auto">
      <div className="bg-teal-500 shadow-xl rounded-2xl p-6 text-center justify-between px-20 flex items-center"  >
        <DatePicker1/>
        <div className=''>
            <Link className='bg-amber-300 p-2 rounded-2xl hover:bg-amber-500 flex items-center' href="/booknow">
            Book Now
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Book
