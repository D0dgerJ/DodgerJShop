import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductPage = React.memo(() => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details Page</h2>
      <ProductDetails productId={productId} />
    </div>
  );
});

export default ProductPage;