import React, { useContext } from 'react';
import './Cartitem.css';
import { ShopContext } from '../Context/ShopContext';
import remove from '../assets/circle-x.svg';

const Cartitem = () => {
  const {getTotalCartAmount, all_product, CartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="Cartitems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
  const quantity = CartItems[e.id] || 0;

  if (quantity === 0) return null;

  return (
    <div key={e.id}>
      <div className="cartitem-format-main cartitem-format">
        <img
          src={e.image}
          alt={e.name}
          className="carticon-product-icon"
        />

        <p>{e.name}</p>
        <p>${e.new_price}</p>

        <button className="cartitem-qty">{quantity}</button>

        <p>${(e.new_price * quantity).toFixed(2)}</p>

        <img
          src={remove}
          onClick={() => removeFromCart(e.id)}
          alt="Remove product"
          className="cartitem-remove"
        />
      </div>
      <hr />
    </div>
  );
})}
<div className="cartitem-down">
  <div className="carditem-total">
    <h1>Cart Totals</h1>
    <div>
      <div className="cartitem-total-item">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cartitem-total-item">
        <p>Shopping Fee</p>
        <p>Free</p>
      </div>
      <hr />
      <div className="cartitem-total-item">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
      </div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
  </div>
  <div className="cartitem-promocode">
    <p>If you have promo code, Enter it here</p>
    <div className='cartitem-promobox'>
      <input type="text" placeholder='Promo Code'/>
      <button>submit</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Cartitem;