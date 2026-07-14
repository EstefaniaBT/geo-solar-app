import React from 'react';
import { datosSuelos, obtenerProveedoresPorCobertura, obtenerProvinciasProveedor, proveedores } from '../data/solarData';
import './ProvidersList.css';

function getProviderInitials(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((fragmento) => fragmento.charAt(0).toUpperCase())
    .join('');
}

function ProvidersList({ selectedProvince }) {
  const selectedSuelo = selectedProvince
    ? datosSuelos.find((suelo) => suelo.id === selectedProvince)
    : null;

  const providers = selectedProvince
    ? obtenerProveedoresPorCobertura(selectedProvince).sort((a, b) => {
        const provinciaSeleccionada = selectedSuelo?.provincia;
        const matchA = obtenerProvinciasProveedor(a).includes(provinciaSeleccionada) ? 0 : 1;
        const matchB = obtenerProvinciasProveedor(b).includes(provinciaSeleccionada) ? 0 : 1;

        return matchA - matchB || a.nombre.localeCompare(b.nombre);
      })
    : proveedores;

  const scopeLabel = selectedSuelo
    ? `${selectedSuelo.provincia} · ${selectedSuelo.region}`
    : 'Cobertura nacional';

  return (
    <section className="providers-section" aria-labelledby="providers-section-title">
      <div className="providers-header">
        <div>
          <h2 id="providers-section-title">
            <span style={{ color: 'var(--sky-blue)' }}>|</span> Proveedores posibles
          </h2>
          <p>
            {selectedSuelo
              ? `Opciones que cubren ${selectedSuelo.provincia} y zonas cercanas.`
              : 'Listado general de proveedores consultados con cobertura nacional.'}
          </p>
        </div>

        <div className="providers-header__badge">
          <span>{providers.length}</span>
          <small>{scopeLabel}</small>
        </div>
      </div>

      {providers.length > 0 ? (
        <div className="providers-grid">
          {providers.map((provider) => (
            <article className="provider-card" key={provider.id}>
              <div className="provider-card__top">
                <div className="provider-logo-shell">
                  <img
                    src={provider.logoFile}
                    alt={`Logotipo de ${provider.nombre}`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      const fallback = event.currentTarget.nextElementSibling;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="provider-logo-fallback" aria-hidden="true">
                    {getProviderInitials(provider.nombre)}
                  </div>
                </div>

                <div className="provider-card__heading">
                  <h3>{provider.nombre}</h3>
                  <p>{provider.ciudadSede} · {provider.provinciaSede}</p>
                </div>
              </div>

              <div className="provider-card__meta">
                <span>{provider.coberturaNacional ? 'Cobertura nacional' : 'Cobertura local'}</span>
                <span>{provider.panelesRelacionados.length} paneles compatibles</span>
              </div>

              <div className="provider-card__section">
                <strong>Marcas</strong>
                <div className="provider-tags">
                  {provider.marcasDisponibles.map((marca) => (
                    <span key={marca} className="provider-tag">
                      {marca}
                    </span>
                  ))}
                </div>
              </div>

              <div className="provider-card__section">
                <strong>Provincias de cobertura</strong>
                <div className="provider-tags">
                  {(obtenerProvinciasProveedor(provider).length > 0
                    ? obtenerProvinciasProveedor(provider)
                    : ['Cobertura nacional']
                  ).map((provincia) => (
                    <span key={provincia} className="provider-tag provider-tag--neutral">
                      {provincia}
                    </span>
                  ))}
                </div>
              </div>

              <div className="provider-card__section">
                <strong>Tipo de oferta</strong>
                <p>{provider.tipoPanel}</p>
              </div>

              <div className="provider-card__section">
                <strong>Notas</strong>
                <p>{provider.notas}</p>
              </div>

              <div className="provider-card__footer">
                <span>{provider.panelesRelacionados.join(' · ')}</span>
                <span>{provider.sitioWeb}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="providers-empty">
          No hay proveedores confirmados para esta selección.
        </div>
      )}
    </section>
  );
}

export default ProvidersList;