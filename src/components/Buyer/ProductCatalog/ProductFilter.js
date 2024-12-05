import React from "react";

const ProductFilter = ({ onFilterChange }) => (
  <div>
    <h3>Filter Products</h3>
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">All Grades</option>
      <option value="Premium">Premium</option>
      <option value="Standard">Standard</option>
    </select>
  </div>
);

export default ProductFilter;
