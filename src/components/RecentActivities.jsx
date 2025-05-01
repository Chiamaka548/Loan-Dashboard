import React from 'react';

const RecentActivities = () => {
  const activities = [
    { name: 'Sunday', user: 'Godwin', amount: 'N200,000', date: 'Wed, Feb 15 2023', time: '10:45:20 AM', type: 'Disbursed', color: 'bg-pink-100' },
    { name: 'Oluwadarasimi', user: 'Mobolaji', amount: 'N10,000', date: 'Sun, Feb 12 2023', time: '01:15:16 PM', type: 'Repayment', color: 'bg-green-100' },
    { name: 'Chukuemeka', user: 'Chikodi', amount: 'N56,000', date: 'Wed, Feb 08 2023', time: '01:15:16 PM', type: 'Repayment', color: 'bg-green-100' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Recent Activities</h3>
        <a href="#" className="text-blue-600">View all</a>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className={`flex items-center p-2 rounded ${activity.color}`}>
            <div className="flex-1">
              <p className="font-semibold">{activity.name}</p>
              <p className="text-sm text-gray-600">{activity.user}</p>
            </div>
            <div className="flex-1 text-center">
              <p>{activity.amount}</p>
            </div>
            <div className="flex-1 text-center">
              <p>{activity.date}</p>
              <p className="text-sm text-gray-600">{activity.time}</p>
            </div>
            <div className="flex-1 text-right">
              <p>{activity.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;