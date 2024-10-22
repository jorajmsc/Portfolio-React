import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import App from './App';

const Main = () => {
  return (
    <Routes>
      {/* The Routes decides which component to show based on the current URL. */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Main;
