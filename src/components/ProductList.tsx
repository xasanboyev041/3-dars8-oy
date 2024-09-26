import React from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-card">
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Type:</strong> {product.type}</p>
            <p><strong>Unit:</strong> {product.unit}</p>
            <p><strong>Date:</strong> {product.date}</p>
            <p><strong>Supplier:</strong> {product.supplier}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
