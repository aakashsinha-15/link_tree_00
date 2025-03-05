import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    // username:'',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
    firstName:'',
    LastName:'',
  });

  // const url = 'http://localhost:5000/api/v2/user/register';
  const url = "https://link-tree-backend-222.onrender.com/api/v2/user/register"
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.accept) {
      alert('Please accept the terms and conditions.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(url, formData, {headers: {"Content-Type": "application/json"}});
      console.log('User registered successfully:', response.data);
      // alert('Registration successful!');
      navigate('/login')
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="logo">
          <img src={logo} alt="SPARK" />
      </div>
      <div className="signup-form">
       <div className="heading"> <h2>Sign up to your Spark</h2></div>
        <div id="options_0"><p>Create an account</p> <Link to="/login">Sign in instead</Link></div>

        <form onSubmit={handleSubmit}>
          <label class="label">First Name</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <label class="label">Last Name</label>
          <input type="text" name="LastName" placeholder="Last Name" value={formData.LastName} onChange={handleChange} required />
          <label class="label">Email</label>
          {/* <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required /> */}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <label class="label">Password</label>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <label class="label">Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

          <div className="terms">
            <input type="checkbox" name="accept" checked={formData.accept} onChange={handleChange} />
            <label>By creating an account, I agree to the <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link></label>
          </div>

          <div className="submit_button"><button type="submit" className="btn primary-btn">Create an account</button></div>
        </form>
      </div>

      <div className="signup-image"></div>
    </div>
  );
};

export default Register;
