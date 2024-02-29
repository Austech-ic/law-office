import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from '../../../public/img/Logo.png'
import Image from 'next/image';
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";


const Footer = () => {
    return (
        <div className='p-10 md:p-20 lg:p-20 xl:p-32 bg-green text-white'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-[0.5] flex flex-col gap-2 '>
                    <div>
                        <Image src={Logo} alt='logo-img' className='w-[30%]' />
                    </div>
                    <div>
                        <p className='text-base md:text-2xl lg:text-lg xl:text-xl '>Alpha Advocate Law Group PC</p>
                    </div>
                    <div>
                        <p className='text-xs md:text-xl lg:text-sm font-light'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                    </div>
                </div>
                <div className='flex-1 grid lg:grid-cols-3 gap-4 md:gap-8 lg:gap-1 '>
                    <div className=' flex-1 flex flex-col gap-2 md:gap-3 lg:gap-2'>
                        <p className='text-sm md:text-2xl lg:text-base xl:text-lg font-bold'>Links</p>
                        <p className='text-xs md:text-xl lg:text-sm  font-light'>Lawyers.com </p>
                        <p className='text-xs md:text-xl lg:text-sm  font-light'>Martindale.com</p>
                    </div>

                    <div className=' flex-1 flex flex-col gap-2 md:gap-3 lg:gap-2'>
                        <p className='text-sm md:text-2xl lg:text-base xl:text-lg font-bold' >Contact Us</p>
                        <div className='flex items-center gap-2'>
                            <IoCallOutline className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>562-667-0510</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineMailOutline className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>alpha@gmail.com</p>
                        </div>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm font-light'>11432 South Street, Suite 373Cerritos, California 90703-6611</p>
                        </div>
                    </div>
                    <div className='flex-1  flex flex-col gap-2 md:gap-3 lg:gap-2'>
                        <p className='text-xs md:text-xl lg:text-sm xl:text-base font-bold'>Practice Areas</p>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm font-light'>Landlord-Tenant Law For Property Owners.</p>
                        </div>
                        <div>
                            <p className='text-xs md:text-xl lg:text-sm  font-light'>Landlord-Tenant Law For Renters.</p>
                        </div>
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
                    <Link href={`/`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                            <li className='text-xs md:text-xl lg:text-sm'>Practice Areas</li>
                            <IoIosArrowDown className='text-orange' />
                        </div>
                    </Link>
                    <Link href={`/contact`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                        <li className='text-xs md:text-xl lg:text-sm' >Contact Us</li>
                        </div>
                    </Link>
                    <Link href={`/`} className='hover:text-orange'>
                        <div className='flex items-center gap-1'>
                        <li className='text-xs md:text-xl lg:text-sm' >Map & Directions</li>
                        </div>
                    </Link>
                    
                   

                </ul>
                <div className='py-5 md:py-10 '>
                    <div className='border border-b'></div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                    <p className='text-center text-xs md:text-xl lg:text-sm lg:text-start'>Copyright © 2024 MH Sub I, LLC. All rights reserved.</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-orange text-xs md:text-xl lg:text-sm'>Follow:</p>
                        <div className='flex items-center gap-2'>
                            <BsInstagram className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <FaFacebookF className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <BsTwitter className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                            <BsPinterest className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer