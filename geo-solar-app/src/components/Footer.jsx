import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="status">
        <span>Estatus de proyecto: Finalizado</span>
        <div className="progress-bar"><div className="progress"></div></div>
      </div>
      <div className="pmbok-refs">
        <span>PMBOK references: [BGG: S57-11, PDF 455-120]</span>
      </div>
      <div className="modifications">
        <span>Estatus de proyecto: Modificados: Medio-Alto</span>
      </div>
    </footer>
  );
}

export default Footer;