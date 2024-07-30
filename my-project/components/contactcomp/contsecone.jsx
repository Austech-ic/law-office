"use client"

import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Contsecone = () => {

  const sendToWhatsApp = (values) => {
    const phoneNumber = "+23437305635"; // Your WhatsApp phone number
    const message = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className='p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 bg-gray flex flex-col gap-10 md:gap-16 lg:gap-20'>
       <div className='flex flex-col lg:flex-row gap-6'>
       <div className='flex-1'>
        <p className='text-orange text-lg md:text-3xl lg:text-xl xl:text-2xl '>Say Hello to Udo Uchenna Ekekeulu</p>
        <p className='text-xs md:text-xl lg:text-base font-light'>Connect with us!! Drop a Line, Say Hello, and Lets Navigate Your Legal Journey Together. Kindly Fill Out The Form Below </p>
       </div>
       <div className='border border-r border-slate-400 hidden lg:block'></div>
       <div className='flex-1'>
        <p className='text-orange text-lg md:text-3xl lg:text-xl xl:text-2xl'>California</p>
        <p className='text-xs md:text-xl lg:text-base font-light'>11432 South Street</p>
        <p className='text-xs md:text-xl lg:text-base font-light'>alphaasvocatelaw@gmail.com</p>
        <p className='text-xs md:text-xl lg:text-base font-semibold'>562-219-0089</p>
       </div>
       </div>
       <div className='bg-white '>

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
              <Form   className='p-5 md:p-16 lg:p-20  flex flex-col  gap-4' autoComplete='off'>
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


    
       </div>
      <div className='flex flex-col lg:flex-row gap-6'>
      <div className='flex flex-col lg:flex-row flex-1 bg-green gap-4 lg:gap-8 xl:gap-10 p-5' >
       <div className='flex items-center gap-2'>
        <IoCallOutline  className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] '/>
        <div className='text-white'>
          <p className='text-orange text-xs md:text-xl lg:text-xs xl:text-sm'>Call Us On:</p>
          <p className='text-xs md:text-xl lg:text-sm xl:text-sm '>562-219-0089</p>
        </div>
        </div>
        <div className='flex items-center gap-2 '>
        <MdOutlineMailOutline  className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] '/>
        <div className='text-white'>
          <p className='text-orange text-xs md:text-xl lg:text-sm xl:text-sm'>Email Us On:</p>
          <p className='text-xs md:text-xl lg:text-sm xl:text-sm'>Alphaadvocatelaw@gmail.com</p>
        </div>
        </div> 
       
        
       </div>
       <div className='flex items-center gap-4 bg-green flex-1 p-5'>
       <div>
        <MdLocationPin className='text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] ' />
       </div>
       <div className='flex flex-col gap-1'>
        <p className='text-orange text-sm md:text-xl lg:text-sm'>Main Office :</p>
        <p className='text-white text-xs md:text-lg lg:text-xs'>11432 South Street, Suite 373Cerritos, California 90703-6611</p>
       </div>
        </div> 
      </div>
        </div>
  )
}

export default Contsecone