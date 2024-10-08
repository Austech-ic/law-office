"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contsecone = () => {
  const [address] = useState("11432 South Street, Suite 373Cerritos, California 90703-6611");
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleAddressClick = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

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
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 bg-gray flex flex-col gap-10 md:gap-16 lg:gap-20'>
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-1'>
          <p className='text-orange text-lg md:text-3xl lg:text-xl xl:text-2xl '>Say Hello to Udo Uchenna Ekekeulu</p>
          <p className='text-xs md:text-xl lg:text-base font-light'>Connect with us!! Drop a Line, Say Hello, and Let Us Navigate Your Legal Journey Together. Kindly Fill Out The Form Below</p>
        </div>
        <div className='border border-r border-slate-400 hidden lg:block'></div>
        <div className='flex-1'>
          <p className='text-orange text-lg md:text-3xl lg:text-xl xl:text-2xl'>California</p>
          <p className='text-xs md:text-xl lg:text-base font-light'>11432 South Street</p>
          <p className='text-xs md:text-xl lg:text-base font-light'>alphaasvocatelaw@gmail.com</p>
          <Link href="tel:562-219-0089">
            <p className='text-tiny md:text-xl lg:text-xs xl:text-sm font-semibold'>562-219-0089</p>
          </Link>
        </div>
      </div>

      {formSubmitted ? (
        <div className='bg-white p-5 md:p-16 lg:p-20 text-center h-[30vh] md:h-[50vh] flex justify-center items-center'>
         <p className='text-green-600 text-sm md:text-3xl lg:text-lg xl:text-xl '>Message sent successfully!</p>
        </div>
      ) : (
        <div className='bg-white'>
          <form onSubmit={formik.handleSubmit} className='p-5 md:p-16 lg:p-20 flex flex-col gap-4' autoComplete='off'>
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

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row justify-start flex-1 bg-green gap-4 lg:gap-4 xl:gap-10 p-5'>
          <div className='flex items-center gap-2 md:gap-4 flex-1'>
            <IoCallOutline className='text-orange w-[12px] h-[12px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px]' />
            <div className='text-white'>
              <p className='text-orange text-xs md:text-xl lg:text-xs xl:text-sm'>Call Us On:</p>
              <Link href="tel:562-219-0089">
                <p className='text-xs md:text-xl lg:text-sm xl:text-sm'>562-219-0089</p>
              </Link>
            </div>
          </div>
          <div className='flex items-center flex-1 gap-2 md:gap-4'>
            <MdOutlineMailOutline className='text-orange w-[12px] h-[12px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px]' />
            <div className='text-white'>
              <p className='text-orange text-xs md:text-xl lg:text-sm xl:text-sm'>Email Us On:</p>
              <Link href="mailto:Alphaadvocatelaw@gmail.com">
                <p className='text-xs md:text-xl lg:text-sm xl:text-sm'>Alphaadvocatelaw@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contsecone;
