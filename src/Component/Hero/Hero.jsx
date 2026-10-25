import React from 'react'
import './Hero.css'
import kid_model from '../assets/kids.png'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Welcome to STARCLOP</h2>
        <div>
        <p>new</p>
        <p>Collections</p>
        <p>for everyone</p>
        <br />
        <span>Discover Our Latest Collection
        Fresh styles, timeless essentials, and new-season favorites for the whole family. Find your next favorite look today.
        SHOP THE LATEST</span>
        <div className="hero-btn">
            <div>Lastest Collection</div>
           
        </div>
        </div>
        </div>
        <div className='hero-right'>
            <img src={kid_model} alt="" />
        </div>
    </div>
  )
}

export default Hero