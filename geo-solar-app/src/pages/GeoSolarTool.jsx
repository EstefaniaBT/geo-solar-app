import React, { useState } from 'react';
import InteractiveMap from '../components/InteractiveMap';
import ControlPanel from '../components/ControlPanel';
import SearchEngine from '../components/SearchEngine';
import './GeoSolarTool.css';

function GeoSolarTool() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedTech, setSelectedTech] = useState("p1");

  return (
    <div className="tool-container">
      <div className="tool-content">
        <span className="tool-eyebrow">
          <span className="eyebrow-dot"></span>
          Investigación Conjunta · FIEE & Geología
        </span>

        <div className="tool-search">
          <SearchEngine
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>
        
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