import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import React from 'react'
import styles from './restrain.module.css'
import Pratsectionone from '@/components/pratarea/pratsectionone'
import Footer from '@/components/website/footer/footer'
import Pratsectiontwo from '@/components/pratarea/pratsectiontwo'
import Ownersectone from '@/components/ownercomp/ownersectone'
import Restrainsecone from '@/components/restrain/restrainsectone'
import Restrainsectwo from '@/components/restrain/restrainsectwo.jsx'
// import Restrainsectwo from '@/components/restrain/restrainsectwo'

const Page = () => {
  return (
   <div>
     <div className={styles.main}>
      <Header />
      {/* <Navbar /> */}
      <Restrainsecone />
    </div>
    <Restrainsectwo />
    <Footer />
   
   </div>
  )
}

export default Page