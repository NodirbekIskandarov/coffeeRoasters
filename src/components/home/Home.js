import React from 'react'
import Navbar from '../navbar/Navbar'
import Header from './header/Header'
import CoffeeTypes from './coffeetypes/CoffeeTypes'
import WhyChoose from './whychoose/WhyChoose'
import HowWorks from './howWorks/HowWorks'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <CoffeeTypes/>
        <WhyChoose/>
        <HowWorks/>
        <Footer/>
    </div>
  )
}

export default Home