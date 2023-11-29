// BubbleElements.js
import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './App.js';
import './index.js';
import { Link } from "react-router-dom";
const Footer = () => {
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
    <div class="footer">
      <Link to="/Contact">
        <button class="btn" id="btn5" onClick={handleButtonClick}>
          PROJECTS
        </button>
      </Link>
    </div>
  );
};

export default Footer;
