import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import Consult from '../website/consult';

const Rentersectwo = () => {
  return (
    <div className=" bg-gray ">
        <div className='flex flex-col gap-4 px-6 py-10 md:p-12 lg:px-28 lg:py-10 lg:pb-28 xl:px-40 '>
            <div className='py-2 md:py-4'>
                <p className='text-base md:text-2xl lg;text-2xl font-semibold'>Slum Lord Ligitation</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Slum Lord Ligitation</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>In the complex realm of sum lord litigation, our attorneys possess the expertise and tenacity to represent your interests effectively. We handle cases involving poor housing conditions (habitability), contract disputes, debt recovery, and other legal matters related to sum lord transactions. Our team will work tirelessly to safeguard your rights and pursue the best possible outcome for your case.</p>
            </div>
            
           
        </div>
      <Consult />
    </div>
  );
};

export default Rentersectwo;
