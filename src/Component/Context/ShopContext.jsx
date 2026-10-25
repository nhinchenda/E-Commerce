import React, { createContext, useState } from 'react';
import all_product from '../assets/All_Product';
import NC from '../assets/NC';

export const ShopContext = createContext(null);

const products = [...all_product, ...NC];

const getDefaultCart = () => {
  const cart = {};

  products.forEach((product) => {
    cart[product.id] = 0;
  });

  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        const itemInfo = products.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * CartItems[item];
        }
      }
    }

    return totalAmount;
  };
  const getTotalCartItem = () =>{
    let totalitem = 0;
    for (const item in CartItems){
      if(CartItems[item]>0){
        totalitem += CartItems[item]
      }
    }return totalitem
  }

  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    all_product: products,
    CartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;