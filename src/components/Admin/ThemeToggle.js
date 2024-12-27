import { createContext, useContext, useState } from 'react';

// Define the ThemeContextType object
const ThemeContextType = {
  isDarkMode: false, // boolean
  toggleTheme: () => {}, // function
};

// Create the ThemeContext
const ThemeContext = createContext(ThemeContextType);

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
