import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="epn-header">
      {/* Sección Izquierda: Logos y Títulos */}
      <div className="brand-section">
        <div className="logo-placeholder">
          {/* Simulación visual del escudo EPN para mantener las proporciones */}
          <div className="logo-top-red"></div>
          <div className="logo-bottom-blue"></div>
        </div>
        
        <div className="epn-name">
          <span>ESCUELA</span>
          <span>POLITÉCNICA</span>
          <span>NACIONAL</span>
        </div>

        <div className="vertical-divider"></div>

        <h1 className="project-title">
          Repositorio de<br />Proyectos EPN
        </h1>
      </div>

      {/* Sección Central: Navegación */}
      <nav className="main-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          Inicio
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          Acerca de la EPN
        </NavLink>

        {/* Dropdown Interactivo */}
        <div 
          className="dropdown-container"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="nav-btn dropdown-trigger">
            Facultad <span className={`chevron ${dropdownOpen ? 'open' : ''}`}>⌄</span>
          </button>
          
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/tool" className="dropdown-item">FIEE & Geología</NavLink>
              <div className="dropdown-item disabled">Sistemas (FIS) - Próximamente</div>
              <div className="dropdown-item disabled">Mecánica - Próximamente</div>
            </div>
          )}
        </div>
      </nav>

      {/* Sección Derecha: Iconos de Acción */}
      <div className="action-icons">
        <button className="icon-btn" aria-label="Buscar">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <button className="icon-btn" aria-label="Perfil">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
      </div>
    </header>
  );
}

export default Header;