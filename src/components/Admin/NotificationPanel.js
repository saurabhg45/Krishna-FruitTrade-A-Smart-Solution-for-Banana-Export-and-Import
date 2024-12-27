import React from 'react';
import { Bell } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New Order Received',
    message: 'Order #1234 needs confirmation',
    time: '5 min ago',
    isRead: false,
  },
  {
    id: 2,
    title: 'Shipment Update',
    message: 'Order #1122 has been delivered',
    time: '1 hour ago',
    isRead: true,
  },
  {
    id: 3,
    title: 'Low Stock Alert',
    message: 'Cavendish Bananas running low',
    time: '2 hours ago',
    isRead: true,
  },
];

export const NotificationPanel = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative"
      >
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-200 dark:border-gray-700 ${
                  !notification.isRead ? 'bg-gray-50 dark:bg-gray-700' : ''
                }`}
              >
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{notification.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{notification.message}</p>
                <span className="text-xs text-gray-500 dark:text-gray-500 mt-2 block">{notification.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};