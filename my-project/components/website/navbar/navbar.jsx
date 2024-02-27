"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='' >
      <div className='lg:py-5 lg:px-28 xl:px-40 flex flex-row gap-2 items-center justify-between'>
      <div className=" lg:flex hidden ">
        {/* Always render menu items for desktop screens */}
        <div className=''>
        <ul className={`text-white text-xs md:text-lg lg:text-sm xl:text-base flex flex-col lg:flex-row gap-2`}>
        <Link href={`/`} className='hover:text-orange'>
       <li className="">Home</li>
       </Link>
       <Link href={`/`} className='hover:text-orange'>
       <li>Attorney Profile</li>
       </Link>
          
       <Link href={`/`} className='hover:text-orange'>
         <div className='flex items-center gap-1'> 
          <li>Practice Areas</li>
          <IoIosArrowDown className='text-orange' />
          </div>
         </Link>
         <Link href={`/`} className='hover:text-orange'>
         <div className='flex items-center gap-1'> 
         <li>Contact Us</li>
         <IoIosArrowDown className='text-orange' />
         </div>
         </Link>
         
         <Link href={`/`} className='hover:text-orange'>
         <div className='flex items-center gap-1'> 
         <li>Page</li>
         <IoIosArrowDown className='text-orange' />
         </div>
         </Link>
        
         
        </ul>
        </div>
        
      </div>
      <div className="hidden lg:block ">
        <button className='bg-orange text-white text-xs md:text-lg lg:text-sm xl:text-base p-2 lg:px-8 lg:py-4'>Free Consultation</button>
      </div>
      </div>



      <div className=" p-5 md:px-10  lg:hidden relative w-full  flex justify-between  ">
        {/* Conditionally render menu icon for smaller screens */}
        <button onClick={toggleMenu} className="text-white">
          {/* Using IoIosMenu icon */}
          <IoIosMenu className="w-6 h-6 md:w-[40px] md:h-[40px]" />
        </button>
        {/* Conditionally render menu items based on menuOpen state */}
        <div className={` absolute left-0 right-0 mt-8  text-white text-xs md:text-lg lg:text-sm xl:text-base gap-2 ${menuOpen ? '' : 'hidden'}`}>
        <ul className='flex flex-col items-center justify-center bg-white text-orange py-4 mt-4' >
       <Link href={`/`} className='hover:text-black'>
       <li className="py-1">Home</li>
       </Link>
       <Link href={`/`} className='hover:text-black'>
       <li className="py-1">Attorney Profile</li>
       </Link>
       <Link href={`/`} className='hover:text-black'>
       <div className='flex items-center gap-1 py-1'> 
          <li>Practice Areas</li>
          <IoIosArrowDown className='text-orange' />
          </div>
       </Link>
       <Link href={`/`} className='hover:text-black'>
       <div className='flex items-center gap-1 py-1'> 
         <li>Contact Us</li>
         <IoIosArrowDown className='text-orange' />
         </div>
       </Link>
       <Link href={`/`} className='hover:text-black'>
       <div className='flex items-center gap-1 py-1'> 
         <li>Page</li>
         <IoIosArrowDown className='text-orange' />
         </div>
       </Link>
         
        </ul>
        </div>
        <div className="block lg:hidden">
        <button className='bg-orange text-white text-xs md:text-lg lg:text-sm xl:text-base p-2'>Free Consultation</button>
      </div>
      </div>

      
      {/* "Free Consultation" button */}
      
    </div>
  );
}

export default Navbar;

