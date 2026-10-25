
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
       <img
      onClick={() => window.scrollTo(0, 0)}
      src={props.image}
      alt={props.name}
/>
      </Link>

      <p>{props.category}</p>
      <h2>{props.name}</h2>
      <span>{props.description}</span>

      <div className="item-price">
        <div className="new_price">
          ${props.new_price}
        </div>
        <div className="old_price">
          <del>${props.old_price}</del>
        </div>
      </div>
    </div>
  );
}

export default Item;
