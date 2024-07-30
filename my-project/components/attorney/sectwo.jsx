import React from 'react';
import Image from 'next/image';
import Grad from '../../public/img/gg.jpeg';
import Gradt from '../../public/img/gradt.jpeg';

const Sectwo = () => {
  return (
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40'>
      <div className='flex flex-col gap-2 md:gap-6'>
        <p className='text-xl md:text-5xl lg:text-3xl xl:text-4xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight text-center'>
          About <span className='text-orange'>Udo Ekekeulu.</span>
        </p>
        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
          At Alpha Advocate Law Group PC, we are a team of dedicated and experienced attorneys committed to providing exceptional legal representation to our clients. With a comprehensive understanding of the law and a passion for justice, we strive to protect the rights and interests of individuals and businesses across a wide range of practice areas.

        </p>
        <div>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-semibold'> Personal Injury</p>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
            If you or a loved one has been injured due to someone else negligence, our personal injury attorneys are here to fight for the compensation you deserve. We handle cases involving car accidents, slip and falls, medical malpractice, and more. Our goal is to alleviate the financial burden and emotional stress associated with your injuries, ensuring you receive fair and just compensation
          </p>
        </div>

        <div>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-semibold'> Landlord/Tenant Law</p>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
            Navigating the intricate web of landlord-tenant laws can be daunting. We are well-versed in this area of law and can provide valuable guidance and representation for both landlords and tenants. Whether you are facing eviction, need assistance with lease agreements, or have disputes over security deposits, we are here to protect your rights and ensure a fair resolution.
          </p>
        </div>

        <div>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-semibold'> Slum Lord Litigation
          </p>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
            In the complex realm of slum lord litigation, We possess the expertise and tenacity to represent your interests effectively. We handle cases involving poor housing conditions (habitability), contract disputes, and other legal matters related to slum lord transactions. Our team will work tirelessly to safeguard your rights and pursue the best possible outcome for your case.

          </p>
        </div>

        <div>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-semibold'> Corprate Practice

          </p>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
            For businesses of all sizes, we offer comprehensive legal services tailored to your specific needs. We provide strategic guidance and representation to ensure your business operates within legal boundaries and maximizes its potential for growth and success.
          </p>
        </div>

        <div>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-semibold'>Restraining Orders

          </p>
          <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
            In cases where personal safety is a concern, we can assist in obtaining restraining orders. We understand the delicate nature of these situations and will handle your case with the utmost sensitivity and professionalism. Our goal is to ensure your protection and provide you with the legal support you need during these challenging times.
          </p>
        </div>

        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
          At Alpha Advocate Law Group PC, we pride ourselves on our commitment to excellence, integrity, and personalized attention to each clients unique needs. Our team is are dedicated to providing compassionate and effective legal representation, ensuring your rights are protected and your best interests are always at the forefront.Contact us today to schedule a consultation and learn how we can assist you with your legal matter.

        </p>




      </div>
      <div className='flex flex-col-reverse lg:flex-row py-10 lg:py-20 gap-16'>
        <div className='flex-1 flex flex-col gap-2 md:gap-4'>
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>Bar Association Membership:
            </p>
            <ul className='list-disc px-6 py-2 text-xs md:text-lg lg:text-base'>
              <li className='decoration-dotted'>2019 Californian Bar Association.
              </li>
              <li>2009 Nigerian Bar Association</li>
            </ul>
          </div>
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>Education</p>
            <ul className='list-disc px-6 py-2 text-xs md:text-lg lg:text-base'>
              <li className='decoration-dotted py-2'>Nigerian Law School (Bwari).
              <p className='text-xs md:text-lg lg:text-base '>Law Practice Licence.</p>

              </li>
              <li>University of Calabar
              </li>
              <p className='text-xs md:text-lg lg:text-base  '>Bachelor of Law- LLB.</p>
            </ul>
        
          </div>
         
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>Associations & Memberships</p>
            <ul className='list-disc px-6 py-2 text-xs md:text-lg lg:text-base'>
              <li>Consumer Attorneys Association of Los Angeles (CAALA)</li>
              <li>Los Angeles County Bar Association ( LACBA)</li>
              <li>California Lawyers Association (CLA)</li>
            </ul>
          </div>
        </div>
        <div className='flex-1'>
          <Image src={Grad} alt='grad-img' />
        </div>
      </div>
    </div>
  );
};

export default Sectwo;
