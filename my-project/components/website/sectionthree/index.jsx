import React from 'react'
import One from '../../../public/img/one.jpeg'
import Two from '../../../public/img/two.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Index = () => {
    const details = [
        {
            id:1,
            pic:One,
            label:'Landlord-Tenant Law For Renters',
            text:'As an experienced real estate litigator, the attorney with Alpha Advocate Law Group PC represents property owners in the Cerritos area and throughout California in landlord-tenant matters. We are....',
            button:<Link href={`/renter`}>
        <button className='border border-orange px-4 py-2 md:px-8 md:py-4 lg:py-2 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button>
            </Link>


        },
        {
            id:2,
            pic:Two,
            label:'Landlord-Tenant Law For Property Owners',
            text:'People who rent properties to live in or conduct business have rights under their lease agreements that must be upheld. As an experienced real estate litigator, the attorney with Alpha Adv...',
            button:<Link href={`/owner`}>
            <button className='border border-orange px-4 py-2 md:px-8 md:py-4 lg:py-2 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button>
                </Link>

        },
        {
            id:3,
            pic:Two,
            label:'Personal Injury',
            text:'People who rent properties to live in or conduct business have rights under their lease agreements that must be upheld. As an experienced real estate litigator, the attorney with Alpha Adv...',
            button:<Link href={`/personalinjury`}>
            <button className='border border-orange px-4 py-2 md:px-8 md:py-4 lg:py-2 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button>
                </Link>

        },
        {
            id:4,
            pic:Two,
            label:'Slum Lord Litigation',
            text:'People who rent properties to live in or conduct business have rights under their lease agreements that must be upheld. As an experienced real estate litigator, the attorney with Alpha Adv...',
            button:<button className='border border-orange px-4 py-2 md:px-8 md:py-4 lg:py-2 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button>

        },
        {
            id:5,
            pic:Two,
            label:'Corprate Pratice',
            text:'People who rent properties to live in or conduct business have rights under their lease agreements that must be upheld. As an experienced real estate litigator, the attorney with Alpha Adv...',
            button:<button className='border border-orange px-4 py-2 md:px-8 md:py-4 lg:py-2 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button>

        },
        {
            id:6,
            pic:Two,
            label:'Restraining Orders',
            text:'People who rent properties to live in or conduct business have rights under their lease agreements that must be upheld. As an experienced real estate litigator, the attorney with Alpha Adv...',
            button:<button className='border border-orange px-4 py-2 md:px-8 md:py-4 lg:py-2 bg-transparent text-orange text-xs md:text-xl lg:text-base xl:text-lg'>Learn More</button>

        },
    ]
  return (
    <div className='p-10 md:p-20 lg:p-20 xl:p-32'>
        <div className='p-5 md:p-10'>
        <p className='text-2xl md:text-5xl lg:text-4xl xl:text-5xl  text-center'>Our <span className='text-orange'>Services</span></p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
           {
            details.map((datum) => (
                <div key={datum.id} className='border border-gray flex flex-col items-center p-5 md:p-10 lg:p-5 gap-4 md:gap-6 shadow-md'>
                    <Image src={datum.pic} alt='pic-img' className='w-[30%] md:w-[15%] lg:w-[25%] xl:w-[20%]' />
                    <p className='text-center  text-sm md:text-2xl lg:text-base xl:text-lg md:h-[5vh] lg:h-[7vh] font-medium'>{datum.label}</p>
                    {/* <p className='text-center lg:text-start font-light text-xs md:text-xl lg:text-base xl:text-lg'>{datum.text}</p> */}
                    <p className='text-center lg:text-start'>{datum.button}</p>
                    </div>
            ))
           }
        </div>
    </div>
  )
}

export default Index 