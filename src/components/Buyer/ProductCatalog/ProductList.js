import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => (
  <div>
    <h2>Available Products</h2>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  </div>
);

export default ProductList;
