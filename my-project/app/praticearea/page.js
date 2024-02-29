import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './praticearea.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'

const page = () => {
  return (
   <div>
     <div className={styles.main}>
      <Header />
      <Navbar />
      <Pratsectionone />
    </div>
    <Pratsectiontwo />
    <Footer />
   
   </div>
  )
}

export default page