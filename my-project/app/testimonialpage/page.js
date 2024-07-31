'use client';
import React, { useState, useEffect } from 'react';
import Loader from '../Loader/loader';
import styles from './testimonial.module.css'
import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import Testimonialcomp from '@/components/Testimonialcomp/testimonialcomp'
import Footer from '@/components/website/footer/footer'
import Testimonialsectwo from '@/components/Testimonialcomp/testimonialsectwo'

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Your async logic here
      // For example, you can use setTimeout to simulate loading for 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
   <div>
     {loading ? (
      <Loader />
    ) : (
     <div>
         <div className={styles.main}>
    <Header />
    {/* <Navbar /> */}
    <Testimonialcomp />
  </div>
  <Testimonialsectwo />
  <Footer />
    </div>
        )}
   </div>
  )
}

export default Page