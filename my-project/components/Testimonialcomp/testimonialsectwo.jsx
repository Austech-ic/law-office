"use client"
import React, { useState } from 'react';
import quo from '../../public/img/quo.png'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Consult from '../website/consult'

const Testimonialsectwo = () => {
    const [expanded, setExpanded] = useState(false); // State to track whether testimonial is expanded

    const details = [
        {
            id: 1,
            label: "Superb Lawyer!",
            pic: quo,
            user: "By Joel",
            desc: "I would like to thank Udo for assisting me in a legal battle against an unforeseen eviction hanging from my door, and she came to the rescue when no one else did. She was kind, helpful and heedful to all my concerns. I had very little time to",

            rate: [
                { icon: <AiOutlineStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },

            ]
        },
        {
            id: 2,
            label: "Great lawyer, very helpful and responsive",
            pic: quo,
            user: "By Stuart",
            desc: "Thorough, answers questions in a legal professional way, I am a landlord and she completely understands the needs on both sides and will protect your interests…",
            rate: [
                { icon: <AiOutlineStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },

            ]

        },
        {
            id: 3,
            label: "Excellent Lawyer",
            pic: quo,
            user: "anonymous",
            desc: "Udo is always available for her clients. She puts her clients first, and I highly recommend her. If you have a concern about your case, you can count on speaking directly to her. Udo is an excellent and very skilled attorney that fights and defends",
            rate: [
                { icon: <AiOutlineStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },

            ]

        },
        {
            id: 4,
            label: "Great Lawyer",
            pic: quo,
            user: "By JB (5)",
            desc: "ISimply phenomenal from start to finish! She was very professional, responsive, and empathetic throughout our court needs.",
            rate: [
                { icon: <AiOutlineStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },
                { icon: <AiFillStar size={15} className='text-orange' /> },

            ]

        },


    ]

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
        <div className='bg-gray'>
            <div className='grid lg:grid-cols-2 gap-4  p-6 md:p-12 lg:px-28 lg:py-16 xl:px-40 '>
                {
                    details.map((datum) => (
                        <div key={datum.id} className='flex flex-col gap-2 bg-white rounded-xl p-5 md:p-10'>
                            <div className='flex gap-4'>
                                <div className=' bg-green h-[30px] w-[30px] md:h-[60px] md:w-[60px] lg:h-[40px] lg:w-[40px] flex items-center justify-center rounded-full'>
                                    <Image src={datum.pic} alt='img-pic' className='w-[50%] md:w-[55%] lg:w-[50%]' />
                                </div>
                                <div className=' flex flex-col gap-2 w-full'>
                                    <p className='text-xs md:text-2xl lg:text-xl xl:text-2xl font-semibold text-center lg:h-[8vh]'>{datum.label}</p>
                                    <p className='text-tiny md:text-lg lg:text-xs xl:text-sm font-light text-center'>{datum.user}</p>
                                    <div className='flex  flex-row justify-center'>

                                        {datum?.rate?.map((item) => (
                                            <p key={item.id} className='flex flex-row'>{item.icon}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between  w-[80%]'>


                            </div>

                            <p className='text-xs md:text-lg lg:text-base xl:text-lg font-light text-left'>
                                {shortenText(datum.desc)}
                                {datum.desc.length > 100 && (
                                    <span className="text-orange text-xs md:text-lg lg:text-base xl:text-lg  cursor-pointer" onClick={toggleExpand}>
                                        {expanded ? " Read Less" : " Read More"}
                                    </span>
                                )}
                            </p>

                        </div>
                    ))
                }
            </div>
            <Consult />
            <div className='p-6 md:p-12 lg:px-28 lg:py-16 xl:px-40'>
                <div className='bg-white '>
                    <form 
                   autocomplete='nope'
                    className='p-5 md:p-16 lg:p-28 xl:p-40  flex flex-col  gap-4'>
                        <div className='flex flex-col gap-1 md:gap-2 lg:gap-1'>
                            <label className='text-xs md:text-xl lg:text-base font-light text-slate-500'>Name<span className='text-orange'> *</span></label>
                            <input
                                placeholder='Enter Name'
                                autocomplete='nope'
                                className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2 outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none' />
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 lg:gap-1'>
                            <label className='text-xs md:text-xl lg:text-base font-light text-slate-500'>Email<span className='text-orange'> *</span></label>
                            <input
                                placeholder='Email'
                                autocomplete='nope'
                                className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2  outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none' />
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 lg:gap-1'>
                            <label className='text-xs md:text-xl lg:text-base font-light text-slate-500'>Phone Number<span className='text-orange'> *</span></label>
                            <input
                                placeholder='Phone Number'
                                autocomplete='nope'
                                className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2  outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none' />
                        </div>
                        <div className='flex flex-col gap-1 md:gap-2 lg:gap-1'>
                            <label className='text-xs md:text-xl lg:text-base font-light text-slate-500'>Please briefly describe the service needed<span className='text-orange'> *</span></label>
                            <textarea className='border border-neutral-400 p-1 md:p-2 text-xs md:text-base lg:text-sm bg-gray  outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none' rows="4" cols="50" />
                        </div>
                        <div className='flex items-center justify-center gap-1 md:gap-2 lg:gap-1'>
                            <button className='w-full lg:w-[50%] px-8 py-2 md:py-4 bg-orange text-white text-xs md:text-xl lg:text-sm'>Get An Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Testimonialsectwo