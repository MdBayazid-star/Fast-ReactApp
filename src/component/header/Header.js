import React from "react";
import "./Header.css";
import herderLogo from "./../images/header.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={herderLogo} alt="" />
      </div>
      <div className="headerNav">
        <ul>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./home">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
