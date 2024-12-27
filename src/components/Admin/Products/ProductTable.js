import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

export default function ProductTable({ products }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-blue-500">
            <th className="w-16 px-4 py-3 text-left text-xs font-medium text-white uppercase">UID</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Product</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Category</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Brand</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Price</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Stock</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Rating</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Order</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Sales</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  #{index + 1}
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 rounded object-cover mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{product.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{product.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {product.category}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {product.brand}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm">
                  <div className="line-through text-gray-400">${product.originalPrice}</div>
                  <div className="text-gray-900 dark:text-gray-100">${product.price}</div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    product.stock > 50
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 20
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {product.stock > 50
                    ? 'In Stock'
                    : product.stock > 20
                    ? 'Low Stock'
                    : 'Out of Stock'}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="ml-1 text-sm text-gray-500">({product.ratingCount})</span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {product.orders}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                ${product.sales}k
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button className="p-1 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
