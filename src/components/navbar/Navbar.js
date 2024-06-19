import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='row justify-content-between align-items-center my-5'>
            <div className='col-3 logo_part'>
                <img src='images/logo.png' alt='logo'/>
            </div>
            <div className='col-6 menu'>
                <Link className='link' to="/">HOME</Link>
                <Link className='link' to="/about">ABOUT US</Link>
                <Link className='link' to="/create-plan">CREATE YOUR PLAN</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar