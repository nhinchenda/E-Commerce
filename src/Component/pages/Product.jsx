import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductIDisplay from '../ProductIDisplay/ProductIDisplay';
import { Desbox } from '../desbox/Desbox';
import RelatedProduct from '../RelatedProduct/RelatedProduct';


function Product() {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();

  const product = all_product.find(
    (item) => item.id === Number(productID)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductIDisplay product={product}/>
      <Desbox/>
      <RelatedProduct/>
      
      
    </div>
  );
}

export default Product;