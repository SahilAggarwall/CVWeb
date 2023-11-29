import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './App.js';
import './index.js';
import BubbleElements from './Bubbles.js';
import Header from './Header.js';
import Footer from './Footer.js';

function Education() {
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
                            <Header/>

                            <div className="home2">
                                <div className="book" id="book1">
                                    <text><center>
                                        MAY 2024 <br /><br /></center>
                                        <ul>
                                            <li>Maintaing a GPA of 8</li>
                                            <li>Secured 1st position in Tech Quiz conducted by Curieux – The Computer Sci Society in Lashkara 2023 – The Annual Fest.</li>
                                            <li>Secured 1st postion in Football in the Khel Utsav at SGTB Khalsa College 2022-2023</li>
                                        </ul>
                                    </text>
                                    <div className="cover">
                                        <center>
                                            <img src={require("./images/SGTB.jpeg")} /><br /><br />
                                            <p1>SGTB Khalsa, College</p1><br />
                                            University of Delhi<br /><br />
                                            B.Sc. Computer Sci (Hons)
                                        </center>

                                    </div>
                                </div>
                                <div className="book" id="book2">
                                    <text><center>
                                        MAY 2021 <br /><br /></center>
                                        <ul>
                                            <li>Scored 96.5% (PCM)</li>
                                            <li>Secured 2nd position in Football in the School’s Annual Sports Event for the year 2019-2020.</li>
                                            <li>Secured 2nd position in Throwball in the School’s Annual Sports Event for the year 2019-2020.</li>
                                        </ul>
                                    </text>

                                    <div className="cover">
                                        <center>
                                            <img src={require("./images/MNR.jpeg")} /><br /><br />
                                            <p1>MNR School of Excellence</p1><br />
                                            Kamothe,Mumbai<br /><br />
                                            Higher Secondary
                                        </center>
                                    </div>
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

export default Education;