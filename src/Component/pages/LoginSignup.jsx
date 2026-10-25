import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="ls-container">
        <h1>Sign Up</h1>
        <div className="ls-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="Password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className='ls-login'>Already have an account? <span>Login here</span></p>
        <div className="ls-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuting, i agree to the terms of use & pravacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup