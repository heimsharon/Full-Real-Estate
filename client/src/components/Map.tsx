import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';
import '../styles/Global.css';

// Fix default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const SearchControl = () => {
  const map = useMap();

  const handleSearch = (query: string) => {
    // Example: Use OpenStreetMap's Nominatim API for geocoding
    fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          map.setView([parseFloat(lat), parseFloat(lon)], 15); // Zoom to the searched location
        }
      });
  };

  return (
    <div className="search-container" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
      <input
        type="text"
        placeholder="Search for a location"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch((e.target as HTMLInputElement).value);
          }
        }}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '200px',
        }}
      />
    </div>
  );
};

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center (e.g., London)
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <SearchControl />
    </MapContainer>
  );
};

export default Map;