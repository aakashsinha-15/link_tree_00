import React, { useState } from 'react';
import './Tellus.css';
import SparkImage from '../../assets/Frame.jpg';
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'

function Tellus() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate()

    const categories = [
        { name: "Business", emoji: "💼" },
        { name: "Creative", emoji: "🎨" },
        { name: "Education", emoji: "📚" },
        { name: "Entertainment", emoji: "🎭" },
        { name: "Fashion & Beauty", emoji: "💄" },
        { name: "Food & Beverage", emoji: "🍔" },
        { name: "Government & Politics", emoji: "🏛️" },
        { name: "Health & Wellness", emoji: "💪" },
        { name: "Non-Profit", emoji: "❤️" },
        { name: "Other", emoji: "❓" },
        { name: "Tech", emoji: "💻" },
        { name: "Travel & Tourism", emoji: "✈️" }
    ];

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/home/link-page')
    }

    return (
        <div className="tellus-container">
            <div className="logo-container">
                <img src={logo}/>
            </div>

            <div className="forrm-container">
                <h1>Tell us about yourself</h1>
                <p className="pers-info">For a personalized Spark experience</p>

                <form action='submit' onSubmit={submitHandler} className='forrms'>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" name="username" placeholder="Tell us your username" />

                    <div className="category-selection">
                        <h3>Select one category that best describes your Linktree:</h3>
                        <div className="grid-container">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className={`category-box ${selectedCategory === category.name ? 'selected' : ''}`}
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category.name}
                                        checked={selectedCategory === category.name}
                                        onChange={() => setSelectedCategory(category.name)}
                                        hidden
                                    />
                                    {category.emoji} {category.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" disabled={!selectedCategory}>Continue</button>
                </form>
            </div>
            <div className="imaggee-container"> 
                <img src={SparkImage} alt="Spark" />
            </div>
        </div>
    );
}

export default Tellus;
