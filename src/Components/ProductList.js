import React from 'react';
import ProductCard from './ProductCard';
const products = [
  {
    productName: 'Canon AE-1',
    price: '$249.99',
    imageUrl: "/Images/Camera.jpg"
  },
  // ... other products
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.productName}
          productName={product.productName}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default ProductList;
