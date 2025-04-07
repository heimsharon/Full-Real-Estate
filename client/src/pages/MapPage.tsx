import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/Global.css';
import '../styles/MapPage.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapPage: React.FC = () => {
  return (
    <div className="map-page">
      <div className="map-container">
        <MapContainer
          center={[51.505, -0.09]} // Default center (e.g., London)
          zoom={13}
          style={{ height: '100%', width: '100%' }} // Ensure full height and width
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
            errorTileUrl="/assets/error-tile.png" // Fallback tile image
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;