import Image from 'next/image'
import React from 'react'
import Lady from '../../../public/img/lady.jpg'

const Index = () => {
  return (
    <div className='flex flex-col lg:flex-row p-10 md:p-20 lg:p-20 xl:p-32 gap-8 md:gap-16 lg:gap-8 xl:gap-16'>
      <div className='flex-1 flex flex-col gap-2 md:gap-5 lg:gap-4 xl:gap-6'>
        <div className='flex items-center gap-2 md:gap-4'>
          <div className='border border-orange border-l border-solid w-[5%]'></div>
        <p className='text-orange text-sm md:text-2xl lg:text-base xl:text-lg'>Welcome to</p>
        </div>
        
        <p className='text-xl md:text-5xl lg:text-3xl xl:text-4xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight '>Law Office Of <br className='hidden md:block' /> Udo Uchenna Ekekeulu</p>
        <p className='text-sm md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <div className="lg:mt-3 xl:mt-8">
        <button className='bg-orange text-white text-xs md:text-xl lg:text-base xl:text-lg px-[15px] py-[10px] md:px-8 md:py-4'>Get In Touch</button>
      </div>
      </div>
      <div className='flex-1'>
       <Image src={Lady} alt='lady-img' />
      </div>
    </div>
  )
}

export default Index