import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Links from '../Links/Links';
import Settings from '../Settings/Settings';
import './HomePage.css';
import axios from 'axios';
import Appearance from '../Appearance';
import Analytics from '../Analytics';

const  HomePage = () => {
    const [firstName, setFirstName] = useState('');
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('https://link-tree-backend-2.onrender.com/api/v2/user/user-details', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setFirstName(response.data.data.firstName);
                console.log('User details:', response.data.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
                
            }
        }
        getUserDetails();
    }, [token])
    

    return (
        <div className="homepage">
            <Sidebar username={firstName} />
            <div className="main-content">
                <Navbar username={firstName} />
                <div className="content-area">
                    <Routes>
                        <Route path="/link-page" element={<Links />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path='/appearance' element={<Appearance/>} />
                        <Route path='/analytics' element={<Analytics/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
