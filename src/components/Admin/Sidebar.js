import React from 'react';
import { useTheme } from '../Admin/ThemeToggle';
import { menuItems } from '../Admin/MenuItems';
import { LogOut } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ onNavigate }) {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Log out successfully...');
   
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div
      className={`h-screen w-64 flex flex-col ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-r`}
    >
      {/* Header */}
      <div
        className={`p-4 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <h1 className="text-xl font-bold text-green-600">Fresh Horizons</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">
            {item.submenu ? (
              <details className="group">
                {/* Menu Item with Submenu */}
                <summary
                  className={`flex items-center p-2 rounded-lg cursor-pointer ${
                    isDarkMode
                      ? 'text-gray-200 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                  <span>{item.title}</span>
                  <svg
                    className="w-4 h-4 ml-auto transform group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="pl-11 mt-2 space-y-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => onNavigate(subItem.path)}
                      className={`block py-2 text-sm ${
                        isDarkMode
                          ? 'text-gray-400 hover:text-green-400'
                          : 'text-gray-600 hover:text-green-600'
                      }`}
                    >
                      {subItem.title}
                    </button>
                  ))}
                </div>
              </details>
            ) : (
              // Single Menu Item
              <button
                onClick={() => onNavigate(item.path)}
                className={`flex items-center p-2 rounded-lg ${
                  isDarkMode
                    ? 'text-gray-200 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                <span>{item.title}</span>
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className={`p-4 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <button
          onClick={handleLogout}
          className={`flex items-center w-full p-2 rounded-lg ${
            isDarkMode
              ? 'text-gray-200 hover:bg-gray-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
