import React, { useState } from "react";
import "./Appearance.css";

const linkNames = ["Instagram", "YouTube", "Facebook", "Others"];

const Appearance = () => {
  const [layout, setLayout] = useState("stack");
  const [buttonStyle, setButtonStyle] = useState("solid");
  const [font, setFont] = useState({ family: "Arial", color: "#000" });
  const [theme, setTheme] = useState("light");

  const links = linkNames.map((name, index) => ({
    id: index,
    name,
    clicks: Math.floor(Math.random() * 100),
  }));

  const saveSettings = () => {
    const settings = { layout, buttonStyle, font, theme };
    localStorage.setItem("appearanceSettings", JSON.stringify(settings));
    alert("Settings saved!");
  };

  return (
    <div className="appearance-container">

      <div className="main-content">

        <div className="appearance-options">
          <div className="phone-preview">
            <div className={`phone ${layout}`}>
              {links.map((link) => (
                <button key={link.id} className={`btn ${buttonStyle}`}>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="option">
            <h3>Layout</h3>
            <div className="layout-options">
              {["stack", "grid", "carousel"].map((option) => (
                <button
                  key={option}
                  className={layout === option ? "selected" : ""}
                  onClick={() => setLayout(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="option">
            <h3>Buttons</h3>
            <div className="button-options">
              {["solid", "outline", "rounded"].map((option) => (
                <button
                  key={option}
                  className={`btn-preview ${option}`}
                  onClick={() => setButtonStyle(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="option">
            <h3>Fonts</h3>
            <select onChange={(e) => setFont({ ...font, family: e.target.value })}>
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
            <h3>Themes</h3>
            <div className="theme-options">
              {["light", "dark", "blue"].map((option) => (
                <button
                  key={option}
                  className={`theme-btn ${option}`}
                  onClick={() => setTheme(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button className="save-btn" onClick={saveSettings}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
