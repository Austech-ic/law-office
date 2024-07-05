import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { MdLocationPin, MdOutlineMailOutline } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Contsecone = () => {
  return (
    <div className="p-6 md:p-12 lg:px-28 lg:py-10 xl:px-40 bg-gray flex flex-col gap-10 md:gap-16 lg:gap-20">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <p className="text-orange text-lg md:text-3xl lg:text-xl xl:text-2xl ">
            Say Hello to Udo Uchenna
          </p>
          <p className="text-xs md:text-xl lg:text-base font-light">
            Connect with us!! Drop a Line, Say Hello, and Lets Navigate Your
            Legal Journey Together. Kindly Fill Out The Form Below{' '}
          </p>
        </div>
        <div className="border border-r border-slate-400 hidden lg:block"></div>
        <div className="flex-1">
          <p className="text-orange text-lg md:text-3xl lg:text-xl xl:text-2xl">
            California
          </p>
          <p className="text-xs md:text-xl lg:text-base font-light">
            11432 South Street
          </p>
          <p className="text-xs md:text-xl lg:text-base font-light">
            alphaadvocatelaw@gmail.com
          </p>
          <p className="text-xs md:text-xl lg:text-base font-semibold">
         562-456-3016
          </p>
        </div>
      </div>
      <div className="bg-white ">
        <form
          autocomplete="nope"
          className="p-5 md:p-16 lg:p-20  flex flex-col  gap-4"
        >
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
            <label className="text-xs md:text-xl lg:text-base font-light text-slate-500">
              Name<span className="text-orange"> *</span>
            </label>
            <input
              placeholder="Enter Name"
              autocomplete="nope"
              className=" border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2 outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
            <label className="text-xs md:text-xl lg:text-base font-light text-slate-500">
              Email<span className="text-orange"> *</span>
            </label>
            <input
              placeholder="Email"
              autocomplete="nope"
              className="border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2 outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
            <label className="text-xs md:text-xl lg:text-base font-light text-slate-500">
              Phone Number<span className="text-orange"> *</span>
            </label>
            <input
              placeholder="Phone Number"
              autocomplete="nope"
              className="border border-neutral-400 md:p-3 text-xs md:text-base lg:text-sm bg-gray p-1 lg:p-2 outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-1">
            <label className="text-xs md:text-xl lg:text-base font-light text-slate-500">
              Please briefly describe the service needed
              <span className="text-orange"> *</span>
            </label>
            <textarea
              className="border border-neutral-400 p-1 md:p-2 text-xs md:text-base lg:text-sm bg-gray outline-none focus-visible:bg-slate-200 focus-visible:text-white focus-visible:border-none"
              rows="4"
              cols="50"
            />
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-1">
            <button className="w-full lg:w-[50%] px-8 py-2 md:py-4 bg-orange text-white text-xs md:text-xl lg:text-sm">
              Get An Appointment
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col lg:flex-row flex-1 bg-green gap-4 lg:gap-8 xl:gap-10 p-5">
          <div className="flex items-center gap-2">
            <IoCallOutline className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
            <div className="text-white">
              <p className="text-orange text-xs md:text-xl lg:text-xs xl:text-sm">
                Call Us On:
              </p>
              <p className="text-xs md:text-xl lg:text-sm xl:text-sm ">
             562-456-3016
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <MdOutlineMailOutline className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
            <div className="text-white">
              <p className="text-orange text-xs md:text-xl lg:text-sm xl:text-sm">
                Email Us On:
              </p>
              <p className="text-xs md:text-xl lg:text-sm xl:text-sm">
                alphaadvocatelaw@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-green flex-1 p-5">
          <div>
            <MdLocationPin className="text-orange w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px] xl:w-[20px] xl:h-[20px] " />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-orange text-sm md:text-xl lg:text-sm">
              Main Office :
            </p>
            <p className="text-white text-xs md:text-lg lg:text-xs">
              11432 South Street, Suite 373 Cerritos, California 90703-6611
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contsecone;
