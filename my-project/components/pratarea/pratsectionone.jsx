import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";



const pratsectionone = () => {
    return (
        <div className='p-14 md:p-20 lg:px-28 lg:py-10 xl:px-40 '>
            <div className='text-white flex items-center justify-center pt-16 md:pt-28 lg:pt-24 xl:pt-40'>
                <p className='text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold'>Pratice Areas</p>
            </div>
            <div className='text-white flex flex-col lg:flex-row items-center justify-center py-5 md:py-10 gap-2 md:gap-2 '>
        <div  className='flex items-center '>
        <Link href={`/`} >
            <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-light '>Home</p>
        </Link>

        <IoIosArrowForward className='font-light ' />
        </div>

       <div  className='flex items-center '>
       <Link href={`/praticearea`} >
            <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-light '>Pratice Areas</p>
        </Link>

        <IoIosArrowForward className='font-light ' />
       </div>
       
        </div>
        </div>
    )
}


export default pratsectionone