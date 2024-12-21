import React, { useState } from 'react';
import '../Products/Product.css';

function ProductUpload() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    subCategory: '',
    price: '',
    discount: '',
    rating: '',
    images: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="product-upload-form">
      <h1>Product Upload</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter price"
          />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
            placeholder="Enter discount percentage"
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="Enter rating"
            step="0.1"
            max="5"
          />
        </div>

        <div className="form-group">
          <label>Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="preview-button">
            Preview
          </button>
          <button type="submit" className="upload-button">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductUpload;
