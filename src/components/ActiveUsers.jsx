import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BsThreeDotsVertical } from 'react-icons/bs';

ChartJS.register(ArcElement, Tooltip, Legend);

const ActiveUsers = () => {
  const donutData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#2563EB', '#93C5FD'],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 bg-white rounded-2xl font-axiforma">
      <div className="flex flex-col gap-8">
        {/* Active Users */}
        <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <h3 className="text-sm text-gray-500 font-medium">Active users</h3>
            <BsThreeDotsVertical className=" w-4 h-4" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-2">10,786</div>
        </div>

        {/* Total Users */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-lg w-full">
          <div className="flex justify-between items-start">
            <h3 className="text-sm text-gray-500 font-medium">Total Users</h3>
            <BsThreeDotsVertical className="w-4 h-4" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-2">20,587</div>
        </div>

        {/* Repayment Rate */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-lg w-full">
          <div className="flex justify-between items-start">
            <h3 className="text-sm text-gray-500 font-medium whitespace-nowrap">Repayment Rate</h3>
            <BsThreeDotsVertical className="w-4 h-4 shrink-0" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mt-2">80%</div>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg w-full ml-4 md:ml-2 max-w-sm">
        <div className="flex justify-between items-start w-full">
          <h3 className="text-sm text-gray-500 font-medium">Active users Ratio</h3>
          <BsThreeDotsVertical className="w-4 h-4" />
        </div>
        <div className="relative w-36 h-36 mt-4">
          <Doughnut data={donutData} options={donutOptions} />
          <div className="absolute top-0 left-[80%] transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-sm font-medium text-gray-900 bg-white px-2 py-1 rounded-full shadow">60%</span>
          </div>
          <div className="absolute bottom-0 left-[20%] transform -translate-x-1/2 translate-y-1/2">
            <span className="text-sm font-medium text-gray-900 bg-white px-2 py-1 rounded-full shadow">40%</span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Male</span>
          <span className="text-sm font-medium text-gray-900 ml-2">6,472</span>
        </div>
        <div className="flex items-center mt-1">
          <span className="w-4 h-4 bg-blue-300 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Female</span>
          <span className="text-sm font-medium text-gray-900 ml-2">4,314</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
