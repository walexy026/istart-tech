import React, { useState, useEffect } from "react";

import "./Theme.css";
import { BiMoon } from "react-icons/bi";
const Theme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <BiMoon onClick={toggleTheme} fontSize="2rem" />
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
    </div>
  );
};

export default Theme;
