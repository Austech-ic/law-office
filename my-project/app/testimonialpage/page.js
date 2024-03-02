import React from 'react'
import styles from './testimonial.module.css'
import Header from '@/components/website/header/header'
import Navbar from '@/components/website/navbar/navbar'
import Testimonialcomp from '@/components/Testimonialcomp/testimonialcomp'
import Footer from '@/components/website/footer/footer'
import Testimonialsectwo from '@/components/Testimonialcomp/testimonialsectwo'

const Page = () => {
  return (
    <div>
         <div className={styles.main}>
    <Header />
    {/* <Navbar /> */}
    <Testimonialcomp />
  </div>
  <Testimonialsectwo />
  <Footer />
    </div>
  )
}

export default Page