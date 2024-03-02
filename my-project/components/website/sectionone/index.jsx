import React from 'react'
import styles from './sectionone.module.css'
import Header from '../header/header'
import Navbar from '../navbar/navbar'

const Index = () => {
  return (
    <div className={styles.main}>
        <Header />
        {/* <Navbar /> */}
        <div className='flex flex-col items-center justify-center px-10 mt-10 md:mt-32 lg:mt-14 lg:px-32 xl:py-54 text-white'>
            <p className='text-center text-lg md:text-4xl lg:text-3xl xl:text-4xl font-semibold'>Experienced. Knowledgeable. Resourceful</p>
            <p  className='text-center mt-4 text-sm md:text-2xl px-4 lg:text-xl md:mt-10 lg:px-32 xl:px-64 font-light'>Real estate attorney handling landlord-tenants issues for clients throughout Los Angeles, CA</p>
            <div className="mt-16 md:py-20 lg:mt-0 ">
        <button className='bg-orange text-white text-xs md:text-xl lg:text-base xl:text-lg p-[15px] md:p-4'>Shesule Consultation</button>
      </div>
        </div>
    </div>
  )
}

export default Index