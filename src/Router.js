import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/App2" element={<App2 />} />
        <Route path="/App3" element={<App3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
