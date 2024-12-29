import React, { useState } from 'react';

const ServiceCard = ({ icon, title, description, image }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry submitted successfully!');
    setShowForm(false); // Close the form after submission
  };

  return (
    <>
      <div
        className="p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
        onClick={toggleForm}
      >
        {image ? (
          <div className="mb-4 h-48 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="text-yellow-800 mb-4">{icon}</div>
        )}
        <h3 className="text-xl font-semibold text-yellow-900 mb-2">
          {title}
        </h3>
        <p className="text-yellow-800">{description}</p>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
            <h4 className="text-lg font-semibold text-yellow-900 mb-4 text-center">
              Enquiry Form
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-yellow-800 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-yellow-300 rounded-md focus:ring focus:ring-yellow-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-yellow-800 mb-1" htmlFor="mobile">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-2 border border-yellow-300 rounded-md focus:ring focus:ring-yellow-200"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-yellow-800 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-yellow-300 rounded-md focus:ring focus:ring-yellow-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-yellow-800 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-yellow-300 rounded-md focus:ring focus:ring-yellow-200"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition"
                  onClick={toggleForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
