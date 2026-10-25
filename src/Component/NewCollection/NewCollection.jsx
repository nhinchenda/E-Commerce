import React from 'react';
import './NewCollection.css';
import NC from '../assets/NC';
import Item from '../item/Item';

function NewCollection() {
  return (
    <div className="NewCollection">
    <br />
      <h1>New Collection</h1>
      <hr/>
      <div className="NC-item">
        {NC.map((item, i) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}

export default NewCollection;