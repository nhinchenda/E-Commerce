import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Shopcategory.css';
import dd_icon from '../assets/chevron-down.svg';
import Item from '../item/Item';

function Shopcategory(props) {
  const { all_product } = useContext(ShopContext);

  const products = all_product.filter(
    (item) => item.category.toLowerCase() === props.Category.toLowerCase()
  );

  return (
    <div className="shop-category">
      <img className='shop-ctgr-banner' src={props.banner} alt={`${props.Category} banner`} />

      <div className="shop-ctgr-indexSort">
        <p>
          <span>Showing 1-{products.length}</span> Out of {products.length} products
        </p>

        <div className="shop-ctgr-sort">
          Sort by <img src={dd_icon} alt="" />
        </div>
      </div>

      <div className="shop-ctgr-products">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
            name={item.name}
            description={item.description}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shop-ctgr-loadmore">
         Explore More
      </div>
    </div>
  );
}

export default Shopcategory;
