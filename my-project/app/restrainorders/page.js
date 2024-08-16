'use client';
import React, { useState, useEffect } from 'react';
import Loader from '../Loader/loader';
import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './restrain.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'
import Ownersectone from '@/components/ownercomp/ownersectone'
import Restrainsecone from '@/components/restrain/restrainsectone'
import Restrainsectwo from '@/components/restrain/restrainsectwo.jsx'
// import Restrainsectwo from '@/components/restrain/restrainsectwo'

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
      <Restrainsecone />
    </div>
    <Restrainsectwo />
    <Footer />
   
   </div>
   )}
  </div>
  )
}

export default Page