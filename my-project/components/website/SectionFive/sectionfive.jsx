"use client"

import { IoIosArrowDown } from 'react-icons/io';
import React, { useState } from 'react';
import Image from 'next/image'

import styles from './sectionfive.module.css'


const SectionFive = () => {

  

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropInfoVisible, setDropInfoVisible] = useState(false);

    const [isDropTheraphyVisible, setDropTheraphyVisible] = useState(false);
    const [isDropResult, setDropResult] = useState(false);

    const [isDropOnlineVisible, setDropOnlineVisible] = useState(false);
    const [isDropWorkshop, setDropWorkshop] = useState(false);

    const [isDropBook, setDropBook] = useState(false);
    const [isDropSchedule, setDropSchedule] = useState(false);

    const [isDropSuit, setDropSuit] = useState(false);
    const [isDropRemote, setDropRemote] = useState(false);

    const [isDropProgram, setDropProgram] = useState(false);




    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        console.log(isDropdownVisible)
      };

      const toggleInfoDropVisible  = () => {
        setDropInfoVisible(!isDropInfoVisible)
      }

      const toggleTheraphyVisible = () => {
        setDropTheraphyVisible(!isDropTheraphyVisible)
      }

      const toggleResultVisible = () => {
        setDropResult(!isDropResult)
      }
    const toggleOnlineVisible = () => {
        setDropOnlineVisible(!isDropOnlineVisible)
    }
    const toggleWorkshop = () => {
      setDropWorkshop(!isDropWorkshop)
  }
  const toggleBook = () => {
    setDropBook(!isDropBook)
}
const toggleSchedule = () => {
  setDropSchedule(!isDropSchedule)
}
const toggleSuit = () => {
  setDropSuit(!isDropSuit)
}
const toggleRemote = () => {
  setDropRemote(!isDropRemote)
}
const toggleProgram = () => {
  setDropProgram(!isDropProgram)
}


    return(
      <div className='p-10 md:p-20 lg:p-20 xl:p-32'>
            <div className='p-5 md:p-10'>
        <p className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl  text-center'>Frequently Asked <span className='text-orange'>Questions</span> (FAQs)</p>
        </div>

            <div className='grid lg:grid-cols-2 gap-4'>
            <div  className={styles.subcont}>
                <div className={styles.cont} >
                   
                    <p className={styles.label}>What are my rights as a landlord in California?</p>
                   
                    <IoIosArrowDown
                    onClick={toggleDropdown}
                      className={`${styles.icon} ${isDropdownVisible ? styles.icon_active  : ''}`}/>

                   
                </div>
                {isDropdownVisible && (
        <p className={styles.text}>
        As a landlord in California, you have specific rights outlined in state law. These include the right to collect rent, evict tenants for valid reasons, and maintain a habitable living space. Our legal team can provide guidance on understanding and asserting your rights.
        </p>
      )}
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Can landlords raise rent at any time in California?</p>
                <IoIosArrowDown
                onClick={toggleInfoDropVisible}
                className={`${styles.icon} ${isDropInfoVisible ? styles.icon_active  : ''}`}/>
                </div>
                {isDropInfoVisible && (
       <p className={styles.text}>
       As a landlord in California, you have specific rights outlined in state law. These include the right to collect rent, evict tenants for valid reasons, and maintain a habitable living space. Our legal team can provide guidance on understanding and asserting your rights.
      </p>
      )}
                
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Are there specific laws regarding security deposits in California?</p>
                <IoIosArrowDown
                onClick={toggleTheraphyVisible}
                className={`${styles.icon} ${isDropTheraphyVisible ? styles.icon_active  : ''}`}/>
                </div>
                {isDropTheraphyVisible && (
       <p className={styles.text}>
       As a landlord in California, you have specific rights outlined in state law. These include the right to collect rent, evict tenants for valid reasons, and maintain a habitable living space. Our legal team can provide guidance on understanding and asserting your rights.
      </p>
      )}
                
            </div>


             <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>What protections do California tenants have?</p>
                <IoIosArrowDown
                onClick={toggleResultVisible}
                className={`${styles.icon} ${isDropResult ? styles.icon_active  : ''}`}/>
                </div>
                {isDropResult && (
       <p className={styles.text}>
       As a landlord in California, you have specific rights outlined in state law. These include the right to collect rent, evict tenants for valid reasons, and maintain a habitable living space. Our legal team can provide guidance on understanding and asserting your rights.
      </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>How can I legally evict a tenant in California?</p>
                <IoIosArrowDown
                onClick={toggleBook}
                className={`${styles.icon} ${isDropBook ? styles.icon_active  : ''}`}/>
                </div>
                {isDropBook && (
       <p className={styles.text}>
       As a landlord in California, you have specific rights outlined in state law. These include the right to collect rent, evict tenants for valid reasons, and maintain a habitable living space. Our legal team can provide guidance on understanding and asserting your rights.
      </p>
      )}
                
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>How can I protect my property from slumlord litigation in California?</p>
                <IoIosArrowDown
                onClick={toggleWorkshop}
                className={`${styles.icon} ${isDropWorkshop ? styles.icon_active  : ''}`}/>
                </div>
                {isDropWorkshop && (
       <p className={styles.text}>
       As a landlord in California, you have specific rights outlined in state law. These include the right to collect rent, evict tenants for valid reasons, and maintain a habitable living space. Our legal team can provide guidance on understanding and asserting your rights.
      </p>
      )}
                
            </div>
      
        
            </div>

        </div>
    )
}


export default SectionFive;