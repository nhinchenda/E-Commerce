import React from 'react';
import './Breadcrum.css';
import chevron from '../assets/chevron-right.svg';

function Breadcrum(props) {
  const { product } = props;

  return (
    <div className="bc">
      HOME <img src={chevron} alt="" /> SHOP <img src={chevron} alt="" /> {product.category} <img src={chevron} alt="" />{product.name}
    </div>
  );
}

export default Breadcrum;