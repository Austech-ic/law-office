import Image from 'next/image'
import React from 'react'
import Lady from '../../../public/img/ud.jpeg'
import Link from 'next/link'

const Index = () => {
  return (
    <div className='bg-gray flex flex-col lg:flex-row p-10 md:p-20 lg:p-20 xl:p-32 gap-8 md:gap-16 lg:gap-8 xl:gap-16'>
      <div className='flex-1 flex flex-col gap-2 md:gap-5 lg:gap-4 xl:gap-6'>
        <div className='flex items-center gap-2 md:gap-4'>
          <div className='border border-orange border-l border-solid w-[5%]'></div>
        <p className='text-orange text-sm md:text-2xl lg:text-base xl:text-lg'>Welcome to</p>
        </div>
        
        <p className='text-xl md:text-5xl lg:text-3xl xl:text-4xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight '>Law Office Of <br className='hidden md:block' /> Alpha Advocate Law Group PC</p>
        <p className='text-sm md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>At Alpha Advocate Law Group PC, we are a team of dedicated and experienced attorneys committed to providing exceptional legal representation to our clients. With a comprehensive understanding of the law and a passion for justice, we strive to protect the rights and interests of individuals and businesses across a wide range of practice areas.
</p>
       <Link href='/contact'>
       <div className="">
        <button className='bg-orange text-white text-xs md:text-xl lg:text-base xl:text-lg px-[15px] py-[10px] md:px-8 md:py-4'>Get In Touch</button>
      </div>
       </Link>
      </div>
      <div className='flex-1'>
       <Image src={Lady} alt='lady-img' />
      </div>
    </div>
  )
}

export default Index