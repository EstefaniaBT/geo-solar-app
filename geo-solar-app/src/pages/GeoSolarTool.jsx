import React, { useState } from 'react';
import InteractiveMap from '../components/InteractiveMap';
import ProvidersList from '../components/ProvidersList';
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
        
        <div className="tool-map-column">
          <InteractiveMap
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince}
          />

          <ProvidersList selectedProvince={selectedProvince} />
        </div>

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