'use client';
import React, { useState, useEffect } from 'react';
import ClientLoader from "./clientloader";
import Header from "@/components/website/header/header";
import Sectionone from '../components/website/sectionone/index'
import Sectiontwo from '../components/website/sectiontwo/index'
import Sectionthree from '../components/website/sectionthree/index'
// import Sectionfour from '../components/website/Testimonial/Testimonial'
import Image from "next/image";
import SectionFive from "@/components/website/SectionFive/sectionfive";
import Test from "@/components/website/Testimony/test";
import Contact from "@/components/website/contact/contact";
import Footer from "@/components/website/footer/footer";
import Loader from './Loader/loader';


export default function Home() {

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
       <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Test />
      <SectionFive />
      <Contact />
      <Footer />
      </div>
      )}
    </div>

  );
}
