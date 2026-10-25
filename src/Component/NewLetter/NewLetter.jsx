import React from 'react'
import './NewLetter.css'

function NewLetter() {
  return (
    <div className='NewLetter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newsletter and be the first to discover new arrivals, 
            special discounts, and exclusive deals delivered straight to your inbox. 
            Sign up today and enjoy exciting offers just for you!</p>
        <br />
        <div className="IS-btn">
            <input type="Email" placeholder='Your Email id' />
            <button>Subcribe</button>
        </div>
<br /><br /><br /><br /><br />
    </div>

  )
}

export default NewLetter