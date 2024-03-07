"use client"
import React, { useState } from 'react';
import down from '../../../public/img/oo.jpeg'
import up from '../../../public/img/ii.jpeg'
import quo from '../../../public/img/quo.jpg'
import style from './test.module.css'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'




const Test = () => {
  const [expanded, setExpanded] = useState(false); // State to track whether testimonial is expanded

  const details = [
    {
      id:1,
      label:"Superb Lawyer!",
      user:"By Joel",
      desc:"I would like to thank Udo for assisting me in a legal battle against an unforeseen eviction hanging from my door, and she came to the rescue when no one else did. She was kind, helpful and heedful to all my concerns. I had very little time to respond to the actions against and she put the pedal to the metal and worked tirelessly to meet the deadline. We prevailed and we were victorious, and I am thankful I was introduced to Udo. She is a solid choice for an attorney and I highly recommend her.",
      rate:[
        {icon: <AiOutlineStar size={15} className='text-orange' /> },
        {icon: <AiFillStar size={15} className='text-orange' /> },
        {icon: <AiFillStar size={15} className='text-orange' /> },
        {icon: <AiFillStar size={15} className='text-orange' /> },
        {icon: <AiFillStar size={15} className='text-orange' /> },
      ]
    }
  ];

  const shortenText = (text) => {
    const maxLength = 120;
    if (text.length > maxLength && !expanded) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='p-10 md:p-20 lg:p-20 xl:p-32 bg-gray'>
      <div className='p-5 md:p-10'>
        <p className='text-2xl md:text-5xl lg:text-4xl xl:text-5xl text-center'>Client <span className='text-orange'>Testimonials</span></p>
      </div>
      <div className='flex h-[53vh] md:h-[50vh] lg:h-[55vh] xl:h-[50vh]'>
        <div>
          <Image src={up} alt='down-img' className=' h-[100%]' />
        </div>
        {details.map((datum) => (
          <div key={datum.id} className={style.main}>
            <div className='flex items-center justify-between  w-[80%]'>
              <Image src={quo} alt='img-pic' className='w-[10%] md:w-[6%] lg:w-[3%]' />
              <p className='text-xs md:text-2xl lg:text-xl xl:text-2xl font-semibold'>{datum.label}</p>
              <div className='flex flex-row'>
                {datum?.rate?.map((item) => (
                  <p key={item.id} className='flex flex-row'>{item.icon}</p>
                ))}
              </div>
            </div>
            <p className='text-xs text-center md:text-xl lg:text-lg xl:text-xl font-light'>{datum.user}</p>
            <p className='text-xs md:text-lg lg:text-base xl:text-lg font-light text-center w-[90%] md:w-[80%] lg:w-[80%]'>
              {shortenText(datum.desc)}
              {datum.desc.length > 100 && (
                <span className="text-orange text-xs md:text-lg lg:text-base xl:text-lg font-light text-center cursor-pointer" onClick={toggleExpand}>
                  {expanded ? " Read Less" : " Read More"}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Test;