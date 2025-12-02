import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import OverviewIcon from '../assets/overview.svg';
import RecordsIcon from '../assets/records.svg';
import TransactionsIcon from '../assets/transactions.svg';
import UsersIcon from '../assets/users.svg';
import StaffIcon from '../assets/staffs.svg';
import AnalyticsIcon from '../assets/analytics.svg';
import SettingIcon from '../assets/settings.svg';
import SecurityIcon from '../assets/security.svg';
import SwitchBoardIcon from '../assets/switch-board.svg';
import LogoutIcon from '../assets/logout.svg';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const manageItems = [
        { name: 'Overview', path: '/', icon: OverviewIcon },
        { name: 'Records', path: '/records', icon: RecordsIcon },
        { name: 'Transactions', path: '/transactions', icon: TransactionsIcon },
        { name: 'Users', path: '/users', icon: UsersIcon },
        { name: 'Staffs', path: '/staffs', icon: StaffIcon },
        { name: 'Analytics', path: '/analytics', icon: AnalyticsIcon },
    ];
    const preferenceItems = [
        { name: 'Settings', path: '/settings', icon: SettingIcon },
        { name: 'Security', path: '/security', icon: SecurityIcon },
    ];
    const bottomItems = [
        { name: 'Switch Board', path: '/switchboard', icon: SwitchBoardIcon },
        { name: 'Logout', path: '/logout', icon: LogoutIcon },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 left-4 z-50 p-2 bg-blue-950 text-white rounded-lg shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-40
                w-64 min-h-screen bg-blue-950 text-white p-4 
                flex flex-col justify-between
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="overflow-y-auto">
                    {/* Logo */}
                    <div className="flex justify-start mb-12 mt-12 lg:mt-0">
                        <img src={Logo} alt="logo" className="w-40 h-auto" />
                    </div>

                    {/* Manage section */}
                    <div className="mb-4 uppercase text-xs font-medium text-gray-400 tracking-wider">Manage</div>
                    {manageItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center p-3 mb-2 rounded-lg font-axiforma text-sm transition-colors duration-200 ${
                                    isActive ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:bg-blue-800'
                                }`
                            }
                        >
                            <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
                            {item.name}
                        </NavLink>
                    ))}

                    {/* Preference section */}
                    <div className="mt-8 mb-4 uppercase text-xs font-medium text-gray-400 tracking-wider">Preference</div>
                    {preferenceItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center p-3 mb-2 rounded-lg font-axiforma text-sm transition-colors duration-200 ${
                                    isActive ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:bg-blue-800'
                                }`}>
                            <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Bottom section */}
                <div className="flex flex-col mb-4">
                    {bottomItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center p-3 mb-2 rounded-lg font-axiforma text-sm transition-colors duration-200 ${
                                    isActive ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:bg-blue-800'
                                }`
                            }
                        >
                            <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sidebar;