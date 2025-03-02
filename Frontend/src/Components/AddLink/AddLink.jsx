import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddLink.css";

function AddLink() {
    const url = "http://localhost:5000/api/v2/link";
    const [links, setLinks] = useState([]);
    const [link, setLink] = useState({ label: "", link: "" });
    const [activeTab, setActiveTab] = useState("addLink");
    const token = localStorage.getItem("accessToken");



    const handleChange = (e) => {
        setLink({ ...link, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!link.label || !link.link) return;

        try {
            const response = await axios.post(`${url}/add-link`, link, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setLinks([...links, response.data]);
            setLink({ label: "", link: "" });
        } catch (error) {
            console.error("Error adding link:", error.response?.data || error.message);
        }
    };

   
    return (
        <div className="container">
            <nav className="nav">
                <button
                    className={`nav-btn ${activeTab === "addLink" ? "active" : ""}`}
                    onClick={() => setActiveTab("addLink")}
                >
                    Add Link
                </button>
                <button
                    className={`nav-btn ${activeTab === "addShop" ? "active" : ""}`}
                    onClick={() => setActiveTab("addShop")}
                >
                    Add Shop
                </button>
            </nav>

            {/* Add Link Form */}
            <div className="form-container">
                <h1>Enter URL</h1>
                <form onSubmit={handleSubmit}>
                    {/* Label Input */}
                    <div className="input-group">
                        <input
                            type="text"
                            name="label"
                            value={link.label}
                            onChange={handleChange}
                            placeholder="Enter Link Title"
                            required
                        />
                        {/* Save Icon */}
                        <button type="submit" disabled={!link.label || !link.link} className="icon-btn">
                            ✅
                        </button>
                    </div>

                    {/* Link Input */}
                    <div className="input-group">
                        <input
                            type="text"
                            name="link"
                            value={link.link}
                            onChange={handleChange}
                            placeholder="Enter Link URL"
                            required
                        />
                        {/* Delete Icon */}
                        <button type="button" onClick={() => setLink({ label: "", link: "" })} className="icon-btn">
                            ❌
                        </button>
                    </div>
                </form>
            </div>
           
        </div>
    );
}

export default AddLink;
