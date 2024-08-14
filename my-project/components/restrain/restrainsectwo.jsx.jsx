import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import Consult from '../website/consult';

const Restrainsectwo = () => {
  return (
    <div className=" bg-gray ">
        <div className='flex flex-col gap-4 px-6 py-10 md:p-12 lg:px-28 lg:py-10 lg:pb-28 xl:px-40 '>
            <div className='py-2 md:py-4'>
                <p className='text-base md:text-2xl lg;text-2xl font-semibold'>Restraining Orders</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Restraining Orders</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>In cases where personal safety is a concern, our attorneys can assist in obtaining restraining orders. We understand the delicate nature of these situations and will handle your case with the utmost sensitivity and professionalism. Our goal is to ensure your protection and provide you with the legal support you need during these challenging times.</p>
            </div>
            
           
        </div>
      <Consult />
    </div>
  );
};

export default Restrainsectwo;
