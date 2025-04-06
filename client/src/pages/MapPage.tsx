import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage: React.FC = () => {
  return (
    <div className="map-page">
      <h1>Explore the Map</h1>
      <MapContainer
        center={[51.505, -0.09]} // Default coordinates (e.g., London)
        zoom={13}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
};

export default MapPage;