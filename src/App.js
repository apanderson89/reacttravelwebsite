import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
    <Router>
     <Navbar />
      <Routes>
        <Route exact path='/'  element= {<Home />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
