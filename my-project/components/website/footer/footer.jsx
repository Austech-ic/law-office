"use client"
import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
// import Logo from '../../../public/img/Logo.png'
import Image from 'next/image';
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../../../public/img/fr.png'


const Footer = () => {
    const [isPraticeDropdownOpen, setIsPraticeDropdownOpen] = useState(false)

    const handlePraticeDropdownToggle = () => {
        setIsPraticeDropdownOpen(!isPraticeDropdownOpen)
    }


    const [address] = useState("11432 South Street, Suite 373Cerritos, California 90703-6611");

  const handleAddressClick = () => {
      const encodedAddress = encodeURIComponent(address);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(googleMapsUrl, '_blank');
  };

    return (
        <div className='p-10 md:p-20 lg:p-20 xl:p-32 bg-green text-white'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-[0.5] flex flex-col gap-2 md:gap-3 '>
                    <div>
                        <Image src={Logo} alt='logo-img' className='w-[100%] lg:w-[100%]' />
                    </div>
                    <div>
                        <p className='text-sm md:text-2xl lg:text-lg xl:text-xl '>Alpha Advocate Law Group PC</p>
                        
                    </div>
                    <div>
                        <p className='text-xs md:text-xl lg:text-sm font-light'>Alpha Advocate Law Group PC is located in Cerritos, CA and serves clients in and around Cerritos, Artesia, Hawaiian Gardens, Norwalk, Bellflower, Santa Fe Springs, Paramount, Pico Rivera, South Gate, Lynwood, Long Beach, Hacienda Heights, Bell, Whittier and Compton.</p>

                        <p className='text-xs md:text-xl lg:text-sm font-light pt-5'>Attorney Advertising. This website is designed for general information only. The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship. </p>

                        <p className='text-xs md:text-xl lg:text-sm font-light pt-5'>See our profiles at <span className='text-orange underline cursor-pointer'>Lawyers.com</span> and <span className='text-orange underline cursor-pointer'>Martindale.com.</span></p>
                    </div>
                </div>
                <div className='flex-1 grid lg:grid-cols-3 gap-4 md:gap-8 lg:gap-1 '>
                    <div className=' flex-1 flex flex-col gap-2 md:gap-3 lg:gap-2 '>
                        <p className='text-base md:text-2xl lg:text-base xl:text-lg font-bold'>Links</p>
                        <Link href="https://www.lawyers.com">
                        <p className='text-xs md:text-xl lg:text-sm  font-light hover:text-orange'>Lawyers.com </p>
                        </Link>
                        <Link href="https://www.martindale.com">
                        <p className='text-xs md:text-xl lg:text-sm  font-light hover:text-orange'>Martindale.com</p>
                        </Link>
                        
                    </div>

                    <div className=' flex-1 flex flex-col gap-2 md:gap-3 lg:gap-2'>
                        <p className='text-sm md:text-2xl lg:text-base xl:text-lg font-bold' >Contact Us</p>
                        <Link href="tel:562-219-0089">
                        <div className='flex items-center gap-2 hover:text-orange'>
                            <IoCallOutline className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>562-219-0089.</p>
                        </div>
                        </Link>

                        <Link href="mailto:Alphaadvocatelaw@gmail.com" >
                        <div className='flex items-center gap-2  hover:text-orange'>
                            <MdOutlineMailOutline className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>alphaadvocatelaw@gmail.com</p>
                        </div>
                        </Link>

                        <div className='cursor-pointer hover:text-orange' onClick={handleAddressClick} > 
                            <p className='text-xs md:text-xl lg:text-sm font-light'>11432 South Street, Suite 373Cerritos, California 90703-6611</p>
                        </div>
                    </div>
                    <div className='flex-1  flex flex-col gap-2 md:gap-3 lg:gap-2'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base font-bold'>Practice Areas</p>
                        <Link href={`/owner`} className='hover:text-orange'>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm font-light'>Landlord-Tenant Law For Owners.</p>
                        </div>
                        </Link>
                        <Link href={`/renter`} className='hover:text-orange'>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>Landlord-Tenant Law For Renters.</p>
                        </div>
                        </Link>
                        <Link href={`/personalinjury`} className='hover:text-orange'>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>Personal Injury.</p>
                        </div>
                        </Link>
                        <Link href={`/slumlord`} className='hover:text-orange'>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>Slum Lord Litigation.</p>
                        </div>
                        </Link>
                        <Link href={`/corpratepratice`} className='hover:text-orange'>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>Corprate Pratice.</p>
                        </div>
                        </Link>
                        <Link href={`/restrainorders`} className='hover:text-orange'>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>Restraining Orders.</p>
                        </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div className='pt-[33px] md:pt-[50px] lg:pt-[100px]'>
                <ul className='flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-4'>

                    <Link href={`/`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                            <li className='text-xs md:text-xl lg:text-sm'>Home</li>
                        </div>
                    </Link>
                    <Link href={`/attorneyprofile`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                            <li className='text-xs md:text-xl lg:text-sm'>Attorney Profile</li>
                        </div>
                    </Link>
                    {/* <div className='flex flex-col gap-1' onClick={handlePraticeDropdownToggle}>
                        <div className='flex items-center gap-2 hover:text-orange'>
                            <li className='text-xs md:text-xl lg:text-sm'>Pratice Areas</li>
                            <IoIosArrowDown className='text-orange' />
                        </div>
                        {isPraticeDropdownOpen && (
                            <div className=" text-sm text-green-600">
                                <ul className='text-xs md:text-lg lg:text-sm xl:text-base flex flex-col py-[0.3px] gap-1 text-slate-400'>
                                    <Link href={`/renter`} className='hover:text-orange'>
                                        <div className='flex items-center gap-1 hover:text-orange'>
                                            <li className='text-xs md:text-xl lg:text-sm hover:text-orange'>Law for Renters</li>
                                        </div>
                                    </Link>
                                    <Link href={`/owner`} className='hover:text-orange'>
                                        <div className='flex items-center gap-1 hover:text-orange'>
                                            <li className='text-xs md:text-xl lg:text-sm hover:text-orange'>Law for Property Owners</li>
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div> */}
                    <Link href={`/praticearea`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                            <li className='text-xs md:text-xl lg:text-sm'>Pratice Areas</li>
                        </div>
                    </Link>
                    <Link href={`/contact`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                            <li className='text-xs md:text-xl lg:text-sm' >Contact Us</li>
                        </div>
                    </Link>
                  
                        <div className='flex items-center gap-1 hover:text-orange cursor-pointer'  onClick={handleAddressClick}>
                            <li className='text-xs md:text-xl lg:text-sm' >Map & Directions</li>
                        </div>
                   



                </ul>
                <div className='py-5 md:py-10 '>
                    <div className='border border-b'></div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                    <p className='text-center text-xs md:text-xl lg:text-sm lg:text-start'>Copyright © 2024 MH Sub I, LLC. All rights reserved.</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-orange text-sm md:text-xl lg:text-sm'>Follow:</p>
                        <div className='flex items-center gap-2'>
                            <BsInstagram className='w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <FaFacebookF className='w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <BsTwitter className='w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <BsPinterest className='w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer