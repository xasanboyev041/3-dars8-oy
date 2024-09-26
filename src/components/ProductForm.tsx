import React, { useState } from 'react';
import { Product } from '../types';

interface Props {
  addProduct: (product: Product) => void;
}

const ProductForm: React.FC<Props> = ({ addProduct }) => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    type: '',
    unit: '',
    date: '',
    supplier: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', price: 0, type: '', unit: '', date: '', supplier: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
      <input name="price" value={product.price} onChange={handleChange} type="number" placeholder="Price" required />
      <input name="type" value={product.type} onChange={handleChange} placeholder="Type" required />
      <input name="unit" value={product.unit} onChange={handleChange} placeholder="Unit" required />
      <input name="date" value={product.date} onChange={handleChange} type="date" required />
      <input name="supplier" value={product.supplier} onChange={handleChange} placeholder="Supplier" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
