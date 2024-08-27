import './App.css';
import 'animate.css';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/page/HomePage';
import Company from './components/page/Company';
import Contact from './components/page/Contact';
import Product from './components/page/Product';
import Page404 from './components/page/Page404';
import TopButton from './components/common/TopButton';
import Footer from './components/common/Footer';
import Loading from './components/animations/Loading';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {!isLoading && <Navbar />}
      <Routes>
        <Route path="/" element={<Loading Component={HomePage} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Company" element={<Loading Component={Company} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Contact" element={<Loading Component={Contact} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="/Product" element={<Loading Component={Product} onLoadingFinish={handleLoadingFinish} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <TopButton />
      {!isLoading && <Footer />}
    </Router>
  );
}

export default App;