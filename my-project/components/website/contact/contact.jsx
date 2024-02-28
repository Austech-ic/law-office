import Image from 'next/image'
import React from 'react'
import bl from '../../../public/img/bl.jpeg'
import map from '../../../public/img/map.jpeg'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className='p-10 md:p-20 lg:p-20 xl:p-32 bg-white flex flex-col lg:flex-row h-[70vh] lg:h-[140vh] xl:h-[100vh] gap-12 md:gap-20 lg:gap-[200px]'>
       <div className='flex-1'> 
       <p className='text-2xl md:text-5xl font-bold'>Get in <span className='text-orange'>Touch</span></p>
       <p className='text-xs md:text-xl lg:text-sm xl:text-base mt-4 font-semibold'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
       <form className='flex flex-col gap-4 py-4'>
        <div className='flex flex-col gap-2'>
            <label>Name</label>
            <input
            placeholder='Enter Name'
            className='border border-slate-400 p-1 md:p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
            placeholder='Email'
            className='border border-slate-400 p-1 md:p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Phone number</label>
            <input
            placeholder='Phone number'
            className='border border-slate-400 p-1 md:p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Please briefly describe the service(s) needed *</label>
            <textarea className='border border-slate-400 p-1 md:p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <button className='px-8 py-2 bg-orange text-white'>Send</button>
        </div>
        
       </form>
       <div className=' flex flex-row justify-center lg:items-center gap-y-1 gap-x-6 md:gap-x-10'>
        <div className='flex items-center gap-2'>
        <IoCallOutline  className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] '/>
        <div>
          <p className='text-orange text-tiny md:text-sm lg:text-xs xl:text-sm'>Call Us On:</p>
          <p className='text-tiny md:text-sm lg:text-xs xl:text-sm '>562-667-0510</p>
        </div>
        </div>
        <div className='flex items-center gap-2'>
        <MdOutlineMailOutline  className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] '/>
        <div>
          <p className='text-orange text-tiny md:text-sm lg:text-xs xl:text-sm'>Email Us On:</p>
          <p className='text-tiny md:text-sm lg:text-xs xl:text-sm '>alphaadvocatelaw@gmail.com</p>
        </div>
        </div>
      </div>
       </div>
       <div className='relative flex-1 flex flex-row-reverse items-center'>
  <div className='absolute top-10 right-0 md:top-14 lg:top-[0rem] lg:right-[5rem] w-full '>
    <Image src={map} alt='map-img' className='h-[60vh] lg:h-[100vh] xl:h-[70vh] w-[100%]' />
  </div>
  <Image src={bl} alt='bl-img' className='w-[70%] h-[70vh] lg:w-[100%] lg:h-[140vh] xl:h-[100vh]' />
</div>


        </div>
  )
}

export default Contact 