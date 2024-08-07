import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { RxSlash } from 'react-icons/rx'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";
import Lady from '../../public/img/ud.jpeg'
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'


const sectone = () => {
  return (
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40'>
        <div className='text-white flex flex-col lg:flex-row items-center justify-center py-5 md:py-10 gap-2 md:gap-2 '>
        <div  className='flex items-center '>
        <Link href={`/`} >
            <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-light '>Home</p>
        </Link>
        

        <IoIosArrowForward className='font-light ' />
        </div>

       <div  className='flex items-center '>
       <Link href={`/attorneyprofile`} >
            <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-light '>Attorney Profile</p>
        </Link>

        <IoIosArrowForward className='font-light ' />
       </div>

        </div>
        <div className='text-white flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-8 xl:gap-16 mt-10 md:mt-20'>
      <div className='flex-1 flex flex-col gap-2 md:gap-5 lg:gap-2 xl:gap-2'>
        <div className='flex items-center gap-2 md:gap-4'>
          <div className='border border-orange border-l border-solid w-[5%]'></div>
        <p className='text-orange text-sm md:text-2xl lg:text-base xl:text-lg'>Welcome to</p>
        </div>
        
        <p className='text-xl md:text-5xl lg:text-3xl xl:text-4xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight '>Law Office Of <br className='hidden md:block' /> Alpha Advocate Law Group PC</p>
        <p className='text-sm md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>At Alpha Advocate Law Group PC, we are dedicated,experienced and committed to providing exceptional legal representation to our clients. With a comprehensive understanding of the law and a passion for justice, we strive to protect the rights and interests of individuals and businesses across a wide range of practice areas.
</p>
        <div className='flex items-center gap-2 md:gap-4 py-2 '>
                            <BsInstagram className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <FaFacebookF className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <BsTwitter className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <BsPinterest className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                        </div>
        <div className="lg:mt-3 xl:mt-8">
        <button className='bg-orange text-white text-xs md:text-xl lg:text-base xl:text-lg px-[15px] py-[10px] md:px-8 md:py-4'>Get An Appointment</button>
      </div>
      </div>
      <div className='flex-1'>
       <Image src={Lady} alt='lady-img' style={{ width: '100%',height: '100%', objectFit: 'fit' }} />
      </div>
    </div>
        </div>
  )
}

export default sectone