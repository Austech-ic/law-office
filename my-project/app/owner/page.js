import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './owner.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'
import Ownersectone from '@/components/ownercomp/ownersectone'
import Ownersectwo from '@/components/ownercomp/ownersectwo'

const Page = () => {
  return (
   <div>
     <div className={styles.main}>
      <Header />
      {/* <Navbar /> */}
      <Ownersectone />
    </div>
   <Ownersectwo />
    <Footer />
   
   </div>
  )
}

export default Page