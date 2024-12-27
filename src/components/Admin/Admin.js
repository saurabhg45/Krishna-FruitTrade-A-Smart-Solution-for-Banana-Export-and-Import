import React, { useState, useEffect } from 'react';
import AdminHeader from '../Admin/AdminHeader'; 
import { Sidebar } from '../Admin/Sidebar';
import { DashboardStats } from '../Admin/DashboardStats';
import { ThemeProvider } from '../Admin/ThemeToggle';
// import { Footer } from '../Footer';

function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Overlay */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <div 
          className={`
            ${isSidebarOpen ? 'w-64' : 'w-0'}
            transition-all duration-300 ease-in-out
            fixed md:static h-full
            ${isMobile ? 'z-30' : 'z-10'}
            overflow-hidden
          `}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className={`
          flex-1 flex flex-col overflow-hidden
          transition-all duration-300
          ${isSidebarOpen ? 'md:ml-0' : 'ml-0'}
          ${isMobile ? 'w-full' : ''}
        `}>
          <AdminHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <main className={`
            flex-1 overflow-y-auto p-6
            transition-all duration-300
          `}>
            <DashboardStats />
          </main>

          {/* <Footer/> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Admin;