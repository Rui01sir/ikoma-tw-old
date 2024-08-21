import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Company from './components/Company';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="Company" element={<Company/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>  
  );
}

export default App;
