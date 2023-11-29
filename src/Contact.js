import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './App.js';
import './index.js';
import BubbleElements from './Bubbles.js';
import Header from './Header.js';
import Footer from './Footer.js';

function Contact() {
  return (

    <div>
      {
        <div>
          <BubbleElements />
          <div className="content">
            <div id="loader">
              <div data-glitch="Loading..." className="glitch">Loading...</div>
            </div>
            <div id="webpage" className="hidden">
              <Header />
              <div className="home6">
                <div className="card" id="card1">
                  <div className="blob"></div>
                  <a href='https://github.com/SahilAggarwall/Resume'><img src={require("./images/Resume.jpg")} /></a>
                  <h2>Website<br /><br /><span>Resume</span></h2>
                  <p>
                  </p>
                </div>
                <div className="card" id="card2">
                  <div className="blob"></div>
                  <a href='https://github.com/SahilAggarwall/Snake-and-Ladder'><img src={require("./images/SnakeNLadder.png")} /></a>
                  <h2>GAME<br /><br /><span>Snake and Ladder</span></h2>
                  <p>
                  </p>
                </div>
                <div className="card" id="card3">
                  <div className="blob"></div>
                  <a href='https://github.com/SahilAggarwall/Website'><img src={require("./images/e-commerce.jpg")} /></a>
                  <h2>Website<br /><br /><span>E-Commerce</span></h2>
                  <p>
                  </p>
                </div>
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Contact;