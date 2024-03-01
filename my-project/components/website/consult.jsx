import React from 'react'
import { IoCallOutline } from "react-icons/io5";

const Consult = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-8 lg:flex-row bg-white p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40  '>
            <div className='flex-1 flex flex-col gap-2 md:gap-4'>
                <p className='text-sm md:text-2xl lg:text-base xl:text-lg font-medium'>Jorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='text-xs md:text-xl lg:text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div>
                    <button className='bg-orange text-white px-8 py-2 text-xs md:text-xl lg:text-sm xl:text-base font-light'>Contact Us</button>
                </div>
            </div>
            <div className='flex-1 border border-slate-400 p-3 md:p-8 lg:p-8 border-4'>
            <p className='text-xs md:text-2xl lg:text-base xl:text-lg  font-medium'>Get a Free Consultation</p>
                <p className='text-tiny md:text-xl lg:text-xs xl:text-sm font-extralight'>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div>
                <div className='flex gap-2 md:gap-4 lg:gap-2 items-center py-5'>
                    <div className='bg-orange text-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] flex items-center justify-center'>
                      <IoCallOutline className='h-[10px] w-[10px] md:h-[20px] md:w-[20px] lg:h-[15px] lg:w-[15px] xl:h-[20px] xl:w-[20px]' />
                    </div>
                  <div className='flex flex-col '>
                  <p className='text-tiny md:text-xl lg:text-xs xl:text-sm font-extralight'>Call Us On:</p>
                  <p className='text-tiny md:text-xl lg:text-xs xl:text-sm font-semibold'>562-667-0510</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
  )
}

export default Consult