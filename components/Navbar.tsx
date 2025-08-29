import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 px-60 sticky left-0 top-0 right-0 z-1'>
        <div>
            <Link className='font-extrabold text-3xl' href="/">
                Hotel
            </Link>
        </div>

        <div className='flex gap-10 font-bold items-center'>
            <Link className='' href="/">
                Home
            </Link>
            <Link className='' href="/about">
                About
            </Link>
            <Link href="/services">
                Services
            </Link>
            <Link href="/contact">
                Contact
            </Link>
            <Link href="/gallery">
                Gallery
            </Link>
        </div>

        <div className='flex items-center pr-10'>
            <Link className=' font-bold bg-teal-700 rounded-3xl p-2 px-5 hover:bg-teal-600' href="/login">
                Login
            </Link>
        </div>
    </nav>
  )
}

export default Navbar