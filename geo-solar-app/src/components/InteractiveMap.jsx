import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function InteractiveMap({ selectedProvince, setSelectedProvince }) {
  const position = [-1.8312, -78.1834];

  return (
    <div className="map-container">
      <h2>
        <span style={{ color: 'var(--sky-blue)' }}>|</span> Mapa Interactivo (Ecuador)
      </h2>
      
      <div className="map-wrapper" style={{ height: '400px', width: '100%', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(167, 202, 223, 0.18)' }}>
        <MapContainer center={position} zoom={6} style={{ height: '100%', width: '100%', background: '#0a1c30' }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          
          <Marker
            position={[0.9592, -79.6539]}
            eventHandlers={{ click: () => setSelectedProvince("Esmeraldas") }}
          >
            <Popup>
              <strong>Esmeraldas</strong> <br /> Clic para analizar datos.
            </Popup>
          </Marker>

          <Marker
            position={[-0.1807, -78.4678]}
            eventHandlers={{ click: () => setSelectedProvince("Pichincha") }}
          >
            <Popup>
              <strong>Pichincha</strong> <br /> Clic para analizar datos.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default InteractiveMap;