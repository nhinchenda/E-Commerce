import React from 'react'
import './Footer.css'
import logo from '../assets/logo.jpg'
import insta from '../assets/instagram-new.jpg'
import tele from '../assets/telegram.png'
import pin from '../assets/pinterest.jpg'
import fb from '../assets/facebook-new.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src={logo} alt="" />
        <p>STARCLOP</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-sc-icon">
            <div className="footer-sc-container">
                <img src={insta} alt="" />
                <img src={tele} alt="" />
                <img src={pin} alt="" />
                <img src={fb} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2026 - All Right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer