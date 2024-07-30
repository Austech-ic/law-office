import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './slumlord.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'
import Ownersectone from '@/components/ownercomp/ownersectone'
import Slumsectone from '@/components/slum/slumsectone'
import Slumsectwo from '@/components/slum/slumsectwo'

const Page = () => {
  return (
   <div>
     <div className={styles.main}>
      <Header />
      {/* <Navbar /> */}
      <Slumsectone />
    </div>
    <Slumsectwo />
    <Footer />
   
   </div>
  )
}

export default Page