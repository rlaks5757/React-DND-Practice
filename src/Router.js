import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import ChartJsTest from './App4Component/ChartJsTest';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/App2" element={<App2 />} />
        <Route path="/App3" element={<App3 />} />
        <Route path="/App4" element={<App4 />} />
        <Route path="/App5" element={<App5 />} />
        <Route path="/ChartJsTest" element={<ChartJsTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
