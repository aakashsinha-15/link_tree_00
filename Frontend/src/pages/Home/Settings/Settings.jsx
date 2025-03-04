import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import './Settings.css';

function Settings() {
    const token = localStorage.getItem('accessToken');

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        LastName: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const getUserDetails = async () => {
        useEffect(() => {
            try {
                // const response = axios.get('http://localhost:5000/api/v2/user/user-details', {
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // })
                const response = axios.get('https://link-tree-backend-2.onrender.com/api/v2/user/user-details', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.data?.data) {
                    setFormData({
                        email: response.data.data.email || '',
                        firstName: response.data.data.firstName || '',
                        LastName: response.data.data.LastName || '',
                        password: ''
                    });
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                setError('Error fetching user details');
            }
        }, [token])
        if (token) getUserDetails();
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(token)
        try {
            const response = await axios.patch('http://localhost:5000/api/v2/user/edit-profile', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (response.data?.data) {
                setFormData((prev) => ({
                    ...prev,
                    password: ''
                }));
            }
            console.log('User updated successfully:', response.data);
            setMessage('User updated successfully');
        } catch (error) {
            console.error('Error fetching user details:', error);
            setError('Error updating user details');
        }
        // if (token) getUserDetails();
    };

    return (
        <div className="settings_container">
            <h2 className="settings_heading">Edit Profile</h2>
            <div className="settings_form">
                <form onSubmit={submitHandler}>
                    <div className="settings_input_group">
                        <label className="settings_label">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            className="settings_input"
                        />
                    </div>
                    <div className="settings_input_group">
                        <label className="settings_label">Last Name</label>
                        <input
                            type="text"
                            name="LastName"
                            value={formData.LastName}
                            onChange={changeHandler}
                            className="settings_input"
                        />
                    </div>
                    <div className="settings_input_group">
                        <label className="settings_label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            className="settings_input"
                        />
                    </div>
                    <div className="settings_input_group">
                        <label className="settings_label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            className="settings_input"
                        />
                    </div>

                    <button type="submit" className="settings_button">Save</button>
                </form>
                {
                    message && <p className="settings_message">{message}</p>
                }
                {
                    error && <p className="settings_error">{error}</p>
                }
            </div>
        </div>

    );
}

export default Settings;
