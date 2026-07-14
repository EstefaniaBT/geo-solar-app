import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-content">
        <span className="about-eyebrow">
          <span className="eyebrow-dot"></span>
          Acerca del proyecto
        </span>

        <h1 className="about-title">
          Acerca del Proyecto y la <span className="highlight">EPN</span>
        </h1>

        <p className="about-lead">
          La Escuela Politécnica Nacional (EPN) se caracteriza por su rigor científico y su
          compromiso con el desarrollo tecnológico del Ecuador, especialmente en soluciones de
          energía solar basadas en evidencia.
        </p>

        <div className="about-text">
          <p>
            Este repositorio nace como una <strong>iniciativa colaborativa</strong> para evitar la
            redundancia en las investigaciones. Integra estudios de suelo, albedo, corrosión,
            resistividad y fichas técnicas de paneles bifaciales que muchas veces quedan archivados
            en documentos aislados.
          </p>
          <p>
            Al digitalizar y estructurar estos datos en plataformas interactivas,
            <strong> democratizamos el acceso a la información técnica validada</strong>, permitiendo
            que futuros proyectos arranquen desde una base sólida y comprobada para estimar la
            factibilidad de ubicar paneles solares según la reflectividad del terreno.
          </p>
        </div>

        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 3v18M3 9h6"></path></svg>
            </div>
            <h3>Evita la redundancia</h3>
            <p>
              Centralizamos estudios de suelos, mediciones eléctricas y más, para que no se repita
              trabajo que ya fue realizado y validado.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"></path></svg>
            </div>
            <h3>Democratiza el acceso</h3>
            <p>
              Digitalizamos y estructuramos los datos para que la información técnica validada esté
              al alcance de toda la comunidad.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3>Base sólida y comprobada</h3>
            <p>
              Los nuevos proyectos arrancan desde datos confiables, reduciendo significativamente
              los tiempos y costos de investigación.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <p>Explora el primer módulo operativo de la plataforma.</p>
          <button className="cta-btn" onClick={() => navigate('/tool')}>
            Ir a la Herramienta Geo-Solar
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;