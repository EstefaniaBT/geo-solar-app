import React from 'react';
import {
  catalogoPaneles,
  datosSuelos,
  obtenerCategoriaAlbedo,
  obtenerPanelRecomendado,
  obtenerProveedoresPorPanel,
  obtenerProveedoresPorCobertura,
  obtenerProvinciasProveedor,
  obtenerSueloPorId,
  referenciaAlbedo
} from '../data/solarData';
import './ControlPanel.css';

function ControlPanel({ selectedProvince, setSelectedProvince, selectedTech, setSelectedTech }) {
  const selectedSuelo = selectedProvince ? obtenerSueloPorId(selectedProvince) : null;
  const showResults = Boolean(selectedSuelo);
  const panelSeleccionado = catalogoPaneles.find(panel => panel.id === selectedTech) || catalogoPaneles[0];
  const panelRecomendado = selectedSuelo ? obtenerPanelRecomendado(selectedSuelo.albedo) : null;
  const proveedoresPorProvincia = selectedSuelo ? obtenerProveedoresPorCobertura(selectedProvince) : [];
  const proveedoresPorPanel = panelSeleccionado ? obtenerProveedoresPorPanel(panelSeleccionado.id) : [];
  const proveedores = selectedSuelo
    ? proveedoresPorProvincia
    : proveedoresPorPanel;
  const categoriaAlbedo = selectedSuelo ? obtenerCategoriaAlbedo(selectedSuelo.albedo) : null;

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
            {datosSuelos.map((provincia) => (
              <option key={provincia.id} value={provincia.id}>
                {provincia.provincia} ({provincia.region})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>FIEE: Tecnología Fotovoltaica</label>
          <select 
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="modern-select"
          >
            {catalogoPaneles.map((panel) => (
              <option key={panel.id} value={panel.id}>
                {panel.modelo}
              </option>
            ))}
          </select>
        </div>
      </form>

      {showResults && selectedSuelo && (
        <div className="results-wrapper">
          <div className="results-card geology-card">
            <h4>Datos de Geología y Albedo</h4>
            <ul>
              <li><strong>Provincia:</strong> {selectedSuelo.provincia} · {selectedSuelo.region}</li>
              <li><strong>Suelo:</strong> {selectedSuelo.tipo}</li>
              <li><strong>Humedad:</strong> {selectedSuelo.humedad}</li>
              <li><strong>Albedo:</strong> {selectedSuelo.albedo.toFixed(2)} ({categoriaAlbedo.categoria})</li>
              <li><strong>Significado:</strong> {selectedSuelo.albedoDescripcion}</li>
              <li><strong>Corrosión:</strong> {selectedSuelo.corrosion}</li>
              <li><strong>Resistividad:</strong> {selectedSuelo.resistividad}</li>
            </ul>
            <div className="impact-alert">
              <strong>Factibilidad del terreno:</strong> {selectedSuelo.viabilidad} · {selectedSuelo.viabilidadDescripcion}
            </div>
            <div className="impact-alert alert-blue" style={{ marginTop: '12px' }}>
              <strong>Referencia de albedo:</strong> {referenciaAlbedo.definicion}
            </div>
          </div>

          <div className="results-card fiee-card">
            <h4>Recomendación Fotovoltaica</h4>
            <ul>
              <li><strong>Panel seleccionado:</strong> {panelSeleccionado.modelo}</li>
              <li><strong>Ideal para albedo:</strong> {panelSeleccionado.idealParaAlbedo}</li>
              <li><strong>Tecnología:</strong> {panelSeleccionado.tecnologia}</li>
              {panelRecomendado && (
                <li><strong>Panel sugerido por el suelo:</strong> {panelRecomendado.modelo}</li>
              )}
            </ul>
            <div className="impact-alert alert-blue" style={{ marginBottom: '16px' }}>
              <strong>Ventaja técnica:</strong> {panelSeleccionado.ventaja}
            </div>
            <h4>Proveedores por provincia</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--silver-stars)', margin: '0 0 10px 0' }}>
              {selectedSuelo ? (
                <>
                  Cobertura disponible para <strong>{selectedSuelo.provincia}</strong>. Los proveedores sin sede pública aparecen en todas las provincias.
                </>
              ) : (
                <>
                  Catálogo informativo asociado a <strong>{panelSeleccionado.modelo}</strong>.
                </>
              )}
            </p>
            {proveedores.length > 0 ? (
              <div className="suppliers-list">
                {proveedores.map((proveedor) => (
                  <span
                    key={proveedor.id}
                    className="supplier-badge"
                    title={`${obtenerProvinciasProveedor(proveedor).join(' · ') || proveedor.ciudad} · ${proveedor.contacto}`}
                  >
                    {proveedor.nombre}
                    <small>{obtenerProvinciasProveedor(proveedor).join(' · ') || 'Cobertura nacional'}</small>
                  </span>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--silver-stars)', margin: 0 }}>
                No hay proveedores referenciales asociados a este módulo en la base local.
              </p>
            )}
            <div className="impact-alert" style={{ marginTop: '16px' }}>
              <strong>Disponibilidad:</strong> {proveedores.map((proveedor) => proveedor.disponibilidad).join(' · ') || 'Referencial'}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default ControlPanel;