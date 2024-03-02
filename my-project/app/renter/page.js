import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './renter.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'
import Ownersectone from '@/components/ownercomp/ownersectone'
import Rentersectone from '@/components/rentcomp/rentersectone'
import Rentersectwo from '@/components/rentcomp/rentersectwo'

const Page = () => {
  return (
   <div>
     <div className={styles.main}>
      <Header />
      {/* <Navbar /> */}
      <Rentersectone />
    </div>
    <Rentersectwo />
    <Footer />
   
   </div>
  )
}

export default Page