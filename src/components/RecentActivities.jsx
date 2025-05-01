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
    <div className="p-2 bg-white rounded-lg font-axiforma -ml-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
        <a href="#" className="text-blue-600 text-sm font-medium">
          View all
        </a>
      </div>

      {/* Activities List with Scrollbar */}
      <div className="max-h-48 overflow-y-auto pr-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`flex items-center py-3 px-2 rounded ${activity.color} mb-2 last:mb-0`}
          >
            {/* SVG Icon */}
            <img
              src={activity.icon}
              alt={`${activity.type} icon`}
              className="w-5 h-5 mr-3"
            />

            {/* Name */}
            <div className="flex-1 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-400">{activity.name}</span>
            </div>

            {/* User */}
            <div className='flex-1'>
              <span className='text-xs font-medium text-gray-400'>{activity.user}</span>
            </div>

            {/* Amount */}
            <div className="flex-1">
              <span className="text-xs font-medium text-gray-400">{activity.amount}</span>
            </div>

            {/* Date */}
            <div className="flex-1">
              <span className="text-xs font-medium text-gray-400">{activity.date}</span>
            </div>

            {/* Time */}
            <div className='flex-1'>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>

            {/* Type */}
            <div className="flex-1">
              <span className="text-xs font-medium text-gray-400">{activity.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
