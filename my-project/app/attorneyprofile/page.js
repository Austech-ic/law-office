'use client';
import React, { useState, useEffect } from 'react';
import Loader from '../Loader/loader';
import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import Sectone from '@/components/attorney/sectone'
import Sectwo from '@/components/attorney/sectwo'
import Footer from '@/components/website/footer/footer'
import Contact from '@/components/website/contact/contact'

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
      
      <div className='bg-green '>
      <Header />
      {/* <Navbar /> */}
      <Sectone />
    </div>
    <Sectwo />
    <Contact />
    <Footer />
    </div>
   )}
    </div>
  )
}

export default Page