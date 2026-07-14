import React, { useState } from 'react';
import { catalogoPaneles, datosSuelos, obtenerPanelRecomendado } from '../data/solarData';
import './RecomendadorInteractivo.css';

function RecomendadorInteractivo() {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(null);
  const [recomendacion, setRecomendacion] = useState(null);

  const analizarTerreno = (provincia) => {
    setProvinciaSeleccionada(provincia);

    const panelRecomendado = obtenerPanelRecomendado(provincia.albedo) || catalogoPaneles[0];
    setRecomendacion(panelRecomendado);
  };

  return (
    <div className="dashboard-container">
      <div className="selector-section">
        <h3>1. Selecciona la Zona de Estudio</h3>
        <div className="botones-grid">
          {datosSuelos.map((prov) => (
            <button 
              key={prov.id} 
              className={`btn-provincia ${provinciaSeleccionada?.id === prov.id ? 'activo' : ''}`}
              onClick={() => analizarTerreno(prov)}
            >
              {prov.provincia}
              <span className="badge-region">{prov.region}</span>
            </button>
          ))}
        </div>
      </div>

      {provinciaSeleccionada && recomendacion && (
        <div className="resultados-section fade-in">
          <h3>2. Análisis y Recomendación de Ingeniería</h3>
          <div className="cards-container">
            
            <div className="info-card suelo-card">
              <h4>Datos Geológicos</h4>
              <p><strong>Tipo de Suelo:</strong> {provinciaSeleccionada.tipo}</p>
              <p><strong>Nivel de Albedo:</strong> {provinciaSeleccionada.albedo.toFixed(2)} ({provinciaSeleccionada.albedoCategoria})</p>
              <p><strong>Riesgo de Corrosión:</strong> {provinciaSeleccionada.corrosion}</p>
              <p><strong>Factibilidad:</strong> {provinciaSeleccionada.viabilidad}</p>
            </div>

            <div className="info-card panel-card">
              <h4>Tecnología Fotovoltaica Sugerida</h4>
              <p className="modelo-destacado">{recomendacion.modelo}</p>
              <p><strong>Ventaja Técnica:</strong> {recomendacion.ventaja}</p>
              <span className="cert-badge">Norma: {recomendacion.certificacion}</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default RecomendadorInteractivo;