import React from 'react';
import SearchIcon from '../assets/search-icon.svg';
import NotificationIcon from '../assets/notification-bell.svg';
import UserIcon from '../assets/profile.jpg';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
            {/* Title */}
            <div className="text-2xl font-semibold font-axiforma text-black">Loan Dashboard</div>


                {/* search bar with icon */}
                <div className='relative flex-1 max-w-sm mx-8'>
                    <img src={SearchIcon} alt='search' className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5'/>
                    <input type="text" placeholder="Search" className="pl-12 pr-4 py-2 w-full bg-gray-100 font-axiforma text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"/>
                </div>
                
                {/* Notification bell */}
                <div className="relative p-2 bg-gray-100 rounded-xl left-2">
                    <img src={NotificationIcon} alt="notification" className="w-5 h-5" />
                    <span className='absolute top-1 right-2 w-2 h-2 bg-orange-500 rounded-full'></span>
                </div>    

                {/* User Info */}
                <div className="flex items-center space-x-3">
                    <div className='flex flex-col text-right'>
                        <span className="text-xs font-medium text-black font-axiforma">
                            Bright Feranmi
                        </span>
                        <span className="text-xs text-gray-400">Admin</span>
                    </div>
                    <img src={UserIcon} alt="user" className="w-10 h-10 rounded-full object-cover" />
                </div>
        </div>
    );
};

export default Navbar;