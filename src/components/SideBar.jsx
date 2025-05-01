import React from 'react';
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
        <div className="w-50 min-h-screen bg-blue-950 text-white p-4 flex flex-col justify-between">
            <div>
                {/* Logo */}
                <div className="flex justify-start mb-12">
                    <img src={Logo} alt="logo" className="w-40 h-auto" />
                </div>

                {/* Manage section */}
                <div className="mb-4 uppercase text-xs font-medium text-gray-400 tracking-wider">Manage</div>
                {manageItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
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

                {/* Small gap before Preference */}
                <div className="mt-8 mb-4 uppercase text-xs font-medium text-gray-400 tracking-wider">Preference</div>
                {preferenceItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
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
    );
};

export default Sidebar;
