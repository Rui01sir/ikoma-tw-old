import './App.css';
import 'animate.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Footer from './components/Footer';
import TopButton from './components/TopButton';
import Contact from './components/Contact';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <TopButton />
      <Footer />
    </Router>
  );
}

export default App;
