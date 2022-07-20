import React from 'react'

import "./navbar.css"
function Navbar() {
  return (
    <div className="navbar">
      <div className='hamburger'></div>
        <ul className='flex-row navlinks '>
            <li className='list-style-none mr-1' ><a href="/#" className='text-decoration-none'>Home</a></li>
            <li className='list-style-none'><a href="/#" className='text-decoration-none'>About Us</a></li>
            <li className='list-style-none'><a href="/#" className='text-decoration-none'>Services</a></li>
            <li className='list-style-none'><a href="/#" className='text-decoration-none'>Our Clients</a></li>
            <li className='list-style-none'><a href="/#" className='text-decoration-none'>Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar