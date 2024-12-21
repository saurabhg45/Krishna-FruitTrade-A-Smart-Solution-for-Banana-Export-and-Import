import React, { useState } from "react";
import { BsEyeFill, BsPencilFill, BsTrashFill } from "react-icons/bs";
import '../Products/Product.css';

const ProductList = () => {
  // Initial hardcoded product list
  const [products, setProducts] = useState([
    {
      no: 1,
      name: "Banana",
      description: "Fresh and organic bananas",
      category: "Fruits",
      price: 1.5,
      discount: "10%",
      rating: 4.5,
      order: 120,
      sales: 300,
    },
    {
      no: 2,
      name: "Mango",
      description: "Juicy and ripe mangoes",
      category: "Fruits",
      price: 2.0,
      discount: "15%",
      rating: 4.8,
      order: 100,
      sales: 250,
    },
    {
      no: 3,
      name: "Apple",
      description: "Crunchy and sweet apples",
      category: "Fruits",
      price: 1.8,
      discount: "5%",
      rating: 4.3,
      order: 150,
      sales: 400,
    },
  ]);

  // Filter state
  const [filters, setFilters] = useState({
    price: "",
    category: "",
    rating: "",
    order: "",
    sales: "",
  });

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter logic
  const filteredProducts = products.filter((product) => {
    return (
      (!filters.price || product.price <= parseFloat(filters.price)) &&
      (!filters.category || product.category.includes(filters.category)) &&
      (!filters.rating || product.rating >= parseFloat(filters.rating)) &&
      (!filters.order || product.order >= parseInt(filters.order)) &&
      (!filters.sales || product.sales >= parseInt(filters.sales))
    );
  });

  return (
    <div className="product-list-container">
      <h2>Product List</h2>

      {/* Filters */}
      <div className="product-filters">
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          value={filters.price}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Min Rating"
          value={filters.rating}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="order"
          placeholder="Min Order"
          value={filters.order}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="sales"
          placeholder="Min Sales"
          value={filters.sales}
          onChange={handleFilterChange}
        />
      </div>

      {/* Product Table */}
      <table className="product-list-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Rating</th>
            <th>Order</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.no}>
              <td>{product.no}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.discount}</td>
              <td>{product.rating} ★</td>
              <td>{product.order}</td>
              <td>{product.sales}</td>
              <td className="action-icons">
                <BsEyeFill className="icon view-icon" title="View" />
                <BsPencilFill className="icon edit-icon" title="Edit" />
                <BsTrashFill className="icon delete-icon" title="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
