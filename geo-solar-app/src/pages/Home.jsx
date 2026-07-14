import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const scrollToModules = () => {
    document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <div className="background-overlay"></div>

      <div className="content-wrapper">
        <header className="hero-glass-panel">
          <span className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Plataforma Geo-Solar EPN
            <span className="eyebrow-line"></span>
          </span>

          <h2>
            Inteligencia <span className="highlight">geo-fotovoltaica</span> para Ecuador
          </h2>

          <p>
            Plataforma centralizada de consulta técnica que integra albedo de suelos, factibilidad
            geológica y catálogos de paneles bifaciales para acelerar la toma de decisiones en proyectos
            solares del Ecuador.
          </p>

          <div className="hero-cta">
            <button className="cta-primary" onClick={scrollToModules}>
              Explorar módulos
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </button>
            <button className="cta-secondary" onClick={() => navigate('/about')}>
              Conocer el proyecto
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">24</span>
              <span className="stat-label">Provincias</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Paneles en catálogo</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Motor bidireccional</span>
            </div>
          </div>
        </header>

        <h3 className="section-title" id="modulos">Módulos por Facultad</h3>

        <div className="faculties-grid">

          <div className="faculty-card glass-panel active-module">
            <div className="card-header">
              <span className="tech-badge">Operativo</span>
              <h4>FIEE & Geología</h4>
            </div>

            <div className="card-image-container">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                alt="Paneles Solares"
                className="card-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <h5>Inteligencia Geo-Fotovoltaica</h5>
              </div>
            </div>

            <div className="card-body">
              <p>
                Base de datos integrada para la toma de decisiones en proyectos de energía solar,
                cruzando albedo, corrosión, resistividad y tecnologías fotovoltaicas bifaciales.
              </p>
              <button className="cyber-btn" onClick={() => navigate('/tool')}>
                <span>Ingresar al Módulo</span>
              </button>
            </div>
          </div>

          <div className="faculty-card glass-panel disabled-module">
            <div className="card-header">
              <span className="tech-badge warning">En Desarrollo</span>
              <h4>Facultad de Sistemas (FIS)</h4>
            </div>

            <div className="card-image-container">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                alt="Circuito de Red"
                className="card-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <h5>Análisis de Tráfico de Red</h5>
              </div>
            </div>

            <div className="card-body">
              <p>
                Monitoreo y predicción de cuellos de botella en la infraestructura de red del campus
                utilizando modelos de Machine Learning.
              </p>
              <button className="cyber-btn disabled" disabled>
                <span>Próximamente</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;