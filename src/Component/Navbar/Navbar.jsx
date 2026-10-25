import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.jpg'
import cart from '../assets/shopping-cart.svg'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

function Navbar() {
  const [menu, setMenu] = useState('shop')
  const {getTotalCartItem} = useContext(ShopContext)
  return (
    <div className='nav'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>STARCLOP</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu('shop')}}><NavLink to='/'>Shop</NavLink>{menu === 'shop'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu('men')}}><NavLink to='/men'>Men</NavLink>{menu === 'men'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu('women')}}><NavLink to='/women'>Women</NavLink>{menu === 'women'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu('kids')}}><NavLink to='/kids'>Kids</NavLink>{menu === 'kids'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login'>
          <NavLink to='/login'><button>Login</button></NavLink>
          <NavLink to='/cart'><img src={cart} alt="" /></NavLink>
          <div className="nav-count">{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar