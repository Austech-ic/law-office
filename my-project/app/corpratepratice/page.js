import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './corprate.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'
import Ownersectone from '@/components/ownercomp/ownersectone'
import Corpratesecone from '@/components/corprate/corpratesectone'
import Corpratesectwo from '@/components/corprate/corpratesectwo'

const Page = () => {
  return (
   <div>
     <div className={styles.main}>
      <Header />
      {/* <Navbar /> */}
      <Corpratesecone />
    </div>
    <Corpratesectwo />
    <Footer />
   
   </div>
  )
}

export default Page