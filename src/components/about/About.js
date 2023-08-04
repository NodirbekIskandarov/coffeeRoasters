import React from 'react'
import Navbar from '../navbar/Navbar'
import HeaderOfAbout from './headerofabout/HeaderOfAbout'
import Commitment from './commitment/Commitment'
import Footer from '../footer/Footer'
import Uncompro from './uncompro/Uncompro'
import Headquarters from './headquarters/Headquarters'

function About() {
  return (
    <div className='container'>
      <Navbar/>
      <HeaderOfAbout/>
      <Commitment/>
      <Uncompro/>
      <Headquarters/>
      <Footer/>
    </div>
  )
}

export default About