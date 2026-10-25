import React from 'react'
import './Offers.css'
import exclusive from '../assets/Exclusive.png'

function Offers() {
  return (
    <div className='offer'>
        <div className='offer-left'>
        <h1>Exclusive</h1>
        <h1>Offers 4 U</h1>
            <p>ONLY ON BESTSELLER PRODUCTS</p>
        <div className="offer-btn">
            <button>Click Now</button>
        </div>
        </div>
        <div className='offer-right'>
            <img src={exclusive} alt="" />
        </div>
        
    </div>
  )
}

export default Offers