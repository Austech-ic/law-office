import React from 'react'
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";

const Testimonialcomp = () => {
  return (
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40'>
    <div className='text-white flex items-center justify-center pt-16 md:pt-28 lg:pt-24 xl:pt-40'>
        <p className='text-xl md:text-4xl lg:text-4xl xl:text-5xl '>Testimonial</p>
    </div>
    <div className='text-white flex flex-col lg:flex-row items-center justify-center py-5 md:py-10 gap-1 md:gap-2 '>
        <Link href={`/`} >
            <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-light '>Home</p>
        </Link>

        <IoIosArrowForward className='font-light ' />
        <Link href={`/`} >
            <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-light '>Page</p>
        </Link>

        <IoIosArrowForward className='font-light ' />

        <Link href={`/testimonialpage`} >
            <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-light '>Testimonials</p>
        </Link>

        
    </div>
</div>
  )
}

export default Testimonialcomp