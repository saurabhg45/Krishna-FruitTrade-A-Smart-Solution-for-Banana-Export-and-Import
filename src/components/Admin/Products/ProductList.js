import React, { useState, useEffect } from 'react';
import ProductFilter from '../Products/ProductFilter';
import ProductTable from '../Products/ProductTable';

const initialProducts = [
  {
    id: "BAN001",
    name: "Premium Cavendish Bananas",
    description: "Fresh, export-quality Cavendish bananas",
    category: "Fresh Bananas",
    brand: "FreshCo",
    price: 21.00,
    originalPrice: 24.00,
    stock: 150,
    rating: 4.5,
    ratingCount: 16,
    orders: 380,
    sales: 38,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e"
  },
  // ... other products
];

export default function ProductList() {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const handleProductAdded = (event) => {
      const newProduct = event.detail;
      setProducts(prev => [...prev, newProduct]);
    };

    window.addEventListener('productAdded', handleProductAdded);

    return () => {
      window.removeEventListener('productAdded', handleProductAdded);
    };
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterChange = (type, value) => {
    let filtered = [...products];

    if (type === 'show') {
      switch (value) {
        case 'in_stock':
          filtered = filtered.filter(p => p.stock > 50);
          break;
        case 'out_stock':
          filtered = filtered.filter(p => p.stock <= 20);
          break;
        case 'low_stock':
          filtered = filtered.filter(p => p.stock > 20 && p.stock <= 50);
          break;
        default:
          break;
      }
    }

    if (type === 'category' && value) {
      filtered = filtered.filter(p => 
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
