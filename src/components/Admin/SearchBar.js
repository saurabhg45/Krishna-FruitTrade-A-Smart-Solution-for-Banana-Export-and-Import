import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
    </div>
  );
};