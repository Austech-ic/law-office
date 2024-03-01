import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Err from '../../public/img/error.jpeg'



const Errorcomp = () => {
  return (
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 '>
        <div className='flex flex-col items-center justify-center py-5'>
        <Image src={Err} alt='err-img' className='w-[50%]' />
        </div>
        <div className='flex flex-col items-center justify-center  gap-4  md:gap-6'>
        <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold'>Page Not Found</p>
        <p className='text-xs md:text-xl lg:text-sm xl:text-base font-light text-center'>The page you are looking for doesn't exist or has been moved.</p>
        <Link href={`/`}>
            <div>
                <button className='bg-orange text-white px-8 py-2 text-xs md:text-xl lg:text-sm xl:text-base font-light'>Back To Home</button>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default Errorcomp