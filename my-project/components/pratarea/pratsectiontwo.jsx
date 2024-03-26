import React from 'react'
import One from '../../public/img/one.png'
import Two from '../../public/img/two.png'
import Image from 'next/image'
import Link from 'next/link'

const Pratsectiontwo = () => {
    const details = [
        {
            id:1,
            pic:One,
            label:'Landlord-Tenant Law For Property Owners ',
            text:'As an experienced real estate litigator, the attorney with Alpha Advocate Law Group PC represents property owners in the Cerritos area and throughout California in landlord-tenant matters. We are....',
            button:<Link href={`/owner`}><button className='border border-orange px-4 py-2 md:px-8 md:py-4 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button></Link>


        },
        {
            id:2,
            pic:Two,
            label:'Landlord-Tenant Law For Renters',
            text:'People who rent properties to live in or conduct business have rights under their lease agreements that must be upheld. As an experienced real estate litigator, the attorney with Alpha Adv...',
            button:<Link href={`/renter`}><button className='border border-orange px-4 py-2 md:px-8 md:py-4 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button></Link>

        }
    ]
  return (
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 bg-gray'>
    <div className='py-3 md:py-5 lg:py-16'>
    <p className='text-2xl md:text-5xl lg:text-4xl xl:text-5xl  text-center '>Explore Our <span className='text-orange'>Practice</span> Area</p>
     <p className='py-5 font-light text-center text-xs md:text-xl lg:text-lg xl:text-lg'>Welcome to our Explore Our Practice Area page, where the intricate tapestry of our legal expertise unfolds. Each section is meticulously crafted to guide you through the nuances of your legal concerns. Whether you are a property owner seeking sound advice or a tenant navigating rights, we are here to offer clarity, support, and a steadfast commitment to justice. </p>
    </div>
    <div className='grid lg:grid-cols-2 gap-8 py-10 md:py-20'>
           {
            details.map((datum) => (
                <div key={datum.id} className='bg-white border border-white flex flex-col items-center p-5 md:p-10 lg:p-5 gap-4 md:gap-6 shadow-md'>
                    <Image src={datum.pic} alt='pic-img' className='w-[30%] md:w-[15%] lg:w-[25%] xl:w-[20%]' />
                    <p className='text-center lg:text-start text-sm md:text-2xl lg:text-base xl:text-xl font-semibold'>{datum.label}</p>
                    <p className='text-center lg:text-start font-light text-xs md:text-xl lg:text-base xl:text-lg'>{datum.text}</p>
                    <p className='text-center lg:text-start'>{datum.button}</p>
                    </div>
            ))
           }
        </div>
        </div>
  )
}

export default Pratsectiontwo