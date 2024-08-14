import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import Consult from '../website/consult';

const Corpratesectwo = () => {
  return (
    <div className=" bg-gray ">
        <div className='flex flex-col gap-4 px-6 py-10 md:p-12 lg:px-28 lg:py-10 lg:pb-28 xl:px-40 '>
            <div className='py-2 md:py-4'>
                <p className='text-base md:text-2xl lg;text-2xl font-semibold'>Corprate Pratice</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Corprate Pratice</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>For businesses of all sizes, our corporate practice attorneys offer comprehensive legal services tailored to your specific needs. From entity formation and corporate governance to mergers and acquisitions, we provide strategic guidance and representation to ensure your business operates within legal boundaries and maximizes its potential for growth and success.</p>
            </div>
            
           
        </div>
      <Consult />
    </div>
  );
};

export default Corpratesectwo;
