"use client"
import React from 'react'
import wom from '../../public/img/wom.jpeg'
import Consult from '../website/consult'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'; 


const Successcomptwo = () => {
    const router = useRouter(); // No need to useState for router
    const details = [
        {
            id:1,
            pic:wom,
            date:"18-08-2020",
            label:"Korem ipsum dolor sit amet",
            desc:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",

        },
        {
            id:2,
            pic:wom,
            date:"18-08-2020",
            label:"Korem ipsum dolor sit amet",
            desc:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            
        },
        {
            id:3,
            pic:wom,
            date:"18-08-2020",
            label:"Korem ipsum dolor sit amet",
            desc:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            
        },
        {
            id:4,
            pic:wom,
            date:"18-08-2020",
            label:"Korem ipsum dolor sit amet",
            desc:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            
        },
        {
            id:5,
            pic:wom,
            date:"18-08-2020",
            label:"Korem ipsum dolor sit amet",
            desc:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            
        },
        {
            id:6,
            pic:wom,
            date:"18-08-2020",
            label:"Korem ipsum dolor sit amet",
            desc:"There are  of Lorem Ipsum available, but majority have su alteration in some form, by injected oir  which don't look even slightly believable.",
            
        }
    ]
    const handleReadMoreClick = (id) => {
        // Use router.push to navigate to the individual case page
        router.push(`/singlecase/${id}`);
    };

  return (
    <div className=''>
        <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 bg-gray grid lg:grid-cols-2 gap-8 md:gap-10'>
         {
            details.map((datum) => (
                <div key={datum.id} className='flex flex-col gap-2 bg-white shadow-2xl '>
                    <Image src={datum.pic} alt='pic-img' />
                  <div className='p-5'>
                  <p className='text-xs md:text-xl lg:text-sm xl:text-base'>{datum.date}</p>
                    <p className='text-sm md:text-2xl lg:text-base xl:text-lg text-orange'>{datum.label}</p>
                    <p className='text-xs md:text-xl lg:text-sm xl:text-base' >{datum.desc}</p>
                    <button onClick={() => handleReadMoreClick(datum.id)} className='text-orange text-start text-xs md:text-xl lg:text-sm xl:text-base underline'>Read More</button>
                    </div>
                  

                </div>
            ))
         }
        </div>
        <Consult />
        </div>
  )
}

export default Successcomptwo