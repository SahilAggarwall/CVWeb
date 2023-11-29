// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import './index.js';
import Contact from './Contact.js';

setTimeout(function () {
  var startingScreen = document.getElementById('loader');
  startingScreen.classList.add('hidden');

  var mainPage = document.getElementById('webpage');
  mainPage.classList.remove('hidden');
}, 900);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<About/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Experience" element={<Experience/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/Contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
}


export default App;
