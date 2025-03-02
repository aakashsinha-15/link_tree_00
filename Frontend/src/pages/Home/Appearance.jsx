import React, { useState } from "react";
import { FaLink, FaShoppingCart, FaSave, FaPalette, FaFont } from "react-icons/fa";
import "./Appearance.css";
import logo from "../../assets/Group.png";

const Appearance = () => {
  const [layout, setLayout] = useState("stack");
  const [buttonStyle, setButtonStyle] = useState("solid");
  const [font, setFont] = useState({ family: "Arial", color: "#000" });
  const [theme, setTheme] = useState("light");
  const [activeButton, setActiveButton] = useState("link");

  const saveSettings = () => {
    const settings = { layout, buttonStyle, font, theme };
    localStorage.setItem("appearanceSettings", JSON.stringify(settings));
    alert("Settings saved!");
  };

  return (
    <div className={`appearance-container ${theme}`}>
      <div className="phone-container" style={{ fontFamily: font.family, color: font.color }}>
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
            onClick={() => setActiveButton("link")}
          >
            <FaLink /> Links
          </button>
          <button
            className={`toggle-btn ${activeButton === "shop" ? "active" : ""}`}
            onClick={() => setActiveButton("shop")}
          >
            <FaShoppingCart /> Shop
          </button>
        </div>

        {activeButton === "link" && (
          <div className={`links-section ${layout}`}>
            <div className="link-item">
              <img src={logo} alt="youtube icon" /> Latest YouTube Video
            </div>
            <div className="link-item">
              <img src={logo} alt="instagram" /> Latest Instagram Reel
            </div>
          </div>
        )}

        <div className="connect-section">
          <button className={`connect-btn ${buttonStyle}`}>Get Connected</button>
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
            <h2>SPARK</h2>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <div className="appearance-options">
          <div className="option">
            <h3><FaPalette /> Theme</h3>
            <div className="theme-options">
              {["light", "dark", "blue"].map((option) => (
                <button
                  key={option}
                  className={`theme-btn ${option} ${theme === option ? "selected" : ""}`}
                  onClick={() => setTheme(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="option">
            <h3><FaFont /> Fonts</h3>
            <select onChange={(e) => setFont({ ...font, family: e.target.value })} value={font.family}>
              <option value="Arial">Arial</option>
              <option value="Roboto">Roboto</option>
              <option value="Courier New">Courier New</option>
            </select>
            <input
              type="color"
              value={font.color}
              onChange={(e) => setFont({ ...font, color: e.target.value })}
            />
          </div>

          <div className="option">
            <h3>Layout</h3>
            <div className="layout-options">
              {["stack", "grid", "carousel"].map((option) => (
                <button
                  key={option}
                  className={`layout-btn ${layout === option ? "selected" : ""}`}
                  onClick={() => setLayout(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button className="save-btn" onClick={saveSettings}>
            <FaSave /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
