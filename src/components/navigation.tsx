import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import "../App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import Button from "@material-ui/core/Button/Button";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const [otherThemeName, setOtherThemeName] = useState("Dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setOtherThemeName("Light");
    } else {
      setTheme("light");
      setOtherThemeName("Dark");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <div style={{ padding: "5px" }}>
          <GlobalStyles />
        </div>
        <Button onClick={toggleTheme}> {otherThemeName} Theme</Button>
        <div className="App">
          <nav className="nav">
            <Link style={navStyle} to="/">
              <h1>Xinge 's</h1>
            </Link>
            <ul className="nav-link">
              <Link style={navStyle} to="/about">
                <li>About</li>
              </Link>
              <Link style={navStyle} to="/photo">
                <li>Photo</li>
              </Link>
              <Link style={navStyle} to="/hobby">
                <li>Hobby</li>
              </Link>
            </ul>
          </nav>
        </div>
      </>
    </ThemeProvider>
  );
};

const navStyle = {
  color: "black",
  textDecoration: "none"
};

export default Nav;
