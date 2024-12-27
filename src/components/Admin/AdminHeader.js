import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { NotificationPanel } from '../Admin/NotificationPanel';
import { ProfileMenu } from '../Admin/ProfileMenu';
import { useTheme } from '../Admin/ThemeToggle';

export default function AdminHeader({ toggleSidebar, isSidebarOpen }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
          <NotificationPanel />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
