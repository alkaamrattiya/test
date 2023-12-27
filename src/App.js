
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Dashboard from './components/Dashboard';

import CreateAd from './components/CreateAd';

import Navbar from './components/Navbar';
import AdsSubmittedPage from './components/AdsSubmittedPage';






function App() {
  return (
    <Router>
    <Navbar/>
    
    <Routes>
    
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/ads-submitted" element={<AdsSubmittedPage />} />
        
       
      </Routes>
      </Router>
  );
}

export default App;
