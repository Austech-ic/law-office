import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import Sectone from '@/components/attorney/sectone'
import Sectwo from '@/components/attorney/sectwo'
import React from 'react'
import Footer from '@/components/website/footer/footer'
import Contact from '@/components/website/contact/contact'

const Page = () => {
  return (
    <div>
      <div className='bg-green '>
      <Header />
      {/* <Navbar /> */}
      <Sectone />
    </div>
    <Sectwo />
    <Contact />
    <Footer />
    </div>
  )
}

export default Page