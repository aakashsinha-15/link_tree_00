import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [layout, setLayout] = useState("block");
    const [buttonStyle, setButtonStyle] = useState("default");
    const [font, setFont] = useState({ family: "Arial", color: "#000" });
    const [theme, setTheme] = useState("light");

    return (
        <GlobalContext.Provider value={{ layout, setLayout, buttonStyle, setButtonStyle, font, setFont, theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobalContext);
