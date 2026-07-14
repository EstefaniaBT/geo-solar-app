import React, { useEffect, useMemo, useState } from 'react';
import {
  catalogoPaneles,
  datosSuelos,
  obtenerCategoriaAlbedo,
  obtenerPanelRecomendado,
  obtenerProvinciasPorPanel,
  obtenerSueloPorId,
  referenciaAlbedo
} from '../data/solarData';
import './SearchEngine.css';

function SearchEngine({ selectedProvince, setSelectedProvince, selectedTech, setSelectedTech }) {
  const [searchType, setSearchType] = useState('region');
  const [regionId, setRegionId] = useState(selectedProvince || 'pichincha');
  const [panelId, setPanelId] = useState(selectedTech || 'p1');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (selectedProvince) {
      setRegionId(selectedProvince);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedTech) {
      setPanelId(selectedTech);
    }
  }, [selectedTech]);

  const regionActual = useMemo(
    () => obtenerSueloPorId(selectedProvince) || obtenerSueloPorId(regionId),
    [selectedProvince, regionId]
  );

  const panelActual = useMemo(
    () => catalogoPaneles.find((panel) => panel.id === (selectedTech || panelId)) || catalogoPaneles[0],
    [selectedTech, panelId]
  );

  const ejecutarBusqueda = () => {
    if (searchType === 'region') {
      const suelo = obtenerSueloPorId(regionId) || datosSuelos[0];
      const panelSugerido = obtenerPanelRecomendado(suelo.albedo) || catalogoPaneles[0];
      const categoria = obtenerCategoriaAlbedo(suelo.albedo);

      setSelectedProvince(suelo.id);
      setSelectedTech(panelSugerido.id);
      setResult({
        type: 'region',
        suelo,
        panelSugerido,
        categoria,
        referencia: referenciaAlbedo.definicion
      });
      return;
    }

    const panel = catalogoPaneles.find((item) => item.id === panelId) || catalogoPaneles[0];
    const provinciasCompatibles = obtenerProvinciasPorPanel(panel.id);

    setSelectedTech(panel.id);
    if (provinciasCompatibles.length > 0) {
      setSelectedProvince(provinciasCompatibles[0].id);
    }

    setResult({
      type: 'panel',
      panel,
      provinciasCompatibles,
      referencia: referenciaAlbedo.escala.find((entrada) => entrada.categoria === 'Medio')
    });
  };

  return (
    <section className="engine-container">
      <div className="engine-header">
        <div>
          <span className="engine-eyebrow">Consulta bidireccional</span>
          <h2>Búsqueda Bidireccional</h2>
        </div>
        <p>
          Cruza la provincia seleccionada con el panel recomendado o encuentra qué regiones se ajustan mejor a un módulo bifacial.
        </p>
      </div>
      
      <div className="toggle-container">
        <label>
          <input 
            type="radio" 
            name="searchType" 
            value="region" 
            checked={searchType === 'region'} 
            onChange={() => setSearchType('region')} 
          />
          Buscar por Región (Albedo)
        </label>
        <label>
          <input 
            type="radio" 
            name="searchType" 
            value="panel" 
            checked={searchType === 'panel'} 
            onChange={() => setSearchType('panel')} 
          />
          Buscar por Catálogo de Paneles
        </label>
      </div>

      <div className="engine-grid">
        <div className="form-group">
          <label>{searchType === 'region' ? 'Provincia a analizar' : 'Panel a evaluar'}</label>
          {searchType === 'region' ? (
            <select className="engine-select" value={regionId} onChange={(e) => setRegionId(e.target.value)}>
              {datosSuelos.map((suelo) => (
                <option key={suelo.id} value={suelo.id}>
                  {suelo.provincia} ({suelo.region})
                </option>
              ))}
            </select>
          ) : (
            <select className="engine-select" value={panelId} onChange={(e) => setPanelId(e.target.value)}>
              {catalogoPaneles.map((panel) => (
                <option key={panel.id} value={panel.id}>
                  {panel.modelo}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="engine-summary">
          {searchType === 'region' && regionActual && (
            <p>
              {regionActual.provincia} tiene un albedo de {regionActual.albedo.toFixed(2)} y cae en la categoría {obtenerCategoriaAlbedo(regionActual.albedo).categoria}.
            </p>
          )}
          {searchType === 'panel' && panelActual && (
            <p>
              El panel seleccionado es {panelActual.modelo}. La búsqueda mostrará las provincias con albedo compatible.
            </p>
          )}
        </div>
      </div>

      <div className="search-action">
        <button className="execute-btn" onClick={ejecutarBusqueda} type="button">
          Ejecutar Algoritmo
        </button>
      </div>

      {result && result.type === 'region' && (
        <div className="engine-results">
          <div className="engine-result-card">
            <span className="engine-result-kicker">Resultado por región</span>
            <h3>{result.suelo.provincia}</h3>
            <p><strong>Albedo:</strong> {result.suelo.albedo.toFixed(2)} ({result.categoria.categoria})</p>
            <p><strong>Qué significa:</strong> {result.suelo.albedoDescripcion}</p>
            <p><strong>Factibilidad:</strong> {result.suelo.viabilidad} - {result.suelo.viabilidadDescripcion}</p>
            <p><strong>Panel recomendado:</strong> {result.panelSugerido.modelo}</p>
            <p><strong>Encaje técnico:</strong> {result.panelSugerido.idealParaAlbedo}</p>
            <p><strong>Referencia metodológica:</strong> {result.referencia}</p>
          </div>
        </div>
      )}

      {result && result.type === 'panel' && (
        <div className="engine-results">
          <div className="engine-result-card">
            <span className="engine-result-kicker">Resultado por panel</span>
            <h3>{result.panel.modelo}</h3>
            <p><strong>Ideal para albedo:</strong> {result.panel.idealParaAlbedo}</p>
            <p><strong>Compatibles:</strong> {result.provinciasCompatibles.length} provincias encontradas</p>
            <p><strong>Ventaja técnica:</strong> {result.panel.ventaja}</p>
            <div className="engine-tag-list">
              {result.provinciasCompatibles.map((provincia) => (
                <button
                  key={provincia.id}
                  type="button"
                  className="engine-tag"
                  onClick={() => {
                    setSelectedProvince(provincia.id);
                    setRegionId(provincia.id);
                  }}
                >
                  {provincia.provincia}
                </button>
              ))}
            </div>
            <p className="engine-result-note">
              Al elegir una provincia, se sincroniza el mapa para mostrar la zona seleccionada.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SearchEngine;