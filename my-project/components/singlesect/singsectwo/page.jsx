import Image from 'next/image'
import React from 'react'
import wom from '../../../public/img/wom.jpeg'
import { IoCallOutline } from "react-icons/io5";
import styles from './singsectwo.module.css'

const page = () => {
  return (
    <div className="px-6 py-10 md:p-20 lg:px-28 lg:py-20 xl:px-40 bg-gray ">
      <div>
        <Image src={wom} alt="img-pic" className="w-full" />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0 py-10">
        <div className="flex-1 flex flex-col gap-4 px-4">
          <div>
            <p className="text-orange text-sm md:text-2xl lg:text-xl xl:text-2xl py-2 font-semibold">
              Horem ipsum dolor sit amet,{' '}
            </p>
            <p className="w-[100%] lg:w-[90%] text-xs md:text-xl lg:text-sm xl:text-base">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-orange text-sm md:text-2xl lg:text-xl xl:text-2xl py-2 font-semibold">
              Horem ipsum dolor sit amet,{' '}
            </p>
            <p className="w-[100%] lg:w-[90%] text-xs md:text-xl lg:text-sm xl:text-base">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            <div className="py-4 lg:py-8">
              <Image src={wom} alt="img-pic" className="w-full" />
            </div>
          </div>
          <div>
            <p className="text-orange text-sm md:text-2xl lg:text-xl xl:text-2xl py-2 font-semibold">
              Horem ipsum dolor sit amet,{' '}
            </p>
            <p className="w-[100%] lg:w-[90%] text-xs md:text-xl lg:text-sm xl:text-base">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros
              tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
              vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
              vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu
              mauris a, blandit ultrices nibh. Mauris sit amet{' '}
            </p>
          </div>
        </div>
        <div className="flex-[0.5] flex flex-col gap-3 md:gap-10 lg:gap-3 bg-white">
          <div className="bg-green text-white p-5 md:p-10 lg:p-5 xl:p-8">
            <p className="text-xl md:text-4xl lg:text-2xl xl:text-2xl">
              Case Details
            </p>
            <div className="flex flex-col gap-4 py-5">
              <div className="flex flex-col ">
                <p className="text-sm md:text-xl lg:text-base xl:text-base">
                  Case Type
                </p>
                <p className="text-xs md:text-base lg:text-xs xl:text-xs font-light">
                  Landlord-Tenant Law For Renters{' '}
                </p>
              </div>
              <div className="border border-white"></div>
              <div className="flex flex-col">
                <p className="text-sm md:text-xl lg:text-base xl:text-base">
                  Client
                </p>
                <p className="text-xs md:text-base lg:text-xs xl:text-xs font-light">
                  Norem Norem
                </p>
              </div>
              <div className="border border-white"></div>

              <div className="flex flex-col ">
                <p className="text-sm md:text-xl lg:text-base xl:text-base">
                  Date
                </p>
                <p className="text-xs md:text-base lg:text-xs xl:text-xs font-light">
                  20 Febuary 2024
                </p>
              </div>
              <div className="border border-white"></div>

              <div className="flex flex-col">
                <p className="text-sm md:text-xl lg:text-base xl:text-base">
                  Time Frame
                </p>
                <p className="text-xs md:text-base lg:text-xs xl:text-xs font-light">
                  22 Days
                </p>
              </div>
              <div className="border border-white"></div>

              <div className="flex flex-col">
                <p className="text-sm md:text-xl lg:text-base xl:text-base">
                  Case Status
                </p>
                <p className="text-xs md:text-base lg:text-xs xl:text-xs font-light">
                  Won
                </p>
              </div>
              <div className="border border-white"></div>
            </div>
          </div>

          <div className="p-4">
            <div className=" border border-slate-400 p-3 md:p-6 lg:p-3 border-4 flex flex-col gap-2">
              <p className="text-lg md:text-3xl lg:text-lg xl:text-xl  font-medium lg:text-center">
                Get a Free <br /> Consultation
              </p>
              <p className="text-xs md:text-xl lg:text-xs xl:text-sm font-extralight text-start">
                We are available to assist you with your legal case
              </p>
              <div>
                <div className="flex gap-2 md:gap-4 lg:gap-2 items-center py-2 md:py-5">
                  <div className="bg-orange text-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] flex items-center justify-center">
                    <IoCallOutline className="h-[10px] w-[10px] md:h-[20px] md:w-[20px] lg:h-[15px] lg:w-[15px] xl:h-[20px] xl:w-[20px]" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-tiny md:text-xl lg:text-xs xl:text-sm font-medium">
                      Call Us On:
                    </p>
                    <p className="text-sm md:text-2xl lg:text-sm xl:text-lg font-bold">
                      562-456-3016
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            {/* <p>hello</p> */}
            <p className="text-base md:text-3xl lg:text-lg xl:text-xl font-medium ">
              Say Hello to Udo Uchenna
            </p>
            <div className="text-left">
              <p className="text-xs md:text-xl lg:text-xs xl:text-xs font-light text-left">
                Connect with us!! Drop a Line, Say Hello, and Let Navigate Your
                Legal Journey Together.{' '}
              </p>
            </div>
            <div className="py-2 w-full">
              <button className="bg-orange w-full text-white py-4 md:py-4 px-8 text-xs md:text-xl lg:text-xs xl:text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page