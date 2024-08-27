import './App.css';
import 'animate.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Footer from './components/Footer';
import TopButton from './components/TopButton';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <TopButton />
      <Footer />
    </Router>
  );
}

export default App;
