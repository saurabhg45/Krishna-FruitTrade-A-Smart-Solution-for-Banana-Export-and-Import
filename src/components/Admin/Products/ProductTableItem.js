import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductTable from './ProductTable';

const dummyProducts = [
  {
    id: "BAN001",
    name: "Premium Cavendish Bananas",
    description: "Fresh, export-quality Cavendish bananas",
    category: "Fresh Bananas",
    brand: "FreshCo",
    price: 21.0,
    originalPrice: 24.0,
    stock: 150,
    rating: 4.5,
    ratingCount: 16,
    orders: 380,
    sales: 38,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
  },
  {
    id: "BAN002",
    name: "Organic Red Bananas",
    description: "Specialty red bananas, organically grown",
    category: "Organic Bananas",
    brand: "OrganicLife",
    price: 25.0,
    originalPrice: 28.0,
    stock: 30,
    rating: 4.8,
    ratingCount: 12,
    orders: 280,
    sales: 32,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
  },
  {
    id: "BAN003",
    name: "Baby Bananas",
    description: "Sweet and creamy baby bananas",
    category: "Specialty Bananas",
    brand: "TinyTreats",
    price: 18.0,
    originalPrice: 20.0,
    stock: 15,
    rating: 4.2,
    ratingCount: 8,
    orders: 150,
    sales: 25,
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
  },
];

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  const handleFilterChange = (type, value) => {
    let filtered = [...dummyProducts];

    if (type === "show") {
      switch (value) {
        case "in_stock":
          filtered = filtered.filter((p) => p.stock > 50);
          break;
        case "out_stock":
          filtered = filtered.filter((p) => p.stock <= 20);
          break;
        case "low_stock":
          filtered = filtered.filter((p) => p.stock > 20 && p.stock <= 50);
          break;
        default:
          break;
      }
    }

    if (type === "category" && value) {
      filtered = filtered.filter((p) =>
        p.category.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Product List</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your banana product inventory</p>
      </div>

      <ProductFilter onFilterChange={handleFilterChange} />

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <ProductTable products={filteredProducts} />
      </div>
    </div>
  );
}
