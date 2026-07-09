import React, { useState } from 'react';
import { datosSuelos, catalogoPaneles } from '../data/solarData';
import './RecomendadorInteractivo.css';

function RecomendadorInteractivo() {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(null);
  const [recomendacion, setRecomendacion] = useState(null);

  const analizarTerreno = (provincia) => {
    setProvinciaSeleccionada(provincia);
    
    // Lógica de recomendación simple basada en Albedo y Corrosión
    let panelRecomendado;
    if (provincia.riesgoCorrosion === 'Alto' || provincia.riesgoCorrosion === 'Extremo') {
      panelRecomendado = catalogoPaneles.find(p => p.id === 'p2'); // Panel Anti-salitre
    } else if (provincia.albedo === 'Alto') {
      panelRecomendado = catalogoPaneles.find(p => p.id === 'p1'); // Panel Bifacial
    } else {
      panelRecomendado = catalogoPaneles[0]; // Por defecto
    }
    
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
              <p><strong>Nivel de Albedo:</strong> {provinciaSeleccionada.albedo}</p>
              <p><strong>Riesgo de Corrosión:</strong> {provinciaSeleccionada.riesgoCorrosion}</p>
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