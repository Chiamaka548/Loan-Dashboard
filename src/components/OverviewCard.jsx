import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const OverviewCard = ({ title, amount, unit, bgColor, icon }) => {
  return (
    <div className={`p-4 rounded-2xl shadow font-axiforma ${bgColor}`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
          <img src={icon} alt={title} className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-center w-6 h-6 bg-transparent rounded-full">
          <BsThreeDotsVertical className="text-black w-4 h-4"/>
        </div>  
      </div>
      
      <div className="text-gray-400 font-semibold text-xs mb-2">{title}</div>
      <div className="text-2xl font-bold mb-4">{amount}</div>
      <div className="text-xs text-gray-600 font-medium">Unit Number: {unit}</div>
    </div>
  );
};

export default OverviewCard;