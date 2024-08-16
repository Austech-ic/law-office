"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import tt from '../../../public/img/tt.jpeg'
import map from '../../../public/img/map.jpeg'
import scr from '../../../public/img/scr.jpeg'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'


const Contact = () => {

  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone Number is required'),
      message: Yup.string().required('Service needed is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
        setFormSubmitted(true); // Set form submission state to true on success
        resetForm();
      } catch (error) {
        console.error('Error sending email:', error.message); // Log specific error message
        return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
      } finally {
        setSubmitting(false);
      }
    },
  });



  return (
    <div className='bg-gray p-10 md:p-20 lg:p-20 xl:p-32'>


      <div className='bg-white flex flex-col-reverse lg:flex-row  gap-12 md:gap-20 '>
        <div className='flex-1 '>
          <div className='p-5 md:p-10 lg:p-5 xl:p-10'>
          <p className='text-2xl md:text-5xl font-bold'>Get in <span className='text-orange'>Touch</span></p>
<p className='text-xs md:text-xl lg:text-sm xl:text-base mt-4 font-semibold'>Our team of experienced attorneys is here to provide you with expert legal advice and representation. Contact us today to schedule a consultation.</p>



<div className='flex-1 bg-red-300'>
{formSubmitted ? (
        <div className='bg-white p-5 md:p-16 lg:p-20 flex justify-center items-center text-center h-[50vh] '>
          <p className='text-green-600 text-lg md:text-2xl lg:text-xl text-orange'>Message sent successfully!</p>
        </div>
      ) : (
        <div className='bg-white '>
          <form onSubmit={formik.handleSubmit} className='mt-5 mb-5 flex flex-col gap-4' autoComplete='off'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Name<span className='text-orange'> *</span></label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2'
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600 text-xs md:text-xl lg:text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Email<span className='text-orange'> *</span></label>
              <input
                type="text"
                name="email"
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2'
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-xs md:text-xl lg:text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Phone number<span className='text-orange'> *</span></label>
              <input
                type="number"
                name="phone"
                placeholder='+234 811 22 3334'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2'
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-600 text-xs md:text-xl lg:text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Please briefly describe the service needed<span className='text-orange'> *</span></label>
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border border-neutral-400 p-1 md:p-2 text-xs md:text-base lg:text-sm bg-gray' rows="4" cols="50"
                style={{ width: '100%' }} // Set width to 100%
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-600 text-xs md:text-xl lg:text-sm">{formik.errors.message}</div>
              ) : null}
            </div>

            <div className='flex flex-col gap-1 md:gap-2 lg:gap-1'>
              <button
                type="submit"
                className='px-8 py-2 bg-orange text-white'
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      )}
</div>

           
            <div className=' flex flex-col  lg:flex-row justify-center lg:items-center gap-y-1 gap-x-6 md:gap-x-10'>
              <div className='flex items-center gap-2 flex-1'>
                <IoCallOutline className='text-orange w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
                <Link href="tel:562-219-0089">
                <div>
                  <p className='text-orange text-xs md:text-sm lg:text-xs xl:text-sm'>Call Us On:</p>
                  <p className='text-xs md:text-xl lg:text-sm xl:text-sm '> 562-219-0089</p>
                </div>
                </Link>
              </div>
              <div className='flex items-center gap-2 flex-1'>
                <MdOutlineMailOutline className='text-orange w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
                <Link href="mailto:alphaadvocatelaw@gmail.com" >
                <div>
                  <p className='text-orange text-xs md:text-xl lg:text-sm xl:text-sm'>Email Us On:</p>
                  <p className='text-xs md:text-xl lg:text-sm xl:text-sm'>alphaadvocatelaw@gmail.com</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 '>

          <Image src={tt} alt='bl-img' style={{ width: '50rem', height: '100%', objectFit: 'fit' }} />
        </div>



      </div>
    </div>
  )
}

export default Contact 