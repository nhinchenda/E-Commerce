
import React, { useContext } from 'react';
import './ProductIDisplay.css';
import star from '../assets/star.png'
import star_dull from '../assets/star_dull.jpg'
import { ShopContext } from '../Context/ShopContext';
function ProductIDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)

  if (!product) return <p>Product not found</p>;

  return (
    <div className="ProductIDisplay">
      <div className="pd-left">
        <div className="pd-img-list">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="pd-right">
        <h1>{product.name}</h1>
      <div className="pd-right-star">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <p>(122)</p>
      </div>
      <div className="pd-right-price">
        <div className="pd-right-price-old">
            <del>${product.old_price}</del>
        </div>
        <div className="pd-right-price-new">
            ${product.new_price}
        </div>
      
      </div>
      <div className="pd-right-des">
          Discover your perfect style with our trendy collection.
            Designed for comfort and everyday wear, this product
            combines quality, style, and versatility to complete
            your look for any occasion.
      </div>
       <h3>Select Size</h3>
        <div className="pd-sizes">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>

        <button className="pd-add-cart" onClick={()=>{addToCart(product.id)}}>
          ADD TO CART
        </button>
        <p className="pd-right-category"><span>Category: </span> Women, T-shirt, Crop top</p>
        <p className="pd-right-category"><span>Tags: </span> Modern, Lastest</p>
      </div>
    </div>
  );
}

export default ProductIDisplay;
