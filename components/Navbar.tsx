"use client"
import Link from 'next/link'
import React, { useState , useEffect} from 'react'

const Navbar = () => {
    const [color, setColor] = useState(false)

    useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 100) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)
   
  }, [])

  return (
    <nav className={`flex justify-between items-center p-5 px-60 sticky top-0 left-0 right-0 transition-colors duration-300 ${color ? 'bg-black text-white shadow-lg' : 'bg-transparent text-black'
      } z-10`}>
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