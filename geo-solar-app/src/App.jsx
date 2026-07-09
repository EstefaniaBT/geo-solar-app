import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import GeoSolarTool from './pages/GeoSolarTool';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        
        {/* AQUÍ ESTÁ LA MAGIA: Llamamos al componente que tiene todos los estilos de la EPN */}
        <Header />

        <div className="main-workspace">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tool" element={<GeoSolarTool />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;