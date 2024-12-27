import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductFilter({ onFilterChange }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          SHOW BY
        </label>
        <div className="relative">
          <select
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-3 pr-10 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            onChange={(e) => onFilterChange('show', e.target.value)}
            defaultValue=""
          >
            <option value="">None</option>
            <option value="in_stock">In Stock</option>
            <option value="out_stock">Out of Stock</option>
            <option value="low_stock">Low Stock</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          CATEGORY BY
        </label>
        <div className="relative">
          <select
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-3 pr-10 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            onChange={(e) => onFilterChange('category', e.target.value)}
            defaultValue=""
          >
            <option value="">None</option>
            <option value="fresh">Fresh Bananas</option>
            <option value="organic">Organic Bananas</option>
            <option value="specialty">Specialty Bananas</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
