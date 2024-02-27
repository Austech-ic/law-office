import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/img/Logo.png'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";


const Header = () => {
  return (
    <div className='p-5 md:px-10 lg:px-28 xl:px-40  flex flex-col md:flex-row  gap-y-2 justify-between'>
      <div className=' '>
        <Image src={Logo} alt='logo-img' className='w-[30%] md:w-[50%] lg:w-[40%] xl:w-[50%]' />
      </div>

      <div className=' flex flex-row lg:items-center gap-y-1 gap-x-2 lg:gap-x-4'>
        <div className='flex items-center gap-2'>
        <IoCallOutline  className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] '/>
        <div>
          <p className='text-orange text-tiny md:text-sm lg:text-xs xl:text-sm'>Call Us On:</p>
          <p className='text-tiny md:text-sm lg:text-xs xl:text-sm text-white'>562-667-0510</p>
        </div>
        </div>
        <div className='flex items-center gap-2'>
        <MdOutlineMailOutline  className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] '/>
        <div>
          <p className='text-orange text-tiny md:text-sm lg:text-xs xl:text-sm'>Email Us On:</p>
          <p className='text-tiny md:text-sm lg:text-xs xl:text-sm text-white'>alphaadvocatelaw@gmail.com</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header