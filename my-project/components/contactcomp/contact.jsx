import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";

const Contact = () => {
    return (
        <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40'>
            <div className='text-white flex items-center justify-center pt-16 md:pt-28 lg:pt-24 xl:pt-40'>
                <p className='text-2xl md:text-5xl lg:text-4xl xl:text-5xl'>Contact Us</p>
            </div>
            <div className='text-white flex items-center justify-center py-3 md:py-5 lg:py-3 gap-1 md:gap-2'>
                <Link href={`/`} >
                    <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-light '>Home</p>
                </Link>

                <IoIosArrowForward className='font-light ' />

                <Link href={`/attorney`} >
                    <p className='text-xs md:text-2xl lg:text-lg xl:text-xl font-light '>Contact Us</p>
                </Link>
            </div>
        </div>
    )
}

export default Contact