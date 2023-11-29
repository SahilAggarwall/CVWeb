import React, { useState } from 'react';
import './CSS/CSS_FILE.css';
import './App.js';
import './index.js';
import BubbleElements from './Bubbles.js';
import Header from './Header.js';
import Footer from './Footer.js';
function Experience() {
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
                                        Noida, UP<br /><br />
                                        July 2023 – Present <br />(US SHIFT)<br /><br /></center>
                                        <ul>
                                            <li>Expertly diagnose and resolve intricate technical issues.</li>
                                            <li>Collaborate with cross-functional teams to address complex challenges and drive improvements.</li>
                                            <li>Working closely with assigned clients.</li>
                                            <li>Performing product demonstrations.</li>
                                        </ul>
                                    </text>
                                    <div className="cover">
                                        <center>
                                            <img src={require("./images/Spraxa.jpg")} /><br /><br />
                                            <p1>Spraxa Solutions</p1><br /><br />
                                            Technical Support Engineer<br />&<br />Account Coordinator
                                        </center>

                                    </div>
                                </div>
                                <div className="book" id="book2">
                                    <text><center>
                                        Noida, UP<br /><br />
                                        APR 2022 – APR 2023 <br />(US SHIFT)<br /><br /></center>
                                        <ul>
                                            <li>Troubleshooting technical issues</li>
                                            <li>Maintaining computer systems</li>
                                            <li>Providing technical support</li>
                                            <li>Installing and configuring hardware and software</li>
                                        </ul>
                                    </text>
                                    <div className="cover">
                                        <center>
                                            <img src={require("./images/HDND.jpeg")} /><br /><br />
                                            <p1>HD & ND Corporates</p1><br /><br />
                                            IT Assistant
                                        </center>

                                    </div>
                                </div>
                                <div className="book" id="book3">
                                    <text><center>
                                        Miami,FL(Remote)<br /><br />
                                        DEC 2021 – APR 2022<br /><br /></center>
                                        <ul>
                                            <li>Research on Pharmaceutical Companies</li>
                                            <li>Analyze, Sort, and fill in the Company database</li>
                                            <li>Selected and Compiled required supplies to complete work Assignments</li>
                                        </ul>
                                    </text>

                                    <div className="cover">
                                        <center>
                                            <img src={require("./images/BI.jpeg")} /><br /><br />
                                            <p1>Brand Institute</p1><br /><br />
                                            Data Entry Navigator
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

export default Experience;