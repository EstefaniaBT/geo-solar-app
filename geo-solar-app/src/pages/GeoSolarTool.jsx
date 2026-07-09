import React, { useState } from 'react';
import InteractiveMap from '../components/InteractiveMap';
import ControlPanel from '../components/ControlPanel';
import './GeoSolarTool.css';

function GeoSolarTool() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedTech, setSelectedTech] = useState("Módulo Monocristalino Bifacial");

  return (
    <div className="tool-container">
      <div className="tool-content">
        <span className="tool-eyebrow">
          <span className="eyebrow-dot"></span>
          Investigación Conjunta · FIEE & Geología
        </span>
        
        <InteractiveMap
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
        />

        <ControlPanel
          selectedProvince={selectedProvince} 
          setSelectedProvince={setSelectedProvince}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </div>
    </div>
  );
}

export default GeoSolarTool;