import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './App.js';
import './index.js';
import BubbleElements from './Bubbles.js';
import Header from './Header.js';
import Footer from './Footer.js';

function About() {
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
              <div className="home">

                <div className="pic">
                  <img src={require("./images/Sahil.jpeg")} />
                </div>

                <div className="name">
                  <div className="Hello">
                    <h2>Hello! I'm</h2>
                  </div>
                  <div className="Sahil">
                    <h1 className="glitch2">
                      <span aria-hidden="true">Sahil Aggarwal</span>
                      Sahil Aggarwal
                      <span aria-hidden="true">Sahil Aggarwal</span>
                    </h1>
                  </div>
                  <span className="dynamic-text">

                  </span>

                </div>

                <div className="links">
                  <a href="https://github.com/SahilAggarwall"><i className='bx bxl-github'></i></a>
                  <a href="https://www.linkedin.com/in/sahilaggarwall"><i className='bx bxl-linkedin'></i></a>
                  <a href="https://wa.me//+917056032744"><i className='bx bxl-whatsapp'></i></a>
                </div>

              </div>
              <Footer />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default About;