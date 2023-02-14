import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components//Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


function App() {

  return (
    <Router>
      <Navbar/>
      <div className='containerdiv'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        <div className="footersec">
        <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
