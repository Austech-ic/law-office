"use client"

import Image from 'next/image'
import React from 'react'
import tt from '../../../public/img/tt.jpeg'
import map from '../../../public/img/map.jpeg'
import scr from '../../../public/img/scr.jpeg'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Contact = () => {
  const sendToWhatsApp = (values) => {
    const phoneNumber = "+23437305635"; // Your WhatsApp phone number
    const message = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };



  return (
    <div className='bg-gray p-10 md:p-20 lg:p-20 xl:p-32'>


      <div className='bg-white flex flex-col-reverse lg:flex-row  gap-12 md:gap-20 '>
        <div className='flex-1 '>
          <div className='p-5 md:p-10 lg:p-5 xl:p-10'>
          <p className='text-2xl md:text-5xl font-bold'>Get in <span className='text-orange'>Touch</span></p>
<p className='text-xs md:text-xl lg:text-sm xl:text-base mt-4 font-semibold'>Our team of experienced attorneys is here to provide you with expert legal advice and representation. Contact us today to schedule a consultation.</p>



            <Formik
              initialValues={{
                name: '',
                email: '',
                phone:'',
                message: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Full Name is required'),
                email: Yup.string().required('Email is required'),
                phone: Yup.string().required('Phone Number is required'),
                message: Yup.string().required('Service needed is required'),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                sendToWhatsApp(values);
                resetForm();
                setSubmitting(false);
              }}
            >
              <Form  className='flex flex-col gap-4 py-4' autoComplete='off'>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Name<span className='text-orange'> *</span>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2'


                  />
                  <ErrorMessage name="name" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Email<span className='text-orange'> *</span>
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder='Email'
                    className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2'


                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Phone number<span className='text-orange'> *</span>
                  </label>
                  <Field
                    type="number"
                    name="phone"
                    placeholder='+234 811 22 3334'
                    className='border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2'


                  />
                  <ErrorMessage name="phone" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                </div>

                <div className='flex flex-col gap-2'>
                <label className='text-sm md:text-xl lg:text-base font-light text-slate-500'>Please briefly describe the service needed<span className='text-orange'> *</span></label>
                <Field
                                    as="textarea"
                                    
                                    placeholder="Write Your Message"
                                    name="message"
                                    className='border border-neutral-400 p-1 md:p-2 text-xs md:text-base lg:text-sm bg-gray' rows="4" cols="50" 
                                    style={{ width: '100%' }} // Set width to 100%
                                />
                  <ErrorMessage name="message" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                </div>
              


                <div className='flex flex-col gap-1 md:gap-2 lg:gap-1'>
                  <button 
                    type="submit"
                  className='px-8 py-2 bg-orange text-white'>Send</button>
                </div>

                
              </Form>
            </Formik>

           
            <div className=' flex flex-col  lg:flex-row justify-center lg:items-center gap-y-1 gap-x-6 md:gap-x-10'>
              <div className='flex items-center gap-2 flex-1'>
                <IoCallOutline className='text-orange w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
                <div>
                  <p className='text-orange text-xs md:text-sm lg:text-xs xl:text-sm'>Call Us On:</p>
                  <p className='text-xs md:text-xl lg:text-sm xl:text-sm '> 562-219-0089</p>
                </div>
              </div>
              <div className='flex items-center gap-2 flex-1'>
                <MdOutlineMailOutline className='text-orange w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
                <div>
                  <p className='text-orange text-xs md:text-xl lg:text-sm xl:text-sm'>Email Us On:</p>
                  <p className='text-xs md:text-xl lg:text-sm xl:text-sm'>alphaadvocatelaw@gmail.com</p>
                </div>
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