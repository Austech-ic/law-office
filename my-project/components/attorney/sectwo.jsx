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
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
        </p>
        <p className='text-xs md:text-2xl lg:text-lg xl:text-xl leading-6 md:leading-10 lg:leading-7 xl:leading-9 font-light'>
          Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
        </p>
      </div>
      <div className='flex flex-col-reverse lg:flex-row py-10 lg:py-20 gap-16'>
        <div className='flex-1 flex flex-col gap-2 md:gap-4'>
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>Admission Details</p>
            <ul className='list-disc px-6 py-2 text-xs md:text-lg lg:text-base'>
              <li className='decoration-dotted'>2009, Nigeria</li>
              <li>2019, California</li>
            </ul>
          </div>
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>Law School Attended</p>
            <p className='text-xs md:text-lg lg:text-base py-2 '>University of Calabar Class of 2008 LL.B.</p>
          </div>
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>University Attended</p>
            <p className='text-xs md:text-lg lg:text-base py-2 '>Nigerian Law School ( Bwari) Law Practice Licence, Law.</p>
          </div>
          <div>
            <p className='text-orange text-xl md:text-3xl lg:text-2xl xl:text-3xl'>Associations & Memberships</p>
            <ul className='list-disc px-6 py-2 text-xs md:text-lg lg:text-base'>
              <li>Consumer Attorneys Association of Los Angeles</li>
              <li>Los Angeles County Bar Association</li>
              <li>California Lawyers Association</li>
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
