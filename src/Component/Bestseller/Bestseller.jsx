import React from 'react'
import './Bestseller.css'
import popular from '../assets/Popular'
import Item from '../item/Item'

function Bestseller() {
  return (
    <div className='bestseller'>
      <br />
        <h1>Bestseller in Women</h1>
        <hr />
    <div className="bs-item">
        {popular.map((item,i)=>{
            return <Item key={i} 
            id={item.id}
            category={item.category}
             name={item.name} 
             description = {item.description}
             image={item.image}
             new_price = {item.new_price}
             old_price = {item.old_price}
             />
        })}
    </div>


    </div>
  )
}

export default Bestseller