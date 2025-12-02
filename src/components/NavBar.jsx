import React from 'react';
import SearchIcon from '../assets/search-icon.svg';
import NotificationIcon from '../assets/notification-bell.svg';
import UserIcon from '../assets/profile.jpg';

const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center px-4 md:px-8 py-4 bg-white shadow-sm gap-4">
            {/* Title - Add left padding on mobile to avoid hamburger */}
            <div className="text-xl md:text-2xl font-semibold font-axiforma text-black order-1 pl-14 lg:pl-0">
                Loan Dashboard
            </div>

            {/* Search bar - full width on mobile, constrained on desktop */}
            <div className='relative w-full md:flex-1 md:max-w-sm md:mx-8 order-3 md:order-2'>
                <img 
                    src={SearchIcon} 
                    alt='search' 
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5'
                />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="pl-12 pr-4 py-2 w-full bg-gray-100 font-axiforma text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>
            
            {/* Right side icons and user info */}
            <div className="flex items-center space-x-3 order-2 md:order-3">
                {/* Notification bell */}
                <div className="relative p-2 bg-gray-100 rounded-xl">
                    <img src={NotificationIcon} alt="notification" className="w-5 h-5" />
                    <span className='absolute top-1 right-2 w-2 h-2 bg-orange-500 rounded-full'></span>
                </div>    

                {/* User Info - hide text on small screens */}
                <div className="flex items-center space-x-3">
                    <div className='hidden sm:flex flex-col text-right'>
                        <span className="text-xs font-medium text-black font-axiforma">
                            Bright Feranmi
                        </span>
                        <span className="text-xs text-gray-400">Admin</span>
                    </div>
                    <img src={UserIcon} alt="user" className="w-10 h-10 rounded-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;