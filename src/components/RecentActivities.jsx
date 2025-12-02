import React from 'react';
import RedArrow from '../assets/red-arrow.svg';
import GreenArrow from '../assets/green-arrow.svg';

const RecentActivities = () => {
  const activities = [
    {
      name: 'Sunday',
      user: 'Godwin',
      amount: 'N200,000',
      date: 'Wed, Feb 15 2023',
      time: '10:45:20 AM',
      type: 'Disbursed',
      icon: RedArrow,
    },
    {
      name: 'Oluwadarasimi',
      user: 'Mobolaji',
      amount: 'N10,000',
      date: 'Sun, Feb 12 2023',
      time: '01:15:16 PM',
      type: 'Repayment',
      icon: GreenArrow,
    },
    {
      name: 'Chukuemeka',
      user: 'Chikodi',
      amount: 'N56,000',
      date: 'Wed, Feb 08 2023',
      time: '01:15:16 PM',
      type: 'Repayment',
      icon: GreenArrow,
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg font-axiforma">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">Recent Activities</h3>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          View all
        </a>
      </div>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <div className="max-h-48 overflow-y-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center py-3 px-2 rounded mb-2 last:mb-0"
            >
              <img
                src={activity.icon}
                alt={`${activity.type} icon`}
                className="w-5 h-5 mr-3 flex-shrink-0"
              />
              <div className="flex-1 flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-gray-400 flex-1 min-w-0">{activity.name}</span>
                <span className='text-xs font-medium text-gray-400 flex-1 min-w-0'>{activity.user}</span>
                <span className="text-xs font-medium text-gray-400 flex-1 min-w-0">{activity.amount}</span>
                <span className="text-xs font-medium text-gray-400 flex-1 min-w-0">{activity.date}</span>
                <span className="text-xs text-gray-400 flex-1 min-w-0">{activity.time}</span>
                <span className="text-xs font-medium text-gray-400 flex-1 min-w-0">{activity.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={activity.icon}
                  alt={`${activity.type} icon`}
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold text-gray-900">{activity.name}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                activity.type === 'Disbursed' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
              }`}>
                {activity.type}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-500">User: </span>
                <span className="text-gray-700 font-medium">{activity.user}</span>
              </div>
              <div>
                <span className="text-gray-500">Amount: </span>
                <span className="text-gray-700 font-medium">{activity.amount}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">Date: </span>
                <span className="text-gray-700">{activity.date}</span>
                <span className="text-gray-500 ml-2">at </span>
                <span className="text-gray-700">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;