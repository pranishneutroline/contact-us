import React from 'react'
import "./header.css"
function Header() {
  return (
    <div>
        <div className="header-photo">
        <div className="text flex-col">  {/* this flex-col is coming from components/navbar.css */}
            <h2>Contact Us</h2>
            <p>We'd love to hear from you.</p>
            <p>Our door is always open for a good cup of coffee.</p>
        </div>
        </div>
    </div>
  )
}

export default Header