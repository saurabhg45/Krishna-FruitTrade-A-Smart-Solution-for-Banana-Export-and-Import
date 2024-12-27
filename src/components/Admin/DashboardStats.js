import React from 'react';
import { DollarSign, Package, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$128,430',
    icon: DollarSign,
    change: '+12.5%',
    changeType: 'positive'
  },
  {
    title: 'Active Orders',
    value: '45',
    icon: Package,
    change: '+8.2%',
    changeType: 'positive'
  },
  {
    title: 'Total Customers',
    value: '2,340',
    icon: Users,
    change: '+15.3%',
    changeType: 'positive'
  },
  {
    title: 'Growth Rate',
    value: '23.5%',
    icon: TrendingUp,
    change: '+4.1%',
    changeType: 'positive'
  }
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">
                {stat.value}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm font-medium ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
};