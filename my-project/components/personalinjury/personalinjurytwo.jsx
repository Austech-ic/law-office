import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import Consult from '../website/consult';

const Personalinjurytwo = () => {
    return (
       <div className=' bg-gray '>
         <div className='flex flex-col gap-4 px-6 py-10 md:p-12 lg:px-28 lg:py-10 lg:pb-28 xl:px-40 '>
            <div className='py-2 md:py-4'>
                <p className='text-base md:text-2xl lg;text-2xl font-semibold'>Personal Injury</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Personal Injury</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>Udo represents individuals who have suffered injuries due to the negligence of others. She navigates complex personal injury cases, ensuring that her clients receive fair compensation for their losses, including medical expenses, lost wages, and pain and suffering.</p>
            </div>
            
           
        </div>
        <Consult />



       </div>


    )
}

export default Personalinjurytwo