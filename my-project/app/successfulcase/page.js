import Successcomptwo from '@/components/successfulcomp/successcomptwo'
import Successful from '@/components/successfulcomp/successful'
import Footer from '@/components/website/footer/footer'
import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './success.module.css'


const Page = () => {
  return (
    <div>
        <div className={styles.main}>
        <Header />
        {/* <Navbar /> */}
        <Successful />
    </div>
    <Successcomptwo />
    <Footer />
    </div>
  )
}

export default Page