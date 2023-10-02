import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/navigation/Footer';
import NavBar from './components/navigation/NavBar';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <div className='min-h-screen'>
            <div className='mx-2 mt-5'>
              <Routes>
                <Route path="/" element={<LandingPage />} exact />
              </Routes>
            </div>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

