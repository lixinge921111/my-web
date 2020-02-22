import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const style = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <div className="body">
      <div className="main">
        <Link style={style} to="/">
          <h1 className="title">Welcome to Xinge's Web</h1>
        </Link>
        <nav className="navigation">
          <ul className="link">
            <Link style={style} to="/about">
              <li>About</li>
            </Link>
            <Link style={style} to="/photo">
              <li>Photo</li>
            </Link>
            <Link style={style} to="/hobby">
              <li>Hobby</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
