import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import HeaderOfPlan from './headerofplan/HeaderOfPlan'
import StepsOfOrder from './stepsoforder/StepsOfOrder'
import PlanMenu from './planmenu/PlanMenu'

function CreatePlan() {
  return (
    <div className='container'>
      <Navbar/>
      <HeaderOfPlan/>
      <StepsOfOrder/>
      <PlanMenu/>
      <Footer/>
    </div>
  )
}

export default CreatePlan