import React, { useState, useEffect } from 'react'
import logo from '../../../assets/Group.png'
import './Links.css'
import AddLink from '../../../Components/AddLink/AddLink';
import AddShop from '../../../Components/AddShop/AddShop';
import axios from 'axios';

function Links() {
    const [activeButton, setActiveButton] = useState(null);
    const [showLinks, setShowLinks] = useState(true);
    const [isdata, setIsData] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [isShop, setIsShop] = useState(false);
    const [links, setLinks] = useState([]);

    const handleButtonClick = (button) => {
        setActiveButton(button);
        if (button === "link") {
            setShowLinks(true);
        } else {
            setShowLinks(false);
        }
    };
    // const url = "http://localhost:5000/api/v2/link";
    const url = "https://link-tree-backend-2.onrender.com/api/v2/link";
    const token = localStorage.getItem("accessToken");
    const fetchLinks = async () => {
        try {
            const response = await axios.get(`${url}/get-links`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setLinks(Array.isArray(response.data.data) ? response.data.data : []);
            console.log(response.data.data);
            console.log("links length", response.data.data.length);
        } catch (error) {
            console.error("Error fetching links:", error.response?.data || error.message);
            setLinks([]);
        }
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${url}/delete-link/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setLinks(links.filter((link) => link._id !== id));
        } catch (error) {
            console.error("Error deleting link:", error.response?.data || error.message);
        }
    };


    useEffect(() => {
        fetchLinks();
    }, []);

    return (
        <div className='link-container'>
            <div className="phone-container">
                <div className="profile">
                    <button className="share-btn">Share</button>
                    <div className="profile">
                        <img src={logo} alt="profile" className="profile-img" />
                        <p className="username">Username</p>
                    </div>
                </div>

                <div className="button-group">
                    <button
                        className={`toggle-btn ${activeButton === "link" ? "active" : ""}`}
                        onClick={() => handleButtonClick("link")}
                    >
                        Link
                    </button>
                    <button
                        className={`toggle-btn ${activeButton === "shop" ? "active" : ""}`}
                        onClick={() => handleButtonClick("shop")}
                    >
                        Shop
                    </button>
                </div>

                {showLinks && (
                    <div className="links-section">
                        <div className="link-item">
                            <img src={logo} alt="youtube icon" /> Latest YouTube Video
                        </div>
                        <div className="link-item">
                            <img src={logo} alt="instagram" /> Latest Instagram Reel
                        </div>
                    </div>
                )}

                <div className="connect-section">
                    <button className="connect-btn">Get Connected</button>
                    <div className="logo-container">
                        <img src={logo} alt="logo" className="logo" />
                        <h2>SPARK</h2>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Profile Section */}
                <p>profile</p>
                <div className="profile-section">
                    <div className="profile-pic">
                        <img src={logo} alt="Profile" className='profile-img-1' />
                        <div className="profile-actions">
                            <p className="pick-image">Pick an image</p>
                            <p className="remove">Remove</p>
                        </div>
                    </div>
                    <div className="profile-inputs">
                        <div className='profile-title'>
                            <label>Profile Title</label>
                            <input type="text" placeholder="Profile Title" />
                        </div>
                        <div className='profile-bio'>
                            <label>Bio</label>
                            <textarea type="text" placeholder="Bio" />
                        </div>
                    </div>
                </div>

                <div className="add-links">
                    <div className="add-buttons">
                        <button onClick={() => setIsLink((prev) => !prev)}>Add Link</button>
                        <button onClick={() => setIsShop((prev) => !prev)}>Add Shop</button>
                    </div>
                    <div className="add-box">
                        <p>Add</p>
                    </div>
                    {
                        isLink && (
                            <AddLink />
                        )
                    }

                    {
                        isLink && (
                            <div className="saved-links">
                                <h1>Saved Links</h1>
                                {links.length === 0 ? (
                                    <p>No links added yet.</p>
                                ) : (
                                    <ul>
                                        {links.map((link, index) => (
                                            <li key={index} className="link-item">
                                                <span className="link-label">{link.label}</span>
                                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                                    {link.link}
                                                </a>
                                                <button onClick={() => handleDelete(link._id)} className="delete-btn">
                                                    ❌
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    {
                        isShop && (
                            <AddShop />
                        )
                    }
                </div>

                <div className="banner-section">
                    <div className="banner">
                        <img src={logo} alt="Banner" className='banner-img-1' />
                        <h2>@Username</h2>
                        <p>
                            <img src={logo} alt="User Icon" />
                            /username
                        </p>
                    </div>
                    <div className="color-options">
                        <p>Custom Background Color</p>
                        <div className="color-picker">
                            <div className="color-box black"></div>
                            <div className="color-box white"></div>
                            <div className="color-box gray"></div>
                        </div>
                    </div>
                </div>

                <button className="save-btn">Save</button>

            </div>
        </div>
    )
}

export default Links