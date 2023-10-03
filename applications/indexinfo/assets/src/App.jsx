import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/navigation/Footer';
import IndexInfo from './components/IndexInfo';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='min-h-screen'>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/index" element={<IndexInfo />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

