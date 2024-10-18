// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
