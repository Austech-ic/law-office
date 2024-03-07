import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import Consult from '../website/consult';

const Ownersectwo = () => {
    return (
       <div className=' bg-gray '>
         <div className='flex flex-col gap-4 p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 '>
            <div className='py-2 md:py-4'>
                <p className='text-base md:text-2xl lg;text-2xl font-semibold'>Effective California Law Firm Represents Property Owners in Landlord-Tenant Disputes</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Skilled lawyer resolves legal issues for owners of rental properties in the Cerritos area</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>As an experienced real estate litigator, the attorney with Alpha Advocate Law Group PC represents property owners in the Cerritos area and throughout California in landlord-tenant matters. We are dedicated to preserving the profitability and equity of landlords in conflicts over lease terms, property use, or any other issues affecting their ability to manage their rentals. Whether your tenants are individual residents or large commercial businesses, we will advocate for you when legal concerns arise.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Experienced real estate adviser handles a range of landlord-tenant issues</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>California and local laws outline the rights and responsibilities of property owners who rent to individuals or businesses. We have committed our substantial knowledge of real estate, contract law and property rights to representing California landlords in cases involving:</p>
                <ul class="list-disc px-10 text-xs md:text-xl lg:text-sm xl:text-base">
                    <li>Leases</li>
                    <li>Landlord-tenant disputes</li>
                    <li>Eviction proceedings for irresponsible or nonpaying tenants</li>
                    <li>Collecting from nonpaying tenant</li>
                    <li>Defending against accusations of discrimination</li>
                </ul>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>We help landlords to maintain the integrity and profitability of their properties by offering knowledgeable counsel on these and other issues. We are committed to helping you resolve problems involving your tenants or your property.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Detail-oriented attorney drafts solid leases for property owners</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>Landlords can avoid potential problems by having a well-drafted contract that enumerates all rental terms. We discuss the particulars of your property and its occupancy to construct clear, detailed leases that cover all aspects of your rental agreement. When you present a lease to a prospective tenant, you will feel confident that it is in compliance with California law and that your rights are protected should a dispute arise.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-orange text-sm md:text-2xl lg:text-lg xl:text-2xl'>Responsive lawyer assists with evictions</p>
                <p className='text-xs md:text-xl lg:text-sm xl:text-base'>If your tenants are violating the terms of the lease by damaging your property or failing to make rent payments, eviction offers a legal remedy. But its important to realize that this process is not only disruptive to the tenant but will require the investment on your part of both time and money and may mean your rental is unoccupied longer than you like. With this scenario in mind, we can help mediate disputes when eviction is undesirable. In any case, if your tenants are engaged in disruptive, illegal or damaging behavior, we will help you to protect your property and your investment.</p>
            </div>
           
        </div>
        <Consult />



       </div>


    )
}

export default Ownersectwo