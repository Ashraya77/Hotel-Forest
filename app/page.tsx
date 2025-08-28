import Book from '@/components/Book'
import Gallery from '@/components/Gallery'
import Banner1 from '@/components/Banner1'
import React from 'react'
import Home1 from '@/home/Home1'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
<Banner1/>
      <Book/>
    <Home1/>
<Footer/>
    </div>
  )
}

export default page