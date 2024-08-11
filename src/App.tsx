import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import IconPage from './pages/IconPage';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icon/:name" element={<IconPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
