import Footer from '@/components/website/footer/footer'
import Header from '@/components/website/header/header'
import React from 'react'
import Image from 'next/image'
import styles from './cat.module.css'
import { useParams } from 'next/navigation';
import Singsectone from '../../singlesect/singsectone/page'
import Singsectwo from '../../singlesect/singsectwo/page'

const Page = ({ id }) => {
  const {singlecaseid} = useParams();

  // if (!details) {
  //   return <div>Loading...</div>; // Add a loading state while fetching data
  // }



  return (
    <div>
      <div className={styles.main}>
      <Header />
       <Singsectone />
      </div>
      <Singsectwo />
      <Footer />
        
    </div>
  )
}

export default Page

