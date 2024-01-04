import React from 'react';

const ProductCard = ({ productName, price, imageUrl }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={productName} class= "image-rendered-corners" />
      </div>
      <div className="product-details">
        <div className="product-details product-name">
          {productName}
        </div>
        <div className="product-details product-price">
          {price}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
