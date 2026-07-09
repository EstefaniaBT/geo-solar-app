import React from 'react';
import './ControlPanel.css';

const projectData = {
  Esmeraldas: {
    geologia: {
      suelo: "Tierra arcillosa pesada",
      humedad: "Muy húmedo (retiene agua)",
      riesgoSuelo: "Alto peligro (Suelo ácido)",
      impactoEstructural: "Terreno inestable. Las bases necesitan ser profundas y con pintura anticorrosiva."
    },
    fiee: {
      resistividad: "Bajo riesgo (fácil conectar a tierra)",
      climaSubsuelo: "Cálido",
      impactoElectrico: "Temperatura cálida exige revisión de calibres de cable por caídas de tensión."
    }
  },
  Pichincha: {
    geologia: {
      suelo: "Cangahua en valles secos",
      humedad: "Muy seco en los valles",
      riesgoSuelo: "Sin peligro",
      impactoEstructural: "Suelo plano, duro y estable. Estructuras quedan muy firmes al clavarlas."
    },
    fiee: {
      resistividad: "Riesgo alto (suelo muy seco)",
      climaSubsuelo: "Frío / Templado",
      impactoElectrico: "Ideal para disipación térmica. Requiere químicos (bentonita) para la malla de tierra."
    }
  }
};

const proveedoresEcuador = {
  "Módulo Monocristalino Bifacial": ["EcoSolar EC", "Kruger Energy", "Sistemas Solares Quito"],
  "Módulo Policristalino Estándar": ["IntiEnergía", "Novopanel Ecuador", "Solares del Austro"]
};

function ControlPanel({ selectedProvince, setSelectedProvince, selectedTech, setSelectedTech }) {
  const showResults = selectedProvince !== "";
  const data = showResults ? projectData[selectedProvince] : null;
  const proveedores = proveedoresEcuador[selectedTech];

  const handleConsult = (e) => {
    e.preventDefault();
    if (!selectedProvince) {
      alert("Por favor, selecciona una provincia primero en el menú o en el mapa.");
    }
  };

  return (
    <div className="control-panel-container">
      <div className="panel-header">
        <h3>Consulta de Base de Datos</h3>
        <p>Selecciona los parámetros o haz clic en el mapa</p>
      </div>

      <form className="panel-form" onSubmit={handleConsult}>
        <div className="form-group">
          <label>Geología: Ubicación del Terreno</label>
          <select 
            value={selectedProvince} 
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="modern-select"
          >
            <option value="">-- Seleccionar Provincia --</option>
            <option value="Esmeraldas">Esmeraldas (Costa)</option>
            <option value="Pichincha">Pichincha (Sierra)</option>
          </select>
        </div>

        <div className="form-group">
          <label>FIEE: Tecnología Fotovoltaica</label>
          <select 
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="modern-select"
          >
            <option value="Módulo Monocristalino Bifacial">Módulo Monocristalino Bifacial</option>
            <option value="Módulo Policristalino Estándar">Módulo Policristalino Estándar</option>
          </select>
        </div>
      </form>

      {showResults && data && (
        <div className="results-wrapper">
          <div className="results-card geology-card">
            <h4>Datos de Geología</h4>
            <ul>
              <li><strong>Suelo:</strong> {data.geologia.suelo}</li>
              <li><strong>Humedad:</strong> {data.geologia.humedad}</li>
              <li><strong>Corrosión:</strong> {data.geologia.riesgoSuelo}</li>
            </ul>
            <div className="impact-alert">
              <strong>Impacto Estructural:</strong> {data.geologia.impactoEstructural}
            </div>
          </div>

          <div className="results-card fiee-card">
            <h4>Datos de FIEE</h4>
            <ul>
              <li><strong>Clima Subsuelo:</strong> {data.fiee.climaSubsuelo}</li>
              <li><strong>Resistividad:</strong> {data.fiee.resistividad}</li>
            </ul>
            <div className="impact-alert alert-blue" style={{ marginBottom: '16px' }}>
              <strong>Impacto Eléctrico:</strong> {data.fiee.impactoElectrico}
            </div>
            
            <h4>Proveedores en Ecuador</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--silver-stars)', margin: '0 0 10px 0' }}>
              Comercializan <strong>{selectedTech}</strong>:
            </p>
            <div className="suppliers-list">
              {proveedores.map((proveedor, index) => (
                <span key={index} className="supplier-badge">
                  {proveedor}
                </span>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default ControlPanel;