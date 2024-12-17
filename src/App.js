import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/header/header';
import AboutUsSection from './components/about-us-page/AboutUsSection';
import MinimalinECommerceSection from './components/about-us-page/MinimalinECommerceSection';
import VideoSection from './components/about-us-page/VideoSection';
import SliderSection from './components/about-us-page/SliderSection';
import BrandLogosSection from './components/about-us-page/BrandLogosSection';
import Footer from './components/footer/footer';
import './App.css'; // Custom styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import Collections from './components/collections/Collections'

function App() {
  return (
    <div className="App">
      {/* Wrap your components inside BrowserRouter */}
      <Router>
        <main>
          <Header />
          <AboutUsSection />
          <MinimalinECommerceSection />
          <VideoSection />
          <SliderSection />
          <BrandLogosSection />
         < Collections />
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;

