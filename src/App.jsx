import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/NavBar';
import Overview from './pages/Overview';
import Records from './pages/Records';
import Transactions from './pages/Transactions';
import Users from './pages/Users';
import Staffs from './pages/Staffs';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Security from './pages/Security';
import Switchboard from './pages/Switchboard';

const App = () => {
    return (
        <Router>
            <div className='flex'>
                <Sidebar/>
                <div className='flex-1'>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Overview />}/>
                        <Route path='/records' element={<Records/>}/>
                        <Route path='/transactions' element={<Transactions/>}/>
                        <Route path='/users' element={<Users/>}/>
                        <Route path='/staffs' element={<Staffs/>}/>
                        <Route path='/analytics' element={<Analytics/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/security' element={<Security/>}/>
                        <Route path='/switchboard' element={<Switchboard/>}/>
                        <Route path='/logout' element={<div>Logout Page</div>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;