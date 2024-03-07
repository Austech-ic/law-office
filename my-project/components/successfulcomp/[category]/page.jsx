import Footer from '@/components/website/footer/footer'
import Header from '@/components/website/header/header'
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';

const Page = ({ id }) => {
  const {singlecaseid} = useParams();

  // if (!details) {
  //   return <div>Loading...</div>; // Add a loading state while fetching data
  // }



  return (
    <div>
        <Header />
          <Image src={singlecaseid.pic} alt='pic-img' />
        <Footer />
    </div>
  )
}

export default Page

