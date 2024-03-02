"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from './header.module.css';
import Logo from '../../../public/img/fr.png'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosMenu } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPraticeDropdownOpen, setIsPraticeDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handlePraticeDropdownToggle = () => {
    setIsPraticeDropdownOpen(!isPraticeDropdownOpen)
  }


  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenuContent(!showMenuContent);
  };
  return (
    <div className=' flex flex-row items-center justify-between lg:items-start  lg:flex-col p-5 md:px-10 lg:px-28 xl:px-40'>
      <div className='  flex items-center justify-between lg:w-full'>
     <div className=' flex-1'>
     <Image src={Logo} alt='logo-img' className=' w-[80%]  md:w-[80%] lg:w-[70%] xl:w-[70%]' />
     </div>
     <div className='hidden lg:flex'>
     <div className='flex flex-row lg:items-center gap-y-1 gap-x-2 lg:gap-x-4'>
              <div className='flex items-center gap-2'>
                <IoCallOutline className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
                <div>
                  <p className='text-orange text-tiny md:text-sm lg:text-xs xl:text-sm'>Call Us On:</p>
                  <p className='text-tiny md:text-sm lg:text-xs xl:text-sm text-white'>562-667-0510</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <MdOutlineMailOutline className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
                <div>
                  <p className='text-orange text-tiny md:text-sm lg:text-xs xl:text-sm'>Email Us On:</p>
                  <p className='text-tiny md:text-sm lg:text-xs xl:text-sm text-white'>alphaadvocatelaw@gmail.com</p>
                </div>
              </div>
            </div>
     </div>
    </div>
    <div className=''>
    <button onClick={handleMenuClick} className="text-white">
            {/* Using IoIosMenu icon */}
            <IoIosMenu className={styles.menuicon} />
          </button>
    </div>

     {/* MOBILE VIEW */}

     {showMenuContent && (
        <div className={styles.mobilelistcont }>
          <ul className={styles.mobilelist}>
          <Link href={`/`} className='hover:text-black'>
                <li className="py-1 text-center  text-xs md:text-lg lg:text-sm xl:text-base">Home</li>
              </Link>
            <Link href={`/attorneyprofile`} className='hover:text-black'>
                <li className="py-1 text-center  text-xs md:text-lg lg:text-sm xl:text-base">Attorney Profile</li>
              </Link>
             
              <div className='flex flex-col gap-1' onClick={handlePraticeDropdownToggle}>
                <div className='flex items-center justify-center gap-1 hover:text-orange'>
                  <li className=' text-xs md:text-lg lg:text-sm xl:text-base'>Pratice Areas</li>
                  <IoIosArrowDown className='text-orange' />
                </div>
                {isPraticeDropdownOpen && (
                  <div className="flex flex-col gap-1 text-sm text-green-600">
                    <ul className='text-xs md:text-lg lg:text-sm xl:text-base '>
                      <Link href={`/renter`} className='hover:text-orange'>
                        <div className='flex items-center  justify-center gap-1 hover:text-orange'>
                          <li className='hover:text-orange'>Law for Renters</li>
                        </div>
                      </Link>
                      <Link href={`/owner`} className='hover:text-orange'>
                        <div className='flex items-center justify-center gap-1 hover:text-orange'>
                          <li className='hover:text-orange'>Law for Property Owners</li>
                        </div>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <Link href={`/contact`} className='hover:text-black'>
                <div className='flex items-center justify-center gap-1 py-1'>
                  <li className='text-center  text-xs md:text-lg lg:text-sm xl:text-base'>Contact Us</li>
                  <IoIosArrowDown className='text-orange' />
                </div>
              </Link>
              <div className='flex flex-col gap-1' onClick={handleDropdownToggle}>
                <div className='flex items-center justify-center gap-1 hover:text-orange'>
                  <li className=' text-xs md:text-lg lg:text-sm xl:text-base'>Page</li>
                  <IoIosArrowDown className='text-orange' />
                </div>
                {isDropdownOpen && (
                  <div className="flex flex-col gap-1 text-sm text-green-600">
                    <ul className=' text-xs md:text-lg lg:text-sm xl:text-base '>
                      <Link href={`/testimonialpage`} className='hover:text-orange'>
                        <div className='flex items-center justify-center gap-1 hover:text-orange'>
                          <li>Testimonial</li>
                        </div>
                      </Link>
                      <Link href={`/successfulcase`} className='hover:text-orange'>
                        <div className='flex items-center justify-center gap-1 hover:text-orange'>
                          <li>Successful Page Result</li>
                        </div>
                      </Link>
                    </ul>

                  </div>
                )}
              </div>
              <Link href={`/contact`} className='hover:text-black'>
                <div className="block lg:hidden py-1">
                  <button className='bg-orange text-white text-xs md:text-lg lg:text-sm xl:text-base p-2'>Free Consultation</button>
                </div>
              </Link>
           
          </ul>
        </div>
      )}

       {/* DESKTOP VIEW */}
       <div className='lg:w-full flex items-center justify-between'>
        
          <div className="  hidden lg:flex ">
            {/* Always render menu items for desktop screens */}
            <div className=''>
              <ul className={`text-white text-xs md:text-lg lg:text-sm xl:text-base flex flex-col lg:flex-row lg:gap-4 xl:gap-8`}>
                <Link href={`/`} className='hover:text-orange'>
                  <li className="">Home</li>
                </Link>
                <Link href={`/attorneyprofile`} className='hover:text-orange'>
                  <li>Attorney Profile</li>
                </Link>

                <div className='flex flex-col gap-2' onClick={handlePraticeDropdownToggle}>
                  <div className='flex items-center gap-1 hover:text-orange'>
                    <li>Pratice Areas</li>
                    <IoIosArrowDown className='text-orange' />
                  </div>
                 <div>
                 {isPraticeDropdownOpen && (
                    <div className="flex flex-col gap-1 text-sm text-green-600">
                      <Link href={`/renter`} className='hover:text-orange'>
                        <div className='flex items-center gap-1 hover:text-orange'>
                          <p className='hover:text-orange'>Law for Renters</p>
                        </div>
                      </Link>
                      <Link href={`/owner`} className='hover:text-orange'>
                        <div className='flex items-center gap-1 hover:text-orange'>
                          <p className='hover:text-orange'>Law for Property Owners</p>
                        </div>
                      </Link>
                    </div>
                  )}
                 </div>
                </div>
                <Link href={`/contact`} className='hover:text-orange'>
                  <div className='flex items-center gap-1'>
                    <li>Contact Us</li>
                    <IoIosArrowDown className='text-orange' />
                  </div>
                </Link>

                <div className='flex flex-col gap-2' onClick={handleDropdownToggle}>
                  <div className='flex items-center gap-1 hover:text-orange'>
                    <li>Page</li>
                    <IoIosArrowDown className='text-orange' />
                  </div>
                  {isDropdownOpen && (
                    <div className="flex flex-col gap-1 text-sm text-green-600">
                      <Link href={`/testimonialpage`} className='hover:text-orange'>
                        <div className='flex items-center gap-1 hover:text-orange'>
                          <p className='hover:text-orange'>Testimonial</p>
                        </div>
                      </Link>
                      <Link href={`/successfulcase`} className='hover:text-orange'>
                        <div className='flex items-center gap-1 hover:text-orange'>
                          <p className='hover:text-orange'>Successful Page Result</p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>


              </ul>
            </div>

          </div>
          <div className="hidden lg:block ">
            <button className='bg-orange text-white text-xs md:text-lg lg:text-sm xl:text-base p-2 lg:px-8 lg:py-4'>Free Consultation</button>
          </div>
        </div>

    </div>
  )
}

export default Header