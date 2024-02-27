import React from 'react'
import styles from './sectionone.module.css'
import Header from '../header/header'
import Navbar from '../navbar/navbar'

const Index = () => {
  return (
    <div className={styles.main}>
        <Header />
        <Navbar />
        <div className='flex flex-col items-center justify-center px-10 py-28 md:py-48 lg:py-20 lg:px-32 xl:py-54 text-white'>
            <p className='text-center text-lg md:text-4xl lg:text-3xl xl:text-4xl'>Experienced. Knowledgeable. Resourceful</p>
            <p  className='text-center mt-6 text-sm md:text-2xl lg:text-xl md:mt-10 lg:px-32 xl:px-64'>Real estate attorney handling landlord-tenants issues for clients throughout Los Angeles, CA</p>
            <div className="py-6 md:py-20 lg:py-16 xl:py-20">
        <button className='bg-orange text-white text-xs md:text-xl lg:text-base xl:text-lg p-[15px] md:p-4'>Shesule Consultation</button>
      </div>
        </div>
    </div>
  )
}

export default Index