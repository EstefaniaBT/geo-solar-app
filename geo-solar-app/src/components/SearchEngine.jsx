import React, { useState } from 'react';
import './SearchEngine.css';

function SearchEngine() {
  const [searchType, setSearchType] = useState('region');

  return (
    <section className="engine-container">
      <h2>Búsqueda Bidireccional</h2>
      
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

      <div className="search-action">
        <button className="execute-btn">Ejecutar Algoritmo</button>
      </div>
    </section>
  );
}

export default SearchEngine;