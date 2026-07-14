import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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

const selectedMarkerIcon = L.divIcon({
  className: 'selected-province-marker',
  html: `
    <div class="selected-province-marker__pin">
      <div class="selected-province-marker__core"></div>
    </div>
  `,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const provinceMarkers = [
  { id: 'esmeraldas', name: 'Esmeraldas', position: [0.9592, -79.6539] },
  { id: 'manabi', name: 'Manabí', position: [-0.9682, -80.7089] },
  { id: 'guayas', name: 'Guayas', position: [-2.1709, -79.9224] },
  { id: 'santa_elena', name: 'Santa Elena', position: [-2.2262, -80.8587] },
  { id: 'pichincha', name: 'Pichincha', position: [-0.1807, -78.4678] },
  { id: 'cotopaxi', name: 'Cotopaxi', position: [-0.9339, -78.6155] },
  { id: 'chimborazo', name: 'Chimborazo', position: [-1.6635, -78.6546] },
  { id: 'azuay', name: 'Azuay', position: [-2.9001, -79.0059] },
  { id: 'loja', name: 'Loja', position: [-3.9931, -79.2042] },
  { id: 'sucumbios', name: 'Sucumbíos', position: [0.0840, -76.8945] },
  { id: 'napo', name: 'Napo', position: [-0.9938, -77.8128] },
  { id: 'galapagos', name: 'Galápagos', position: [-0.9538, -90.9656] }
];

function MapCenterController({ selectedProvince }) {
  const map = useMap();

  React.useEffect(() => {
    const province = provinceMarkers.find((item) => item.id === selectedProvince);

    if (province) {
      map.setView(province.position, 7, {
        animate: true,
        duration: 0.6
      });
    }
  }, [map, selectedProvince]);

  return null;
}

function InteractiveMap({ selectedProvince, setSelectedProvince }) {
  const position = [-1.8312, -78.1834];

  return (
    <div className="map-container">
      <h2>
        <span style={{ color: 'var(--sky-blue)' }}>|</span> Mapa Interactivo (Ecuador)
      </h2>
      
      <div className="map-wrapper" style={{ height: '400px', width: '100%', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(167, 202, 223, 0.18)' }}>
        <MapContainer center={position} zoom={6} style={{ height: '100%', width: '100%', background: '#0a1c30' }}>
          <MapCenterController selectedProvince={selectedProvince} />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          
          {provinceMarkers.map((province) => (
            <Marker
              key={province.id}
              position={province.position}
              icon={selectedProvince === province.id ? selectedMarkerIcon : DefaultIcon}
              eventHandlers={{ click: () => setSelectedProvince(province.id) }}
            >
              <Popup>
                <strong>{province.name}</strong> <br /> Clic para analizar datos.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default InteractiveMap;