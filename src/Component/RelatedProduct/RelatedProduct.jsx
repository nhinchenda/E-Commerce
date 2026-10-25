import React from 'react';
import './RelatedProduct.css';
import popular from '../assets/Popular';
import Item from '../item/Item';

export const RelatedProduct = () => {
  return (
    <div className="RelatedProduct">
      <h1>Related Product</h1>
      <hr />

      <div className="rp-item">
        {popular.map((item, i) => (
          <Item
            key={i}
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
    </div>
  );
};

export default RelatedProduct;
