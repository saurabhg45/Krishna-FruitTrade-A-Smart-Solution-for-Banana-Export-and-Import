// AddBanana.js
import React, { useState } from "react";


const AddBanana = () => {
  const [bananaDetails, setBananaDetails] = useState({
    category: "",
    grade: "",
    quality: "",
    price: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBananaDetails({
      ...bananaDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setBananaDetails({
      ...bananaDetails,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bananaDetails.category || !bananaDetails.grade || !bananaDetails.quality || !bananaDetails.price || !bananaDetails.photo) {
      alert("Please fill in all the fields.");
      return;
    }

    // Add the logic for submitting the form data to backend (e.g., API call).
    console.log("Banana Details Submitted: ", bananaDetails);

    // Reset form
    setBananaDetails({
      category: "",
      grade: "",
      quality: "",
      price: "",
      photo: null,
    });
  };

  return (
    <div className="add-banana-container">
      <h2>Add New Banana Details</h2>
      <form onSubmit={handleSubmit} className="add-banana-form">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={bananaDetails.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={bananaDetails.grade}
            onChange={handleChange}
            placeholder="Enter grade"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quality">Quality</label>
          <input
            type="text"
            id="quality"
            name="quality"
            value={bananaDetails.quality}
            onChange={handleChange}
            placeholder="Enter quality"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price per Kg</label>
          <input
            type="number"
            id="price"
            name="price"
            value={bananaDetails.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Add Banana</button>
      </form>
    </div>
  );
};

export default AddBanana;
