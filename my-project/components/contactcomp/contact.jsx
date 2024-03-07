import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";

const Contact = () => {
    return (
        <div className='p-14 md:p-20 lg:px-28 lg:py-10 xl:px-40 '>
            <div className='text-white flex items-center justify-center pt-16 md:pt-28 lg:pt-24 xl:pt-40'>
                <p className='text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold'>Contact Us</p>
            </div>
            <div className='text-white flex flex-col lg:flex-row items-center justify-center py-5 md:py-10 gap-1 md:gap-2 '>
                <Link href={`/`} >
                    <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-light '>Home</p>
                </Link>

                <IoIosArrowForward className='font-light ' />

                <Link href={`/attorney`} >
                    <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-light '>Contact Us</p>
                </Link>
            </div>
        </div>
    )
}

export default Contact