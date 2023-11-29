// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.js';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Experience from './Experience';
import About from './About';
import Education from './Education';
import Contact from './Contact.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <About/>
  },
{
  path: "/About",
  element: <About/>,
},
{
  path: "/Experience",
  element: <Experience/>,
},
{
  path: "/Education",
  element: <Education/>,
},
{
  path: "/Contact",
  element: <Contact/>,
},
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/*" element={router} />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);