import React from 'react'
import Hero from '../Hero/Hero'
import Bestseller from '../Bestseller/Bestseller'
import Offers from '../Offers/Offers'
import NewCollection from '../NewCollection/NewCollection'
import NewLetter from '../NewLetter/NewLetter'
function Shop() {
  return (
    <div>
        <Hero/>
        <Bestseller/>
        <Offers/>
        <NewCollection/>
        <NewLetter/>
        
    </div>
  )
}

export default Shop