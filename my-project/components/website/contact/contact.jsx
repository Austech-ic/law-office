import Image from 'next/image';
import React from 'react';
import tt from '../../../public/img/tt.jpeg';
import map from '../../../public/img/map.jpeg';
import scr from '../../../public/img/scr.jpeg';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  return (
    <div className="bg-gray p-10 md:p-20 lg:p-20 xl:p-32">
      <div className="bg-white flex flex-col-reverse lg:flex-row  gap-12 md:gap-20 ">
        <div className="flex-1 ">
          <div className="p-5 md:p-10 lg:p-5 xl:p-10">
            <p className="text-2xl md:text-5xl font-bold">
              Get in <span className="text-orange">Touch</span>
            </p>
            <p className="text-xs md:text-xl lg:text-sm xl:text-base mt-4 font-semibold">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <form className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
                <label className="text-sm md:text-xl lg:text-base font-light text-slate-500">
                  Name<span className="text-orange"> *</span>
                </label>
                <input
                  placeholder="Enter Name"
                  className="border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
                <label className="text-sm md:text-xl lg:text-base font-light text-slate-500 ">
                  Email<span className="text-orange"> *</span>
                </label>
                <input
                  placeholder="Email"
                  className="border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
                <label className="text-sm md:text-xl lg:text-base font-light text-slate-500 ">
                  Phone number<span className="text-orange"> *</span>
                </label>
                <input
                  placeholder="Phone number"
                  className="border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
                <label className="text-sm md:text-xl lg:text-base font-light text-slate-500">
                  Please briefly describe the service needed
                  <span className="text-orange"> *</span>
                </label>
                <textarea
                  className="border border-neutral-400 p-1 md:p-2 text-xs md:text-base lg:text-sm bg-gray"
                  rows="4"
                  cols="50"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
                <button className="px-8 py-2 bg-orange text-white">Send</button>
              </div>
            </form>

            <div className=" flex flex-col  lg:flex-row justify-center lg:items-center gap-y-1 gap-x-6 md:gap-x-10">
              <div className="flex items-center gap-2 flex-1">
                <IoCallOutline className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
                <div>
                  <p className="text-orange text-xs md:text-sm lg:text-xs xl:text-sm">
                    Call Us On:
                  </p>
                  <p className="text-xs md:text-xl lg:text-sm xl:text-sm ">
                    562-219-0089
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <MdOutlineMailOutline className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
                <div>
                  <p className="text-orange text-xs md:text-xl lg:text-sm xl:text-sm">
                    Email Us On:
                  </p>
                  <p className="text-xs md:text-xl lg:text-sm xl:text-sm">
                    Alphaadvocatelaw@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <Image
            src={tt}
            alt="bl-img"
            style={{ width: '50rem', height: '100%', objectFit: 'fit' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
