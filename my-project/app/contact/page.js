import Contact from '@/components/contactcomp/contact'
import Contsecone from '@/components/contactcomp/contsecone'
import Footer from '@/components/website/footer/footer'
import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import Contactcomp from '@/components/website/contact/contact'
import styles from './con.module.css'

const Page = () => {
  return (
    <div>
      <div className={styles.main}>
      <Header />
      <Navbar />
      <Contact />
    </div>
    <Contsecone />
    <Footer />
  
    </div>
  )
}

export default Page