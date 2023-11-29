// BubbleElements.js
import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './App.js';
import './index.js';
import { Link } from "react-router-dom";
const Header = () => {
  const handleButtonClick = () => {
    // Timeout function
    setTimeout(function () {
      var startingScreen = document.getElementById('loader');
      startingScreen.classList.add('hidden');

      var mainPage = document.getElementById('webpage');
      mainPage.classList.remove('hidden');
    }, 900);
  };
  return (
    <div className="header">
      <Link to="/Experience">
        <button className="btn" id="btn2" onClick={handleButtonClick}>
          EXPERIENCE
        </button>
      </Link>
      <Link to="/About">
        <button className="btn" id="btn1" onClick={handleButtonClick}>
          ABOUT
        </button>
      </Link>
      <Link to="/Education">
        <button className="btn" id="btn3" onClick={handleButtonClick}>
          EDUCATION
        </button>
      </Link>
    </div>
  );
};

export default Header;
