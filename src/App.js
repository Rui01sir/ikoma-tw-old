import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <TopButton />
      <Footer />
    </Router>
  );
}

export default App;
