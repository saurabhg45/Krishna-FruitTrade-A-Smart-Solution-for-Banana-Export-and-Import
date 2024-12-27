import { 
    LayoutDashboard, 
    Box, 
    Users, 
    ShoppingCart, 
    BarChart2, 
    Settings, 
    FileText 
  } from 'lucide-react';
  
  export const menuItems = [
    { 
      title: 'Dashboard', 
      icon: LayoutDashboard, 
      path: '/' 
    },
    {
      title: 'Products',
      icon: Box,
      submenu: [
        { title: 'Product List', path: '/products' },
        { title: 'Product View', path: '/product-view' },
        { title: 'Product Add', path: '/product-add' }
      ]
    },
    {
      title: 'Customers',
      icon: Users,
      submenu: [
        { title: 'Farmers', path: '/customers/farmers' },
        { title: 'Buyers', path: '/customers/buyers' },
        { title: 'Confirm Registration', path: '/customers/registration' }
      ]
    },
    {
      title: 'Orders',
      icon: ShoppingCart,
      submenu: [
        { title: 'All Orders', path: '/orders' },
        { title: 'Order Status', path: '/orders/status' }
      ]
    },
    {
      title: 'Invoice',
      icon: FileText,
      submenu: [
        { title: 'Invoice List', path: '/invoices' },
        { title: 'Create Invoice', path: '/invoices/create' },
        { title: 'Invoice Details', path: '/invoices/details' }
      ]
    },
    { 
      title: 'Analytics', 
      icon: BarChart2, 
      path: '/analytics' 
    },
    { 
      title: 'Settings', 
      icon: Settings, 
      path: '/settings' 
    }
  ];
  