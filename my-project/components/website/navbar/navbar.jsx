'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Logo from '../../../public/img/Logo.png';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPraticeDropdownOpen, setIsPraticeDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handlePraticeDropdownToggle = () => {
    setIsPraticeDropdownOpen(!isPraticeDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);

    // Update the visibility state
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex lg:block">
      <div>
        <div className="p-5 md:px-10 lg:px-28 xl:px-40  flex flex-col lg:flex-row  gap-y-2 justify-between">
          <div className=" bg-red-300">
            <Image
              src={Logo}
              alt="logo-img"
              className=" w-[30%] md:w-[50%] lg:w-[40%] xl:w-[50%]"
            />
          </div>

          <div className="hidden lg:block">
            <div className="flex flex-row lg:items-center gap-y-1 gap-x-2 lg:gap-x-4">
              <div className="flex items-center gap-2">
                <IoCallOutline className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
                <div>
                  <p className="text-orange text-tiny md:text-sm lg:text-xs xl:text-sm">
                    Call Us On:
                  </p>
                  <p className="text-tiny md:text-sm lg:text-xs xl:text-sm text-white">
                    562-667-0510
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
                <div>
                  <p className="text-orange text-tiny md:text-sm lg:text-xs xl:text-sm">
                    Email Us On:
                  </p>
                  <p className="text-tiny md:text-sm lg:text-xs xl:text-sm text-white">
                    alphaadvocatelaw@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="lg:py-5 lg:px-28 xl:px-40 flex flex-row gap-2 items-center justify-between">
          <div className=" lg:flex hidden ">
            {/* Always render menu items for desktop screens */}
            <div className="">
              <ul
                className={`text-white text-xs md:text-lg lg:text-sm xl:text-base flex flex-col lg:flex-row lg:gap-4 xl:gap-8`}
              >
                <Link href={`/`} className="hover:text-orange">
                  <li className="">Home</li>
                </Link>
                <Link href={`/attorneyprofile`} className="hover:text-orange">
                  <li>Attorney Profile</li>
                </Link>

                <div
                  className="flex flex-col gap-2"
                  onClick={handlePraticeDropdownToggle}
                >
                  <div className="flex items-center gap-1 hover:text-orange">
                    <li>Practice Areas</li>
                    <IoIosArrowDown className="text-orange" />
                  </div>
                  {isPraticeDropdownOpen && (
                    <div className="flex flex-col gap-1 text-sm text-green-600">
                      <Link href={`/renter`} className="hover:text-orange">
                        <div className="flex items-center gap-1 hover:text-orange">
                          <p>Landlord-Tenant Law for Renters</p>
                        </div>
                      </Link>
                      <Link href={`/owner`} className="hover:text-orange">
                        <div className="flex items-center gap-1 hover:text-orange">
                          <p>Landlord-Tenant Law for Property Owners</p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                <Link href={`/contact`} className="hover:text-orange">
                  <div className="flex items-center gap-1">
                    <li>Contact Us</li>
                    <IoIosArrowDown className="text-orange" />
                  </div>
                </Link>

                <div
                  className="flex flex-col gap-2"
                  onClick={handleDropdownToggle}
                >
                  <div className="flex items-center gap-1 hover:text-orange">
                    <li>Page</li>
                    <IoIosArrowDown className="text-orange" />
                  </div>
                  {isDropdownOpen && (
                    <div className="flex flex-col gap-1 text-sm text-green-600">
                      <Link
                        href={`/testimonialpage`}
                        className="hover:text-orange"
                      >
                        <div className="flex items-center gap-1 hover:text-orange">
                          <p>Testimonial</p>
                        </div>
                      </Link>
                      <Link
                        href={`/successfulcase`}
                        className="hover:text-orange"
                      >
                        <div className="flex items-center gap-1 hover:text-orange">
                          <p>Successful Page Result</p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block ">
            <button className="bg-orange text-white text-xs md:text-lg lg:text-sm xl:text-base p-2 lg:px-8 lg:py-4">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div>
        <div className=" p-5 md:px-10  lg:hidden relative w-full  flex justify-between  ">
          {/* Conditionally render menu icon for smaller screens */}
          <button onClick={toggleMenu} className="text-white">
            {/* Using IoIosMenu icon */}
            <IoIosMenu className="w-6 h-6 md:w-[40px] md:h-[40px]" />
          </button>
          {/* Conditionally render menu items based on menuOpen state */}
          <div
            className={` absolute left-0 right-0 mt-8  text-white text-xs md:text-lg lg:text-sm xl:text-base gap-2 ${
              menuOpen ? '' : 'hidden'
            }`}
          >
            <ul className="flex flex-col items-center justify-center bg-white text-orange py-4 mt-4">
              <Link href={`/`} className="hover:text-black">
                <li className="py-1">Home</li>
              </Link>
              <Link href={`/attorneyprofile`} className="hover:text-black">
                <li className="py-1">Attorney Profile</li>
              </Link>

              <div
                className="flex flex-col gap-1"
                onClick={handlePraticeDropdownToggle}
              >
                <div className="flex items-center justify-center gap-1 hover:text-orange">
                  <li>Pratice Areas</li>
                  <IoIosArrowDown className="text-orange" />
                </div>
                {isPraticeDropdownOpen && (
                  <div className="flex flex-col gap-1 text-sm text-green-600">
                    <ul className="text-xs md:text-lg lg:text-sm xl:text-base ">
                      <Link href={`/renter`} className="hover:text-orange">
                        <div className="flex items-center  justify-center gap-1 hover:text-orange">
                          <li>Landlord-Tenant Law for Renters</li>
                        </div>
                      </Link>
                      <Link href={`/owner`} className="hover:text-orange">
                        <div className="flex items-center justify-center gap-1 hover:text-orange">
                          <li>Landlord-Tenant Law for Property Owners</li>
                        </div>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <Link href={`/contact`} className="hover:text-black">
                <div className="flex items-center gap-1 py-1">
                  <li>Contact Us</li>
                  <IoIosArrowDown className="text-orange" />
                </div>
              </Link>
              <div
                className="flex flex-col gap-1"
                onClick={handleDropdownToggle}
              >
                <div className="flex items-center justify-center gap-1 hover:text-orange">
                  <li>Page</li>
                  <IoIosArrowDown className="text-orange" />
                </div>
                {isDropdownOpen && (
                  <div className="flex flex-col gap-1 text-sm text-green-600">
                    <ul className=" text-xs md:text-lg lg:text-sm xl:text-base ">
                      <Link
                        href={`/testimonialpage`}
                        className="hover:text-orange"
                      >
                        <div className="flex items-center justify-center gap-1 hover:text-orange">
                          <li>Testimonial</li>
                        </div>
                      </Link>
                      <Link
                        href={`/successfulcase`}
                        className="hover:text-orange"
                      >
                        <div className="flex items-center justify-center gap-1 hover:text-orange">
                          <li>Successfu Page Result</li>
                        </div>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <Link href={`/contact`} className="hover:text-black">
                <div className="block lg:hidden py-1">
                  <button className="bg-orange text-white text-xs md:text-lg lg:text-sm xl:text-base p-2">
                    Free Consultation
                  </button>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* "Free Consultation" button */}
    </div>
  );
};

export default Navbar;
